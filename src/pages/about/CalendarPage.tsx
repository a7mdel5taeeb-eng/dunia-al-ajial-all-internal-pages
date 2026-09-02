import { Download, ExternalLink, FileText } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../contexts/LanguageContext";
import PageHero from "../../components/PageHero";

const calendarPdf = "/documents/dais-calendar-2026-2027.pdf";

export default function CalendarPage() {
  const { language, dir } = useLanguage();
  const isArabic = language === "ar";

  return (
    <main className="section-muted min-h-screen pb-16 md:pb-24" dir={dir}>
      <PageHero
        eyebrow={isArabic ? "عن المدرسة" : "About Us"}
        title={isArabic ? "التقويم الأكاديمي 2026/2027" : "Academic Calendar 2026/2027"}
        description={
          isArabic
            ? "اطّلع على مواعيد الدراسة والإجازات والاختبارات والفعاليات المهمة للعام الدراسي."
            : "View term dates, holidays, assessments, and important school events for the academic year."
        }
      />

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.08 }}
        className="container-page mt-8 md:mt-10"
      >
        <div className="card overflow-hidden p-3 md:p-5">
          <div className="mb-4 flex flex-col gap-3 border-b pb-4 sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: "var(--border-color)" }}>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-300">
                <FileText className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-bold" style={{ color: "var(--text-primary)" }}>
                  {isArabic ? "تقويم مدارس دنيا الأجيال" : "Dunia Al-Ajial School Calendar"}
                </h2>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  PDF · 2026/2027
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href={calendarPdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition-colors hover:bg-violet-500/10"
                style={{ borderColor: "var(--border-color)", color: "var(--text-primary)" }}
              >
                <ExternalLink className="h-4 w-4" />
                {isArabic ? "فتح بحجم كامل" : "Open full screen"}
              </a>
              <a
                href={calendarPdf}
                download="DAIS-Calendar-2026-2027.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }}
              >
                <Download className="h-4 w-4" />
                {isArabic ? "تحميل التقويم" : "Download calendar"}
              </a>
            </div>
          </div>

          <object data={calendarPdf} type="application/pdf" className="h-[72vh] min-h-[580px] w-full rounded-xl border" style={{ borderColor: "var(--border-color)" }}>
            <p className="p-6 text-center" style={{ color: "var(--text-secondary)" }}>
              {isArabic ? "لا يدعم متصفحك العرض المباشر للملف." : "Your browser does not support embedded PDFs."}{" "}
              <a href={calendarPdf} target="_blank" rel="noreferrer" className="font-bold text-violet-600 underline">
                {isArabic ? "افتح التقويم" : "Open the calendar"}
              </a>
            </p>
          </object>
        </div>
      </motion.section>
    </main>
  );
}
