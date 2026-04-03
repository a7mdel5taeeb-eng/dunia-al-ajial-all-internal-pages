import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

export default function Hero() {
  const { t, dir, language } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section className="relative min-h-[72vh] sm:min-h-[78vh] md:min-h-[860px] w-full overflow-hidden flex items-center pt-24 sm:pt-28 md:pt-36 pb-16 sm:pb-20 md:pb-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-school.png"
          alt={language === "ar" ? "طالب يسير نحو المدرسة" : "Student walking toward school"}
          className="w-full h-full object-cover object-center scale-[1.02]"
        />

        {/* Overlay */}
        {isDark ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/20" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent" />
          </>
        )}

        {/* Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_-120px_120px_rgba(0,0,0,0.18)]" />
      </div>

      {/* Content */}
      <div className="container-page relative z-10 w-full">
        <div className="max-w-4xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-3 rounded-full px-4 py-2 text-[10px] sm:text-[11px] font-bold tracking-[0.16em] backdrop-blur-md"
            style={{
              color: isDark ? "#fff" : "#6d28d9",
              background: isDark ? "rgba(255,255,255,.08)" : "rgba(255,255,255,.7)",
            }}
          >
            {language === "ar"
              ? "تعليم عالمي • بيئة آمنة • مستقبل أقوى"
              : "Global Education • Safe Environment • Stronger Future"}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-5 sm:mt-6 text-[2rem] sm:text-[2.7rem] md:text-6xl lg:text-[86px] font-serif font-bold leading-[1.08] md:leading-[1.02]"
            style={{
              color: isDark ? "#ffffff" : "#0f172a",
            }}
          >
            {t.hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-5 sm:mt-6 inline-block max-w-3xl px-4 py-3 sm:px-5 md:px-7 md:py-5 backdrop-blur-md rounded-xl"
            style={{
              background: isDark ? "rgba(255,255,255,.07)" : "rgba(255,255,255,.5)",
            }}
          >
            <p className="text-[15px] sm:text-lg md:text-2xl leading-7 md:leading-loose">
              {t.hero.subtitle}
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 sm:mt-8 md:mt-12 flex flex-wrap gap-3 md:gap-4"
          >
            <Link
              to="/admissions/online-application"
              className="inline-flex items-center gap-2 px-6 md:px-9 py-3 md:py-4 rounded-full text-sm md:text-lg font-bold text-white shadow-lg hover:scale-105 transition"
              style={{
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
              }}
            >
              {t.hero.apply}
              <ArrowRight className={`${dir === "rtl" ? "rotate-180" : ""}`} />
            </Link>

            <Link
              to="/about/why-dais"
              className="inline-flex items-center gap-2 px-6 md:px-9 py-3 md:py-4 rounded-full text-sm md:text-lg font-bold border transition hover:scale-105"
              style={{
                color: isDark ? "#fff" : "#000",
              }}
            >
              {t.hero.learnMore}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 sm:mt-10 md:mt-14 grid grid-cols-3 gap-2 sm:gap-3 md:gap-4"
          >
            <div>
              <div className="text-xl md:text-3xl font-bold">15+</div>
              <div className="text-xs md:text-sm">Years</div>
            </div>
            <div>
              <div className="text-xl md:text-3xl font-bold">1400+</div>
              <div className="text-xs md:text-sm">Students</div>
            </div>
            <div>
              <div className="text-xl md:text-3xl font-bold">90+</div>
              <div className="text-xs md:text-sm">Teachers</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}