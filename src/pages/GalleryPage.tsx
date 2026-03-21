import { motion } from "motion/react";
import { Play, Image as ImageIcon, Video, ArrowRight, X } from "lucide-react";
import { useMemo, useState, type CSSProperties } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

type MediaItem = {
  id: number;
  type: "image" | "video";
  category: "campus" | "activities" | "classrooms" | "events";
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  src: string;
  thumbnail?: string;
};

type FilterKey = "all" | "campus" | "activities" | "classrooms" | "events";

const galleryItems: MediaItem[] = [
  {
    id: 1,
    type: "image",
    category: "campus",
    titleAr: "مبنى المدرسة الحديث",
    titleEn: "Modern School Building",
    descAr: "واجهة المدرسة والبيئة التعليمية الحديثة.",
    descEn: "A glimpse of the modern campus and learning environment.",
    thumbnail: "/images/gallery/campus-1.jpg",
    src: "/images/gallery/campus-1.jpg",
  },
  {
    id: 2,
    type: "image",
    category: "activities",
    titleAr: "أنشطة الطلاب",
    titleEn: "Student Activities",
    descAr: "لحظات من الأنشطة والفعاليات اليومية داخل المدرسة.",
    descEn: "Daily school activities and student engagement moments.",
    thumbnail: "/images/gallery/activity-1.jpg",
    src: "/images/gallery/activity-1.jpg",
  },
  {
    id: 3,
    type: "image",
    category: "classrooms",
    titleAr: "الفصول الدراسية",
    titleEn: "Classrooms",
    descAr: "قاعات تعليمية منظمة ومريحة ومحفزة على التعلم.",
    descEn: "Well-organized classrooms designed for focused learning.",
    thumbnail: "/images/gallery/classroom-1.jpg",
    src: "/images/gallery/classroom-1.jpg",
  },
  {
    id: 4,
    type: "video",
    category: "events",
    titleAr: "فعالية مدرسية",
    titleEn: "School Event",
    descAr: "مقتطفات من فعالية أو احتفال داخل المدرسة.",
    descEn: "Highlights from a school event or celebration.",
    src: "/videos/gallery/event-1.mp4",
    thumbnail: "/images/gallery/event-video-cover.jpg",
  },
  {
    id: 5,
    type: "image",
    category: "events",
    titleAr: "تكريم وإنجاز",
    titleEn: "Achievement & Recognition",
    descAr: "صور من لحظات التكريم والإنجازات الطلابية.",
    descEn: "Recognition moments and student achievements.",
    thumbnail: "/images/gallery/event-1.jpg",
    src: "/images/gallery/event-1.jpg",
  },
  {
    id: 6,
    type: "video",
    category: "activities",
    titleAr: "حياة مدرسية نابضة",
    titleEn: "Vibrant School Life",
    descAr: "فيديو قصير يعكس أجواء التعلم والحياة اليومية.",
    descEn: "A short video capturing the energy of daily school life.",
    src: "/videos/gallery/activity-1.mp4",
    thumbnail: "/images/gallery/activity-video-cover.jpg",
  },
  {
    id: 7,
    type: "video",
    category: "events",
    titleAr: "طريقة التقديم لاختبارات السات",
    titleEn: "How to Apply for SAT Exams",
    descAr: "فيديو إرشادي يوضح خطوات التقديم لاختبارات SAT بطريقة سهلة وواضحة.",
    descEn: "A helpful guide video explaining the SAT registration process step by step.",
    src: "/videos/sat-guide.mp4",
  },
  {
    id: 8,
    type: "image",
    category: "events",
    titleAr: "فوز فريق المرحلة المتوسطة بدوري مدرسة دنيا الأجيال 2026",
    titleEn: "Winning the Middle School Team of the Dunia Al-Ajial School League 2026",
    descAr: "لقطة من إنجاز رياضي مميز يعكس روح الفريق والتميز الطلابي.",
    descEn: "A proud sports achievement that reflects teamwork and student excellence.",
    thumbnail: "/images/sports1.jpg",
    src: "/images/sports1.jpg",
  },
];

