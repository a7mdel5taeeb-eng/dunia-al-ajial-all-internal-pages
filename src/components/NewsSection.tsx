import { useState, useEffect } from "react";
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ExternalLink, Loader2, Newspaper } from "lucide-react";

interface NewsItem {
  title: string;
  snippet: string;
  url: string;
  source: string;
  date?: string;
  image?: string;
}

const FALLBACK_IMAGE = "/images/news-fallback.jpg";

const RSS_FEED_URL = "https://rss.app/feeds/3wzt0k2KADvSpgD4.xml";

const stripHtml = (html: string) => {
  return html
    .replace(/<style[^>]*>.*?<\/style>/gis, "")
    .replace(/<script[^>]*>.*?<\/script>/gis, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
};

const truncateText = (text: string, maxLength: number) => {
  if (!text) return "";
  return text.length > maxLength ? text.substring(0, maxLength).trim() + "..." : text;
};

const extractImageFromDescription = (description?: string) => {
  if (!description) return undefined;

  const posterMatch = description.match(/poster=["']([^"']+)["']/i);
  if (posterMatch?.[1]) return posterMatch[1];

  const imgMatch = description.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch?.[1]) return imgMatch[1];

  const sourceMatch = description.match(/<source[^>]+src=["']([^"']+)["']/i);
  if (sourceMatch?.[1]) return sourceMatch[1];

  return undefined;
};

const normalizeMediaUrl = (url?: string) => {
  if (!url) return undefined;

  let cleanUrl = String(url).trim();

  if (!cleanUrl) return undefined;

  if (cleanUrl.startsWith("//")) {
    cleanUrl = `https:${cleanUrl}`;
  }

  if (cleanUrl.startsWith("/")) {
    return undefined;
  }

  if (!/^https?:\/\//i.test(cleanUrl)) {
    return undefined;
  }

  return cleanUrl;
};

const getImageFromPost = (post: any) => {
  const candidates = [
    post.thumbnail,
    post.enclosure?.link,
    post.enclosure?.url,
    post.image,
    post["media:thumbnail"]?.url,
    post["media:content"]?.url,
    extractImageFromDescription(post.description || post.content),
  ];

  for (const candidate of candidates) {
    const normalized = normalizeMediaUrl(candidate);
    if (normalized) return normalized;
  }

  return FALLBACK_IMAGE;
};

const getRssNodeText = (item: Element, tagName: string) =>
  item.getElementsByTagName(tagName)[0]?.textContent?.trim() || "";

const parseRssItems = (xml: string) => {
  const document = new DOMParser().parseFromString(xml, "application/xml");

  if (document.querySelector("parsererror")) {
    throw new Error("Unable to parse the RSS feed");
  }

  return Array.from(document.getElementsByTagName("item"));
};

