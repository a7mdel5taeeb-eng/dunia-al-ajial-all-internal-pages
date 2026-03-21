import { motion } from "motion/react";
import {
  BookOpen,
  Calculator,
  FlaskConical,
  Languages,
  ShieldCheck,
  Globe2,
  MonitorSmartphone,
  BrainCircuit,
  GraduationCap,
  Landmark,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";
import SectionTitle from "../../components/SectionTitle";
import InfoCard from "../../components/InfoCard";

export default function MiddleHighSchoolPage() {
  const { language, dir } = useLanguage();
  const { theme } = useTheme();

  const isArabic = language === "ar";

  const content = isArabic
    ? {
        eyebrow: "الأقسام الأكاديمية",
        heroTitle: "المرحلة المتوسطة والثانوية",
        heroDescription:
          "في مدارس دنيا الأجيال الدولية، نقدم في المرحلتين المتوسطة والثانوية برنامجًا أكاديميًا قويًا وفق المنهج الأمريكي، مع الحفاظ على الهوية السعودية والقيم الإسلامية وإعداد الطلاب للجامعة والمستقبل.",
        introTitle: "إعداد قادة عالميين بتميز أكاديمي وجذور ثقافية",
        introText:
          "في مدارس دنيا الأجيال الدولية بمدينة الخرج، تقدم المرحلة المتوسطة (من الصف السادس إلى التاسع) والمرحلة الثانوية (من الصف العاشر إلى الثاني عشر) برنامجًا أكاديميًا صارمًا وفق المنهج الأمريكي، يهيئ الطلاب للنجاح الجامعي مع المحافظة على ارتباطهم العميق بالثقافة السعودية والقيم الإسلامية. يجمع برنامجنا بين المعايير الأمريكية، واستخدام مناهج SAVVAS، والتركيز على الاستعداد الجامعي، والتميز في اللغة العربية والدراسات الإسلامية.",
        highlightsTitle: "يرتكز برنامجنا على",
        highlightsCards: [
          {
            icon: <Globe2 className="h-6 w-6" />,
            title: "تعليم قائم على المعايير الأمريكية",
            description:
              "يشمل CCSS وNGSS وAERO لضمان جودة أكاديمية متقدمة ومتوافقة مع أفضل الممارسات الدولية.",
          },
          {
            icon: <BookOpen className="h-6 w-6" />,
            title: "مناهج SAVVAS التعليمية",
            description:
              "استخدام SAVVAS Learning Curriculum في المواد الأساسية لدعم التعلم المنهجي والتقدم الأكاديمي.",
          },
          {
            icon: <GraduationCap className="h-6 w-6" />,
            title: "تركيز على الاستعداد الجامعي",
            description:
              "دورات موجهة لاختبارات SAT وGAT مع بناء المهارات اللازمة للنجاح في التعليم العالي.",
          },
          {
            icon: <ShieldCheck className="h-6 w-6" />,
            title: "تميز في العربية والدراسات الإسلامية",
            description:
              "المحافظة على الهوية اللغوية والدينية والثقافية ضمن بيئة تعليمية دولية متوازنة.",
          },
        ],
        middleTitle: "برنامج المرحلة المتوسطة (الصفوف 6-9)",
        middleSubtitle:
          "نركز في المرحلة المتوسطة على بناء المهارات الأكاديمية العميقة، والاستقلالية، والقدرة على التحليل والتعبير.",
        middleSections: [
          {
            title: "اللغة الإنجليزية",
            items: [
              "برنامج ALPHA لتنمية التحليل النقدي للنصوص المعقدة.",
              "تنمية مهارات الكتابة البحثية والمفردات الأكاديمية.",
              "مبادرات المناظرة والتحدث أمام الجمهور.",
            ],
          },
          {
            title: "الرياضيات",
            items: [
              'استخدام سلسلة SAVVAS "enVision Mathematics".',
              "الصف السادس: النسب وأنظمة الأعداد.",
              "الصف السابع: العلاقات التناسبية والتعبيرات.",
              "الصف الثامن: الجبر الخطي والدوال.",
              "الاستعداد لاختبار نافس.",
            ],
          },
          {
            title: "العلوم",
            items: [
              'استخدام برنامج SAVVAS "Elevate Science" المتوافق مع NGSS.',
              "الفيزياء والكيمياء المتكاملة.",
              "علوم الحياة مع تحقيقات مخبرية.",
              "مشروعات علوم الأرض والفضاء.",
            ],
          },
        ],
        highTitle: "برنامج المرحلة الثانوية (الصفوف 10-12)",
        highSubtitle:
          "تُبنى المرحلة الثانوية على نهج جامعي تحضيري يركز على التخصص، والعمق الأكاديمي، والاستعداد للمستقبل.",
        highSections: [
          {
            title: "منهج تحضيري للجامعة",
            items: [
              "اللغة الإنجليزية: الأدب الأمريكي.",
              "الرياضيات: الجبر 1 و2، الهندسة، ما قبل التفاضل، والتفاضل.",
              "العلوم: الأحياء، الكيمياء، الفيزياء.",
              "الدراسات الاجتماعية: التاريخ العالمي، التاريخ الأمريكي، الاقتصاد.",
            ],
          },
          {
            title: "منصة SAVVAS الرقمية",
            items: [
              "كتب إلكترونية تفاعلية ومسارات تعلم شخصية.",
              "متابعة فورية لتقدم الطلاب من قبل المعلمين.",
            ],
          },
        ],
        cultureTitle: "الأسس الثقافية والإسلامية",
        cultureSubtitle:
          "مع المحافظة على قوة المعايير الدولية، نحرص على ترسيخ اللغة العربية، والدراسات الإسلامية، والهوية الوطنية.",
        cultureCards: [
          {
            icon: <Languages className="h-6 w-6" />,
            title: "تنمية اللغة العربية",
            description:
              "منهج معتمد من الوزارة، وأدب عربي متقدم، ومهارات في العربية الفصحى الحديثة.",
          },
          {
            icon: <ShieldCheck className="h-6 w-6" />,
            title: "برنامج الدراسات الإسلامية",
            description:
              "دراسات قرآنية مع مسار للتحفيظ، إضافة إلى التاريخ والحضارة الإسلامية.",
          },
          {
            icon: <Landmark className="h-6 w-6" />,
            title: "دمج الثقافة السعودية",
            description:
              "مشروعات الهوية الوطنية، وخدمة المجتمع، وبرامج القيادة المرتبطة برؤية 2030.",
          },
        ],
        environmentTitle: "بيئة تعلم للقرن الحادي والعشرين",
        environmentSubtitle:
          "نهيئ طلابنا لواقع أكاديمي ومهني حديث من خلال بيئة تعلم متقدمة ومتصلة بالتقنية والبحث والاستعداد المهني.",
        environmentCards: [
          {
            icon: <BrainCircuit className="h-6 w-6" />,
            title: "مختبر الابتكار",
            description:
              "يشمل الذكاء الاصطناعي، والبرمجة، والتكويد، والطباعة ثلاثية الأبعاد.",
          },
          {
            icon: <FlaskConical className="h-6 w-6" />,
            title: "مشروعات بحثية بأسلوب جامعي",
            description:
              "مشروعات علمية وبحثية متقدمة تشمل المعرض العلمي السنوي وتنمية مهارات الاستقصاء.",
          },
          {
            icon: <MonitorSmartphone className="h-6 w-6" />,
            title: "برامج الجاهزية المهنية والجامعية",
            description:
              "الإرشاد الجامعي، ودورات التحضير لاختبارات SAT وACT، ودعم اتخاذ القرار الأكاديمي.",
          },
        ],
        successTitle: "مسارات النجاح",
        successSubtitle:
          "يحقق خريجونا نتائج تعكس جودة البرنامج الأكاديمي وشموليته.",
        successItems: [
          "تحقيق معدل تخرج مرتفع في المرحلة الثانوية.",
          "الحصول على قبولات في جامعات متميزة حول العالم.",
          "تحقيق نتائج قوية في اختبارات SAT وACT.",
        ],
        closingTitle: "نعد الطلاب لمستقبل عالمي",
        closingText:
          "من خلال الجمع بين التميز الأكاديمي، والهوية الثقافية، والقيم الإسلامية، توفر المرحلتان المتوسطة والثانوية في مدارس دنيا الأجيال الدولية بيئة تعليمية متكاملة تُعد الطلاب للنجاح في الجامعة والحياة بثقة وكفاءة.",
      }
    : {
        eyebrow: "Academics",
        heroTitle: "Middle & High School",
        heroDescription:
          "At Dunia Al-Ajial International School, our Middle and High School programs provide a rigorous American curriculum while preserving Saudi cultural identity and Islamic values and preparing students for university and future success.",
        introTitle: "Preparing Global Leaders with Academic Excellence and Cultural Roots",
        introText:
          "At Dunia Al-Ajial International School in Al-Kharj, our Middle School (Grades 6–9) and High School (Grades 10–12) programs provide a rigorous American curriculum that prepares students for university success while maintaining strong connections to Saudi culture and Islamic values. Our program combines standards-based American education, SAVVAS learning resources, college-preparatory focus, and excellence in Arabic and Islamic Studies.",
        highlightsTitle: "Our Program Combines",
        highlightsCards: [
          {
            icon: <Globe2 className="h-6 w-6" />,
            title: "U.S. Standards-Based Education",
            description:
              "Including CCSS, NGSS, and AERO to ensure strong academic quality aligned with international best practices.",
          },
          {
            icon: <BookOpen className="h-6 w-6" />,
            title: "SAVVAS Learning Curriculum",
            description:
              "SAVVAS is used across core subjects to support structured learning and measurable academic growth.",
          },
          {
            icon: <GraduationCap className="h-6 w-6" />,
            title: "College-Preparatory Focus",
            description:
              "Preparation pathways for SAT and GAT along with the academic skills needed for higher education success.",
          },
          {
            icon: <ShieldCheck className="h-6 w-6" />,
            title: "Arabic & Islamic Studies Excellence",
            description:
              "Strong support for language, faith, and identity within an international educational environment.",
          },
        ],
        middleTitle: "Middle School Program (Grades 6–9)",
        middleSubtitle:
          "The middle school program focuses on deeper academic skills, independence, and analytical expression.",
        middleSections: [
          {
            title: "English Language Arts",
            items: [
              "ALPHA program developing critical analysis of complex texts.",
              "Research writing and academic vocabulary building.",
              "Debate and public speaking initiatives.",
            ],
          },
          {
            title: "Mathematics",
            items: [
              'SAVVAS "enVision Mathematics" series.',
              "Grade 6: Ratios and number systems.",
              "Grade 7: Proportional relationships and expressions.",
              "Grade 8: Linear algebra and functions.",
              "NAFS test preparation.",
            ],
          },
          {
            title: "Science",
            items: [
              'SAVVAS "Elevate Science" program aligned with NGSS.',
              "Integrated Physics and Chemistry.",
              "Life Science with lab investigations.",
              "Earth and Space Science projects.",
            ],
          },
        ],
        highTitle: "High School Program (Grades 10–12)",
        highSubtitle:
          "The high school program follows a college-preparatory path built on academic depth, subject specialization, and future readiness.",
        highSections: [
          {
            title: "College-Prep Curriculum",
            items: [
              "English: American Literature.",
              "Mathematics: Algebra I-II, Geometry, Pre-Calculus, and Calculus.",
              "Science: Biology, Chemistry, and Physics.",
              "Social Studies: World History, U.S. History, and Economics.",
            ],
          },
          {
            title: "SAVVAS Digital Learning Platform",
            items: [
              "Interactive eTexts and personalized learning paths.",
              "Real-time progress monitoring for teachers.",
            ],
          },
        ],
        cultureTitle: "Cultural & Islamic Foundations",
        cultureSubtitle:
          "Alongside strong international standards, we ensure the continued development of Arabic, Islamic understanding, and Saudi identity.",
        cultureCards: [
          {
            icon: <Languages className="h-6 w-6" />,
            title: "Arabic Language Development",
            description:
              "Ministry-approved curriculum, advanced Arabic literature, and Modern Standard Arabic development.",
          },
          {
            icon: <ShieldCheck className="h-6 w-6" />,
            title: "Islamic Studies Program",
            description:
              "Quranic studies, memorization support, and learning in Islamic history and civilization.",
          },
          {
            icon: <Landmark className="h-6 w-6" />,
            title: "Saudi Culture Integration",
            description:
              "National identity projects, community service, and leadership programs aligned with Vision 2030.",
          },
        ],
        environmentTitle: "21st Century Learning Environment",
        environmentSubtitle:
          "Students are prepared for modern academic and career pathways through a learning environment connected to technology, research, and readiness.",
        environmentCards: [
          {
            icon: <BrainCircuit className="h-6 w-6" />,
            title: "Innovation Lab",
            description:
              "Including AI, programming, coding, and 3D printing experiences.",
          },
          {
            icon: <FlaskConical className="h-6 w-6" />,
            title: "University-Style Research Projects",
            description:
              "Advanced inquiry-based projects including the annual science fair and research-centered learning.",
          },
          {
            icon: <MonitorSmartphone className="h-6 w-6" />,
            title: "Career & University Readiness",
            description:
              "University counseling, SAT/ACT preparation, and structured support for academic planning.",
          },
        ],
        successTitle: "Pathways to Success",
        successSubtitle:
          "Our graduates achieve outcomes that reflect the quality and breadth of the program.",
        successItems: [
          "Strong high school graduation outcomes.",
          "Acceptances to top universities worldwide.",
          "Performance above broad expectations in SAT and ACT pathways.",
        ],
        closingTitle: "Preparing Students for a Global Future",
        closingText:
          "By combining academic excellence, cultural identity, and Islamic values, the Middle and High School divisions at Dunia Al-Ajial International School create a complete learning environment that prepares students for confident success in university and in life.",
      };

  return (
    <main dir={dir} className="pb-20">
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-violet-500/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="container-page relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-6xl mx-auto"
          >
            <div
              className="relative overflow-hidden rounded-[1.75rem] md:rounded-[2rem] min-h-[320px] md:min-h-[430px] border"
              style={{
                borderColor: "color-mix(in srgb, var(--accent-primary) 10%, var(--border-color))",
                backgroundImage: "url('/images/middle-high-hero.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 24px 60px -30px rgba(15,23,42,.22)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/25" />
              <div className="absolute inset-0 bg-violet-900/18" />

              <div className="relative z-10 flex min-h-[320px] md:min-h-[430px] flex-col items-center justify-end px-6 py-8 md:px-10 md:py-12 text-center">
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold text-white bg-white/10 border-white/20 backdrop-blur-sm">
                  {content.eyebrow}
                </div>

                <h1 className="mt-6 text-4xl md:text-6xl font-bold font-serif tracking-tight text-white">
                  {content.heroTitle}
                </h1>

                <p className="mt-5 max-w-4xl mx-auto text-base md:text-lg leading-8 md:leading-9 text-white/90">
                  {content.heroDescription}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container-page mt-10 md:mt-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-[2rem] border shadow-sm p-6 md:p-8 lg:p-10"
          style={{
            borderColor: "var(--border-color)",
            background: "var(--card-bg)",
          }}
        >
          <SectionTitle title={content.introTitle} />
          <p
            className="mt-6 text-[16px] md:text-[17px] leading-8"
            style={{ color: "var(--text-secondary)" }}
          >
            {content.introText}
          </p>
        </motion.div>
      </section>

      <section className="container-page mt-10 md:mt-14">
        <SectionTitle title={content.highlightsTitle} />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          {content.highlightsCards.map((item, index) => (
            <InfoCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section className="container-page mt-10 md:mt-14">
        <SectionTitle
          title={content.middleTitle}
          subtitle={content.middleSubtitle}
        />

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          {content.middleSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-[2rem] border shadow-sm p-6 md:p-8"
              style={{
                borderColor: "var(--border-color)",
                background: "var(--card-bg)",
              }}
            >
              <h3
                className="text-xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                {section.title}
              </h3>

              <div className="mt-5 space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <div
                      className="mt-2 h-2.5 w-2.5 rounded-full shrink-0"
                      style={{ background: "var(--accent-primary)" }}
                    />
                    <p
                      className="text-[15px] md:text-[16px] leading-7"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-page mt-10 md:mt-14">
        <SectionTitle
          title={content.highTitle}
          subtitle={content.highSubtitle}
        />

        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          {content.highSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-[2rem] border shadow-sm p-6 md:p-8"
              style={{
                borderColor: "var(--border-color)",
                background: "var(--card-bg)",
              }}
            >
              <h3
                className="text-xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                {section.title}
              </h3>

              <div className="mt-5 space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <div
                      className="mt-2 h-2.5 w-2.5 rounded-full shrink-0"
                      style={{ background: "var(--accent-primary)" }}
                    />
                    <p
                      className="text-[15px] md:text-[16px] leading-7"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-page mt-10 md:mt-14">
        <SectionTitle
          title={content.cultureTitle}
          subtitle={content.cultureSubtitle}
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          {content.cultureCards.map((item, index) => (
            <InfoCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section className="container-page mt-10 md:mt-14">
        <SectionTitle
          title={content.environmentTitle}
          subtitle={content.environmentSubtitle}
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          {content.environmentCards.map((item, index) => (
            <InfoCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section className="container-page mt-10 md:mt-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-[2rem] border shadow-sm p-6 md:p-8 lg:p-10"
          style={{
            borderColor: "var(--border-color)",
            background:
              theme === "dark"
                ? "linear-gradient(135deg, rgba(76,29,149,.18), rgba(15,23,42,.92))"
                : "linear-gradient(135deg, rgba(245,243,255,1), rgba(255,255,255,1))",
          }}
        >
          <SectionTitle
            title={content.successTitle}
            subtitle={content.successSubtitle}
          />

          <div className="mt-6 space-y-4">
            {content.successItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div
                  className="mt-2 h-2.5 w-2.5 rounded-full shrink-0"
                  style={{ background: "var(--accent-primary)" }}
                />
                <p
                  className="text-[15px] md:text-[16px] leading-7"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="container-page mt-10 md:mt-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-[2rem] border shadow-sm p-6 md:p-8 lg:p-10"
          style={{
            borderColor: "var(--border-color)",
            background: "var(--card-bg)",
          }}
        >
          <SectionTitle title={content.closingTitle} />
          <p
            className="mt-6 text-[16px] md:text-[17px] leading-8"
            style={{ color: "var(--text-secondary)" }}
          >
            {content.closingText}
          </p>
        </motion.div>
      </section>
    </main>
  );
}