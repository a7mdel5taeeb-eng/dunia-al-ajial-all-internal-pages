import { motion } from "motion/react";
import {
  BookOpen,
  Calculator,
  FlaskConical,
  Languages,
  MonitorSmartphone,
  HeartHandshake,
  Globe2,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";
import SectionTitle from "../../components/SectionTitle";
import InfoCard from "../../components/InfoCard";

export default function ElementarySchoolPage() {
  const { language, dir } = useLanguage();
  const { theme } = useTheme();

  const isArabic = language === "ar";

  const content = isArabic
    ? {
        eyebrow: "الأقسام الأكاديمية",
        heroTitle: "المرحلة الابتدائية",
        heroDescription:
          "في مدارس دنيا الأجيال الدولية، تقدم المرحلة الابتدائية من الصف الأول إلى الصف السادس تجربة تعليمية قوية تجمع بين المعايير الأمريكية المعترف بها دوليًا والقيم السعودية الأصيلة.",
        introTitle: "حيث تلتقي المعايير الأمريكية بالقيم السعودية",
        introText:
          "في مدارس دنيا الأجيال الدولية بمدينة الخرج، تقدم المرحلة الابتدائية (من الصف الأول إلى الصف السادس) تعليمًا أكاديميًا قويًا وبيئة ثقافية غنية تمزج بين المعايير الأمريكية الدولية وتراث المملكة العربية السعودية وقيمها الراسخة. وقد صُمم برنامجنا بعناية لتنمية العقول الفضولية، وبناء الشخصية، وتعزيز الكفاءة الثنائية في اللغتين العربية والإنجليزية.",
        frameworkTitle: "الإطار العام للمنهج الدراسي",
        frameworkSubtitle:
          "نعتمد على منظومة أكاديمية عالمية تدعم جودة التعليم وتطوره داخل الصفوف الابتدائية.",
        frameworkCards: [
          {
            icon: <BookOpen className="h-6 w-6" />,
            title: "CCSS",
            description:
              "تطبيق معايير Common Core State Standards في اللغة الإنجليزية والرياضيات لضمان بناء أساس أكاديمي متين.",
          },
          {
            icon: <FlaskConical className="h-6 w-6" />,
            title: "NGSS",
            description:
              "اعتماد Next Generation Science Standards في العلوم بما يعزز الاستقصاء، والتجريب، والفهم العلمي العميق.",
          },
          {
            icon: <Sparkles className="h-6 w-6" />,
            title: "SAVVAS",
            description:
              "استخدام سلسلة SAVVAS التعليمية الأساسية لضمان تطوير مهارات القراءة، والرياضيات، والعلوم وفق منهجية حديثة.",
          },
        ],
        academicTitle: "البرنامج الأكاديمي",
        academicSubtitle:
          "نقدم برنامجًا متوازنًا يركز على مهارات اللغة، والرياضيات، والعلوم، مع مراعاة الفهم العميق والتطبيق العملي.",
        academicSections: [
          {
            title: "اللغة الإنجليزية",
            items: [
              'استخدام برنامج "myView Literacy" من SAVVAS لتنمية القراءة والكتابة.',
              "تنمية المهارات الأساسية في القراءة مثل الصوتيات والطلاقة.",
              "بناء استراتيجيات الفهم القرائي العميق.",
              "التركيز على الكتابة المعتمدة على الأدلة عبر أنماط متعددة.",
              "القراءة اليومية المستقلة باستخدام مكتبات متنوعة المستويات.",
              "مشروعات كتابية مترابطة مع المواد الأخرى.",
            ],
          },
          {
            title: "الرياضيات",
            items: [
              'استخدام برنامج "enVision Mathematics" من SAVVAS.',
              "التعلم البصري من خلال حل المشكلات بطريقة تفاعلية.",
              "تطبيق الرياضيات في مواقف حياتية واقعية.",
              "تقديم تدريبات متنوعة تراعي الفروق الفردية.",
              "تنمية مهارات حل المشكلات والمثابرة.",
              "تعزيز التفكير المجرد والكمي.",
            ],
          },
          {
            title: "العلوم",
            items: [
              'استخدام برنامج "Elevate Science" من SAVVAS.',
              "تنفيذ أنشطة عملية وتجارب واستقصاءات علمية.",
              "تضمين تحديات التصميم الهندسي داخل التعلم.",
              "الاستفادة من المحاكاة الرقمية والوسائط التفاعلية.",
              "تغطية وحدات في العلوم الفيزيائية، وعلوم الحياة، وعلوم الأرض والفضاء.",
            ],
          },
        ],
        integrationTitle: "تكامل اللغة العربية والدراسات الإسلامية",
        integrationSubtitle:
          "إلى جانب المعايير الدولية، نولي اهتمامًا كبيرًا بالهوية اللغوية والدينية والثقافية لطلابنا.",
        integrationPoints: [
          "تطبيق منهج اللغة العربية المعتمد من وزارة التعليم.",
          "تقديم حصص عربية يومية مكثفة.",
          "تنمية الكفاءة في اللغة العربية الفصحى.",
          "تعزيز العربية الكلاسيكية من خلال الدراسات القرآنية.",
          "تقديم برنامج متكامل للدراسات الإسلامية.",
          "تحفيظ القرآن الكريم ضمن برنامج منظم.",
          "دمج القيم الإسلامية في جميع المواد الدراسية.",
          "التطبيق العملي للآداب الإسلامية في الحياة المدرسية اليومية.",
        ],
        environmentTitle: "بيئة تعلم للقرن الحادي والعشرين",
        environmentSubtitle:
          "نحرص على أن يتعلم الطلاب في بيئة حديثة محفزة تدعم التقنية، والإبداع، والتعلم بالمشروعات.",
        environmentCards: [
          {
            icon: <MonitorSmartphone className="h-6 w-6" />,
            title: "فصول مدعمة بالتقنية",
            description:
              "شاشات تفاعلية، وموارد SAVVAS الرقمية، وتجارب تعلم شخصية تناسب احتياجات كل طالب.",
          },
          {
            icon: <Calculator className="h-6 w-6" />,
            title: "البرمجة والتقنية",
            description:
              "دمج البرمجة ومهارات التقنية الحديثة داخل البيئة التعليمية بصورة مناسبة لعمر الطلاب.",
          },
          {
            icon: <Globe2 className="h-6 w-6" />,
            title: "التعلم القائم على المشروعات",
            description:
              "مشروعات تربط بين المواد الدراسية، ومشروعات عن الثقافة السعودية، ومعرض سنوي للعلوم والابتكار.",
          },
        ],
        developmentTitle: "التنمية الشاملة للطالب",
        developmentSubtitle:
          "نهتم بالطالب ككل، وليس فقط بنتائجه الدراسية، لذلك نحرص على تنمية جوانب متعددة من شخصيته.",
        developmentItems: [
          "التعلم الاجتماعي والعاطفي.",
          "الصحة واللياقة البدنية.",
          "التعبير الإبداعي.",
          "الاعتزاز بالهوية والثقافة.",
        ],
        outcomesTitle: "إعداد مواطنين عالميين",
        outcomesSubtitle:
          "بحلول الصف السادس، يكون طلابنا قد حققوا مجموعة من المخرجات التعليمية والشخصية المهمة.",
        outcomesItems: [
          "إتقان معايير CCSS وNGSS الأساسية.",
          "تحقيق كفاءة ثنائية في اللغتين الإنجليزية والعربية.",
          "تنمية مهارات التفكير النقدي وحل المشكلات.",
          "إظهار القيم الإسلامية والوعي بالثقافة السعودية.",
        ],
        ctaTitle: "انضم إلى مجتمعنا التعليمي",
        ctaText:
          "ندعوك لزيارة الحرم المدرسي والتعرف عن قرب على كيفية تقديمنا للتميز في المنهج الأمريكي مع الحفاظ على الهوية السعودية القوية وإعداد الطلاب للنجاح المستقبلي.",
        ctaPoints: [
          "تقديم تعليم متميز وفق المنهج الأمريكي.",
          "الحفاظ على الهوية الثقافية السعودية.",
          "إعداد الطلاب للنجاح في المستقبل.",
        ],
      }
    : {
        eyebrow: "Academics",
        heroTitle: "Elementary School",
        heroDescription:
          "At Dunia Al-Ajial International School, our Elementary School program for Grades 1–6 delivers a rigorous and culturally rich education where American standards meet strong Saudi values.",
        introTitle: "Where American Standards Meet Saudi Values",
        introText:
          "At Dunia Al-Ajial International School in Al-Kharj, our Elementary School (Grades 1–6) delivers an academically rigorous, culturally rich education that blends internationally recognized U.S. standards with Saudi Arabia's proud heritage. Our program is carefully designed to develop curious minds, strong character, and bilingual proficiency in English and Arabic.",
        frameworkTitle: "World-Class Curriculum Framework",
        frameworkSubtitle:
          "We implement a strong academic framework that supports quality teaching and meaningful student growth.",
        frameworkCards: [
          {
            icon: <BookOpen className="h-6 w-6" />,
            title: "CCSS",
            description:
              "We apply Common Core State Standards in English Language Arts and Mathematics to build a strong academic foundation.",
          },
          {
            icon: <FlaskConical className="h-6 w-6" />,
            title: "NGSS",
            description:
              "We use Next Generation Science Standards to promote inquiry, investigation, and deeper scientific understanding.",
          },
          {
            icon: <Sparkles className="h-6 w-6" />,
            title: "SAVVAS",
            description:
              "We use SAVVAS as our core textbook series to support literacy, mathematics, and science through modern learning pathways.",
          },
        ],
        academicTitle: "Rigorous Academic Program",
        academicSubtitle:
          "Our academic program balances language, mathematics, and science with meaningful understanding and practical application.",
        academicSections: [
          {
            title: "English Language Arts",
            items: [
              'SAVVAS "myView Literacy" program for reading and writing development.',
              "Foundational reading skills including phonics and fluency.",
              "Critical reading comprehension strategies.",
              "Evidence-based writing across multiple genres.",
              "Daily independent reading with leveled libraries.",
              "Cross-curricular writing projects.",
            ],
          },
          {
            title: "Mathematics",
            items: [
              'SAVVAS "enVision Mathematics" program.',
              "Visual learning through animated problem-solving.",
              "Real-world application tasks.",
              "Differentiated practice options.",
              "Focus on problem-solving and perseverance.",
              "Development of abstract and quantitative reasoning.",
            ],
          },
          {
            title: "Science",
            items: [
              'SAVVAS "Elevate Science" program.',
              "Hands-on activities, investigations, and inquiry-based learning.",
              "Engineering design challenges.",
              "Digital simulations and interactives.",
              "NGSS-aligned units in Physical Science, Life Science, and Earth/Space Science.",
            ],
          },
        ],
        integrationTitle: "Arabic & Islamic Studies Integration",
        integrationSubtitle:
          "Alongside international standards, we strongly value our students’ language, identity, and spiritual development.",
        integrationPoints: [
          "Implementation of the Ministry of Education Arabic Curriculum.",
          "Daily intensive Arabic classes.",
          "Development of Modern Standard Arabic proficiency.",
          "Classical Arabic through Quranic studies.",
          "Comprehensive Islamic Studies program.",
          "Quran memorization (Hifz) support.",
          "Islamic values integrated across all subjects.",
          "Practical application of Islamic manners in daily school life.",
        ],
        environmentTitle: "21st Century Learning Environment",
        environmentSubtitle:
          "Students learn in a modern environment that supports technology, creativity, and project-based learning.",
        environmentCards: [
          {
            icon: <MonitorSmartphone className="h-6 w-6" />,
            title: "Technology-Enhanced Classrooms",
            description:
              "Interactive displays, SAVVAS digital resources, and personalized learning experiences support student engagement.",
          },
          {
            icon: <Calculator className="h-6 w-6" />,
            title: "Coding & Technology Integration",
            description:
              "Students are introduced to coding and modern digital skills in age-appropriate and meaningful ways.",
          },
          {
            icon: <Globe2 className="h-6 w-6" />,
            title: "Project-Based Learning",
            description:
              "Cross-curricular projects, Saudi culture initiatives, and annual Science & Innovation experiences enrich student learning.",
          },
        ],
        developmentTitle: "Holistic Development Approach",
        developmentSubtitle:
          "We nurture the whole child, not only academic achievement, by supporting multiple aspects of student growth.",
        developmentItems: [
          "Social-emotional learning.",
          "Physical wellness.",
          "Creative expression.",
          "Cultural pride.",
        ],
        outcomesTitle: "Preparing Global Citizens",
        outcomesSubtitle:
          "By Grade 6, our students are expected to demonstrate meaningful academic and personal outcomes.",
        outcomesItems: [
          "Mastery of key CCSS and NGSS benchmarks.",
          "Bilingual proficiency in English and Arabic.",
          "Strong critical thinking and problem-solving skills.",
          "Islamic values and Saudi cultural awareness.",
        ],
        ctaTitle: "Join Our Learning Community",
        ctaText:
          "We invite you to visit our campus and discover how we deliver American curriculum excellence while maintaining a strong Saudi cultural identity and preparing students for future success.",
        ctaPoints: [
          "Deliver American curriculum excellence.",
          "Maintain strong Saudi cultural identity.",
          "Prepare students for future success.",
        ],
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
                backgroundImage: "url('/images/elementary-hero.jpg')",
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
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
        <SectionTitle
          title={content.frameworkTitle}
          subtitle={content.frameworkSubtitle}
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          {content.frameworkCards.map((item, index) => (
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
          title={content.academicTitle}
          subtitle={content.academicSubtitle}
        />

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          {content.academicSections.map((section, index) => (
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
        <div className="grid lg:grid-cols-2 gap-6">
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
            <SectionTitle
              title={content.integrationTitle}
              subtitle={content.integrationSubtitle}
            />

            <div className="mt-6 space-y-4">
              {content.integrationPoints.map((item, index) => (
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

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-[2rem] border shadow-sm p-6 md:p-8 lg:p-10"
            style={{
              borderColor: "var(--border-color)",
              background: "var(--card-bg)",
            }}
          >
            <SectionTitle
              title={content.environmentTitle}
              subtitle={content.environmentSubtitle}
            />

            <div className="grid gap-4 mt-6">
              {content.environmentCards.map((item, index) => (
                <InfoCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container-page mt-10 md:mt-14">
        <div className="grid lg:grid-cols-2 gap-6">
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
            <SectionTitle
              title={content.developmentTitle}
              subtitle={content.developmentSubtitle}
            />

            <div className="mt-6 space-y-4">
              {content.developmentItems.map((item, index) => (
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

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-[2rem] border shadow-sm p-6 md:p-8 lg:p-10"
            style={{
              borderColor: "var(--border-color)",
              background: "var(--card-bg)",
            }}
          >
            <SectionTitle
              title={content.outcomesTitle}
              subtitle={content.outcomesSubtitle}
            />

            <div className="mt-6 space-y-4">
              {content.outcomesItems.map((item, index) => (
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
          <SectionTitle title={content.ctaTitle} />
          <p
            className="mt-6 text-[16px] md:text-[17px] leading-8"
            style={{ color: "var(--text-secondary)" }}
          >
            {content.ctaText}
          </p>

          <div className="mt-6 space-y-4">
            {content.ctaPoints.map((item, index) => (
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
    </main>
  );
}