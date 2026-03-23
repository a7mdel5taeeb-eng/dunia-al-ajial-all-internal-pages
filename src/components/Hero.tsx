import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

export default function Hero() {
  const { t, dir, language } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section className="relative min-h-[82vh] md:min-h-[920px] w-full overflow-hidden flex items-center pt-28 md:pt-40 pb-24 md:pb-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-school.png"
          alt={language === "ar" ? "طالب يسير نحو المدرسة" : "Student walking toward school"}
          className="w-full h-full object-cover object-center scale-[1.02]"
        />

        {/* Base overlay */}
        {isDark ? (
          <>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(96deg, rgba(2,6,23,0.88) 0%, rgba(15,23,42,0.68) 38%, rgba(30,41,59,0.34) 62%, rgba(15,23,42,0.18) 100%)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-slate-900/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_28%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_24%)]" />

            <div className="absolute top-[10%] right-[6%] h-72 w-72 md:h-[28rem] md:w-[28rem] rounded-full bg-violet-500/20 blur-[110px] pointer-events-none" />
            <div className="absolute bottom-[6%] left-[4%] h-64 w-64 md:h-96 md:w-96 rounded-full bg-sky-500/10 blur-[110px] pointer-events-none" />
          </>
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(96deg, rgba(255,255,255,0.84) 0%, rgba(255,255,255,0.58) 34%, rgba(255,255,255,0.22) 62%, rgba(255,255,255,0.08) 100%)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/78 via-white/12 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.14),transparent_28%)]" />
            <div className="absolute top-[10%] right-[6%] h-72 w-72 md:h-[28rem] md:w-[28rem] rounded-full bg-violet-300/20 blur-[110px] pointer-events-none" />
          </>
        )}

        {/* Soft vignette */}
        <div className="absolute inset-0 shadow-[inset_0_-120px_120px_rgba(0,0,0,0.18)]" />
      </div>

      {/* Content */}
      <div className="container-page relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-3 rounded-full px-4 py-2 md:px-5 md:py-2.5 text-[10px] md:text-[11px] font-bold tracking-[0.16em] md:tracking-[0.22em] backdrop-blur-md"
            style={{
              color: isDark ? "rgba(255,255,255,.94)" : "#6d28d9",
              background: isDark ? "rgba(255,255,255,.08)" : "rgba(255,255,255,.74)",
              border: isDark
                ? "1px solid rgba(255,255,255,.16)"
                : "1px solid rgba(109,40,217,.12)",
              boxShadow: isDark
                ? "0 8px 30px -18px rgba(0,0,0,.45)"
                : "0 8px 30px -18px rgba(15,23,42,.12)",
            }}
          >
            <span
              className="inline-block h-2.5 w-2.5 rounded-full animate-pulse"
              style={{ background: isDark ? "#c4b5fd" : "#8b5cf6" }}
            />
            {language === "ar"
              ? "تعليم عالمي • بيئة آمنة • مستقبل أقوى"
              : "Global Education • Safe Environment • Stronger Future"}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 text-[2.35rem] sm:text-5xl md:text-7xl lg:text-[86px] font-serif font-bold leading-[1.06] md:leading-[1.02] tracking-tight"
            style={{
              color: isDark ? "#ffffff" : "#0f172a",
              textShadow: isDark ? "0 8px 28px rgba(0,0,0,.28)" : "0 8px 22px rgba(255,255,255,.18)",
            }}
          >
            {t.hero.title.split(" ").map((word, i) => {
              const lower = word.toLowerCase();
              const highlight = ["future", "المستقبل"].includes(lower);

              return (
                <span
                  key={i}
                  className={`inline-block ${dir === "rtl" ? "ml-2 md:ml-3" : "mr-2 md:mr-3"}`}
                  style={{
                    color: highlight
                      ? isDark
                        ? "#c4b5fd"
                        : "#7c3aed"
                      : isDark
                        ? "#ffffff"
                        : "#0f172a",
                  }}
                >
                  {word}
                </span>
              );
            })}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="hero-subtitle mt-6 inline-block max-w-3xl rounded-[1.35rem] md:rounded-[1.75rem] px-4 py-3 md:px-7 md:py-5 backdrop-blur-md"
            style={{
              color: isDark ? "rgba(255,255,255,.92)" : "#334155",
              background: isDark ? "rgba(255,255,255,.07)" : "rgba(255,255,255,.50)",
              border: isDark
                ? "1px solid rgba(255,255,255,.10)"
                : "1px solid rgba(148,163,184,.14)",
              boxShadow: isDark
                ? "0 18px 40px -24px rgba(0,0,0,.52)"
                : "0 16px 40px -24px rgba(15,23,42,.14)",
            }}
          >
            <p className="text-base sm:text-lg md:text-2xl leading-8 md:leading-loose">
              {t.hero.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 md:mt-12 flex flex-wrap gap-3 md:gap-4"
          >
            <a
              href="#admissions"
              className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 md:px-9 py-3.5 md:py-4 text-sm md:text-lg font-bold md:font-extrabold tracking-wide shadow-xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5"
              style={{
                color: "#ffffff",
                background:
                  "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                boxShadow: "0 18px 40px -18px rgba(124,58,237,.55)",
              }}
            >
              {t.hero.apply}
              <ArrowRight
                className={`h-4 w-4 md:h-5 md:w-5 ${dir === "rtl" ? "rotate-180" : ""}`}
              />
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 md:px-9 py-3.5 md:py-4 text-sm md:text-lg font-bold transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
              style={{
                color: isDark ? "#ffffff" : "#0f172a",
                background: isDark ? "rgba(255,255,255,.08)" : "rgba(255,255,255,.74)",
                border: isDark
                  ? "1px solid rgba(255,255,255,.18)"
                  : "1px solid rgba(148,163,184,.22)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: isDark
                  ? "0 12px 34px -20px rgba(0,0,0,.4)"
                  : "0 12px 34px -20px rgba(15,23,42,.14)",
              }}
            >
              {t.hero.learnMore}
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32 }}
            className="mt-10 md:mt-14 grid w-full max-w-2xl grid-cols-3 gap-3 md:gap-4"
          >
            {[
              {
                value: language === "ar" ? "+15" : "15+",
                label: language === "ar" ? "سنة خبرة" : "Years of Excellence",
              },
              {
                value: language === "ar" ? "+1400" : "1400+",
                label: language === "ar" ? "طالب وطالبة" : "Students",
              },
              {
                value: language === "ar" ? "+90" : "90+",
                label: language === "ar" ? "معلم محترف" : "Expert Teachers",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl px-4 py-4 md:px-5 md:py-5 backdrop-blur-md"
                style={{
                  background: isDark ? "rgba(255,255,255,.07)" : "rgba(255,255,255,.58)",
                  border: isDark
                    ? "1px solid rgba(255,255,255,.10)"
                    : "1px solid rgba(148,163,184,.16)",
                  boxShadow: isDark
                    ? "0 16px 40px -24px rgba(0,0,0,.48)"
                    : "0 16px 40px -24px rgba(15,23,42,.12)",
                }}
              >
                <div
                  className="text-xl md:text-3xl font-extrabold"
                  style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                >
                  {item.value}
                </div>
                <div
                  className="mt-1 text-[11px] md:text-sm"
                  style={{ color: isDark ? "rgba(255,255,255,.78)" : "#475569" }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.7, delay: 0.6 }}
  className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
>
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-[10px] md:text-xs tracking-[0.22em] uppercase"
          style={{ color: isDark ? "rgba(255,255,255,.72)" : "rgba(15,23,42,.62)" }}
        >
          <span>{language === "ar" ? "اكتشف المزيد" : "Scroll"}</span>
          <span
            className="relative flex h-10 w-6 items-start justify-center rounded-full border pt-2"
            style={{
              borderColor: isDark ? "rgba(255,255,255,.28)" : "rgba(15,23,42,.22)",
              background: isDark ? "rgba(255,255,255,.04)" : "rgba(255,255,255,.36)",
            }}
          >
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="block h-2 w-2 rounded-full"
              style={{ background: isDark ? "#c4b5fd" : "#7c3aed" }}
            />
          </span>
        </a>
      </motion.div>
    </section>
  );
}