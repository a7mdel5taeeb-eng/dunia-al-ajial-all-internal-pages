import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

export default function Gallery() {
  const { language, dir } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section id="gallery" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "linear-gradient(180deg, #020617 0%, #0f172a 55%, #111827 100%)"
              : "linear-gradient(180deg, #f8fafc 0%, #eef2ff 50%, #ffffff 100%)",
          }}
        />
        <div className="absolute top-[-80px] right-[8%] h-72 w-72 rounded-full bg-violet-500/12 blur-[110px] pointer-events-none" />
        <div className="absolute bottom-[-60px] left-[6%] h-72 w-72 rounded-full bg-sky-500/10 blur-[110px] pointer-events-none" />
      </div>

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div
            className="inline-flex items-center gap-3 rounded-full px-4 py-2 md:px-5 md:py-2.5 text-[10px] md:text-[11px] font-bold tracking-[0.16em] md:tracking-[0.22em] backdrop-blur-md"
            style={{
              color: isDark ? "rgba(255,255,255,.92)" : "#6d28d9",
              background: isDark ? "rgba(255,255,255,.06)" : "rgba(255,255,255,.72)",
              border: isDark
                ? "1px solid rgba(255,255,255,.14)"
                : "1px solid rgba(109,40,217,.12)",
            }}
          >
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ background: isDark ? "#c4b5fd" : "#8b5cf6" }}
            />
            {language === "ar"
              ? "معرض المدرسة • صور • فيديوهات • فعاليات"
              : "School Gallery • Photos • Videos • Events"}
          </div>

          <h2
            className="mt-6 text-[2.3rem] sm:text-5xl md:text-7xl lg:text-[82px] font-serif font-bold leading-[1.04] tracking-tight"
            style={{ color: isDark ? "#ffffff" : "#0f172a" }}
          >
            {language === "ar" ? (
              <>
                لحظات <span className="text-violet-400 md:text-violet-600">تلهم</span> المستقبل
              </>
            ) : (
              <>
                Moments That{" "}
                <span className="text-violet-400 md:text-violet-600">Inspire</span> the Future
              </>
            )}
          </h2>

          <p
            className="mt-6 max-w-3xl text-base sm:text-lg md:text-2xl leading-8 md:leading-loose"
            style={{ color: isDark ? "rgba(255,255,255,.78)" : "#475569" }}
          >
            {language === "ar"
              ? "استكشف صورًا وفيديوهات حقيقية من حياة المدرسة، الأنشطة، الفصول، والفعاليات التي تعكس بيئة تعليمية حديثة تنمّي المعرفة والثقة والطموح."
              : "Explore real photos and videos from school life, activities, classrooms, and events that reflect a modern learning environment built for growth, confidence, and ambition."}
          </p>

          <div className="mt-10 md:mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center gap-3 rounded-full px-8 md:px-10 py-4 md:py-5 text-sm md:text-lg font-bold md:font-extrabold tracking-wide shadow-xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5"
              style={{
                color: "#ffffff",
                background:
                  "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                boxShadow: "0 18px 40px -18px rgba(124,58,237,.45)",
              }}
            >
              {language === "ar" ? "عرض الجاليري كاملًا" : "View Full Gallery"}
              <ArrowRight
                className={`h-5 w-5 ${dir === "rtl" ? "rotate-180" : ""}`}
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}