const formatDate = (dateString?: string, language?: string) => {
  if (!dateString) return "";
  try {
    return new Date(dateString).toLocaleDateString(language === "ar" ? "ar-EG" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
};

const NewsCard: React.FC<{ item: NewsItem; index: number; isFeatured?: boolean }> = ({
  item,
  index,
  isFeatured,
}) => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [imgSrc, setImgSrc] = useState(item.image || FALLBACK_IMAGE);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      className={`h-full [perspective:1000px] ${isFeatured ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          background: isDark ? "rgba(15,23,42,.72)" : "rgba(255,255,255,.92)",
          border: isDark
            ? "1px solid rgba(255,255,255,.10)"
            : "1px solid rgba(148,163,184,.16)",
          boxShadow: isDark
            ? "0 20px 50px -30px rgba(0,0,0,.55)"
            : "0 20px 50px -30px rgba(15,23,42,.18)",
        }}
        whileHover={{ scale: 1.01, y: -6 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group flex flex-col h-full rounded-2xl overflow-hidden shadow-premium transition-all duration-500 hover:shadow-2xl hover:border-purple-500/30 will-change-transform relative"
      >
        <div
          className={`relative overflow-hidden ${isFeatured ? "h-64" : "h-48"} shrink-0 bg-slate-200`}
        >
          <img
            src={imgSrc || FALLBACK_IMAGE}
            alt=""
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              const current = e.currentTarget.getAttribute("src") || "";

              if (current !== FALLBACK_IMAGE) {
                setImgSrc(FALLBACK_IMAGE);
              } else {
                e.currentTarget.style.display = "none";
              }
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

          <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-600 text-white font-bold uppercase tracking-widest text-[10px] shadow-md">
              {item.source}
            </span>
          </div>
        </div>

        <div
          style={{ transform: "translateZ(30px)" }}
          className={`flex-1 flex flex-col relative z-10 pointer-events-none ${isFeatured ? "p-10" : "p-6"}`}
        >
          <div
            className="flex items-center justify-between mb-4 text-sm"
            style={{ color: isDark ? "rgba(255,255,255,.68)" : "#64748b" }}
          >
            {item.date && (
              <span
                className="font-mono text-xs tracking-wider flex items-center gap-2 px-2 py-1 rounded-md"
                style={{
                  background: isDark ? "rgba(255,255,255,.05)" : "#f8fafc",
                  border: isDark
                    ? "1px solid rgba(255,255,255,.10)"
                    : "1px solid rgba(148,163,184,.18)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                {item.date}
              </span>
            )}
          </div>

          <h3
            className={`font-bold mb-4 group-hover:text-[var(--accent-primary)] transition-colors line-clamp-2 font-serif ${
              isFeatured ? "text-3xl leading-tight" : "text-xl"
            }`}
            style={{ color: isDark ? "#ffffff" : "#0f172a" }}
          >
            {item.title}
          </h3>

          <p
            className={`leading-relaxed mb-6 line-clamp-3 flex-1 ${isFeatured ? "text-lg" : "text-sm"}`}
            style={{ color: isDark ? "rgba(255,255,255,.78)" : "#475569" }}
          >
            {item.snippet}
          </p>

          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-bold text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors mt-auto pointer-events-auto group-hover:translate-x-2 duration-300 text-xs tracking-wide uppercase"
          >
            {t.news.readMore}
            <ExternalLink className="w-3 h-3 ml-2 rtl:mr-2 rtl:ml-0" />
          </a>
        </div>

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

export default function NewsSection() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [, setError] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(false);

        // RSS.app permits browser requests directly and publishes updates faster than
        // the previous rss2json intermediary. The timestamp bypasses stale browser/CDN caches.
        const rssResponse = await fetch(`${RSS_FEED_URL}?updated=${Date.now()}`, {
          cache: "no-store",
        });

        if (!rssResponse.ok) {
          throw new Error("RSS feed request failed");
        }

        const rssItems = parseRssItems(await rssResponse.text());

        if (rssItems.length > 0) {
          const rssNews: NewsItem[] = rssItems.slice(0, 5).map((post) => {
            const description = getRssNodeText(post, "description");
            const enclosure = post.getElementsByTagName("enclosure")[0];
            const media = post.getElementsByTagName("media:content")[0];
            const cleanTitle = stripHtml(getRssNodeText(post, "title"));
            const cleanDescription = stripHtml(description);

            return {
              title: truncateText(
                cleanTitle || (language === "ar" ? "خبر من صفحة المدرسة" : "School News Update"),
                100
              ),
              snippet: truncateText(
                cleanDescription ||
                  (language === "ar"
                    ? "شاهد الخبر الكامل على صفحتنا الرسمية."
                    : "View the full update on our official page."),
                160
              ),
              url: getRssNodeText(post, "link") || "#",
              source: "Facebook",
              date: formatDate(getRssNodeText(post, "pubDate"), language),
              image: getImageFromPost({
                enclosure: { url: enclosure?.getAttribute("url") },
                image: media?.getAttribute("url"),
                description,
              }),
            };
          });

          setNews(rssNews);
          return;
        }

        throw new Error("No RSS items found");
      } catch (err) {
        console.warn("News fetch failed, using fallback data:", err);
        setError(true);

        setNews([
          {
            title:
              language === "ar"
                ? "مستقبل التعليم: الذكاء الاصطناعي في الفصول الدراسية"
                : "The Future of Education: AI in Classrooms",
            snippet:
              language === "ar"
                ? "كيف تقوم التكنولوجيا بتحويل طرق التدريس التقليدية."
                : "How technology is transforming traditional teaching methods.",
            url: "#",
            source: "Education Weekly",
            date: "May 15, 2024",
            image: FALLBACK_IMAGE,
          },
          {
            title:
              language === "ar"
                ? "أهمية التعليم في مرحلة الطفولة المبكرة"
                : "Importance of Early Childhood Education",
            snippet:
              language === "ar"
                ? "دراسات جديدة تؤكد على تأثير التعلم المبكر."
                : "New studies emphasize the impact of early learning.",
            url: "#",
            source: "Global Learning",
            date: "May 12, 2024",
            image: FALLBACK_IMAGE,
          },
          {
            title:
              language === "ar"
                ? "الاستدامة في المدارس الحديثة"
                : "Sustainability in Modern Schools",
            snippet:
              language === "ar"
                ? "المدارس تتبنى ممارسات صديقة للبيئة."
                : "Schools are adopting eco-friendly practices.",
            url: "#",
            source: "Green Schools",
            date: "May 10, 2024",
            image: FALLBACK_IMAGE,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [language]);

  return (
    <section
      className="py-32 transition-colors duration-500"
      style={{ background: isDark ? "#0b1120" : "#f8fafc" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div
            className="inline-flex items-center justify-center p-4 rounded-full mb-8 shadow-sm"
            style={{
              background: isDark ? "rgba(255,255,255,.06)" : "#ffffff",
              color: "var(--accent-primary)",
            }}
          >
            <Newspaper className="w-8 h-8" />
          </div>

          <h2
            className="text-5xl font-serif font-bold mb-6 drop-shadow-sm"
            style={{ color: isDark ? "#ffffff" : "#0f172a" }}
          >
            {t.news.title}
          </h2>

          <p
            className="text-xl font-light max-w-2xl mx-auto leading-relaxed"
            style={{ color: isDark ? "rgba(255,255,255,.76)" : "#475569" }}
          >
            {t.news.subtitle}
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-[var(--accent-primary)]" />
            <span
              className="ml-3 text-lg"
              style={{ color: isDark ? "rgba(255,255,255,.76)" : "#475569" }}
            >
              {t.news.loading}
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[minmax(300px,auto)]">
            {news.map((item, index) => (
              <NewsCard key={index} item={item} index={index} isFeatured={index === 0} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
