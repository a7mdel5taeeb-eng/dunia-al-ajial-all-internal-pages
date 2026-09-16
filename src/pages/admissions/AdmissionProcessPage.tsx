import { motion } from "motion/react";
import {
  ArrowRight,
  CalendarCheck,
  ClipboardCheck,
  CreditCard,
  FileText,
  Globe,
  HelpCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const schoolWebsite = "www.dais-schools.com";

export default function AdmissionProcessPage() {
  const { language, dir } = useLanguage();
  const isArabic = language === "ar";

  const steps = isArabic
    ? [
        {
          title: "التسجيل الإلكتروني",
          icon: Globe,
          content: [
            `زيارة الرابط: ${schoolWebsite}`,
            "قراءة اللوائح والأنظمة والموافقة عليها.",
            "إدخال المعلومات المطلوبة.",
            "حجز موعد للمقابلة أو الاختبار.",
          ],
        },
        {
          title: "الحضور للاختبار",
          icon: ClipboardCheck,
          content: [
            "الحضور قبل الموعد المحدد بـ 10 دقائق.",
            "استقبال رسالة بريد إلكتروني بنتيجة الاختبار أو المقابلة خلال يومين.",
          ],
        },
        {
          title: "دفع الرسوم",
          icon: CreditCard,
          content: [
            "تسديد رسوم حجز المقعد في إدارة المدرسة.",
            "حجز المقاعد للصف الثاني فأعلى يتطلب إحضار مخالصة مالية من المدرسة السابقة وصورة من آخر شهادة دراسية.",
          ],
        },
        {
          title: "ملف الطالب",
          icon: FileText,
          content: ["تسليم ملف الطالب لإدارة المدرسة بشكل حضوري."],
        },
      ]
    : [
        {
          title: "Apply Online",
          icon: Globe,
          content: [
            `Visit the following link: ${schoolWebsite}`,
            "Read and accept our terms and conditions.",
            "Enter all required fields.",
            "Book an appointment for a MAP test / interview.",
          ],
        },
        {
          title: "Attend the Test",
          icon: ClipboardCheck,
          content: [
            "Arrive 10 minutes before the placement test.",
            "Results are normally received by email within 2 days.",
          ],
        },
        {
          title: "Pay a Deposit",
          icon: CreditCard,
          content: [
            "Pay a deposit or full fees to confirm a seat in the school.",
            "Seat reservations for Grade 2 and above require a financial clearance from the previous school and a copy of the last academic certificate.",
          ],
        },
        {
          title: "Submit",
          icon: FileText,
          content: ["Submit the student's file in person to the registration office."],
        },
      ];

  const eyebrow = isArabic ? "القبول والتسجيل" : "Admissions";
  const mainTitle = isArabic ? "إجراءات القبول" : "Admission Process";
  const heroTitle = isArabic
    ? "هنا تبدأ الرحلة لمستقبلٍ مشرق لطفلك"
    : "Where the Journey Begins";
  const heroText = isArabic
    ? "بالتعليم والتمكين، نضيء له الطريق نحو النجاح. سجّل الآن لضمان حجز مقعده في رحلتنا التعليمية المتطورة."
    : "We are delighted that you are interested in applying. Choosing the right school for your child is one of the most important decisions you will make, so we have created a clear and supportive step-by-step process.";

  const processLabel = isArabic
    ? "القبول في أربع خطوات بسيطة"
    : "Admission in Four Simple Steps";

  const helpTitle = isArabic ? "معلومات المساعدة" : "Help Information";
  const helpText = isArabic
    ? "يجب إكمال طلب التسجيل من خلال الموقع الإلكتروني. إذا لم تكن هناك مقاعد متاحة وقت التقديم، فسيتم تسجيل الطالب في قائمة الانتظار. وإذا كانت لديكم أي استفسارات أخرى، يرجى التواصل مع مكتب القبول والتسجيل، ويسعدنا مساعدتكم."
    : "Applications must be completed online through the school website. If there are no available seats at the time of application, the student will be placed on the school waiting list. If you have any additional questions, please contact the office of admission and we will be happy to help you.";

  const noteTitle = isArabic ? "ملاحظة مهمة" : "Important Note";
  const noteText = isArabic
    ? "قبول حجز المقاعد للصف الثاني فأعلى يتطلب إحضار مخالصة مالية من المدرسة السابقة، وصورة من آخر شهادة دراسية."
    : "Seat reservations for Grade 2 and above require a financial clearance from the previous school and a copy of the latest academic certificate.";

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
          className="max-w-6xl mx-auto"
        >
          <div
            className="relative overflow-hidden rounded-[1.75rem] md:rounded-[2rem] min-h-[320px] md:min-h-[430px] border"
            style={{
              borderColor: "color-mix(in srgb, var(--accent-primary) 10%, var(--border-color))",
              backgroundImage: "url('/images/admission-process-hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 24px 60px -30px rgba(15,23,42,.22)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#190d2f]/95 via-[#3b195f]/62 to-[#1d133c]/24" />
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400/20 via-transparent to-amber-200/12" />
            <div aria-hidden="true" className="absolute -top-14 right-10 h-48 w-48 rounded-full border border-fuchsia-100/20 bg-fuchsia-300/10" />
            <div aria-hidden="true" className="absolute left-12 top-12 h-24 w-24 rotate-45 rounded-2xl border border-white/15 bg-amber-200/10" />

            <div className="relative z-10 flex min-h-[320px] md:min-h-[430px] flex-col items-center justify-end px-5 py-5 md:px-10 md:py-10 text-center">
              <div className="w-full max-w-4xl rounded-[1.6rem] border border-white/15 bg-slate-950/25 px-5 py-6 backdrop-blur-md md:rounded-[1.9rem] md:px-10 md:py-9">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold text-white bg-white/10 border-white/20 backdrop-blur-sm">
                {eyebrow}
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-bold font-serif tracking-tight text-white">
                {mainTitle}
              </h1>

              <p className="mt-5 text-xl md:text-2xl font-semibold text-white/95">
                {heroTitle}
              </p>

              <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg leading-8 md:leading-9 text-white/90">
                {heroText}
              </p>

              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link
                  to="/admissions/online-application"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm md:text-base font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-[1px]"
                  style={{
                    color: "#ffffff",
                    background:
                      "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                  }}
                >
                  {isArabic ? "ابدأ التسجيل الآن" : "Start Application"}
                </Link>

                <a
                  href={`https://${schoolWebsite}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm md:text-base font-bold border transition-all duration-200 hover:-translate-y-[1px]"
                  style={{
                    color: "#ffffff",
                    borderColor: "rgba(255,255,255,.18)",
                    background: "rgba(255,255,255,.08)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                >
                  {isArabic ? "زيارة الموقع" : "Visit Website"}
                </a>
              </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35 }}
          className="max-w-6xl mx-auto mt-16 text-center"
        >
          <h2
            className="text-2xl md:text-3xl font-bold font-serif"
            style={{ color: "var(--text-primary)" }}
          >
            {processLabel}
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto mt-10 md:mt-14 relative pb-8 md:pb-12">
          <div
            className="hidden md:block absolute top-8 left-[12%] right-[12%] h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-secondary), transparent)",
              opacity: 0.45,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="relative"
                >
                  <div className="flex justify-center md:mb-5 mb-4 relative z-10">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg border"
                      style={{
                        background:
                          "linear-gradient(135deg,var(--accent-primary),var(--accent-secondary))",
                        color: "#ffffff",
                        borderColor: "rgba(255,255,255,.12)",
                        boxShadow: "0 16px 34px rgba(109,40,217,.22)",
                      }}
                    >
                      <Icon size={28} />
                    </div>
                  </div>

                  <div
                    className="rounded-[1.8rem] border p-6 md:p-5 h-full min-h-[360px] text-center md:text-start"
                    style={{
                      background: "color-mix(in srgb, var(--bg-elevated) 88%, transparent)",
                      borderColor:
                        "color-mix(in srgb, var(--accent-primary) 12%, var(--border-color))",
                      boxShadow: "0 18px 50px -32px rgba(15,23,42,.22)",
                    }}
                  >
                    <div
                      className="text-sm font-bold mb-2"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      {isArabic ? `الخطوة ${index + 1}` : `Step ${index + 1}`}
                    </div>

                    <h3
                      className="text-2xl font-bold font-serif mb-4"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {step.title}
                    </h3>

                    <ul
                      className={`space-y-3 text-sm md:text-[0.96rem] leading-7 marker:text-violet-500 ${
                        isArabic ? "list-disc pe-5" : "list-disc ps-5"
                      }`}
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {step.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35 }}
            className="rounded-[1.8rem] border p-6 md:p-7"
            style={{
              background: "color-mix(in srgb, var(--bg-elevated) 86%, transparent)",
              borderColor: "color-mix(in srgb, #f59e0b 16%, var(--border-color))",
              boxShadow: "0 18px 50px -32px rgba(15,23,42,.22)",
            }}
          >
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300 shrink-0">
                <CalendarCheck className="w-7 h-7" />
              </div>

              <div>
                <h3
                  className="text-xl md:text-2xl font-bold font-serif mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  {noteTitle}
                </h3>

                <p
                  className="text-[0.98rem] md:text-[1.02rem] leading-8"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {noteText}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="rounded-[1.8rem] border p-6 md:p-7"
            style={{
              background: "color-mix(in srgb, var(--bg-elevated) 86%, transparent)",
              borderColor: "color-mix(in srgb, #3b82f6 16%, var(--border-color))",
              boxShadow: "0 18px 50px -32px rgba(15,23,42,.22)",
            }}
          >
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300 shrink-0">
                <HelpCircle className="w-7 h-7" />
              </div>

              <div>
                <h3
                  className="text-xl md:text-2xl font-bold font-serif mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  {helpTitle}
                </h3>

                <p
                  className="text-[0.98rem] md:text-[1.02rem] leading-8"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {helpText}
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
