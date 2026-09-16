import {
  Trophy,
  Medal,
  GraduationCap,
  Star,
  Award,
  Flag,
  Sparkles,
  Target,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

type AchievementCard = {
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  icon: React.ComponentType<{ className?: string }>;
};

const achievementsData = {
  badgeEn: "Excellence & Success",
  badgeAr: "التميز والنجاح",
  titleEn: "Achievements",
  titleAr: "الإنجازات",
  heroTitleEn: "School Achievements",
  heroTitleAr: "إنجازات المدرسة",
  heroTextEn:
    "Celebrating the success of our students and school community across academic, athletic, and creative fields.",
  heroTextAr:
    "نحتفي بإنجازات طلابنا ومجتمعنا المدرسي في المجالات الأكاديمية والرياضية والإبداعية.",

  introEn:
    "At Dunia Al-Ajial International School, achievement is more than a result — it is a reflection of commitment, ambition, and continuous growth. We celebrate the success of our students and school community across academic, athletic, and creative fields.",
  introAr:
    "في مدارس دنيا الأجيال الدولية، لا يُعد الإنجاز مجرد نتيجة، بل هو انعكاس للالتزام والطموح والتطور المستمر. نحن نحتفي بنجاحات طلابنا ومجتمعنا المدرسي في المجالات الأكاديمية والرياضية والإبداعية.",

  cards: [
    {
      titleEn: "Academic Excellence",
      titleAr: "التميز الأكاديمي",
      descEn:
        "Our students demonstrate strong academic performance through dedication, effective learning, and a supportive educational environment.",
      descAr:
        "يُظهر طلابنا أداءً أكاديميًا متميزًا من خلال الاجتهاد، والتعلم الفعّال، والبيئة التعليمية الداعمة.",
      icon: GraduationCap,
    },
    {
      titleEn: "Awards & Recognition",
      titleAr: "الجوائز والتكريم",
      descEn:
        "Students and school teams receive recognition in competitions, events, and initiatives that reflect their outstanding efforts and talent.",
      descAr:
        "يحصل الطلاب وفرق المدرسة على جوائز وتكريمات في مسابقات وفعاليات ومبادرات تعكس تميزهم وجهودهم.",
      icon: Award,
    },
    {
      titleEn: "Sports Success",
      titleAr: "النجاحات الرياضية",
      descEn:
        "Sports achievements reflect discipline, perseverance, teamwork, and the school’s commitment to a balanced student experience.",
      descAr:
        "تعكس الإنجازات الرياضية الانضباط والمثابرة وروح الفريق، إضافة إلى التزام المدرسة بتجربة طلابية متوازنة.",
      icon: Medal,
    },
    {
      titleEn: "Creative Accomplishments",
      titleAr: "الإنجازات الإبداعية",
      descEn:
        "Creative accomplishments showcase students’ originality, expression, and confidence in artistic and cultural fields.",
      descAr:
        "تُظهر الإنجازات الإبداعية أصالة الطلاب وقدرتهم على التعبير والثقة في المجالات الفنية والثقافية.",
      icon: Star,
    },
  ] as AchievementCard[],

  timeline: [
    {
      year: "01",
      titleEn: "Commitment",
      titleAr: "الالتزام",
      descEn: "Students begin with dedication, responsibility, and clear goals.",
      descAr: "يبدأ الطلاب بالاجتهاد وتحمل المسؤولية ووضع أهداف واضحة.",
    },
    {
      year: "02",
      titleEn: "Growth",
      titleAr: "التطور",
      descEn: "Skills, confidence, and discipline are strengthened over time.",
      descAr: "تتطور المهارات والثقة والانضباط تدريجيًا مع الوقت.",
    },
    {
      year: "03",
      titleEn: "Achievement",
      titleAr: "الإنجاز",
      descEn: "Effort turns into visible results, success stories, and recognition.",
      descAr: "يتحول الجهد إلى نتائج ملموسة وقصص نجاح وتقدير مستحق.",
    },
  ],

  highlightTitleEn: "A Culture of Achievement",
  highlightTitleAr: "ثقافة تقوم على الإنجاز",
  highlightTextEn:
    "We encourage every student to strive for excellence and to see success as a journey built on learning, perseverance, and character.",
  highlightTextAr:
    "نشجع كل طالب على السعي نحو التميز، وأن يرى النجاح كرحلة تُبنى على التعلم والمثابرة وصناعة الشخصية.",

  closingEn:
    "Every achievement tells a story of effort and aspiration. We are proud of the milestones our students continue to reach, and we remain committed to nurturing future leaders who excel with confidence and integrity.",
  closingAr:
    "كل إنجاز يحكي قصة من الجهد والطموح. نفخر بالمحطات التي يحققها طلابنا باستمرار، ونواصل التزامنا بإعداد قادة المستقبل بثقة وتميز ونزاهة.",
};

function AnimatedHero({
  isArabic,
  badge,
  title,
  text,
}: {
  isArabic: boolean;
  badge: string;
  title: string;
  text: string;
}) {
  const currentImage = "/images/sports1.jpg";

  return (
    <section className="container-page mb-10">
      <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border-color)] min-h-[360px] md:min-h-[430px] bg-[linear-gradient(135deg,#0f172a,#4c1d95,#0f172a)]">
        <img
          src={currentImage}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,15,33,.92),rgba(34,38,94,.61),rgba(65,25,103,.72))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,.24),transparent_28%)]" />

        <div aria-hidden="true" className="absolute -top-14 right-10 h-48 w-48 rounded-full border border-amber-100/20 bg-amber-300/10" />
        <div aria-hidden="true" className="absolute bottom-10 left-12 h-24 w-24 rotate-45 rounded-2xl border border-violet-100/20 bg-violet-300/10" />

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
              {isArabic ? "نفخر بكل قصة نجاح" : "Proud of every success story"}
              <ArrowRight className={`h-4 w-4 ${isArabic ? "rotate-180" : ""}`} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AchievementsPage() {
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
        badge={isArabic ? achievementsData.badgeAr : achievementsData.badgeEn}
        title={isArabic ? achievementsData.heroTitleAr : achievementsData.heroTitleEn}
        text={isArabic ? achievementsData.heroTextAr : achievementsData.heroTextEn}
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
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.10),transparent_30%)]" />

          <div className="relative px-6 py-10 md:px-10 md:py-14">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-6">
                {isArabic ? achievementsData.titleAr : achievementsData.titleEn}
              </h2>

              <p className="text-lg leading-8 text-[var(--text-secondary)] max-w-3xl">
                {isArabic ? achievementsData.introAr : achievementsData.introEn}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
            {isArabic ? achievementsData.highlightTitleAr : achievementsData.highlightTitleEn}
          </h2>
          <p className="text-[var(--text-secondary)] leading-8 text-lg">
            {isArabic ? achievementsData.highlightTextAr : achievementsData.highlightTextEn}
          </p>
        </div>

        <div className="grid gap-6 mt-10 md:grid-cols-2">
          {achievementsData.cards.map((card, index) => {
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
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="rounded-2xl p-3 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: accentSoftBg,
                      color: accentSoftText,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    {isArabic ? card.titleAr : card.titleEn}
                  </h3>
                </div>

                <p className="text-[var(--text-secondary)] leading-8">
                  {isArabic ? card.descAr : card.descEn}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="rounded-2xl p-3"
              style={{
                background: accentSoftBg,
                color: accentSoftText,
              }}
            >
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
              {isArabic ? "رحلة الإنجاز" : "The Achievement Journey"}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {achievementsData.timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="rounded-[1.75rem] border p-6 md:p-7 shadow-sm"
                style={{
                  background: softCardBg,
                  borderColor: "var(--border-color)",
                  boxShadow: isDark
                    ? "0 20px 50px -30px rgba(0,0,0,.42)"
                    : "0 14px 34px -24px rgba(15,23,42,.12)",
                }}
              >
                <div className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--accent-primary)] mb-3">
                  {item.year}
                </div>

                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  {isArabic ? item.titleAr : item.titleEn}
                </h3>

                <p className="text-[var(--text-secondary)] leading-8">
                  {isArabic ? item.descAr : item.descEn}
                </p>
              </motion.div>
            ))}
          </div>
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
              <Flag className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                {isArabic ? "إنجازات نفخر بها" : "Milestones We Are Proud Of"}
              </h3>
              <p className="text-[var(--text-secondary)] leading-8 text-lg">
                {isArabic ? achievementsData.closingAr : achievementsData.closingEn}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 mt-8 md:grid-cols-3">
          {[
            {
              icon: Trophy,
              ar: "تميّز مستمر",
              en: "Continuous Excellence",
            },
            {
              icon: Medal,
              ar: "نجاحات متعددة",
              en: "Multiple Successes",
            },
            {
              icon: Star,
              ar: "قصص ملهمة",
              en: "Inspiring Stories",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.en}
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
                <Icon className="w-8 h-8 mx-auto text-[var(--accent-primary)] mb-3" />
                <div className="text-lg font-bold text-[var(--text-primary)]">
                  {isArabic ? item.ar : item.en}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
