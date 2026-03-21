import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="relative py-40 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

      {/* Animated Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-5xl md:text-7xl font-serif font-bold !text-white mb-8 drop-shadow-lg leading-tight">
          {t.cta.title}
        </h2>

        <p className="!text-white text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed">
          {t.cta.subtitle}
        </p>

        <motion.button
  type="button"
  onClick={() => {
  alert("CTA clicked");
  window.location.href = "/about/careers";
}}
  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,255,255,0.5)" }}
  whileTap={{ scale: 0.95 }}
  className="bg-white text-violet-900 font-bold py-6 px-12 rounded-full hover:bg-violet-50 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.3)] text-xl flex items-center gap-3 mx-auto group cursor-pointer relative z-20"
>
  {t.cta.button}
  <svg
    className="w-6 h-6 transition-transform group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</motion.button>
      </motion.div>
    </section>
  );
}