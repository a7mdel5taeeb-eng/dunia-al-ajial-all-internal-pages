import { motion } from "motion/react";
import {
  CalendarDays,
  Building2,
  GraduationCap,
  BadgeCheck,
  FileText,
  Globe2,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import SectionTitle from "../../components/SectionTitle";
import InfoCard from "../../components/InfoCard";
import { useTheme } from "../../contexts/ThemeContext";

export default function SchoolHistoryPage() {
  const { language, dir } = useLanguage();
  const { theme } = useTheme();
  const isArabic = language === "ar";

  const content = isArabic
    ? {
        eyebrow: "من نحن",
        heroTitle: "تاريخ مدارس دنيا الأجيال الدولية",
        heroDescription:
          "رحلة من النمو والتميز الأكاديمي بدأت في الخرج، وامتدت لتبني بيئة تعليمية دولية تجمع بين الجودة، التنوع، والاستعداد للمستقبل.",
        heroImage: "/images/school-history-hero.jpg",
        heroImageAlt: "صورة تعبر عن تاريخ مدارس دنيا الأجيال الدولية",
        heroBadge: "منذ 2012",
        heroHighlights: "تعليم دولي • اعتماد أكاديمي • مسيرة نمو مستمرة",
        heroCardTitle: "رحلة تعليمية متنامية",
        heroCardText:
          "بدأت المدرسة رحلتها التعليمية بخطوات ثابتة نحو التميز، حتى أصبحت بيئة دولية متكاملة تصنع المستقبل وتعد الطلاب لعالم سريع التغير.",
        introTitle: "نبذة تاريخية",
        introText:
          "تُعد مدارس دنيا الأجيال الدولية (DAIS) من المؤسسات التعليمية المتميزة الواقعة في مدينة الخرج بمنطقة الرياض في المملكة العربية السعودية. ومنذ تأسيسها، التزمت المدرسة بتقديم تعليم عالي الجودة وفق المنهج الأمريكي، مع توفير بيئة متعددة الثقافات تحتضن طلابًا من جنسيات وخلفيات متنوعة.",
        foundingTitle: "التأسيس والنمو",
        foundingText:
          "افتتحت مدارس دنيا الأجيال الدولية أبوابها لأول مرة عام 2012 من خلال قسم البنات، استجابةً للطلب المتزايد على التعليم الدولي بمعايير عالية في مدينة الخرج. ونظرًا للنجاح السريع الذي حققته المدرسة وازدياد أعداد الطلاب، تم افتتاح قسم البنين في العام التالي 2013، مما عزز التزام المدرسة بتوفير فرص تعليمية متوازنة وشاملة.",
        milestonesTitle: "محطات بارزة في مسيرتنا",
        milestonesSubtitle:
          "على مدار السنوات، حققت المدرسة خطوات مهمة رسخت مكانتها كمؤسسة تعليمية رائدة.",
        milestones: [
          {
            year: "2012",
            title: "افتتاح قسم البنات",
            description:
              "بدأت المدرسة رحلتها التعليمية مع افتتاح قسم البنات في مدينة الخرج.",
          },
          {
            year: "2013",
            title: "افتتاح قسم البنين",
            description:
              "تم توسيع نطاق المدرسة بافتتاح قسم البنين استجابة للنمو المتزايد في أعداد الطلاب.",
          },
          {
            year: "2020 - 2021",
            title: "تخريج أول دفعة",
            description:
              "احتفلت المدرسة بأول دفعة من خريجيها، الذين التحقوا لاحقًا بجامعات مرموقة داخل المملكة وخارجها.",
          },
          {
            year: "2020",
            title: "مركز رسمي لاختبار SAT",
            description:
              "أصبحت المدرسة مركزًا رسميًا لاختبار SAT، في خطوة عززت جاهزية الطلاب للمرحلة الجامعية.",
          },
          {
            year: "2022",
            title: "اعتماد مركز لاختبار ACT",
            description:
              "حصلت المدرسة على اعتماد كمركز رسمي لاختبار ACT، مواصلةً تطوير مسارها الأكاديمي.",
          },
        ],
        excellenceTitle: "التميز الأكاديمي والتوسع",
        excellenceText:
          "تقدم مدارس دنيا الأجيال الدولية منهجًا أمريكيًا متكاملًا من مرحلة الروضة (K) وحتى الصف الثاني عشر، وذلك عبر حرمين مدرسيين مجهزين بشكل جيد. وقد شهدت المدرسة نموًا مستمرًا، حيث تخدم حاليًا ما يقارب 1,500 طالب وطالبة من خلفيات ثقافية وأكاديمية متنوعة.",
        universitiesTitle: "وجهات خريجينا الجامعية",
        universitiesSubtitle:
          "التحق خريجو المدرسة بعدد من الجامعات المرموقة داخل المملكة العربية السعودية وخارجها، بما في ذلك:",
        universities: [
          "مصر",
          "تركيا",
          "الولايات المتحدة الأمريكية",
          "ماليزيا",
          "الأردن",
          "المملكة المتحدة",
        ],
        majorsTitle: "التخصصات التي اتجه إليها الخريجون",
        majorsSubtitle:
          "اتجهت الغالبية من خريجي المدرسة إلى تخصصات جامعية مطلوبة ومهمة، من أبرزها:",
        majors: [
          "الطب",
          "الهندسة",
          "علوم الحاسب",
          "الدراسات الكهربائية",
          "الميكاترونكس",
          "إدارة الأعمال",
          "الكلية العسكرية",
        ],
        recognitionTitle: "الاعتماد والاختبارات المعيارية",
        recognitionSubtitle:
          "حرصت المدرسة على تعزيز جودة التعليم من خلال الاعتماد الدولي والجاهزية للاختبارات العالمية.",
        recognitionCards: [
          {
            icon: <BadgeCheck className="h-6 w-6" />,
            title: "اعتماد Cognia",
            description:
              "تحمل المدرسة اعتماد Cognia، وهو اعتماد دولي مرموق يؤكد التزامها بمعايير التعليم العالمية الصارمة.",
          },
          {
            icon: <FileText className="h-6 w-6" />,
            title: "مركز SAT",
            description:
              "أصبحت المدرسة مركزًا رسميًا لاختبار SAT في عام 2020، دعمًا لاستعداد الطلاب للقبول الجامعي.",
          },
          {
            icon: <FileText className="h-6 w-6" />,
            title: "مركز ACT",
            description:
              "في عام 2022، حصلت المدرسة على اعتماد رسمي كمركز لاختبار ACT، في خطوة نوعية إضافية.",
          },
          {
            icon: <GraduationCap className="h-6 w-6" />,
            title: "الاستعداد لاختبارات AP",
            description:
              "تستعد المدرسة للتعاون مع College Board لتقديم اختبارات AP، بما يعزز جاهزية الطلاب للتعليم الجامعي.",
          },
        ],
        governanceTitle: "الالتزام بالتطوير التعليمي",
        governanceText:
          "يلعب مجلس إدارة مدارس دنيا الأجيال الدولية دورًا فاعلًا في صياغة رؤية المدرسة ورسالتها واستراتيجيات التطوير طويلة المدى. كما يحرص المجلس على توفير التمويل والدعم والموارد اللازمة لكل مبادرة تسهم في التميز الأكاديمي، ونجاح الطلاب، وتعزيز العلاقة مع المجتمع.",
        closingTitle: "مؤسسة تعليمية تصنع المستقبل",
        closingText:
          "من خلال التزامها بالتعليم المبتكر، والمرافق الحديثة، والتنمية المتكاملة للطالب، تواصل مدارس دنيا الأجيال الدولية ترسيخ مكانتها كإحدى المؤسسات التعليمية الرائدة في الخرج، وهي تهيئ الأجيال القادمة للنجاح في عالم يزداد ترابطًا وتغيرًا.",
      }
    : {
        eyebrow: "About Us",
        heroTitle: "History of Dunia Al-Ajial International Schools",
        heroDescription:
          "A journey of growth and academic excellence that began in Al Kharj and continues to build an international learning environment shaped by quality, diversity, and future readiness.",
        heroImage: "/images/school-history-hero.jpg",
        heroImageAlt:
          "A visual representing the history of Dunia Al-Ajial International Schools",
        heroBadge: "Since 2012",
        heroHighlights:
          "International Education • Academic Accreditation • A Strong Growth Journey",
        heroCardTitle: "A Growing Educational Journey",
        heroCardText:
          "The school began its journey with a clear vision for excellence and evolved into a complete international learning environment that prepares students for the future.",
        introTitle: "Historical Overview",
        introText:
          "Dunia Al-Ajial International Schools (DAIS) is a premier educational institution located in Al Kharj City, within the Riyadh Province of Saudi Arabia. Since its establishment, DAIS has been committed to delivering high-quality American curriculum education while fostering a multicultural environment that embraces students of diverse nationalities and backgrounds.",
        foundingTitle: "Founding and Growth",
        foundingText:
          "DAIS first opened its doors in 2012, beginning with the Girls' Section, catering to the growing demand for an international-standard education in Al Kharj. Due to its rapid success and increasing enrollment, the Boys' Section was introduced the following year in 2013, solidifying the school's commitment to providing balanced educational opportunities.",
        milestonesTitle: "Major Milestones",
        milestonesSubtitle:
          "Over the years, the school has achieved key milestones that strengthened its position as a leading educational institution.",
        milestones: [
          {
            year: "2012",
            title: "Opening of the Girls' Section",
            description:
              "The school began its educational journey with the launch of the Girls' Section in Al Kharj.",
          },
          {
            year: "2013",
            title: "Opening of the Boys' Section",
            description:
              "The school expanded with the introduction of the Boys' Section in response to growing enrollment.",
          },
          {
            year: "2020 - 2021",
            title: "First Graduating Class",
            description:
              "DAIS celebrated its first graduating class, whose students were later admitted to prestigious universities locally and internationally.",
          },
          {
            year: "2020",
            title: "Official SAT Test Center",
            description:
              "The school became an official SAT Test Center, strengthening students' preparation for higher education.",
          },
          {
            year: "2022",
            title: "Accredited ACT Test Center",
            description:
              "DAIS received accreditation as an official ACT Test Center, marking another important academic achievement.",
          },
        ],
        excellenceTitle: "Academic Excellence and Expansion",
        excellenceText:
          "DAIS offers a comprehensive American curriculum from Kindergarten (K) through Grade 12 across two well-equipped campuses. The school has experienced consistent growth and currently serves approximately 1,500 students from various cultural and academic backgrounds.",
        universitiesTitle: "University Destinations of Our Graduates",
        universitiesSubtitle:
          "DAIS graduates have been admitted to prestigious universities within Saudi Arabia and internationally, including institutions in:",
        universities: ["Egypt", "Turkey", "USA", "Malaysia", "Jordan", "UK"],
        majorsTitle: "Fields Pursued by Our Alumni",
        majorsSubtitle:
          "The majority of DAIS alumni have pursued higher education in high-demand and important fields, including:",
        majors: [
          "Medicine",
          "Engineering",
          "Computer Science",
          "Electrical Studies",
          "Mechatronics",
          "Business Administration",
          "Military College",
        ],
        recognitionTitle: "Accreditation and Standardized Testing",
        recognitionSubtitle:
          "The school has strengthened its academic quality through international accreditation and readiness for global testing pathways.",
        recognitionCards: [
          {
            icon: <BadgeCheck className="h-6 w-6" />,
            title: "Cognia Accreditation",
            description:
              "DAIS holds accreditation from Cognia, a globally recognized organization that reflects commitment to rigorous international education standards.",
          },
          {
            icon: <FileText className="h-6 w-6" />,
            title: "SAT Test Center",
            description:
              "The school became an official SAT Test Center in 2020 to support students' university readiness.",
          },
          {
            icon: <FileText className="h-6 w-6" />,
            title: "ACT Test Center",
            description:
              "In 2022, DAIS was accredited as an official ACT Test Center, further strengthening its academic profile.",
          },
          {
            icon: <GraduationCap className="h-6 w-6" />,
            title: "Preparation for AP Exams",
            description:
              "The school is preparing to partner with the College Board to administer AP exams and further enhance student readiness for university education.",
          },
        ],
        governanceTitle: "Commitment to Educational Development",
        governanceText:
          "The DAIS Governing Board plays an active role in shaping the school's vision, mission, and long-term improvement strategies. The board ensures that every initiative is well-funded and supported with the necessary resources to promote academic excellence, student success, and community engagement.",
        closingTitle: "An Institution Building the Future",
        closingText:
          "Through its dedication to innovative teaching, modern facilities, and holistic student development, DAIS continues to stand as a leading educational institution in Al Kharj, preparing future generations for success in an increasingly interconnected world.",
      };

  const overlayBackground =
    theme === "dark"
      ? "linear-gradient(135deg, rgba(2,6,23,.58) 0%, rgba(30,41,59,.34) 35%, rgba(76,29,149,.22) 100%)"
      : "linear-gradient(135deg, rgba(15,23,42,.46) 0%, rgba(30,41,59,.24) 35%, rgba(76,29,149,.18) 100%)";

  const cardBackground =
    theme === "dark" ? "rgba(15,23,42,.42)" : "rgba(255,255,255,.12)";

  return (
    <main dir={dir} className="pb-20">
      <section className="container-page mt-20 md:mt-24 pt-6 md:pt-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border shadow-sm min-h-[520px] md:min-h-[620px] lg:min-h-[680px]"
          style={{
            borderColor: "var(--border-color)",
            background: "var(--card-bg)",
          }}
        >
          <img
            src={content.heroImage}
            alt={content.heroImageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
              background: overlayBackground,
            }}
          />

          <div className="absolute inset-0 backdrop-blur-[1.5px]" />

          <div className="relative z-10 flex min-h-[520px] md:min-h-[620px] lg:min-h-[680px] items-center">
            <div className="w-full px-6 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
              <div className="max-w-4xl">
                <div
                  className="inline-flex items-center rounded-full px-5 py-2 text-xs md:text-sm font-semibold tracking-[0.18em] uppercase"
                  style={{
                    background: "rgba(139,92,246,.12)",
                    color: "#c4b5fd",
                    border: "1px solid rgba(196,181,253,.28)",
                  }}
                >
                  {content.eyebrow}
                </div>

                <div
                  className="mt-5 inline-flex items-center rounded-full px-5 py-2 text-xs md:text-sm font-semibold tracking-[0.14em]"
                  style={{
                    background: "rgba(255,255,255,.08)",
                    color: "rgba(255,255,255,.94)",
                    border: "1px solid rgba(255,255,255,.18)",
                  }}
                >
                  {content.heroHighlights}
                </div>

                <h1 className="mt-6 max-w-4xl text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
                  {content.heroTitle}
                </h1>

                <p className="mt-6 max-w-3xl text-white/90 text-[17px] md:text-[20px] leading-8 md:leading-9">
                  {content.heroDescription}
                </p>

                <div className="mt-8">
                  <div
                    className="inline-flex items-center rounded-full px-5 py-2 text-sm md:text-base font-semibold"
                    style={{
                      background: "rgba(255,255,255,.10)",
                      color: "white",
                      border: "1px solid rgba(255,255,255,.18)",
                    }}
                  >
                    {content.heroBadge}
                  </div>
                </div>

                <div className="mt-10 max-w-2xl">
                  <div
                    className="rounded-[1.75rem] p-5 md:p-6 backdrop-blur-md"
                    style={{
                      background: cardBackground,
                      border: "1px solid rgba(255,255,255,.18)",
                      boxShadow: "0 20px 60px rgba(0,0,0,.18)",
                    }}
                  >
                    <h2 className="text-white text-2xl md:text-3xl font-bold">
                      {content.heroCardTitle}
                    </h2>
                    <p className="mt-3 text-white/90 text-[15px] md:text-[17px] leading-7 md:leading-8">
                      {content.heroCardText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
            <div className="flex items-center gap-3 mb-4">
              <div
                className="rounded-xl p-3"
                style={{
                  background: "rgba(139,92,246,.12)",
                  color: "var(--accent-primary)",
                }}
              >
                <CalendarDays className="h-5 w-5" />
              </div>
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                {content.foundingTitle}
              </h2>
            </div>

            <p
              className="text-[16px] md:text-[17px] leading-8"
              style={{ color: "var(--text-secondary)" }}
            >
              {content.foundingText}
            </p>
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
            <div className="flex items-center gap-3 mb-4">
              <div
                className="rounded-xl p-3"
                style={{
                  background: "rgba(139,92,246,.12)",
                  color: "var(--accent-primary)",
                }}
              >
                <Building2 className="h-5 w-5" />
              </div>
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                {content.excellenceTitle}
              </h2>
            </div>

            <p
              className="text-[16px] md:text-[17px] leading-8"
              style={{ color: "var(--text-secondary)" }}
            >
              {content.excellenceText}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-page mt-10 md:mt-14">
        <SectionTitle
          title={content.milestonesTitle}
          subtitle={content.milestonesSubtitle}
        />

        <div className="mt-8 space-y-5">
          {content.milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-[2rem] border shadow-sm p-5 md:p-6 lg:p-7"
              style={{
                borderColor: "var(--border-color)",
                background: "var(--card-bg)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="shrink-0 rounded-2xl px-4 py-2 text-sm font-bold"
                  style={{
                    background: "rgba(139,92,246,.12)",
                    color: "var(--accent-primary)",
                  }}
                >
                  {item.year}
                </div>

                <div className="min-w-0">
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-3 text-[15px] md:text-[16px] leading-7"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.description}
                  </p>
                </div>
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
              title={content.universitiesTitle}
              subtitle={content.universitiesSubtitle}
            />

            <div className="mt-6 grid grid-cols-2 gap-3">
              {content.universities.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border px-4 py-3 text-sm md:text-base font-medium"
                  style={{
                    borderColor: "var(--border-color)",
                    background: "rgba(139,92,246,.05)",
                    color: "var(--text-primary)",
                  }}
                >
                  {item}
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
              title={content.majorsTitle}
              subtitle={content.majorsSubtitle}
            />

            <div className="mt-6 space-y-4">
              {content.majors.map((item, index) => (
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
        <SectionTitle
          title={content.recognitionTitle}
          subtitle={content.recognitionSubtitle}
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          {content.recognitionCards.map((item, index) => (
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
            background: "var(--card-bg)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="rounded-xl p-3"
              style={{
                background: "rgba(139,92,246,.12)",
                color: "var(--accent-primary)",
              }}
            >
              <Globe2 className="h-5 w-5" />
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              {content.governanceTitle}
            </h2>
          </div>

          <p
            className="text-[16px] md:text-[17px] leading-8"
            style={{ color: "var(--text-secondary)" }}
          >
            {content.governanceText}
          </p>
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
            background:
              theme === "dark"
                ? "linear-gradient(135deg, rgba(76,29,149,.18), rgba(15,23,42,.92))"
                : "linear-gradient(135deg, rgba(245,243,255,1), rgba(255,255,255,1))",
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