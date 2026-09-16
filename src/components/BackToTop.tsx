import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 420);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const returnToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.84, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.84, y: 12 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          onClick={returnToTop}
          className="fixed bottom-5 left-5 z-40 inline-flex h-16 w-10 flex-col items-center justify-center gap-1.5 rounded-full border text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          style={{
            background: "linear-gradient(160deg, rgba(30,41,78,.94), rgba(68,42,129,.95))",
            borderColor: "rgba(255,255,255,.28)",
            boxShadow: "0 16px 32px rgba(15,23,42,.28)",
          }}
          aria-label={language === "ar" ? "العودة إلى أعلى الصفحة" : "Back to top"}
          title={language === "ar" ? "العودة إلى الأعلى" : "Back to top"}
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
          <motion.span
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 1.45, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-violet-200"
            aria-hidden="true"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
