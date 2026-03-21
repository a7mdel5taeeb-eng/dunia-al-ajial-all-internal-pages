import { motion } from "motion/react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";

export default function FinancialSystemPage() {
  const { language, dir } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const content =
    language === "ar"
      ? {
          badge: "سياسة القبول",
          title: "النظام المالي",
          subtitle:
            "إطار مالي وتنظيمي يحدد الحقوق والالتزامات بين ولي الأمر والمدرسة، ويُعد مرجعًا رسميًا للعلاقة التعاقدية بين الطرفين بدءًا من العام الدراسي الحالي.",
          introTitle: "مقدمة",
          introText:
            "يحدد هذا النظام حقوق والتزامات كلا الطرفين – ولي الأمر والمدرسة – ويشكل اتفاقًا ملزمًا بينهما. ويتعهد كلا الطرفين بالالتزام بهذا الاتفاق بدءًا من العام الدراسي الحالي. ويتم تجديد هذا العقد بموافقة الطرفين المعنيين. ووفقًا لسياسة المدرسة، فإن وجود ملف الطالب في سجلات المدرسة يُعتبر موافقة رسمية بين الطرفين.",

          discountTitle: "القاعدة (1): نظام الخصومات",
          discountItems: [
            {
              title: "خصم الإخوة",
              body: "تقدم المدرسة خصمًا قدره 500 ريال للشقيق الثاني، والثالث، وهكذا.",
            },
            {
              title: "خصم السداد المبكر",
              body: "يتم منح خصم إضافي 5% للطلاب الذين يسددون الرسوم كاملة خلال الأسبوع الأول من العام الدراسي.",
            },
            {
              title: "عدم تطبيق الخصم بسبب الغياب",
              body: "لا يتم منح أي خصم بناءً على غياب الطالب، بغض النظر عن مدته.",
            },
          ],

          withdrawalTitle: "القاعدة (2): نظام الانسحاب",
          withdrawalIntro:
            "تنظم المدرسة إجراءات الانسحاب والالتزامات المالية المرتبطة بها وفقًا للضوابط التالية:",
          withdrawalItems: [
            {
              title: "سحب ملف الطالب قبل بداية العام الدراسي",
              body: "يجب بدء إجراءات سحب الملف قبل بدء العام الدراسي لتمكين المدرسة من تخصيص المقعد لطالب آخر. ويُعتبر وجود ملف الطالب في سجلات المدرسة موافقة على استمرار التسجيل.",
            },
            {
              title: "خلال الأسبوع الأول من الفصل الدراسي",
              body: "يتم دفع 25% من رسوم الفصل الدراسي.",
            },
            {
              title: "خلال الأسبوع الثاني من الفصل الدراسي",
              body: "يتم دفع 50% من رسوم الفصل الدراسي.",
            },
            {
              title: "بدءًا من الأسبوع الثالث فصاعدًا",
              body: "يتم دفع رسوم الفصل الدراسي كاملة.",
            },
            {
              title: "ملاحظة مهمة",
              body: "يُطبق هذا النظام على الرسوم الدراسية فقط.",
            },
          ],

          regulationsTitle: "القاعدة (3): اللوائح الأساسية",
          regulationsItems: [
            {
              title: "قواعد السلوك",
              body: "يجب على الطلاب وأولياء الأمور الالتزام بالقيم الإسلامية والآداب العامة داخل المدرسة وخارجها.",
            },
            {
              title: "مسؤولية ولي الأمر",
              body: "تحتفظ المدرسة بحق إلزام ولي الأمر بسحب ملف الطالب في حال مخالفة ولي الأمر لسياسات المدرسة أو تصرفه بشكل غير لائق تجاهها أو تجاه موظفيها.",
            },
            {
              title: "سياسات المدرسة",
              body: "يجب الالتزام بكافة لوائح المدرسة، بما في ذلك الزي المدرسي.",
            },
            {
              title: "الإجراءات التأديبية",
              body: "يحق لإدارة المدرسة فصل أي طالب في حال تأثير سلوكه سلبًا على سمعة المدرسة.",
            },
            {
              title: "الالتزامات المالية",
              body: "يجوز للمدرسة احتجاز ملف الطالب حتى تسديد كافة المستحقات المالية. ويؤدي تأخير سداد الرسوم إلى حرمان ولي الأمر من متابعة تقارير التحصيل الدراسي للطالب.",
            },
          ],

          noticeTitle: "إشعار رسمي",
          noticeText:
            "وفقًا لسياسة المدرسة، فإن وجود ملف الطالب في سجلات المدرسة يُعد موافقة رسمية بين ولي الأمر والمدرسة على جميع البنود الواردة في هذا النظام.",
        }
      : {
          badge: "Admissions Policy",
          title: "Financial System",
          subtitle:
            "A formal financial and regulatory framework that defines the rights and obligations of both the parent and the school, serving as an official reference for the agreement between both parties.",
          introTitle: "Overview",
          introText:
            "This system defines the rights and obligations of both parties – the parent and the school – and forms a binding agreement between them. Both parties commit to adhering to this agreement starting from the current academic year. This contract is renewed by mutual consent of the concerned parties. According to school policy, the presence of a student's file in the school's records is considered formal agreement between the two parties.",

          discountTitle: "Rule (1): Discount System",
          discountItems: [
            {
              title: "Sibling Discount",
              body: "The school offers a discount of 500 Riyals for the second sibling, the third, and so on.",
            },
            {
              title: "Early Payment Discount",
              body: "An additional 5% discount is granted to students who pay the fees in full during the first week of the academic year.",
            },
            {
              title: "No Discount for Absence",
              body: "No discount is granted based on the student's absence, regardless of its duration.",
            },
          ],

          withdrawalTitle: "Rule (2): Withdrawal System",
          withdrawalIntro:
            "Withdrawal procedures and applicable financial obligations are regulated as follows:",
          withdrawalItems: [
            {
              title: "Before the Start of the Academic Year",
              body: "Withdrawal procedures must be initiated before the start of the academic year to enable the school to allocate the seat to another student. The presence of the student's file in the school's records is considered acceptance of continued registration.",
            },
            {
              title: "During the First Week of the Semester",
              body: "25% of the semester's fees must be paid.",
            },
            {
              title: "During the Second Week of the Semester",
              body: "50% of the semester's fees must be paid.",
            },
            {
              title: "From the Third Week Onwards",
              body: "The full semester fees must be paid.",
            },
            {
              title: "Important Note",
              body: "This system applies to tuition fees only.",
            },
          ],

          regulationsTitle: "Rule (3): Core Regulations",
          regulationsItems: [
            {
              title: "Code of Conduct",
              body: "Students and parents must adhere to Islamic values and general etiquette inside and outside the school.",
            },
            {
              title: "Parent's Responsibility",
              body: "The school reserves the right to obligate the parent to withdraw the student's file if the parent violates school policies or acts inappropriately towards the school or its staff.",
            },
            {
              title: "School Policies",
              body: "All school regulations must be observed, including the school uniform policy.",
            },
            {
              title: "Disciplinary Procedures",
              body: "The school administration has the right to dismiss any student if their behavior negatively affects the school's reputation.",
            },
            {
              title: "Financial Obligations",
              body: "The school may withhold the student's file until all financial dues are settled. Delayed payment of fees results in the parent being denied access to the student's academic progress reports.",
            },
          ],

          noticeTitle: "Official Notice",
          noticeText:
            "According to school policy, the existence of a student's file in the school's records is considered an official agreement between the parent and the school regarding the terms stated in this system.",
        };

  return (
    <>
      <section className="relative overflow-hidden pt-28 md:pt-36 pb-14 md:pb-20">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: isDark
                ? "linear-gradient(180deg, #020617 0%, #0f172a 52%, #111827 100%)"
                : "linear-gradient(180deg, #f8fafc 0%, #eef2ff 48%, #ffffff 100%)",
            }}
          />
          <div className="absolute top-[-80px] right-[8%] h-72 w-72 rounded-full bg-violet-500/15 blur-[110px] pointer-events-none" />
          <div className="absolute bottom-[-60px] left-[6%] h-72 w-72 rounded-full bg-sky-500/10 blur-[110px] pointer-events-none" />
        </div>

        <div className="container-page relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-5xl"
          >
            <div
              className="inline-flex items-center gap-3 rounded-full px-4 py-2 md:px-5 md:py-2.5 text-[10px] md:text-[11px] font-bold tracking-[0.16em] md:tracking-[0.22em] backdrop-blur-md"
              style={{
                color: isDark ? "rgba(255,255,255,.92)" : "#6d28d9",
                background: isDark ? "rgba(255,255,255,.06)" : "rgba(255,255,255,.72)",
                border: isDark
                  ? "1px solid rgba(255,255,255,.14)"
                  : "1px solid rgba(109,40,217,.12)",
              }}
            >
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ background: isDark ? "#c4b5fd" : "#8b5cf6" }}
              />
              {content.badge}
            </div>

            <h1
              className="mt-6 text-[2.3rem] sm:text-5xl md:text-7xl lg:text-[82px] font-serif font-bold leading-[1.04] tracking-tight"
              style={{ color: isDark ? "#ffffff" : "#0f172a" }}
            >
              {content.title}
            </h1>

            <p
              className="mt-6 max-w-4xl text-base sm:text-lg md:text-2xl leading-8 md:leading-loose"
              style={{ color: isDark ? "rgba(255,255,255,.80)" : "#475569" }}
            >
              {content.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-16 md:pb-24">
        <div className="container-page space-y-8 md:space-y-10">
          <div
            className="rounded-[2rem] p-6 md:p-8"
            style={{
              background: isDark ? "rgba(255,255,255,.05)" : "rgba(255,255,255,.82)",
              border: isDark
                ? "1px solid rgba(255,255,255,.08)"
                : "1px solid rgba(148,163,184,.14)",
              boxShadow: isDark
                ? "0 20px 50px -30px rgba(0,0,0,.45)"
                : "0 20px 50px -30px rgba(15,23,42,.12)",
            }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ color: isDark ? "#ffffff" : "#0f172a" }}
            >
              {content.introTitle}
            </h2>
            <p
              className="mt-4 text-sm md:text-lg leading-8"
              style={{ color: isDark ? "rgba(255,255,255,.78)" : "#475569" }}
            >
              {content.introText}
            </p>
          </div>

          <div>
            <h2
              className="text-2xl md:text-4xl font-bold"
              style={{ color: isDark ? "#ffffff" : "#0f172a" }}
            >
              {content.discountTitle}
            </h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {content.discountItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[1.75rem] p-5 md:p-6"
                  style={{
                    background: isDark ? "rgba(255,255,255,.05)" : "rgba(255,255,255,.84)",
                    border: isDark
                      ? "1px solid rgba(255,255,255,.08)"
                      : "1px solid rgba(148,163,184,.14)",
                    boxShadow: isDark
                      ? "0 20px 50px -30px rgba(0,0,0,.45)"
                      : "0 20px 50px -30px rgba(15,23,42,.12)",
                  }}
                >
                  <h3
                    className="text-xl md:text-2xl font-bold"
                    style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-3 text-sm md:text-base leading-7"
                    style={{ color: isDark ? "rgba(255,255,255,.72)" : "#475569" }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-[2rem] p-6 md:p-8"
            style={{
              background: isDark ? "rgba(255,255,255,.05)" : "rgba(255,255,255,.82)",
              border: isDark
                ? "1px solid rgba(255,255,255,.08)"
                : "1px solid rgba(148,163,184,.14)",
              boxShadow: isDark
                ? "0 20px 50px -30px rgba(0,0,0,.45)"
                : "0 20px 50px -30px rgba(15,23,42,.12)",
            }}
          >
            <h2
              className="text-2xl md:text-4xl font-bold"
              style={{ color: isDark ? "#ffffff" : "#0f172a" }}
            >
              {content.withdrawalTitle}
            </h2>

            <p
              className="mt-4 text-sm md:text-lg leading-8"
              style={{ color: isDark ? "rgba(255,255,255,.76)" : "#475569" }}
            >
              {content.withdrawalIntro}
            </p>

            <div className="mt-6 space-y-4">
              {content.withdrawalItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[1.5rem] p-5 md:p-6"
                  style={{
                    background: isDark ? "rgba(255,255,255,.04)" : "rgba(248,250,252,.88)",
                    border: isDark
                      ? "1px solid rgba(255,255,255,.08)"
                      : "1px solid rgba(148,163,184,.14)",
                  }}
                >
                  <h3
                    className="text-lg md:text-xl font-bold"
                    style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-2 text-sm md:text-base leading-7"
                    style={{ color: isDark ? "rgba(255,255,255,.72)" : "#475569" }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2
              className="text-2xl md:text-4xl font-bold"
              style={{ color: isDark ? "#ffffff" : "#0f172a" }}
            >
              {content.regulationsTitle}
            </h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {content.regulationsItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[1.75rem] p-5 md:p-6"
                  style={{
                    background: isDark ? "rgba(255,255,255,.05)" : "rgba(255,255,255,.84)",
                    border: isDark
                      ? "1px solid rgba(255,255,255,.08)"
                      : "1px solid rgba(148,163,184,.14)",
                    boxShadow: isDark
                      ? "0 20px 50px -30px rgba(0,0,0,.45)"
                      : "0 20px 50px -30px rgba(15,23,42,.12)",
                  }}
                >
                  <h3
                    className="text-xl md:text-2xl font-bold"
                    style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-3 text-sm md:text-base leading-7"
                    style={{ color: isDark ? "rgba(255,255,255,.72)" : "#475569" }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-[1.75rem] p-5 md:p-6"
            style={{
              background: isDark ? "rgba(239,68,68,.10)" : "rgba(254,242,242,.95)",
              border: "1px solid rgba(248,113,113,.18)",
            }}
          >
            <h2
              className="text-xl md:text-2xl font-bold"
              style={{ color: isDark ? "#ffffff" : "#7f1d1d" }}
            >
              {content.noticeTitle}
            </h2>
            <p
              className="mt-3 text-sm md:text-base leading-7"
              style={{ color: isDark ? "rgba(255,255,255,.78)" : "#7f1d1d" }}
            >
              {content.noticeText}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}