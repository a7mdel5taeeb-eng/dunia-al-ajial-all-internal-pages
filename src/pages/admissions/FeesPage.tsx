import { motion } from "motion/react";
import PageHero from "../../components/PageHero";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";

export default function FeesPage() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isArabic = language === "ar";

  return (
    <main className="pb-16 md:pb-24">
      <PageHero
        eyebrow={isArabic ? "القبول" : "Admissions"}
        title={isArabic ? "الرسوم الدراسية 2026/2027" : "Tuition Fees 2026/2027"}
        description={
          isArabic
            ? "اطّلع على الرسوم الدراسية وخطة السداد للعام الدراسي 2026/2027."
            : "View tuition fees and the payment plan for the 2026/2027 academic year."
        }
        image="/images/admissions-documents-hero-v2.png"
      />

      <section className="container-page mt-8 md:mt-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="mx-auto max-w-5xl overflow-hidden rounded-2xl border p-2 md:rounded-3xl md:p-3"
          style={{
            background: theme === "dark" ? "rgba(255,255,255,.04)" : "rgba(255,255,255,.88)",
            borderColor: "var(--border-color)",
            boxShadow: theme === "dark" ? "0 20px 50px -30px rgba(0,0,0,.48)" : "0 20px 50px -30px rgba(15,23,42,.16)",
          }}
        >
          <img
            src="/images/tuition-fees-2026-2027.png"
            alt={isArabic ? "جدول الرسوم الدراسية للعام 2026/2027" : "Tuition fees table for 2026/2027"}
            className="block h-auto w-full rounded-xl md:rounded-2xl"
          />
        </motion.div>
      </section>
    </main>
  );
}
