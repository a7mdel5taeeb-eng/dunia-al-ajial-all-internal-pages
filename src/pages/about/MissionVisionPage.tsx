import { motion } from "motion/react";
import {
  ArrowRight,
  Eye,
  Flag,
  Globe2,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

export default function MissionVisionPage() {
  const { language, dir } = useLanguage();
  const isArabic = language === "ar";

  const content = isArabic
    ? {
        eyebrow: "من نحن",
        title: "الرسالة والرؤية",
        heroTitle: "بوصلةٌ تربوية تقود التميّز والنمو",
        heroText:
          "في مدرسة دنيا الأجيال العالمية، تنطلق رسالتنا ورؤيتنا من إيمانٍ عميق بأن التعليم الحقيقي لا يقتصر على التفوق الأكاديمي فحسب، بل يمتد ليبني الشخصية، ويغذّي الفضول، ويهيئ الطالب لحياةٍ ناجحة في عالم متغير.",
        missionBadge: "الرِّسالة",
        missionTitle: "نزرع بيئة تعليمية يزدهر فيها الجميع",
        missionText:
          "تهيئة بيئة تعليمية ناجحة تُعزِّز النموَّ الأكاديمي المتميِّز، وترعى الصحةَ النفسية والاجتماعية والجسدية لجميع الطلاب.",
        visionBadge: "الرؤية",
        visionTitle: "نطمح إلى مجتمع تعليمي رائد",
        visionText:
          "أن نكون مجتمعاً تعليمياً رائداً، حيث يشكّل الفضول الفكريّ وأصالة الأخلاق والمواطنة العالميّة الواعية دعائمَ متينةً تُعدُّ الطالب ليزدهر في عالمنا المتغيّر.",
        valuesTitle: "مرتكزاتنا الأساسية",
        values: [
          {
            title: "التميّز الأكاديمي",
            text: "نؤمن بتقديم تعليم قوي يطوّر المعرفة والمهارات ويقود إلى نتائج متميزة.",
            icon: Sparkles,
          },
          {
            title: "النمو الشامل",
            text: "نهتم بالطالب فكريًا ونفسيًا واجتماعيًا وجسديًا ليبلغ أفضل صورة من ذاته.",
            icon: HeartHandshake,
          },
          {
            title: "الفضول الفكري",
            text: "نحفّز حب السؤال والاستكشاف والتفكير العميق بوصفه أساسًا للتعلّم الحقيقي.",
            icon: Lightbulb,
          },
          {
            title: "القيم والأخلاق",
            text: "نبني الشخصية على الاحترام، والأمانة، والانضباط، وتحمل المسؤولية.",
            icon: ShieldCheck,
          },
          {
            title: "المواطنة العالمية",
            text: "نُعدّ طلابنا ليكونوا واعين بالعالم، منفتحين على التنوع، وقادرين على الإسهام الإيجابي فيه.",
            icon: Globe2,
          },
          {
            title: "القيادة والاتجاه",
            text: "نقود العملية التعليمية برؤية واضحة ورسالة ثابتة تضع الطالب في قلب كل قرار.",
            icon: Flag,
          },
        ],
        closing:
          "رسالتنا ورؤيتنا ليستا مجرد عبارات جميلة على صفحة، بل إطار حيّ يوجّه قراراتنا التعليمية ويشكّل تجربة الطالب اليومية داخل المدرسة.",
        exploreBtn: "استكشف برامجنا الأكاديمية",
        homeBtn: "العودة للرئيسية",
      }
    : {
        eyebrow: "About Us",
        title: "Mission & Vision",
        heroTitle: "A Clear Educational Direction for Excellence and Growth",
        heroText:
          "At Dunia Al-Ajial International School, our mission and vision are rooted in the belief that meaningful education goes beyond academic achievement to build character, inspire curiosity, and prepare students for a successful life in a changing world.",
        missionBadge: "Our Mission",
        missionTitle: "Creating a learning environment where every learner can thrive",
        missionText:
          "Cultivating a successful learning environment that fosters exceptional academic growth and nurtures the social, emotional, and physical well-being of all.",
        visionBadge: "Our Vision",
        visionTitle: "Becoming a leading learning community",
        visionText:
          "To be a leading learning community where intellectual curiosity, strength of character, and commitment to global citizenship prepare students to thrive in a changing world.",
        valuesTitle: "Our Core Pillars",
        values: [
          {
            title: "Academic Excellence",
            text: "We provide a strong educational foundation that develops knowledge, skills, and outstanding achievement.",
            icon: Sparkles,
          },
          {
            title: "Whole-Child Development",
            text: "We care for students intellectually, socially, emotionally, and physically so they can grow into their best selves.",
            icon: HeartHandshake,
          },
          {
            title: "Intellectual Curiosity",
            text: "We encourage students to ask, explore, and think deeply as the heart of meaningful learning.",
            icon: Lightbulb,
          },
          {
            title: "Character & Values",
            text: "We nurture integrity, respect, responsibility, and strong moral character in everyday school life.",
            icon: ShieldCheck,
          },
          {
            title: "Global Citizenship",
            text: "We prepare students to engage thoughtfully with the world, appreciate diversity, and contribute positively to society.",
            icon: Globe2,
          },
          {
            title: "Purposeful Direction",
            text: "Our mission and vision guide every educational choice with clarity, purpose, and student-centered focus.",
            icon: Flag,
          },
        ],
        closing:
          "Our mission and vision are not simply statements on a page; they are a living framework that guides our educational decisions and shapes the daily student experience.",
        exploreBtn: "Explore Our Academic Programs",
        homeBtn: "Back to Home",
      };

  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="container-page pt-32 md:pt-40">
        <section
          className="relative overflow-hidden rounded-[2rem] border min-h-[420px] md:min-h-[520px] flex items-center justify-center"
          style={{
            borderColor:
              "color-mix(in srgb, var(--accent-primary) 18%, var(--border-color))",
            boxShadow: "0 18px 50px -32px rgba(15,23,42,.30)",
          }}
        >
          <img
            src="/images/mission-vision-hero.webp"
            alt={isArabic ? "الرسالة والرؤية" : "Mission and Vision"}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/58" />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-950/60 via-black/35 to-sky-950/35" />

          {/* Soft decorative glow */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] bg-violet-500/20 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-500/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto text-center px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-sm font-semibold text-white/95">
                {content.eyebrow}
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-bold font-serif tracking-tight text-white">
                {content.title}
              </h1>

              <p className="mt-5 text-xl md:text-2xl font-semibold text-white/95">
                {content.heroTitle}
              </p>

              <p className="mt-5 max-w-4xl mx-auto text-base md:text-lg leading-8 md:leading-9 text-white/80">
                {content.heroText}
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Main Content Section */}
      <section className="relative pb-20">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[38rem] h-[38rem] bg-violet-500/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="container-page relative z-10">
          <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35 }}
              className="rounded-[2rem] border p-6 md:p-8 h-full"
              style={{
                background:
                  "color-mix(in srgb, var(--bg-elevated) 90%, transparent)",
                borderColor:
                  "color-mix(in srgb, #8b5cf6 16%, var(--border-color))",
                boxShadow: "0 18px 50px -32px rgba(15,23,42,.22)",
              }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300">
                <Flag className="w-7 h-7" />
              </div>

              <div
                className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold mb-4"
                style={{
                  color: "var(--accent-primary)",
                  background:
                    "color-mix(in srgb, var(--accent-primary) 10%, transparent)",
                }}
              >
                {content.missionBadge}
              </div>

              <h2
                className="text-2xl md:text-3xl font-bold font-serif mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                {content.missionTitle}
              </h2>

              <p
                className="text-[1rem] md:text-[1.05rem] leading-8 md:leading-9"
                style={{ color: "var(--text-secondary)" }}
              >
                {content.missionText}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="rounded-[2rem] border p-6 md:p-8 h-full"
              style={{
                background:
                  "color-mix(in srgb, var(--bg-elevated) 90%, transparent)",
                borderColor:
                  "color-mix(in srgb, #3b82f6 16%, var(--border-color))",
                boxShadow: "0 18px 50px -32px rgba(15,23,42,.22)",
              }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 bg-blue-500/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300">
                <Eye className="w-7 h-7" />
              </div>

              <div
                className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold mb-4"
                style={{
                  color: "#2563eb",
                  background: "color-mix(in srgb, #2563eb 10%, transparent)",
                }}
              >
                {content.visionBadge}
              </div>

              <h2
                className="text-2xl md:text-3xl font-bold font-serif mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                {content.visionTitle}
              </h2>

              <p
                className="text-[1rem] md:text-[1.05rem] leading-8 md:leading-9"
                style={{ color: "var(--text-secondary)" }}
              >
                {content.visionText}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="max-w-6xl mx-auto mt-16 md:mt-20"
          >
            <div className="text-center mb-8 md:mb-10">
              <h2
                className="text-3xl md:text-4xl font-bold font-serif"
                style={{ color: "var(--text-primary)" }}
              >
                {content.valuesTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {content.values.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className="rounded-[1.8rem] border p-6 md:p-7 h-full"
                    style={{
                      background:
                        "color-mix(in srgb, var(--bg-elevated) 88%, transparent)",
                      borderColor:
                        "color-mix(in srgb, var(--accent-primary) 12%, var(--border-color))",
                      boxShadow: "0 18px 50px -32px rgba(15,23,42,.22)",
                    }}
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3
                      className="text-2xl font-bold font-serif mb-4"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="text-[0.98rem] md:text-[1.02rem] leading-8"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto mt-16 md:mt-20 text-center"
          >
            <div
              className="rounded-[2rem] border p-6 md:p-8"
              style={{
                background:
                  "color-mix(in srgb, var(--bg-elevated) 88%, transparent)",
                borderColor:
                  "color-mix(in srgb, var(--accent-primary) 10%, var(--border-color))",
                boxShadow: "0 18px 50px -32px rgba(15,23,42,.22)",
              }}
            >
              <p
                className="text-lg md:text-xl leading-8 md:leading-9"
                style={{ color: "var(--text-secondary)" }}
              >
                {content.closing}
              </p>
            </div>
          </motion.div>

          <div className="max-w-6xl mx-auto mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              to="/academics/early-childhood"
              className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm md:text-base font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-[1px]"
              style={{
                color: "#ffffff",
                background:
                  "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
              }}
            >
              {content.exploreBtn}
            </Link>

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-200 shadow-sm hover:shadow-md"
              style={{
                color: "#ffffff",
                background:
                  "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
              }}
            >
              {content.homeBtn}
              <ArrowRight
                className={`w-4 h-4 ${dir === "rtl" ? "rotate-180" : ""}`}
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