export default function GalleryPage() {
  const { language, dir } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const filters = useMemo(
    () => [
      { key: "all" as FilterKey, label: language === "ar" ? "الكل" : "All" },
      { key: "campus" as FilterKey, label: language === "ar" ? "الحرم المدرسي" : "Campus" },
      { key: "activities" as FilterKey, label: language === "ar" ? "الأنشطة" : "Activities" },
      { key: "classrooms" as FilterKey, label: language === "ar" ? "الفصول" : "Classrooms" },
      { key: "events" as FilterKey, label: language === "ar" ? "الفعاليات" : "Events" },
    ],
    [language]
  );

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <section className="relative overflow-hidden pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: isDark
                ? "linear-gradient(180deg, #020617 0%, #0f172a 50%, #111827 100%)"
                : "linear-gradient(180deg, #f8fafc 0%, #eef2ff 48%, #ffffff 100%)",
            }}
          />
          <div className="absolute top-[-80px] right-[8%] h-72 w-72 rounded-full bg-violet-500/15 blur-[110px] pointer-events-none" />
          <div className="absolute bottom-[-60px] left-[6%] h-72 w-72 rounded-full bg-sky-500/10 blur-[110px] pointer-events-none" />
        </div>

        <div className="container-page relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-6xl mx-auto"
          >
            <div
              className="relative overflow-hidden rounded-[1.75rem] md:rounded-[2rem] min-h-[320px] md:min-h-[430px] border"
              style={{
                borderColor: isDark
                  ? "rgba(255,255,255,.10)"
                  : "rgba(148,163,184,.18)",
                backgroundImage: "url('/images/gallery-hero.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: isDark
                  ? "0 24px 60px -30px rgba(0,0,0,.55)"
                  : "0 24px 60px -30px rgba(15,23,42,.18)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/25" />
              <div className="absolute inset-0 bg-violet-900/20" />

              <div className="relative z-10 flex min-h-[320px] md:min-h-[430px] flex-col items-center justify-end px-6 py-8 md:px-10 md:py-12 text-center">
                <div
                  className="inline-flex items-center gap-3 rounded-full px-4 py-2 md:px-5 md:py-2.5 text-[10px] md:text-[11px] font-bold tracking-[0.16em] md:tracking-[0.22em] backdrop-blur-md"
                  style={{
                    color: "#ffffff",
                    background: "rgba(255,255,255,.08)",
                    border: "1px solid rgba(255,255,255,.14)",
                  }}
                >
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-violet-300" />
                  {language === "ar"
                    ? "معرض المدرسة • صور • فيديوهات • فعاليات"
                    : "School Gallery • Photos • Videos • Events"}
                </div>

                <h1 className="mt-6 text-[2.2rem] sm:text-5xl md:text-7xl lg:text-[78px] font-serif font-bold leading-[1.04] tracking-tight text-white">
                  {language === "ar" ? (
                    <>
                      لحظات <span className="text-violet-300">تلهم</span> المستقبل
                    </>
                  ) : (
                    <>
                      Moments That <span className="text-violet-300">Inspire</span> the Future
                    </>
                  )}
                </h1>

                <p className="mt-5 max-w-4xl text-sm sm:text-base md:text-xl leading-7 md:leading-loose text-white/90">
                  {language === "ar"
                    ? "استكشف صورًا وفيديوهات حقيقية من حياة المدرسة، والأنشطة، والفصول، والفعاليات التي تعكس بيئة تعليمية حديثة تنمّي المعرفة والثقة والطموح."
                    : "Explore real photos and videos from school life, activities, classrooms, and events that reflect a modern learning environment built for growth, confidence, and ambition."}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-16 md:pb-24">
        <div className="container-page">
          <div className="flex flex-wrap gap-3 md:gap-4">
            {filters.map((filter) => {
              const active = activeFilter === filter.key;

              return (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className="rounded-full px-5 md:px-6 py-3 text-sm md:text-base font-bold transition-all duration-300"
                  style={{
                    color: active
                      ? "#ffffff"
                      : isDark
                      ? "rgba(255,255,255,.88)"
                      : "#0f172a",
                    background: active
                      ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                      : isDark
                      ? "rgba(255,255,255,.06)"
                      : "rgba(255,255,255,.78)",
                    border: active
                      ? "1px solid transparent"
                      : isDark
                      ? "1px solid rgba(255,255,255,.10)"
                      : "1px solid rgba(148,163,184,.18)",
                    boxShadow: active
                      ? "0 16px 38px -18px rgba(124,58,237,.55)"
                      : isDark
                      ? "0 10px 24px -18px rgba(0,0,0,.35)"
                      : "0 10px 24px -18px rgba(15,23,42,.12)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <motion.div
            layout
            className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6"
          >
            {filteredItems.map((item, index) => {
              const title = language === "ar" ? item.titleAr : item.titleEn;
              const desc = language === "ar" ? item.descAr : item.descEn;

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.42, delay: index * 0.04 }}
                  onClick={() => setSelectedItem(item)}
                  className="group relative overflow-hidden rounded-[1.75rem] text-start"
                  style={{
                    background: isDark ? "rgba(255,255,255,.05)" : "rgba(255,255,255,.84)",
                    border: isDark
                      ? "1px solid rgba(255,255,255,.08)"
                      : "1px solid rgba(148,163,184,.14)",
                    boxShadow: isDark
                      ? "0 20px 50px -30px rgba(0,0,0,.5)"
                      : "0 20px 50px -30px rgba(15,23,42,.16)",
                  }}
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-slate-200 dark:bg-slate-800">
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                        muted
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <img
                        src={item.thumbnail}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/88 via-slate-900/14 to-transparent" />

                    <div
                      className="absolute top-4 left-4 flex items-center gap-2 rounded-full px-3 py-2 text-[11px] font-bold tracking-[0.12em] backdrop-blur-md"
                      style={{
                        color: "#ffffff",
                        background: "rgba(15,23,42,.42)",
                        border: "1px solid rgba(255,255,255,.14)",
                      }}
                    >
                      {item.type === "video" ? (
                        <>
                          <Video className="h-3.5 w-3.5" />
                          <span>{language === "ar" ? "فيديو" : "VIDEO"}</span>
                        </>
                      ) : (
                        <>
                          <ImageIcon className="h-3.5 w-3.5" />
                          <span>{language === "ar" ? "صورة" : "PHOTO"}</span>
                        </>
                      )}
                    </div>

                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/14 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                          <Play className="h-6 w-6 fill-white text-white" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3
                          className="text-xl md:text-2xl font-bold"
                          style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                        >
                          {title}
                        </h3>
                        <p
                          className="mt-3 text-sm md:text-base leading-7"
                          style={{ color: isDark ? "rgba(255,255,255,.72)" : "#475569" }}
                        >
                          {desc}
                        </p>
                      </div>

                      <div
                        className="shrink-0 rounded-full p-3 transition-transform duration-300 group-hover:translate-x-1"
                        style={{
                          color: isDark ? "#ffffff" : "#0f172a",
                          background: isDark ? "rgba(255,255,255,.06)" : "rgba(248,250,252,.92)",
                          border: isDark
                            ? "1px solid rgba(255,255,255,.12)"
                            : "1px solid rgba(148,163,184,.18)",
                        }}
                      >
                        <ArrowRight className={`h-4 w-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {selectedItem && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/82 p-4 md:p-8"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-[1.75rem]"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: isDark ? "#020617" : "#ffffff",
              border: isDark
                ? "1px solid rgba(255,255,255,.08)"
                : "1px solid rgba(148,163,184,.16)",
              boxShadow: "0 30px 80px -30px rgba(0,0,0,.45)",
            }}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 z-10 rounded-full p-3"
              style={{
                [dir === "rtl" ? "left" : "right"]: "16px",
                color: "#ffffff",
                background: "rgba(15,23,42,.58)",
                border: "1px solid rgba(255,255,255,.14)",
              } as CSSProperties}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 xl:grid-cols-[1.25fr_.75fr]">
              <div className="bg-slate-950">
                {selectedItem.type === "video" ? (
                  <video
                    src={selectedItem.src}
                    controls
                    autoPlay
                    className="h-full w-full max-h-[78vh] object-contain bg-black"
                  />
                ) : (
                  <img
                    src={selectedItem.src}
                    alt={language === "ar" ? selectedItem.titleAr : selectedItem.titleEn}
                    className="h-full w-full max-h-[78vh] object-contain bg-black"
                  />
                )}
              </div>

              <div className="p-6 md:p-8 xl:p-10">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[11px] font-bold tracking-[0.12em]"
                  style={{
                    color: isDark ? "rgba(255,255,255,.88)" : "#6d28d9",
                    background: isDark ? "rgba(255,255,255,.06)" : "rgba(109,40,217,.08)",
                    border: isDark
                      ? "1px solid rgba(255,255,255,.10)"
                      : "1px solid rgba(109,40,217,.10)",
                  }}
                >
                  {selectedItem.type === "video" ? (
                    <>
                      <Video className="h-3.5 w-3.5" />
                      <span>{language === "ar" ? "فيديو" : "VIDEO"}</span>
                    </>
                  ) : (
                    <>
                      <ImageIcon className="h-3.5 w-3.5" />
                      <span>{language === "ar" ? "صورة" : "PHOTO"}</span>
                    </>
                  )}
                </div>

                <h2
                  className="mt-5 text-2xl md:text-4xl font-bold leading-tight"
                  style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                >
                  {language === "ar" ? selectedItem.titleAr : selectedItem.titleEn}
                </h2>

                <p
                  className="mt-5 text-sm md:text-lg leading-8"
                  style={{ color: isDark ? "rgba(255,255,255,.76)" : "#475569" }}
                >
                  {language === "ar" ? selectedItem.descAr : selectedItem.descEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}