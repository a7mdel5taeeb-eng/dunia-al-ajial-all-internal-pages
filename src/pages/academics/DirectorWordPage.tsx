import { motion } from "motion/react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";
import PageHero from "../../components/PageHero";
import SectionTitle from "../../components/SectionTitle";
import InfoCard from "../../components/InfoCard";
import { GraduationCap, BookOpen, Brain } from "lucide-react";

export default function DirectorWordPage() {
  const { language, dir } = useLanguage();
  const { theme } = useTheme();

  const isArabic = language === "ar";

  const content = {
    en: {
      eyebrow: "Academics",
      heroTitle: "Welcome Message from the Academic Director",
      heroDescription:
        "A message that reflects our commitment to excellence, student growth, and a future-ready academic journey.",
      sectionTitle: "Academic Director's Message",
      message: `
Dear Students, Parents, and Esteemed Visitors,

It is with great pride and enthusiasm that I welcome you to Dunia Al-Ajial International School, a beacon of excellence in education located in the heart of Al-Kharj, Saudi Arabia. As the Academic Director, I am honored to be part of a community that is committed to nurturing young minds and preparing them for a future full of possibilities.

At Dunia Al-Ajial, we follow the American educational system, which is renowned for its holistic approach to learning. Our curriculum is designed to foster critical thinking, creativity, and a lifelong love for learning. We believe in empowering our students with the knowledge, skills, and values they need to thrive in an ever-changing global landscape.

Our dedicated faculty and staff are passionate about providing a supportive and stimulating environment where every student can achieve their full potential. We emphasize academic excellence, character development, and cultural awareness, ensuring that our students are not only well-prepared for higher education but also equipped to become responsible and compassionate global citizens.

We are proud of our state-of-the-art facilities, which provide a safe and conducive learning environment. From our well-equipped classrooms and science labs to our sports facilities, every aspect of our campus is designed to enhance the educational experience.

As we continue to grow and evolve, we remain committed to our mission of delivering high-quality education that meets the needs of our diverse student body. We encourage parents to be active participants in their children's education and to join us in our journey towards academic excellence.

Thank you for choosing Dunia Al-Ajial International School. Together, we can inspire and empower the next generation of leaders, innovators, and thinkers.
`,
      signature: `Warm regards,
Academic Director
Dunia Al-Ajial International School
Al-Kharj, Saudi Arabia`,
    },

    ar: {
      eyebrow: "الأقسام الأكاديمية",
      heroTitle: "كلمة مدير الشؤون الأكاديمية",
      heroDescription:
        "رسالة تعبّر عن التزامنا بالتميز، وتنمية الطالب، وبناء رحلة تعليمية تواكب المستقبل.",
      sectionTitle: "رسالة مدير الشؤون الأكاديمية",
      message: `
أعزائي الطلاب، أولياء الأمور، والزوار الكرام،

بكل فخر وحماس، أرحب بكم في مدرسة دنيا الأجيال الدولية، وهي منارة للتميز التعليمي تقع في قلب مدينة الخرج، المملكة العربية السعودية. كمدير للشؤون الأكاديمية، يشرفني أن أكون جزءًا من مجتمع ملتزم برعاية العقول الشابة وإعدادها لمستقبل مليء بالإمكانيات.

في دنيا الأجيال، نتبع النظام التعليمي الأمريكي، المعروف بمنهجيته الشاملة في التعلم. تم تصميم مناهجنا لتعزيز التفكير النقدي، الإبداع، وحب التعلم مدى الحياة. نحن نؤمن بتمكين طلابنا بالمعرفة، المهارات، والقيم التي يحتاجونها ليزدهروا في عالم يتغير باستمرار.

فريقنا المكون من أعضاء هيئة التدريس والموظفين المتفانين يعملون بشغف لتوفير بيئة داعمة ومحفزة حيث يمكن لكل طالب أن يحقق أقصى إمكاناته. نركز على التميز الأكاديمي، تطوير الشخصية، والوعي الثقافي، مما يضمن أن طلابنا ليسوا فقط مستعدين للتعليم العالي، ولكن أيضًا مؤهلين ليكونوا مواطنين عالميين مسؤولين وذوي تعاطف.

نفخر بمرافقنا الحديثة التي توفر بيئة تعليمية آمنة ومحفزة. من فصولنا الدراسية المجهزة تجهيزًا جيدًا ومختبراتنا العلمية إلى مكتبتنا الواسعة ومرافقنا الرياضية، تم تصميم كل جانب من جوانب حرمنا المدرسي لتعزيز التجربة التعليمية.

وبينما نواصل النمو والتطور، نبقى ملتزمين برسالتنا في تقديم تعليم عالي الجودة يلبي احتياجات طلابنا المتنوعين. نحث أولياء الأمور على أن يكونوا مشاركين نشطين في تعليم أبنائهم وأن ينضموا إلينا في رحلتنا نحو التميز الأكاديمي.

شكرًا لكم على اختياركم مدرسة دنيا الأجيال الدولية. معًا، يمكننا أن نلهم ونمكن الجيل القادم من القادة، المبتكرين، والمفكرين.
`,
      signature: `مع أطيب التحيات،
مدير الشؤون الأكاديمية
مدرسة دنيا الأجيال الدولية
الخرج، المملكة العربية السعودية`,
    },
  };

  const text = isArabic ? content.ar : content.en;
<section className="container-page mt-10 md:mt-14">

  <SectionTitle
    title={language === "ar" ? "ركائز التعليم الأكاديمي" : "Academic Foundations"}
    subtitle={
      language === "ar"
        ? "نركز على مجموعة من المبادئ التعليمية التي تساعد طلابنا على النجاح والتطور."
        : "We focus on key educational principles that help our students grow and succeed."
    }
  />

  <div className="grid md:grid-cols-3 gap-6 mt-8">

    <InfoCard
      icon={<GraduationCap className="h-6 w-6" />}
      title={language === "ar" ? "التميز الأكاديمي" : "Academic Excellence"}
      description={
        language === "ar"
          ? "نحرص على تقديم تعليم عالي الجودة يركز على الفهم العميق وتنمية المهارات."
          : "We strive to deliver high-quality education that promotes deep understanding and skills development."
      }
    />

    <InfoCard
      icon={<BookOpen className="h-6 w-6" />}
      title={language === "ar" ? "المنهج الأمريكي" : "American Curriculum"}
      description={
        language === "ar"
          ? "يعتمد نظامنا التعليمي على المنهج الأمريكي الذي يشجع التفكير النقدي والإبداع."
          : "Our educational system follows the American curriculum which encourages critical thinking and creativity."
      }
    />

    <InfoCard
      icon={<Brain className="h-6 w-6" />}
      title={language === "ar" ? "تنمية الطالب" : "Student Development"}
      description={
        language === "ar"
          ? "نسعى إلى تطوير شخصية الطالب أكاديميًا وأخلاقيًا واجتماعيًا."
          : "We aim to develop students academically, socially, and ethically."
      }
    />

  </div>

</section>
  return (
    <main dir={dir} className="pb-20">
      <PageHero
        eyebrow={text.eyebrow}
        title={text.heroTitle}
        description={text.heroDescription}
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
          <SectionTitle title={text.sectionTitle} />

          <div
            className="mt-6 space-y-6 text-[16px] md:text-[17px] leading-8 whitespace-pre-line"
            style={{ color: "var(--text-secondary)" }}
          >
            {text.message}
          </div>

          <div
            className="mt-10 font-semibold whitespace-pre-line"
            style={{ color: "var(--text-primary)" }}
          >
            {text.signature}
          </div>
        </motion.div>
      </section>
    </main>
  );
}