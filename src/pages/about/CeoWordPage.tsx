import { motion } from "motion/react";
import { ArrowRight, Quote, UserRound } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Link } from "react-router-dom";

export default function CeoWordPage() {
  const { language, dir } = useLanguage();
  const isArabic = language === "ar";

  const pageLabel = isArabic ? "من نحن" : "About Us";
  const pageTitle = isArabic
    ? "كلمة الرئيس التنفيذي"
    : "CEO Word";

  const eyebrow = isArabic
    ? "قيادة • رؤية • تميّز"
    : "Leadership • Vision • Excellence";

  const intro = isArabic
    ? "رسالة من قيادة المدرسة إلى أولياء الأمور والطلاب ومجتمع دنيا الأجيال."
    : "A message from the school leadership to parents, students, and the Dunia Al-Ajial community.";

  const paragraphs = isArabic
    ? [
        "أعزائي أولياء الأمور، الطلاب، وأعضاء مجتمع دنيا الأجيال الكرام،",
        "يسعدني أن أخاطبكم اليوم بكل فخر وامتنان بصفتي الرئيس التنفيذي لمدرسة دنيا الأجيال العالمية. لطالما كان هدفنا منذ البداية أن نكون صرحًا تعليميًا متميزًا يلهم الأجيال ويرفع من طموحاتهم، ويسهم في تشكيل مستقبلهم بأفضل الطرق.",
        "في دنيا الأجيال، نؤمن بأن التعليم ليس مجرد عملية نقل للمعرفة، بل هو رحلة تنمية شاملة تُعنى ببناء شخصية الطالب، وتطوير مهاراته، وإعداده ليكون فردًا فاعلًا في مجتمع متعدد الثقافات ومتغير بسرعة. نسعى جاهدين لتوفير بيئة تعليمية محفزة تُشجع الطلاب على التفكير النقدي، والابتكار، وطرح الأسئلة التي تقودهم إلى اكتشاف إمكاناتهم الكامنة.",
        "فريقنا التربوي والإداري المتفاني يعمل بكل جد وإخلاص لتقديم تجربة تعليمية عالمية، تجمع بين التميز الأكاديمي والاهتمام بتنمية المهارات الحياتية والقيم الإنسانية. نحن نحرص على أن تكون مدرستنا بيئة آمنة وداعمة، تُعزز الثقة بالنفس، وتحترم التنوع، وتشجع الطلاب على تحقيق أقصى إمكاناتهم.",
        "ونحن نتطلع إلى المستقبل، نلتزم بالاستمرار في تطوير برامجنا التعليمية والاستثمار في أحدث الوسائل التكنولوجية والتربوية، لضمان أن طلابنا يكونون مستعدين لمواجهة تحديات القرن الحادي والعشرين بثقة وإبداع. هدفنا ليس فقط تخريج طلاب متميزين أكاديميًا، بل أيضًا قادة ملهمين ومواطنين عالميين يسهمون في بناء مجتمعاتهم.",
        "إلى أولياء الأمور الكرام، أتوجه بجزيل الشكر لثقتكم الغالية ودعمكم المستمر. شراكتكم معنا هي أساس نجاح أبنائنا، وبدعمكم سنواصل تحقيق رؤيتنا المشتركة في بناء جيل واعد ومستنير.",
        "أما طلابنا الأعزاء، فأنتم مصدر فخرنا وسبب وجودنا. أذكركم دائمًا بأن التميز ليس وصولًا إلى هدف، بل هو رحلة مستمرة من التعلم والنمو. ثقوا بأنفسكم، واجعلوا من أحلامكم وقودًا لتحقيق النجاح. أنتم قادة المستقبل، ونحن هنا لنساندكم في كل خطوة على هذا الطريق.",
        "شكرًا لانتمائكم إلى عائلة دنيا الأجيال. معًا، سنواصل السعي نحو التميز وبناء مستقبل مشرق لأجيالنا القادمة.",
      ]
    : [
        "Dear Parents, Students, and Esteemed Members of the Dunia Al-Ajial Community,",
        "It is with great pride and gratitude that I address you as the CEO of Dunia Al-Ajial International School. Our journey has been one of unwavering commitment to excellence, innovation, and the holistic development of every student entrusted to our care.",
        "At Dunia Al-Ajial, we believe that education is not just about academic achievement but about nurturing well-rounded individuals who are equipped to thrive in an ever-changing world. Our mission is to inspire curiosity, foster creativity, and instill a lifelong love for learning in every child. We strive to create an environment where students feel empowered to explore their potential, embrace diversity, and contribute meaningfully to society.",
        "Our dedicated team of educators, staff, and administrators work tirelessly to ensure that our students receive a world-class education that balances rigorous academics with character development and extracurricular enrichment. We are committed to providing a safe, inclusive, and supportive environment where every student can flourish.",
        "As we look to the future, we remain steadfast in our vision to be a beacon of educational excellence. We will continue to innovate, adapt, and grow, ensuring that our students are prepared to meet the challenges and opportunities of the 21st century with confidence and resilience.",
        "I extend my heartfelt thanks to our parents and guardians for your trust and partnership in this journey. Your support is invaluable, and together, we can continue to build a brighter future for our children.",
        "To our students, I encourage you to dream big, work hard, and never stop believing in yourselves. You are the leaders, thinkers, and changemakers of tomorrow, and we are honored to be part of your journey.",
        "Thank you for being part of the Dunia Al-Ajial family. Together, let us continue to strive for excellence and make a positive impact on the world.",
      ];

  const signatureName = isArabic ? "محمد فوده" : "Mohamed Fouda";
  const signatureRole = isArabic
    ? "الرئيس التنفيذي"
    : "CEO, Dunia Al-Ajial International School";

  return (
    <section className="section-muted relative overflow-hidden pt-28 md:pt-40">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      <div className="absolute -top-20 right-0 w-80 h-80 bg-violet-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] md:opacity-[0.04]">
        <img
          src="/images/logo.png"
          alt=""
          className="w-[320px] sm:w-[440px] md:w-[620px] lg:w-[760px] select-none"
        />
      </div>

      <div className="container-page relative z-10">
        {/* Internal Hero */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border p-6 md:p-10 lg:p-12"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in srgb, var(--bg-elevated) 92%, transparent) 0%, color-mix(in srgb, var(--accent-primary) 5%, var(--bg-elevated)) 100%)",
            borderColor: "color-mix(in srgb, var(--accent-primary) 10%, var(--border-color))",
            boxShadow: "0 24px 60px -34px rgba(15,23,42,.18)",
          }}
        >
          <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,.16),transparent_34%)]" />
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <span className="badge">{pageLabel}</span>

            <div className="mt-6">
              <div
                className="inline-flex items-center gap-3 rounded-full px-4 py-2 text-[11px] md:text-xs font-bold tracking-[0.18em] border"
                style={{
                  color: "var(--accent-primary)",
                  background: "color-mix(in srgb, var(--accent-primary) 8%, transparent)",
                  borderColor: "color-mix(in srgb, var(--accent-primary) 18%, transparent)",
                }}
              >
                <span className="inline-block h-2 w-2 rounded-full bg-violet-500" />
                {eyebrow}
              </div>
            </div>

            <h1
              className="mt-6 text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] lg:text-[3.8rem] font-serif font-bold leading-[1.08] tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              {pageTitle}
            </h1>

            <p
              className="mt-6 text-base md:text-lg lg:text-[1.08rem] leading-8 md:leading-9 max-w-3xl"
              style={{ color: "var(--text-secondary)" }}
            >
              {intro}
            </p>
          </div>
        </motion.div>

        {/* Main Letter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.36, ease: "easeOut" }}
          className="mt-8 md:mt-10"
        >
          <div
            className="relative overflow-hidden rounded-[1.8rem] md:rounded-[2.1rem] border p-6 md:p-10"
            style={{
              background: "var(--card-bg)",
              borderColor: "var(--card-border)",
              boxShadow: "0 20px 48px -34px rgba(15,23,42,.18)",
            }}
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,.10),transparent_34%)]" />
            <div className="absolute top-5 left-5 md:top-7 md:left-7 opacity-15 pointer-events-none">
              <Quote className="w-12 h-12 md:w-16 md:h-16 text-violet-500" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="space-y-5 md:space-y-6">
                {paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.28, delay: index * 0.03 }}
                    className="text-[1rem] md:text-[1.08rem] leading-8 md:leading-9"
                    style={{
                      color:
                        index === 0 ? "var(--text-primary)" : "var(--text-secondary)",
                      fontWeight: index === 0 ? 700 : 400,
                    }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Signature */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.32, delay: 0.15 }}
                className="mt-10 pt-7 border-t"
                style={{ borderColor: "color-mix(in srgb, var(--accent-primary) 12%, var(--border-color))" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-violet-200 shadow-md">
  <img
    src="/images/ceo.webp"
    alt={isArabic ? "صورة الرئيس التنفيذي" : "CEO portrait"}
    className="w-full h-full object-cover"
  />
</div>
                  </div>

                  <div>
                    <h3
                      className="text-xl md:text-2xl font-serif font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {signatureName}
                    </h3>
                    <p
                      className="mt-1 text-sm md:text-base"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {signatureRole}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.38, ease: "easeOut" }}
          className="mt-10 md:mt-12"
        >
          <div
            className="rounded-[1.7rem] md:rounded-[2rem] p-6 md:p-8 border relative overflow-hidden"
            style={{
              background: "var(--card-bg)",
              borderColor: "var(--border-color)",
              boxShadow: "0 18px 42px -30px rgba(15,23,42,.15)",
            }}
          >
            <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,.12),transparent_35%)]" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
              <div className="max-w-2xl">
                <h3
                  className="text-2xl md:text-3xl font-serif font-bold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {isArabic ? "معًا نبني مستقبلًا أكثر إشراقًا" : "Together, We Build a Brighter Future"}
                </h3>

                <p
                  className="text-base md:text-lg leading-8"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {isArabic
                    ? "تواصلوا معنا لاكتشاف المزيد عن رؤيتنا التعليمية، وبرامجنا، والفرص التي نقدمها لأبنائكم."
                    : "Discover more about our educational vision, academic programs, and the opportunities we offer for your child’s future."}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
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
                  to="/about/why-dais"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 md:px-8 py-3.5 text-sm md:text-base font-bold border transition-all duration-200 hover:-translate-y-[1px]"
                  style={{
                    color: "var(--text-primary)",
                    background: "color-mix(in srgb, var(--bg-elevated) 72%, transparent)",
                    borderColor: "color-mix(in srgb, var(--border-color) 85%, transparent)",
                  }}
                >
                  {isArabic ? "لماذا DAIS" : "Why DAIS"}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
