import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  const { theme } = useTheme();
  const { dir } = useLanguage();

  return (
    <section className="container-page pt-36 md:pt-44" dir={dir}>
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-[2rem] border shadow-premium"
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(135deg, rgba(21,33,61,.96), rgba(34,20,67,.94))"
              : "linear-gradient(135deg, rgba(255,255,255,.98), rgba(245,243,255,.96))",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <div className="absolute -top-16 -right-12 h-44 w-44 rounded-full blur-3xl bg-violet-400/20" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full blur-3xl bg-fuchsia-300/20" />
        </div>

        <div className="relative px-6 md:px-10 lg:px-14 py-10 md:py-14">
          <div className="max-w-4xl">
            {eyebrow && (
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-bold border"
                style={{
                  color: "var(--accent-primary)",
                  borderColor: "var(--border-color)",
                  background:
                    theme === "dark"
                      ? "rgba(255,255,255,.04)"
                      : "rgba(255,255,255,.72)",
                }}
              >
                <Sparkles className="h-4 w-4" />
                {eyebrow}
              </div>
            )}

            <h1
              className="mt-5 text-3xl md:text-5xl font-bold leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              {title}
            </h1>

            {description && (
              <p
                className="mt-5 max-w-3xl text-base md:text-lg leading-8"
                style={{ color: "var(--text-secondary)" }}
              >
                {description}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}