import { GraduationCap, Award, MapPin, BookOpen, LucideIcon } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
import React from "react";

interface CounterProps {
  value: string;
  label: string;
  icon: LucideIcon;
  id: number;
}

const Counter: React.FC<CounterProps> = ({ value, label, icon: Icon, id }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const isNumeric = !isNaN(parseInt(value, 10));
  const suffix = value.replace(/[0-9]/g, "");
  const isCogniaCard = id === 2;

  // 3D Hover Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 260, damping: 26 });
  const mouseY = useSpring(y, { stiffness: 260, damping: 26 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["2.5deg", "-2.5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-2.5deg", "2.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    if (isInView && isNumeric) {
      let start = 0;
      const end = numericValue;
      const duration = Math.min(1800, Math.max(500, end * 90));
      const incrementTime = 20;
      const step = end / (duration / incrementTime);

      const timer = setInterval(() => {
        start += step;

        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue, isNumeric]);

  return (
    <motion.div ref={ref} className="h-full [perspective:1000px]">
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          background: "var(--card-bg)",
          borderColor: "var(--card-border)",
        }}
        whileHover={{ scale: 1.015, y: -7 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="stats-card group flex flex-col items-center p-6 md:p-8 rounded-2xl shadow-premium border transition-all duration-300 hover:shadow-2xl hover:border-purple-500/30 relative overflow-hidden will-change-transform"
      >
        <div
          style={{ transform: "translateZ(30px)" }}
          className="flex flex-col items-center relative z-10 pointer-events-none"
        >
          {isCogniaCard ? (
            <div className="mb-6 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm dark:border-white/10 dark:bg-white/95">
                <img
                  src="/images/cognia.png"
                  alt="Cognia Accredited"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-full bg-slate-100 dark:bg-[var(--bg-secondary)] text-purple-600 dark:text-[var(--accent-primary)] mb-6 transition-transform duration-300 shadow-sm group-hover:scale-110 border border-slate-200 dark:border-[var(--border-color)]">
              <Icon className="h-8 w-8" />
            </div>
          )}

          <dd
            className="stat-value text-4xl md:text-6xl font-serif font-bold mb-3 tracking-tight text-center"
            style={{ color: "var(--text-primary)" }}
          >
            {isNumeric ? displayValue : value}
            <span className="text-purple-600 dark:text-purple-400 text-3xl md:text-4xl ml-1">
              {suffix}
            </span>
          </dd>

          <dt
            className="stat-label text-xs md:text-sm font-bold uppercase tracking-[0.18em] md:tracking-widest text-center leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {label}
          </dt>
        </div>

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-violet-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    { id: 1, name: t.stats.students, value: "14", icon: GraduationCap },
    { id: 2, name: t.stats.faculty, value: "1", icon: Award },
    { id: 3, name: t.stats.championships, value: "2", icon: MapPin },
    { id: 4, name: t.stats.nationalities, value: "100%", icon: BookOpen },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <div className="section-muted transition-colors duration-500 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <h2 className="section-title drop-shadow-sm">{t.stats.title}</h2>
          <p className="section-subtitle mt-5 md:mt-6 font-light">{t.stats.subtitle}</p>
        </motion.div>

        <motion.dl
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <Counter
              key={stat.id}
              id={stat.id}
              value={stat.value}
              label={stat.name}
              icon={stat.icon}
            />
          ))}
        </motion.dl>
      </div>
    </div>
  );
}
