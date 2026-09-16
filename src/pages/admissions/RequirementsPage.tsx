import { motion } from "motion/react";
import {
  ArrowRight,
  FileCheck2,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

export default function RequirementsPage() {
  const { language, dir } = useLanguage();
  const isArabic = language === "ar";

  const documents = isArabic
    ? [
        "صورة شهادة الميلاد",
        "صورة جواز السفر / كارت العائلة / الهوية (للطالب وولي الأمر)",
        "أصل الشهادات من المدرسة السابقة",
        "خطاب مخالصة مالية من المدرسة السابقة",
        "آخر شهادة حصل عليها الطالب معتمدة وموثقة من وزارة الخارجية والسفارة السعودية، وذلك للقادمين من الدول الأخرى",
        "سجل التطعيمات",
        "تقرير طبي",
        "صور شخصية حديثة (عدد: 4)",
      ]
    : [
        "Birth Certificate (Copy)",
        "Passport / Family Card / ID Copy (Student & Parents)",
        "Previous School Report Cards (Originals)",
        "A Financial Clearance Letter from the Previous School",
        "The Most Recent Certificate, approved and stamped by the Ministry of Foreign Affairs and the Saudi Embassy (required for applicants arriving from abroad)",
        "Vaccination Records",
        "Medical Report",
        "4 Recent Passport-Sized Photos",
      ];

  const eyebrow = isArabic ? "القبول والتسجيل" : "Admissions";
  const mainTitle = isArabic ? "المتطلبات" : "Requirements";
  const heroTitle = isArabic
    ? "المستندات المطلوبة لإتمام طلب القبول"
    : "Required Documents to Complete Your Application";
  const heroText = isArabic
    ? "جمعنا لك جميع المستندات الأساسية المطلوبة لإتمام إجراءات التقديم والقبول في صفحة واحدة واضحة ومنظمة لتسهيل رحلة التسجيل."
    : "We gathered all essential documents required to complete the admission process in one clear and organized page to make your application journey easier.";

  const highlightTitle = isArabic ? "تنبيه مهم" : "Important Notice";
  const highlightText = isArabic
    ? "الطلاب القادمون من خارج المملكة يجب أن تكون آخر شهادة دراسية معتمدة وموثقة رسميًا من وزارة الخارجية والسفارة السعودية قبل استكمال إجراءات القبول."
    : "Students arriving from abroad must submit their latest academic certificate duly approved and stamped by the Ministry of Foreign Affairs and the Saudi Embassy before completing admission procedures.";

  const extraTitle = isArabic ? "مراجعة الملف" : "File Review";
  const extraText = isArabic
    ? "يُرجى التأكد من أن جميع المستندات واضحة وسارية ومكتملة قبل رفعها أو تسليمها، حتى لا يتأخر طلب القبول."
    : "Please ensure that all documents are clear, valid, and complete before submission to avoid delays in the admission process.";

  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-20">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-violet-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-fuchsia-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative max-w-6xl mx-auto overflow-hidden rounded-[2rem] border p-7 text-center md:p-12"
          style={{
            background: "linear-gradient(90deg, rgba(3,10,28,.9), rgba(7,15,38,.54)), url('/images/admissions-documents-hero-v2.png') center / cover",
            borderColor: "rgba(167,139,250,.28)",
            boxShadow: "0 24px 55px -34px rgba(15,23,42,.55)",
          }}
        >
          <div className="relative inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold border-white/20 bg-slate-950/30 text-violet-200 backdrop-blur-md">
            {eyebrow}
          </div>

          <h1
            className="mt-6 text-4xl md:text-6xl font-bold font-serif tracking-tight"
            style={{ color: "#fff" }}
          >
            {mainTitle}
          </h1>

          <p
            className="mt-5 text-xl md:text-2xl font-semibold"
            style={{ color: "rgba(255,255,255,.96)" }}
          >
            {heroTitle}
          </p>

          <p
            className="mt-5 max-w-3xl mx-auto text-base md:text-lg leading-8 md:leading-9"
            style={{ color: "rgba(255,255,255,.82)" }}
          >
            {heroText}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35 }}
            className="rounded-[1.8rem] border p-6 md:p-8"
            style={{
              background: "color-mix(in srgb, var(--bg-elevated) 90%, transparent)",
              borderColor: "color-mix(in srgb, var(--accent-primary) 12%, var(--border-color))",
              boxShadow: "0 18px 50px -32px rgba(15,23,42,.22)",
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300 shrink-0">
                <FileCheck2 className="w-7 h-7" />
              </div>

              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold font-serif"
                  style={{ color: "var(--text-primary)" }}
                >
                  {isArabic ? "المستندات المطلوبة" : "Required Documents"}
                </h2>
                <p
                  className="mt-2 text-sm md:text-base"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {isArabic
                    ? "يرجى تجهيز المستندات التالية لإكمال إجراءات القبول والتسجيل"
                    : "Please prepare the following documents to complete the admission and registration process"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-[1.2rem] border p-4"
                  style={{
                    background: "color-mix(in srgb, var(--bg-elevated) 96%, transparent)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  <span
                    className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                      color: "#ffffff",
                    }}
                  >
                    ✓
                  </span>

                  <p
                    className="text-[0.98rem] md:text-[1.02rem] leading-8"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="rounded-[1.8rem] border p-6 md:p-7"
            style={{
              background: "color-mix(in srgb, var(--bg-elevated) 88%, transparent)",
              borderColor: "color-mix(in srgb, #f59e0b 16%, var(--border-color))",
              boxShadow: "0 18px 50px -32px rgba(15,23,42,.22)",
            }}
          >
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300 shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>

              <div>
                <h3
                  className="text-xl md:text-2xl font-bold font-serif mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  {highlightTitle}
                </h3>

                <p
                  className="text-[0.98rem] md:text-[1.02rem] leading-8"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {highlightText}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: 0.12 }}
            className="rounded-[1.8rem] border p-6 md:p-7"
            style={{
              background: "color-mix(in srgb, var(--bg-elevated) 88%, transparent)",
              borderColor: "color-mix(in srgb, #10b981 16%, var(--border-color))",
              boxShadow: "0 18px 50px -32px rgba(15,23,42,.22)",
            }}
          >
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300 shrink-0">
                <Stethoscope className="w-7 h-7" />
              </div>

              <div>
                <h3
                  className="text-xl md:text-2xl font-bold font-serif mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  {extraTitle}
                </h3>

                <p
                  className="text-[0.98rem] md:text-[1.02rem] leading-8"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {extraText}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
          <Link
            to="/admissions/online-application"
            className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm md:text-base font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-[1px]"
            style={{
              color: "#ffffff",
              background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
            }}
          >
            {isArabic ? "ابدأ التسجيل الآن" : "Start Application"}
          </Link>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-200 shadow-sm hover:shadow-md"
            style={{
              color: "#ffffff",
              background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
            }}
          >
            {isArabic ? "العودة للرئيسية" : "Back to Home"}
            <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </div>
    </section>
  );
}
