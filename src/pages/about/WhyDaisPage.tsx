import { motion } from "motion/react";
import {
  BadgeCheck,
  BookOpen,
  GraduationCap,
  FileCheck2,
  Globe2,
  Users,
  Sparkles,
  School,
  ShieldCheck,
  ArrowRight,
  Award,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Link } from "react-router-dom";

type Reason = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

export default function WhyDaisPage() {
  const { language, dir } = useLanguage();
  const isArabic = language === "ar";

  const pageLabel = isArabic ? "من نحن" : "About Us";
  const pageTitle = isArabic
    ? "لماذا تختار مدارس دنيا الأجيال العالمية (DAIS)؟"
    : "Why Choose Dunia Al-Ajial International School (DAIS)?";

  const heroEyebrow = isArabic
    ? "تعليم عالمي • اعتماد دولي • مستقبل أقوى"
    : "Global Education • International Accreditation • Stronger Futures";

  const heroIntro = isArabic
    ? "أولياء الأمور الكرام، إن اختيار المدرسة المناسبة لطفلكم من أهم القرارات التي تتخذونها. في مدارس دنيا الأجيال العالمية (DAIS)، نلتزم بتقديم تعليم أمريكي متميز يُعد الطلبة للنجاح في عالم سريع التغير، ويمنحهم بيئة أكاديمية وإنسانية متوازنة من الروضة حتى الصف الثاني عشر."
    : "Dear Parents, choosing the right school for your child is one of the most important decisions you will make. At Dunia Al-Ajial International School (DAIS), we are committed to delivering an exceptional American education that prepares students for success in an ever-changing world—from Kindergarten through Grade 12.";

  const cogniaTitle = isArabic
    ? "اعتماد Cognia بمعايير عالمية"
    : "Cognia Accreditation, Globally Recognized";

  const cogniaText = isArabic
    ? "تحافظ DAIS على معايير أكاديمية وتعليمية عالية من خلال اعتماد Cognia، وهو اعتماد دولي يمنح أولياء الأمور ثقة حقيقية في جودة المنهج، ومستوى التدريس، ومخرجات التعلم."
    : "DAIS maintains high academic and instructional standards through Cognia accreditation, giving families confidence in curriculum quality, teaching excellence, and student outcomes.";

  const closingTitle = isArabic
    ? "هيئوا أبناءكم لمستقبل مشرق مع DAIS"
    : "Prepare Your Child for a Bright Future at DAIS";

  const closingText = isArabic
    ? "في DAIS نحن لا نكتفي بالتعليم، بل نُلهم ونتحدى ونُمكّن الجيل القادم من القادة والمفكرين والمبتكرين. انضموا إلينا لصناعة مستقبل يتفوق فيه أبناؤكم أكاديميًا واجتماعيًا وشخصيًا. سجّلوا اليوم، واجعلوا DAIS نقطة الانطلاق الحقيقية لنجاح أبنائكم."
    : "At DAIS, we don’t just educate—we inspire, challenge, and empower the next generation of leaders, thinkers, and innovators. Join us in shaping a future where your child excels academically, socially, and personally. Enroll today and let DAIS be the foundation of your child’s success.";

  const reasons: Reason[] = isArabic
    ? [
        {
          title: "اعتماد دولي معترف به",
          description:
            "مدارس DAIS معتمدة من Cognia، وهي جهة اعتماد عالمية رائدة، بما يضمن أن المناهج ومعايير التدريس ونتائج الطلبة لدينا تواكب أعلى المعايير الدولية.",
          icon: BadgeCheck,
        },
        {
          title: "منهج أمريكي قوي وشامل",
          description:
            "نقدّم منهجًا أمريكيًا متكاملًا من مرحلة ما قبل الروضة حتى الصف الثاني عشر، يركّز على التفكير الناقد والإبداع وحل المشكلات الواقعية، ويهيئ الطلبة لاختبارات SAT وACT ويفتح الأبواب أمام أفضل الجامعات.",
          icon: BookOpen,
        },
        {
          title: "نجاحات أكاديمية مثبتة",
          description:
            "تم قبول خريجينا في جامعات مرموقة داخل المملكة وخارجها، في السعودية والولايات المتحدة والمملكة المتحدة وتركيا وماليزيا والأردن ومصر، وبرزوا في تخصصات مثل الطب والهندسة وعلوم الحاسب وإدارة الأعمال وغيرها.",
          icon: GraduationCap,
        },
        {
          title: "مركز معتمد لاختبارات SAT وACT",
          description:
            "كوننا مركزًا رسميًا لاختبارات SAT منذ عام 2020 وACT منذ عام 2022 يمنح طلابنا فرصة أداء هذه الاختبارات المهمة في بيئة مألوفة ومريحة تقلل التوتر وتدعم أفضل أداء.",
          icon: FileCheck2,
        },
        {
          title: "بيئة متعددة الثقافات وشاملة",
          description:
            "يضم مجتمعنا المدرسي طلابًا من جنسيات وخلفيات متنوعة، مما يعزز قيم المواطنة العالمية والاحترام المتبادل والوعي الثقافي، ويؤهل الطلبة للنجاح في عالم مترابط.",
          icon: Globe2,
        },
        {
          title: "هيئة تعليمية خبيرة ومخلصة",
          description:
            "يضم طاقمنا معلمين مؤهلين وذوي خبرة، يعملون بشغف على تنمية إمكانات كل طالب من خلال التعلم الشخصي وأساليب التدريس الحديثة والإرشاد التربوي الفعّال.",
          icon: Users,
        },
        {
          title: "تنمية شاملة للطالب",
          description:
            "لا يقتصر اهتمامنا على التحصيل الأكاديمي فقط، بل نشجع الطلبة على المشاركة في الأنشطة اللامنهجية والبرامج القيادية وخدمة المجتمع، بما يحقق نموًا متوازنًا في الشخصية والمهارات الاجتماعية.",
          icon: Sparkles,
        },
        {
          title: "مرافق حديثة ومتطورة",
          description:
            "تتميز فروعنا بفصول دراسية متقدمة، ومختبرات علوم، ومرافق رياضية، وبيئات تعلم مدمجة بالتقنية، بما يصنع تجربة تعليمية حديثة وجاذبة للطلبة.",
          icon: School,
        },
        {
          title: "حوكمة قوية وتطوير مستمر",
          description:
            "يشرف مجلس إدارة DAIS على رؤية المدرسة وتوجهاتها، بما يضمن توافق الموارد والسياسات والبرامج مع أعلى معايير الجودة والتميّز والتحسين المستمر.",
          icon: ShieldCheck,
        },
      ]
    : [
        {
          title: "Internationally Recognized Accreditation",
          description:
            "DAIS is accredited by Cognia, a leading global accreditation agency, ensuring that our curriculum, teaching standards, and student outcomes meet the highest international benchmarks.",
          icon: BadgeCheck,
        },
        {
          title: "Rigorous American Curriculum",
          description:
            "We offer a comprehensive U.S. curriculum (PK–12) that emphasizes critical thinking, creativity, and real-world problem-solving. Our program is designed to prepare students for SAT and ACT exams, opening doors to top universities worldwide.",
          icon: BookOpen,
        },
        {
          title: "Proven Academic Success",
          description:
            "Our graduates have been accepted into prestigious universities in Saudi Arabia, the U.S., the U.K., Turkey, Malaysia, Jordan, and Egypt, excelling in fields like medicine, engineering, computer science, business, and more.",
          icon: GraduationCap,
        },
        {
          title: "Certified SAT & ACT Test Center",
          description:
            "As an official SAT (since 2020) and ACT (since 2022) test center, DAIS provides students with a familiar and stress-free environment to take these crucial exams.",
          icon: FileCheck2,
        },
        {
          title: "Multicultural & Inclusive Environment",
          description:
            "With students from diverse nationalities and backgrounds, DAIS fosters global citizenship, mutual respect, and cultural awareness, preparing students to thrive in an interconnected world.",
          icon: Globe2,
        },
        {
          title: "Experienced & Dedicated Faculty",
          description:
            "Our highly qualified teachers are passionate about nurturing each student’s potential through personalized learning, innovative teaching methods, and mentorship.",
          icon: Users,
        },
        {
          title: "Holistic Development",
          description:
            "Beyond academics, DAIS encourages participation in extracurricular activities, leadership programs, and community service, ensuring well-rounded growth in academics, character, and social skills.",
          icon: Sparkles,
        },
        {
          title: "State-of-the-Art Facilities",
          description:
            "Our campuses are equipped with advanced classrooms, science labs, sports facilities, and technology-integrated learning spaces to support an engaging educational experience.",
          icon: School,
        },
        {
          title: "Strong Governance & Continuous Improvement",
          description:
            "The DAIS Governing Board actively oversees the school’s vision, ensuring that resources, policies, and programs align with the highest standards of excellence.",
          icon: ShieldCheck,
        },
      ];

  return (
    <section className="section-muted relative overflow-hidden pt-28 md:pt-40 pb-16">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      <div className="absolute -top-20 right-0 w-80 h-80 bg-violet-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container-page relative z-10">
        {/* Hero with Image */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <div
            className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] min-h-[340px] md:min-h-[460px] border"
            style={{
              borderColor: "color-mix(in srgb, var(--accent-primary) 10%, var(--border-color))",
              backgroundImage: "url('/images/why-dais-hero.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 24px 60px -34px rgba(15,23,42,.18)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/52 to-black/26" />
            <div className="absolute inset-0 bg-violet-900/20" />
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,.22),transparent_34%)]" />

            <div className="relative z-10 flex min-h-[340px] md:min-h-[460px] flex-col items-start justify-end px-6 md:px-10 lg:px-12 py-8 md:py-12">
              <span className="badge">{pageLabel}</span>

              <div className="mt-6">
                <div
                  className="inline-flex items-center gap-3 rounded-full px-4 py-2 text-[11px] md:text-xs font-bold tracking-[0.18em] border"
                  style={{
                    color: "#ffffff",
                    background: "rgba(255,255,255,.08)",
                    borderColor: "rgba(255,255,255,.16)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-violet-300" />
                  {heroEyebrow}
                </div>
              </div>

              <h1
                className="mt-6 text-[2rem] sm:text-[2.5rem] md:text-[3.4rem] lg:text-[4rem] font-serif font-bold leading-[1.08] tracking-tight max-w-4xl text-white"
              >
                {pageTitle}
              </h1>

              <p className="mt-6 text-base md:text-lg lg:text-[1.08rem] leading-8 md:leading-9 max-w-3xl text-white/90">
                {heroIntro}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#dais-reasons"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 md:px-7 py-3.5 text-sm md:text-base font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-[1px]"
                  style={{
                    color: "#ffffff",
                    background:
                      "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                  }}
                >
                  {isArabic ? "اكتشف المميزات" : "Explore the Highlights"}
                  <ArrowRight
                    className={`w-4 h-4 md:w-5 md:h-5 ${dir === "rtl" ? "rotate-180" : ""}`}
                  />
                </a>

                <Link
                  to="/about/mission-vision"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 md:px-7 py-3.5 text-sm md:text-base font-bold border transition-all duration-200 hover:-translate-y-[1px]"
                  style={{
                    color: "#ffffff",
                    background: "rgba(255,255,255,.08)",
                    borderColor: "rgba(255,255,255,.16)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                >
                  {isArabic ? "الرؤية والرسالة" : "Mission & Vision"}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cognia Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.36, ease: "easeOut" }}
          className="mt-8 md:mt-10"
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-[auto,1fr] items-center gap-6 rounded-[1.6rem] md:rounded-[2rem] border p-5 md:p-7"
            style={{
              background: "var(--card-bg)",
              borderColor: "var(--card-border)",
              boxShadow: "0 18px 44px -34px rgba(15,23,42,.16)",
            }}
          >
            <div className="flex items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white dark:bg-white/95 shadow-md flex items-center justify-center p-2 border border-slate-200 dark:border-white/10 overflow-hidden">
                <img
                  src="/images/cognia.png"
                  alt="Cognia Accredited"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 text-violet-600 dark:text-violet-300 font-bold text-sm mb-3">
                <Award className="w-4 h-4" />
                {isArabic ? "اعتماد عالمي" : "Global Accreditation"}
              </div>

              <h2
                className="text-2xl md:text-3xl font-serif font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {cogniaTitle}
              </h2>

              <p
                className="text-[0.98rem] md:text-[1.05rem] leading-7 md:leading-8"
                style={{ color: "var(--text-secondary)" }}
              >
                {cogniaText}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Reasons Grid */}
        <div
          id="dais-reasons"
          className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.34, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.015 }}
              className="relative overflow-hidden rounded-[1.6rem] md:rounded-[1.9rem] border p-6 md:p-7 group"
              style={{
                background:
                  "linear-gradient(180deg, color-mix(in srgb, var(--card-bg) 100%, transparent) 0%, color-mix(in srgb, var(--card-bg) 96%, transparent) 100%)",
                borderColor: "var(--card-border)",
                boxShadow: "0 16px 42px -32px rgba(15,23,42,.17)",
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-violet-500/[0.06]" />
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-violet-500/8 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <reason.icon className="w-7 h-7" />
                </div>

                <h3
                  className="text-xl md:text-2xl font-bold font-serif mb-4 leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  <span className="inline-flex items-start gap-2" dir={dir}>
                    <span className="text-violet-500 font-extrabold text-base md:text-lg mt-0.5">
                      {index + 1}.
                    </span>
                    <span>{reason.title}</span>
                  </span>
                </h3>

                <p
                  className="text-[0.98rem] md:text-[1.02rem] leading-7 md:leading-8"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.38, ease: "easeOut" }}
          className="mt-12 md:mt-16"
        >
          <div
            className="rounded-[1.8rem] md:rounded-[2.2rem] p-6 md:p-10 border relative overflow-hidden"
            style={{
              background: "var(--card-bg)",
              borderColor: "var(--border-color)",
              boxShadow: "0 22px 50px -34px rgba(15,23,42,.18)",
            }}
          >
            <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,.12),transparent_35%)]" />

            <div className="relative z-10 max-w-4xl">
              <h3
                className="text-2xl md:text-4xl font-serif font-bold mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                {closingTitle}
              </h3>

              <p
                className="text-base md:text-lg leading-8 md:leading-9"
                style={{ color: "var(--text-secondary)" }}
              >
                {closingText}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 md:px-8 py-3.5 text-sm md:text-base font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-[1px]"
                  style={{
                    color: "#ffffff",
                    background:
                      "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                  }}
                >
                  {isArabic ? "العودة للرئيسية" : "Back to Home"}
                  <ArrowRight
                    className={`w-4 h-4 md:w-5 md:h-5 ${dir === "rtl" ? "rotate-180" : ""}`}
                  />
                </Link>

                <Link
                  to="/admissions/online-application"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 md:px-8 py-3.5 text-sm md:text-base font-bold border transition-all duration-200 hover:-translate-y-[1px]"
                  style={{
                    color: "var(--text-primary)",
                    background: "color-mix(in srgb, var(--bg-elevated) 72%, transparent)",
                    borderColor: "color-mix(in srgb, var(--border-color) 85%, transparent)",
                  }}
                >
                  {isArabic ? "ابدأ التسجيل" : "Start Application"}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
