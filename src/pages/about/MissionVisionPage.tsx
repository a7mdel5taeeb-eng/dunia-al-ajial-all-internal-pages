import { motion } from "motion/react";
import {
  ArrowRight,
  Eye,
  Flag,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

export default function MissionVisionPage() {
  const { language, dir } = useLanguage();
  const isArabic = language === "ar";

  const content = isArabic
    ? {
        eyebrow: "من نحن",
        title: "الرسالة والرؤية",
        missionBadge: "الرِّسالة",
        missionTitle: "تهيئة بيئة تعليمية ناجحة",
        missionText:
          "تهيئة بيئة تعليمية ناجحة تُعزِّز النموَّ الأكاديمي المتميِّز، وترعى الصحةَ النفسية والاجتماعية والبدنية لجميع الطلاب.",
        visionBadge: "الرؤية",
        visionTitle: "مجتمع تعليمي رائد",
        visionText:
          "رؤيتنا أن نكون مجتمعاً تعليمياً رائداً، يُمكّن الطلاب -عبر الفضول الفكري، وقوة الشخصية، والمواطنة العالمية، والتقنيات الحديثة- من الابتكار، والقيادة، والازدهار في عالمنا المتغيّر.",
        exploreBtn: "استكشف برامجنا الأكاديمية",
        homeBtn: "العودة للرئيسية",
      }
    : {
        eyebrow: "About Us",
        title: "Mission & Vision",
        missionBadge: "Our Mission",
        missionTitle: "A Successful Learning Environment",
        missionText:
          "Our Mission is to cultivate a successful learning environment that fosters exceptional academic growth and nurtures the social, emotional, and physical well-being of every student.",
        visionBadge: "Our Vision",
        visionTitle: "A Leading Learning Community",
        visionText:
          "Our vision is to be a leading learning community where intellectual curiosity, strength of character, global citizenship, and modern technologies empower students to innovate, lead, and thrive in an ever-changing world.",
        exploreBtn: "Explore Our Academic Programs",
        homeBtn: "Back to Home",
      };

  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="container-page pt-32 md:pt-40">
        <section
          className="relative overflow-hidden rounded-[2rem] border min-h-[420px] md:min-h-[520px] flex items-center justify-center"
          style={{
            borderColor:
              "color-mix(in srgb, var(--accent-primary) 18%, var(--border-color))",
            boxShadow: "0 18px 50px -32px rgba(15,23,42,.30)",
          }}
        >
          <img
            src="/images/mission-vision-hero.webp"
            alt={isArabic ? "الرسالة والرؤية" : "Mission and Vision"}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/58" />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-950/60 via-black/35 to-sky-950/35" />

          {/* Soft decorative glow */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] bg-violet-500/20 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-500/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto text-center px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-sm font-semibold text-white/95">
                {content.eyebrow}
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-bold font-serif tracking-tight text-white">
                {content.title}
              </h1>

            </motion.div>
          </div>
        </section>
      </div>

      {/* Main Content Section */}
      <section className="relative pb-20">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[38rem] h-[38rem] bg-violet-500/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="container-page relative z-10">
          <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35 }}
              className="rounded-[2rem] border p-6 md:p-8 h-full"
              style={{
                background:
                  "color-mix(in srgb, var(--bg-elevated) 90%, transparent)",
                borderColor:
                  "color-mix(in srgb, #8b5cf6 16%, var(--border-color))",
                boxShadow: "0 18px 50px -32px rgba(15,23,42,.22)",
              }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300">
                <Flag className="w-7 h-7" />
              </div>

              <div
                className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold mb-4"
                style={{
                  color: "var(--accent-primary)",
                  background:
                    "color-mix(in srgb, var(--accent-primary) 10%, transparent)",
                }}
              >
                {content.missionBadge}
              </div>

              <h2
                className="text-2xl md:text-3xl font-bold font-serif mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                {content.missionTitle}
              </h2>

              <p
                className="text-[1rem] md:text-[1.05rem] leading-8 md:leading-9"
                style={{ color: "var(--text-secondary)" }}
              >
                {content.missionText}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="rounded-[2rem] border p-6 md:p-8 h-full"
              style={{
                background:
                  "color-mix(in srgb, var(--bg-elevated) 90%, transparent)",
                borderColor:
                  "color-mix(in srgb, #3b82f6 16%, var(--border-color))",
                boxShadow: "0 18px 50px -32px rgba(15,23,42,.22)",
              }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 bg-blue-500/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300">
                <Eye className="w-7 h-7" />
              </div>

              <div
                className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold mb-4"
                style={{
                  color: "#2563eb",
                  background: "color-mix(in srgb, #2563eb 10%, transparent)",
                }}
              >
                {content.visionBadge}
              </div>

              <h2
                className="text-2xl md:text-3xl font-bold font-serif mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                {content.visionTitle}
              </h2>

              <p
                className="text-[1rem] md:text-[1.05rem] leading-8 md:leading-9"
                style={{ color: "var(--text-secondary)" }}
              >
                {content.visionText}
              </p>
            </motion.div>
          </div>

          <div className="max-w-6xl mx-auto mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              to="/academics/early-childhood"
              className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm md:text-base font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-[1px]"
              style={{
                color: "#ffffff",
                background:
                  "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
              }}
            >
              {content.exploreBtn}
            </Link>

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-200 shadow-sm hover:shadow-md"
              style={{
                color: "#ffffff",
                background:
                  "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
              }}
            >
              {content.homeBtn}
              <ArrowRight
                className={`w-4 h-4 ${dir === "rtl" ? "rotate-180" : ""}`}
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
