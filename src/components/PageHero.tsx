import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
}: PageHeroProps) {
  const { theme } = useTheme();
  const { dir } = useLanguage();

  return (
    <section className="container-page pt-36 md:pt-44" dir={dir}>
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className={`relative overflow-hidden rounded-[2rem] border shadow-premium ${image ? "min-h-[310px] md:min-h-[360px] flex items-end" : ""}`}
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(135deg, rgba(21,33,61,.96), rgba(34,20,67,.94))"
              : "linear-gradient(135deg, rgba(255,255,255,.98), rgba(245,243,255,.96))",
          borderColor: "var(--border-color)",
        }}
      >
        {image && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  theme === "dark"
                    ? "linear-gradient(90deg, rgba(3,10,28,.9) 0%, rgba(7,15,38,.54) 52%, rgba(7,15,38,.22) 100%), linear-gradient(0deg, rgba(3,10,28,.5), transparent 55%)"
                    : "linear-gradient(90deg, rgba(255,255,255,.91) 0%, rgba(255,255,255,.62) 50%, rgba(255,255,255,.14) 100%)",
              }}
            />
          </>
        )}
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <div className="absolute -top-16 -right-12 h-44 w-44 rounded-full blur-3xl bg-violet-400/20" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full blur-3xl bg-fuchsia-300/20" />
        </div>

        <div className="relative w-full px-6 md:px-10 lg:px-14 py-10 md:py-12">
          <div
            className={`max-w-4xl ${image ? "rounded-[1.5rem] p-5 md:p-7 backdrop-blur-md" : ""}`}
            style={
              image
                ? {
                    background: theme === "dark" ? "rgba(5,13,34,.42)" : "rgba(255,255,255,.28)",
                    border: theme === "dark" ? "1px solid rgba(255,255,255,.12)" : "1px solid rgba(255,255,255,.42)",
                    boxShadow: "0 20px 45px -30px rgba(0,0,0,.52)",
                  }
                : undefined
            }
          >
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
              style={{ color: image && theme === "dark" ? "#fff" : "var(--text-primary)" }}
            >
              {title}
            </h1>

            {description && (
              <p
                className="mt-5 max-w-3xl text-base md:text-lg leading-8"
                style={{ color: image && theme === "dark" ? "rgba(255,255,255,.86)" : "var(--text-secondary)" }}
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
