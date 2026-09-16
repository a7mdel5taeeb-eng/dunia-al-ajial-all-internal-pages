import {
  Trophy,
  Palette,
  Bus,
  Users,
  Music,
  Dumbbell,
  BookOpen,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

type ActivityCard = {
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  icon: React.ComponentType<{ className?: string }>;
};

const activitiesData = {
  badgeEn: "Student Life",
  badgeAr: "الحياة المدرسية",
  titleEn: "Activities",
  titleAr: "الأنشطة",
  heroTitleEn: "School Activities",
  heroTitleAr: "الأنشطة المدرسية",
  heroTextEn:
    "Dynamic programs that inspire creativity, teamwork, confidence, and personal growth.",
  heroTextAr:
    "برامج وأنشطة حيوية تعزز الإبداع والعمل الجماعي والثقة بالنفس وتنمي شخصية الطالب.",
  // We intentionally use a designed hero here until approved, authentic activity photos are available.
  heroImage: "",

  introEn:
    "At Dunia Al-Ajial International School, student life extends far beyond the classroom. Our activities are designed to inspire creativity, teamwork, confidence, and personal growth in a vibrant and supportive environment.",
  introAr:
    "في مدارس دنيا الأجيال الدولية، تمتد الحياة المدرسية إلى ما هو أبعد من الصف الدراسي. صُممت أنشطتنا لإلهام الإبداع، وتعزيز العمل الجماعي، وبناء الثقة، ودعم النمو الشخصي في بيئة حيوية ومشجعة.",

  highlightTitleEn: "A Dynamic Student Experience",
  highlightTitleAr: "تجربة طلابية حيوية",
  highlightTextEn:
    "We believe that every student should have opportunities to explore interests, build skills, and create meaningful memories through engaging school activities.",
  highlightTextAr:
    "نؤمن بأن لكل طالب الحق في فرص تتيح له اكتشاف اهتماماته، وتنمية مهاراته، وصناعة ذكريات مميزة من خلال أنشطة مدرسية تفاعلية.",

  cards: [
    {
      titleEn: "Sports Activities",
      titleAr: "الأنشطة الرياضية",
      descEn:
        "Students participate in physical activities that promote fitness, discipline, teamwork, and healthy competition across different grade levels.",
      descAr:
        "يشارك الطلاب في أنشطة رياضية تعزز اللياقة البدنية والانضباط وروح الفريق والمنافسة الصحية عبر مختلف المراحل الدراسية.",
      icon: Dumbbell,
    },
    {
      titleEn: "Cultural Activities",
      titleAr: "الأنشطة الثقافية",
      descEn:
        "Cultural programs help students appreciate diversity, expand their perspectives, and actively engage with language, heritage, and knowledge.",
      descAr:
        "تساعد البرامج الثقافية الطلاب على تقدير التنوع، وتوسيع آفاقهم، والتفاعل مع اللغة والتراث والمعرفة بشكل أعمق.",
      icon: BookOpen,
    },
    {
      titleEn: "Art & Creativity",
      titleAr: "الفنون والإبداع",
      descEn:
        "Artistic activities encourage self-expression and allow students to develop imagination and creativity through drawing, crafts, and design.",
      descAr:
        "تشجع الأنشطة الفنية الطلاب على التعبير عن أنفسهم وتنمية الخيال والإبداع من خلال الرسم والأعمال اليدوية والتصميم.",
      icon: Palette,
    },
    {
      titleEn: "Clubs & Teamwork",
      titleAr: "الأندية والعمل الجماعي",
      descEn:
        "School clubs create spaces for collaboration, leadership, responsibility, and shared interests in an engaging student community.",
      descAr:
        "توفر الأندية المدرسية مساحات للتعاون والقيادة وتحمل المسؤولية ومشاركة الاهتمامات داخل مجتمع طلابي تفاعلي.",
      icon: Users,
    },
    {
      titleEn: "Trips & Events",
      titleAr: "الرحلات والفعاليات",
      descEn:
        "Educational trips and school events enrich learning with memorable experiences and meaningful connections to real life.",
      descAr:
        "تثري الرحلات التعليمية والفعاليات المدرسية تجربة التعلم من خلال خبرات ممتعة وربط فعّال بالحياة الواقعية.",
      icon: Bus,
    },
    {
      titleEn: "Music & Performance",
      titleAr: "الموسيقى والعروض",
      descEn:
        "Performance opportunities help students build confidence, stage presence, and creative communication through music and presentations.",
      descAr:
        "تساعد فرص العروض الطلاب على بناء الثقة والقدرة على التقديم والتواصل الإبداعي من خلال الموسيقى والعروض المختلفة.",
      icon: Music,
    },
  ] as ActivityCard[],

  stats: [
    {
      number: "6+",
      labelEn: "Activity Areas",
      labelAr: "مجالات نشاط",
    },
    {
      number: "100%",
      labelEn: "Student Engagement Focus",
      labelAr: "تركيز على مشاركة الطلاب",
    },
    {
      number: "All Year",
      labelEn: "Programs & Events",
      labelAr: "برامج وفعاليات",
    },
  ],

  closingEn:
    "Our activities program is an essential part of the learning journey, helping students grow into confident, balanced, and active members of the school community.",
  closingAr:
    "يمثل برنامج الأنشطة جزءًا أساسيًا من رحلة التعلم، حيث يساعد الطلاب على النمو ليصبحوا أفرادًا واثقين ومتوازنين وفاعلين داخل المجتمع المدرسي.",
};

function AnimatedHero({
  isArabic,
  badge,
  title,
  text,
  image,
}: {
  isArabic: boolean;
  badge: string;
  title: string;
  text: string;
  image: string;
}) {
  return (
    <section className="container-page mb-10">
      <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border-color)] min-h-[360px] md:min-h-[430px]">
        {image && (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-[linear-gradient(135deg,#0b1730,#253b75_54%,#3d1c68)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(56,189,248,.26),transparent_24%),radial-gradient(circle_at_84%_76%,rgba(244,114,182,.22),transparent_26%)]" />
        <div aria-hidden="true" className="absolute -top-16 right-14 h-56 w-56 rounded-full border border-sky-100/20 bg-sky-300/10" />
        <div aria-hidden="true" className="absolute bottom-12 left-12 h-28 w-28 rotate-45 rounded-[1.8rem] border border-fuchsia-100/20 bg-fuchsia-300/10" />

        <div className="relative z-10 flex min-h-[360px] md:min-h-[430px] items-center px-5 py-6 md:px-12 md:py-10">
          <div className="max-w-3xl rounded-[1.75rem] border border-white/15 bg-slate-950/25 p-6 backdrop-blur-md md:p-9">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/95 backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4" />
              {badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-5 text-4xl font-bold tracking-tight text-white md:text-6xl"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-5 max-w-2xl text-base leading-8 text-white/90 md:text-lg"
            >
              {text}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md border border-white/15"
            >
              {isArabic ? "تجربة مليئة بالحيوية" : "A vibrant student experience"}
              <ArrowRight className={`h-4 w-4 ${isArabic ? "rotate-180" : ""}`} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ActivitiesPage() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isArabic = language === "ar";
  const isDark = theme === "dark";

  const cardBg = isDark
    ? "color-mix(in srgb, var(--bg-elevated) 92%, transparent)"
    : "rgba(255,255,255,.84)";

  const softCardBg = isDark
    ? "color-mix(in srgb, var(--bg-elevated) 88%, transparent)"
    : "rgba(255,255,255,.80)";

  const accentSoftBg = isDark
    ? "rgba(139,92,246,.12)"
    : "rgb(237 233 254)";

  const accentSoftText = isDark ? "rgb(196 181 253)" : "rgb(109 40 217)";

  return (
    <main className="min-h-screen pt-32 pb-16">
      <AnimatedHero
        isArabic={isArabic}
        badge={isArabic ? activitiesData.badgeAr : activitiesData.badgeEn}
        title={isArabic ? activitiesData.heroTitleAr : activitiesData.heroTitleEn}
        text={isArabic ? activitiesData.heroTextAr : activitiesData.heroTextEn}
        image={activitiesData.heroImage}
      />

      <section className="container-page">
        <div
          className="relative overflow-hidden rounded-[2rem] border shadow-sm"
          style={{
            background: cardBg,
            borderColor: "var(--border-color)",
            boxShadow: isDark
              ? "0 20px 50px -30px rgba(0,0,0,.45)"
              : "0 16px 40px -28px rgba(15,23,42,.12)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.10),transparent_28%)]" />

          <div className="relative px-6 py-10 md:px-10 md:py-14">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-6">
                {isArabic ? activitiesData.titleAr : activitiesData.titleEn}
              </h2>

              <p className="text-lg leading-8 text-[var(--text-secondary)] max-w-3xl">
                {isArabic ? activitiesData.introAr : activitiesData.introEn}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 mt-8 md:grid-cols-3">
          {activitiesData.stats.map((stat, index) => (
            <motion.div
              key={stat.labelEn}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="rounded-3xl border p-6 text-center shadow-sm"
              style={{
                background: softCardBg,
                borderColor: "var(--border-color)",
                boxShadow: isDark
                  ? "0 20px 50px -30px rgba(0,0,0,.42)"
                  : "0 14px 34px -24px rgba(15,23,42,.12)",
              }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[var(--accent-primary)]">
                {stat.number}
              </div>
              <div className="mt-2 text-sm md:text-base text-[var(--text-secondary)] font-medium">
                {isArabic ? stat.labelAr : stat.labelEn}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
            {isArabic ? activitiesData.highlightTitleAr : activitiesData.highlightTitleEn}
          </h2>
          <p className="text-[var(--text-secondary)] leading-8 text-lg">
            {isArabic ? activitiesData.highlightTextAr : activitiesData.highlightTextEn}
          </p>
        </div>

        <div className="grid gap-6 mt-10 md:grid-cols-2 xl:grid-cols-3">
          {activitiesData.cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.titleEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="group rounded-[1.75rem] border p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: softCardBg,
                  borderColor: "var(--border-color)",
                  boxShadow: isDark
                    ? "0 20px 50px -30px rgba(0,0,0,.45)"
                    : "0 16px 40px -28px rgba(15,23,42,.12)",
                }}
              >
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div
                    className="rounded-2xl p-3 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: accentSoftBg,
                      color: accentSoftText,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div
                    className="h-px flex-1"
                    style={{
                      background: isDark
                        ? "linear-gradient(to right, rgba(139,92,246,.22), transparent)"
                        : "linear-gradient(to right, rgba(196,181,253,.8), transparent)",
                    }}
                  />
                </div>

                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  {isArabic ? card.titleAr : card.titleEn}
                </h3>

                <p className="text-[var(--text-secondary)] leading-8">
                  {isArabic ? card.descAr : card.descEn}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4 }}
          className="mt-14 rounded-[2rem] border p-8 md:p-10 shadow-sm"
          style={{
            background: isDark
              ? "linear-gradient(135deg, color-mix(in srgb, var(--bg-elevated) 92%, transparent), rgba(139,92,246,.08))"
              : "linear-gradient(to right, rgba(255,255,255,.80), rgba(245,243,255,.70))",
            borderColor: "var(--border-color)",
            boxShadow: isDark
              ? "0 20px 50px -30px rgba(0,0,0,.45)"
              : "0 16px 40px -28px rgba(15,23,42,.12)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="rounded-2xl p-3 shrink-0"
              style={{
                background: accentSoftBg,
                color: accentSoftText,
              }}
            >
              <Trophy className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                {isArabic ? "أنشطة تصنع شخصية الطالب" : "Activities That Shape the Student Experience"}
              </h3>
              <p className="text-[var(--text-secondary)] leading-8 text-lg">
                {isArabic ? activitiesData.closingAr : activitiesData.closingEn}
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
