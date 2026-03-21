import { Book, Microscope, Palette, Music } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React from "react";

type Program = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
};

const ProgramCard: React.FC<{ program: Program; index: number }> = ({ program, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 260, damping: 24 });
  const mouseY = useSpring(y, { stiffness: 260, damping: 24 });

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.38, delay: index * 0.08, ease: "easeOut" }}
      className="h-full [perspective:1000px]"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          background: "linear-gradient(180deg, #24365d 0%, #1f2f54 100%)",
          borderColor: "rgba(148, 163, 184, 0.22)",
        }}
        whileHover={{ scale: 1.02, y: -10 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full rounded-[1.4rem] md:rounded-[1.75rem] p-6 md:p-9 border overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-purple-500/35 will-change-transform"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-violet-500/[0.08]" />
        <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-violet-500/12 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-36 h-36 rounded-full bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <div style={{ transform: "translateZ(28px)" }} className="relative z-10">
          <div className={`inline-flex items-center justify-center p-4 rounded-2xl ${program.color} mb-7 transition-all duration-300 shadow-sm group-hover:scale-110 group-hover:shadow-lg`}>
            <program.icon className="h-7 w-7 transition-all duration-300" />
          </div>

          <h3 className="font-bold mb-3 md:mb-4 font-serif text-[1.45rem] md:text-[1.9rem] leading-tight transition-colors duration-200 group-hover:text-violet-300" style={{ color: "#ffffff" }}>
            {program.title}
          </h3>

          <p className="leading-7 md:leading-8 text-[0.95rem] md:text-[1.06rem]" style={{ color: "rgba(229, 231, 235, 0.95)" }}>
            {program.description}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-violet-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </motion.div>
  );
};

export default function Programs() {
  const { t } = useLanguage();

  const programs: Program[] = [
    {
      title: t.programs.stem.title,
      description: t.programs.stem.desc,
      icon: Microscope,
      color: "bg-blue-50 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500",
    },
    {
      title: t.programs.arts.title,
      description: t.programs.arts.desc,
      icon: Palette,
      color: "bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-500/15 dark:text-fuchsia-300 group-hover:bg-fuchsia-600 group-hover:text-white dark:group-hover:bg-fuchsia-500",
    },
    {
      title: t.programs.music.title,
      description: t.programs.music.desc,
      icon: Music,
      color: "bg-pink-50 text-pink-600 dark:bg-pink-500/15 dark:text-pink-300 group-hover:bg-pink-600 group-hover:text-white dark:group-hover:bg-pink-500",
    },
    {
      title: t.programs.languages.title,
      description: t.programs.languages.desc,
      icon: Book,
      color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300 group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-emerald-500",
    },
  ];

  return (
    <section className="section relative overflow-hidden" id="academics">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none invert dark:invert-0" />
      <div className="absolute -top-24 left-0 w-72 h-72 bg-violet-500/8 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/8 blur-3xl rounded-full pointer-events-none" />

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.34, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="badge">{t.programs.sectionTitle}</span>
          <h2 className="section-title mt-6">{t.programs.title}</h2>
          <p className="section-subtitle mt-5 max-w-2xl mx-auto">{t.programs.subtitle}</p>
        </motion.div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
