import { Mail, Sparkles, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

type CareerSection = {
  titleEn: string;
  titleAr: string;
  bodyEn: string;
  bodyAr: string;
  icon: React.ComponentType<{ className?: string }>;
};

type CareerAction = {
  labelEn: string;
  labelAr: string;
  href: string;
  external?: boolean;
};

const careerData = {
  badgeEn: "Careers",
  badgeAr: "الوظائف",
  titleEn: "Join Our Team",
  titleAr: "انضم إلى فريقنا",
  introEn:
    "At Dunia Al-Ajial International School, we believe that great educators and staff shape the future. We are always looking for passionate, innovative, and dedicated professionals to join our dynamic team.",
  introAr:
    "في مدارس دنيا الأجيال الدولية، نؤمن بأن المعلمين والموظفين المتميزين هم من يصنعون المستقبل. ونحن دائمًا نبحث عن مهنيين شغوفين، ومبتكرين، ومخلصين للانضمام إلى فريقنا الحيوي.",
  sections: [
    {
      titleEn: "Why Work With Us?",
      titleAr: "لماذا العمل معنا؟",
      bodyEn:
        "Inspiring Environment – Be part of a forward-thinking institution committed to academic excellence and holistic development.\n\nProfessional Growth – Access to continuous training, workshops, and career advancement opportunities.\n\nDiverse & Inclusive Culture – Work in a multicultural community that values collaboration and creativity.\n\nCompetitive Benefits – Attractive remuneration, health insurance, and other perks.",
      bodyAr:
        "بيئة ملهمة – كن جزءًا من مؤسسة تعليمية تتطلع إلى المستقبل وتلتزم بالتميز الأكاديمي والتنمية الشاملة.\n\nالنمو المهني – الاستفادة من التدريب المستمر، وورش العمل، وفرص التطور الوظيفي.\n\nثقافة متنوعة وشاملة – العمل في مجتمع متعدد الثقافات يقدّر التعاون والإبداع.\n\nمزايا تنافسية – رواتب مجزية، وتأمين صحي، ومزايا أخرى.",
      icon: Sparkles,
    },
    {
      titleEn: "Current Openings",
      titleAr: "الوظائف المتاحة",
      bodyEn:
        "We regularly seek talented individuals for roles such as:\n\n• Teachers (all subjects, American curriculum experience preferred)\n• Administrative Staff (Admissions, HR, Finance)\n• Support Staff (IT, Counselors)\n• Leadership Positions (Department Heads, Coordinators)",
      bodyAr:
        "نبحث بشكل مستمر عن كوادر متميزة لشغل وظائف مثل:\n\n• معلمون ومعلمات (في جميع المواد، ويفضل وجود خبرة في المنهج الأمريكي)\n• موظفون إداريون (القبول، الموارد البشرية، المالية)\n• فرق الدعم (تقنية المعلومات، المرشدون)\n• مناصب قيادية (رؤساء أقسام، منسقون)",
      icon: Users,
    },
    {
      titleEn: "How to Apply",
      titleAr: "طريقة التقديم",
      bodyEn:
        "Interested candidates are invited to:\n\n1. Send a CV and cover letter to hr@duniaalajial.edu.sa\n2. Specify the position in the email subject line\n3. Shortlisted candidates will be contacted for interviews\n\nJoin us in nurturing tomorrow’s leaders!",
      bodyAr:
        "ندعو المهتمين للتقديم من خلال:\n\n1. إرسال السيرة الذاتية وخطاب التقديم إلى hr@duniaalajial.edu.sa\n2. كتابة اسم الوظيفة في عنوان البريد الإلكتروني\n3. سيتم التواصل مع المرشحين المختارين لإجراء المقابلات\n\nانضم إلينا في صناعة قادة الغد!",
      icon: Mail,
    },
  ] as CareerSection[],
  actions: [
    {
      labelEn: "Apply by Email",
      labelAr: "قدّم عبر البريد",
      href: "mailto:hr@duniaalajial.edu.sa?subject=Job%20Application%20-%20Dunia%20Al-Ajial%20International%20School",
      external: true,
    },
  ] as CareerAction[],
};

export default function CareerPage() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const isArabic = language === "ar";
  const isDark = theme === "dark";

  return (
    <main
      className="min-h-screen pt-32 pb-16 transition-colors duration-300"
      style={{
        backgroundColor: isDark ? "#020617" : "#f5f7fb",
      }}
    >
      <section className="container-page">
        <div
          className="relative overflow-hidden rounded-[2rem] border p-6 md:p-10 lg:p-12"
          style={{
            background:
              "linear-gradient(90deg, rgba(3,10,28,.9) 0%, rgba(7,15,38,.58) 60%, rgba(7,15,38,.28) 100%), url('/images/leadership-hero-v2.png') center / cover",
            borderColor: "rgba(167,139,250,.28)",
            boxShadow: "0 24px 55px -34px rgba(15,23,42,.55)",
          }}
        >
        <div className="relative z-10 max-w-4xl">
          <div
            className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold mb-6 transition-colors duration-300"
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.35)",
              borderColor: "rgba(255,255,255,.2)",
              color: "#ede9fe",
            }}
          >
            {isArabic ? careerData.badgeAr : careerData.badgeEn}
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6 transition-colors duration-300"
            style={{
              color: "#ffffff",
            }}
          >
            {isArabic ? careerData.titleAr : careerData.titleEn}
          </h1>

          <p
            className="text-lg leading-8 max-w-3xl transition-colors duration-300"
            style={{
              color: "rgba(255,255,255,.84)",
            }}
          >
            {isArabic ? careerData.introAr : careerData.introEn}
          </p>
        </div>
        </div>

        <div className="grid gap-6 mt-12">
          {careerData.sections.map((section) => {
            const Icon = section.icon;

            return (
              <div
                key={section.titleEn}
                className="rounded-3xl border p-6 md:p-8 shadow-sm transition-colors duration-300"
                style={{
                  backgroundColor: isDark ? "#0f172a" : "#ffffff",
                  borderColor: isDark ? "#334155" : "#e2e8f0",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 rounded-2xl p-3 transition-colors duration-300"
                    style={{
                      backgroundColor: isDark
                        ? "rgba(139, 92, 246, 0.15)"
                        : "#ede9fe",
                      color: isDark ? "#c4b5fd" : "#6d28d9",
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <h2
                      className="text-2xl font-bold mb-4 transition-colors duration-300"
                      style={{
                        color: isDark ? "#ffffff" : "#0f172a",
                      }}
                    >
                      {isArabic ? section.titleAr : section.titleEn}
                    </h2>

                    <div
                      className="leading-8 whitespace-pre-line transition-colors duration-300"
                      style={{
                        color: isDark ? "#cbd5e1" : "#475569",
                      }}
                    >
                      {isArabic ? section.bodyAr : section.bodyEn}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          {careerData.actions.map((action) => (
            <a
              key={action.href}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noreferrer" : undefined}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-[1px] hover:shadow-md"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
              }}
            >
              {isArabic ? action.labelAr : action.labelEn}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
