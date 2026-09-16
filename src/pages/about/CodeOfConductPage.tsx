import { motion } from "motion/react";
import {
  ShieldCheck,
  HandHeart,
  BadgeCheck,
  Trophy,
  Users,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import PageHero from "../../components/PageHero";
import SectionTitle from "../../components/SectionTitle";
import InfoCard from "../../components/InfoCard";
import { useTheme } from "../../contexts/ThemeContext";

export default function CodeOfConductPage() {
  const { language, dir } = useLanguage();

  const isArabic = language === "ar";
  const { theme } = useTheme();
  
  const content = isArabic
    ? {
        eyebrow: "من نحن",
        heroTitle: "مدونة سلوك الطالب",
        heroDescription:
          "نعزز في مدارس دنيا الأجيال الدولية بيئة تعليمية قائمة على الاحترام، الأمان، والمسؤولية، بما يدعم النمو الأكاديمي والاجتماعي والوجداني لكل طالب.",
        introTitle: "1. المقدمة",
        introText:
          "في مدارس دنيا الأجيال الدولية، نعمل على بناء بيئة تعليمية محترمة، آمنة، وشاملة للجميع. توضح هذه المدونة التوقعات الخاصة بسلوك الطلاب من أجل ضمان ثقافة مدرسية إيجابية تُمكّن جميع الطلاب من النجاح أكاديميًا، اجتماعيًا، وعاطفيًا.",
        valuesTitle: "2. القيم الأساسية",
        valuesSubtitle:
          "من المتوقع أن يلتزم الطلاب بالقيم الأساسية للمدرسة وأن يعكسوها في سلوكهم اليومي.",
        values: [
          {
            icon: <HandHeart className="h-6 w-6" />,
            title: "الاحترام",
            description: "احترام الزملاء، والموظفين، والممتلكات، والتنوع.",
          },
          {
            icon: <ShieldCheck className="h-6 w-6" />,
            title: "المسؤولية",
            description: "تحمل المسؤولية عن الأفعال، والتعلم، والمجتمع المدرسي.",
          },
          {
            icon: <BadgeCheck className="h-6 w-6" />,
            title: "النزاهة",
            description: "الصدق والسلوك الأخلاقي في جميع المواقف.",
          },
          {
            icon: <Trophy className="h-6 w-6" />,
            title: "التميز",
            description: "الالتزام بالنمو الأكاديمي والشخصي المستمر.",
          },
          {
            icon: <Users className="h-6 w-6" />,
            title: "التعاون",
            description: "العمل بإيجابية واحترام مع الآخرين.",
          },
        ],
        expectationsTitle: "3. التوقعات السلوكية",
        expectationsSubtitle:
          "تشمل التوقعات السلوكية عدة جوانب أساسية من حياة الطالب داخل المدرسة.",
        sections: [
          {
            title: "أ. السلوك العام",
            items: [
              "معاملة جميع الأفراد بلطف واحترام.",
              "استخدام لغة مناسبة، وعدم التسامح مع التنمر أو التحرش أو التمييز.",
              "الالتزام بقواعد المدرسة، بما في ذلك الزي المدرسي وسياسات الحضور.",
            ],
          },
          {
            title: "ب. النزاهة الأكاديمية",
            items: [
              "إنجاز الواجبات بصدق وبشكل مستقل.",
              "تجنب الانتحال أو الغش أو التعاون غير المصرح به.",
              "استخدام التقنية بشكل مسؤول ولأغراض تعليمية فقط.",
            ],
          },
          {
            title: "ج. السلوك داخل الفصل",
            items: [
              "الحضور في الوقت المحدد والاستعداد الجيد للحصة.",
              "المشاركة الفعالة والمحترمة.",
              "اتباع تعليمات المعلم وتجنب تعطيل سير الدرس.",
            ],
          },
          {
            title: "د. السلامة داخل الحرم المدرسي",
            items: [
              "منع الاعتداء الجسدي أو حمل الأسلحة أو الأدوات الخطرة.",
              "الإبلاغ فورًا عن أي سلوك غير آمن إلى أعضاء المدرسة.",
              "احترام ممتلكات المدرسة ومرافقها.",
            ],
          },
          {
            title: "هـ. المواطنة الرقمية",
            items: [
              "استخدام تقنية المدرسة بطريقة مسؤولة.",
              "تجنب التنمر الإلكتروني أو السلوك غير اللائق عبر الإنترنت.",
              "الالتزام بسياسة الاستخدام المقبول للأجهزة والتقنية.",
            ],
          },
        ],
        consequencesTitle: "4. عواقب سوء السلوك",
        consequencesText:
          "بحسب درجة المخالفة وشدتها، قد تترتب على السلوك غير المناسب مجموعة من الإجراءات التربوية أو النظامية.",
        consequences: [
          "تنبيه شفهي أو كتابة تأمل/تعهد سلوكي.",
          "إشعار ولي الأمر أو الوصي.",
          "الاحتجاز المدرسي، أو خدمة مجتمعية، أو تعليق مؤقت.",
          "وفي الحالات القصوى، قد يصل الأمر إلى الفصل أو اتخاذ إجراءات قانونية.",
        ],
        reinforcementTitle: "5. التعزيز الإيجابي",
        reinforcementText:
          "الطلاب الذين يظهرون سلوكًا نموذجيًا وتميزًا في التعامل قد يحصلون على:",
        reinforcement: [
          "التقدير والتكريم مثل الشهادات أو الجوائز.",
          "فرص قيادية داخل المدرسة.",
          "امتيازات أو مزايا خاصة.",
        ],
        acknowledgmentTitle: "6. إقرار الطالب وولي الأمر",
        acknowledgmentText:
          "من خلال التسجيل في مدارس دنيا الأجيال الدولية، يوافق الطلاب وأولياء الأمور على الالتزام بهذه المدونة والعمل بموجبها كجزء من الشراكة التربوية بين المدرسة والأسرة.",
      }
    : {
        eyebrow: "About Us",
        heroTitle: "Student Code of Conduct",
        heroDescription:
          "At Dunia Al-Ajial International Schools, we promote a respectful, safe, and responsible learning environment that supports every student's academic, social, and emotional growth.",
        introTitle: "1. Introduction",
        introText:
          "At Dunia Al-Ajial International Schools, we foster a respectful, safe, and inclusive learning environment. This Code of Conduct outlines the expectations for student behavior to ensure a positive school culture where all students can thrive academically, socially, and emotionally.",
        valuesTitle: "2. Core Values",
        valuesSubtitle:
          "Students are expected to uphold the school’s core values and reflect them in their daily behavior.",
        values: [
          {
            icon: <HandHeart className="h-6 w-6" />,
            title: "Respect",
            description: "For peers, staff, property, and diversity.",
          },
          {
            icon: <ShieldCheck className="h-6 w-6" />,
            title: "Responsibility",
            description: "For one’s actions, learning, and community.",
          },
          {
            icon: <BadgeCheck className="h-6 w-6" />,
            title: "Integrity",
            description: "Honesty and ethical behavior in all situations.",
          },
          {
            icon: <Trophy className="h-6 w-6" />,
            title: "Excellence",
            description: "Commitment to academic and personal growth.",
          },
          {
            icon: <Users className="h-6 w-6" />,
            title: "Collaboration",
            description: "Working positively with others.",
          },
        ],
        expectationsTitle: "3. Behavioral Expectations",
        expectationsSubtitle:
          "Behavioral expectations cover the key areas of student life across the school environment.",
        sections: [
          {
            title: "a. General Conduct",
            items: [
              "Treat all individuals with kindness and respect.",
              "Use appropriate language; bullying, harassment, or discrimination will not be tolerated.",
              "Follow school rules, including dress code and attendance policies.",
            ],
          },
          {
            title: "b. Academic Integrity",
            items: [
              "Complete assignments honestly and independently.",
              "Avoid plagiarism, cheating, or unauthorized collaboration.",
              "Use technology responsibly for learning purposes only.",
            ],
          },
          {
            title: "c. Classroom Behavior",
            items: [
              "Arrive on time and be prepared.",
              "Participate actively and respectfully.",
              "Follow teacher instructions and avoid disruptions.",
            ],
          },
          {
            title: "d. Campus Safety",
            items: [
              "No physical aggression, weapons, or dangerous items.",
              "Report unsafe behavior to staff immediately.",
              "Respect school property and facilities.",
            ],
          },
          {
            title: "e. Digital Citizenship",
            items: [
              "Use school technology responsibly.",
              "Avoid cyberbullying or inappropriate online behavior.",
              "Follow the school’s Acceptable Use Policy for devices.",
            ],
          },
        ],
        consequencesTitle: "4. Consequences for Misconduct",
        consequencesText:
          "Depending on the severity, violations may result in the following disciplinary measures:",
        consequences: [
          "Verbal warning or written reflection.",
          "Parent/guardian notification.",
          "Detention, community service, or suspension.",
          "In extreme cases, expulsion or legal action.",
        ],
        reinforcementTitle: "5. Positive Reinforcement",
        reinforcementText:
          "Students demonstrating exemplary behavior may receive:",
        reinforcement: [
          "Recognition such as certificates or awards.",
          "Leadership opportunities.",
          "Special privileges.",
        ],
        acknowledgmentTitle: "6. Parental & Student Acknowledgment",
        acknowledgmentText:
          "By enrolling at Dunia Al-Ajial International Schools, students and parents agree to abide by this Code of Conduct as part of the school-home partnership.",
      };

  return (
    <main dir={dir} className="pb-20">
      <PageHero
        eyebrow={content.eyebrow}
        title={content.heroTitle}
        description={content.heroDescription}
        image="/images/admissions-documents-hero-v2.png"
      />

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
          title={content.valuesTitle}
          subtitle={content.valuesSubtitle}
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          {content.values.map((item, index) => (
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
          title={content.expectationsTitle}
          subtitle={content.expectationsSubtitle}
        />

        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          {content.sections.map((section, index) => (
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
              title={content.consequencesTitle}
              subtitle={content.consequencesText}
            />

            <div className="mt-6 space-y-4">
              {content.consequences.map((item, index) => (
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
              title={content.reinforcementTitle}
              subtitle={content.reinforcementText}
            />

            <div className="mt-6 space-y-4">
              {content.reinforcement.map((item, index) => (
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
          <SectionTitle title={content.acknowledgmentTitle} />
          <p
            className="mt-6 text-[16px] md:text-[17px] leading-8"
            style={{ color: "var(--text-secondary)" }}
          >
            {content.acknowledgmentText}
          </p>
        </motion.div>
      </section>
    </main>
  );
}
