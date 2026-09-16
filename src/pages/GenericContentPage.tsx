import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { genericPages } from "./genericPagesData";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^\u0600-\u06FF\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function getPolicySectionId(index: number, fallbackTitleEn: string) {
  const ids = [
    "policy-school-bus",
    "policy-morning-assembly",
    "policy-recess",
    "policy-dhuhr-prayer",
    "policy-dismissal",
    "policy-mobile-phone",
    "policy-homework",
    "policy-aup",
    "policy-ai",
    "policy-child-protection",
  ];

  return ids[index] || slugify(fallbackTitleEn);
}

function formatPolicyText(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];

  let bulletBuffer: string[] = [];
  let numberedBuffer: string[] = [];
  let paragraphBuffer: string[] = [];

  const flushParagraph = () => {
    if (paragraphBuffer.length > 0) {
      elements.push(
        <p
          key={`p-${elements.length}`}
          className="text-[0.98rem] md:text-[1.03rem] leading-8 md:leading-9"
          style={{ color: "var(--text-secondary)" }}
        >
          {paragraphBuffer.join(" ")}
        </p>
      );
      paragraphBuffer = [];
    }
  };

  const flushBullets = () => {
    if (bulletBuffer.length > 0) {
      elements.push(
        <ul
          key={`ul-${elements.length}`}
          className="space-y-2 ps-5 list-disc marker:text-violet-500"
          style={{ color: "var(--text-secondary)" }}
        >
          {bulletBuffer.map((item, idx) => (
            <li key={idx} className="text-[0.98rem] md:text-[1.03rem] leading-8">
              {item}
            </li>
          ))}
        </ul>
      );
      bulletBuffer = [];
    }
  };

  const flushNumbered = () => {
    if (numberedBuffer.length > 0) {
      elements.push(
        <ol
          key={`ol-${elements.length}`}
          className="space-y-2 ps-5 list-decimal marker:font-semibold marker:text-violet-600"
          style={{ color: "var(--text-secondary)" }}
        >
          {numberedBuffer.map((item, idx) => (
            <li key={idx} className="text-[0.98rem] md:text-[1.03rem] leading-8">
              {item}
            </li>
          ))}
        </ol>
      );
      numberedBuffer = [];
    }
  };

  const flushAll = () => {
    flushParagraph();
    flushBullets();
    flushNumbered();
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushAll();
      continue;
    }

    const isBullet = line.startsWith("•");
    const isNumbered = /^\d+[.)]\s/.test(line);
    const isRomanHeading = /^(I|II|III|IV|V|VI|VII|VIII|IX|X)[.)]?\s/.test(line);
    const isSectionHeading =
      /^section\s+\d+/i.test(line) ||
      /^first:/i.test(line) ||
      /^second:/i.test(line) ||
      /^third:/i.test(line) ||
      /^fourth:/i.test(line) ||
      /^fifth:/i.test(line) ||
      /^sixth:/i.test(line) ||
      /^seventh:/i.test(line) ||
      /^conclusion:?/i.test(line) ||
      /^purpose:?/i.test(line) ||
      /^introduction:?/i.test(line) ||
      /^definitions:?/i.test(line) ||
      /^policy:?/i.test(line) ||
      /^monitoring methods:?/i.test(line) ||
      /^responsibilities:?/i.test(line) ||
      /^training of staff:?/i.test(line) ||
      /^responding to child abuse:?/i.test(line) ||
      /^adult code of conduct:?/i.test(line) ||
      /^dais commitment:?/i.test(line) ||
      /^types of abuse:?/i.test(line) ||
      /^follow-up and evaluation mechanism:?/i.test(line) ||
      /^هدفنا:?$/i.test(line) ||
      /^our goal:?$/i.test(line) ||
      /^المقدمة[:：]?/.test(line) ||
      /^الهدف[:：]?/.test(line) ||
      /^التعريفات[:：]?/.test(line) ||
      /^السياسة[:：]?/.test(line) ||
      /^أساليب المتابعة[:：]?/.test(line) ||
      /^المسؤوليات[:：]?/.test(line) ||
      /^تدريب العاملين[:：]?/.test(line) ||
      /^الاستجابة لإساءة معاملة الطفل[:：]?/.test(line) ||
      /^مدونة سلوك البالغين[:：]?/.test(line) ||
      /^التزام مدارس دنيا الأجيال العالمية[:：]?/.test(line) ||
      /^أنواع الإساءة[:：]?/.test(line) ||
      /^أولاً[:：]/.test(line) ||
      /^ثانياً[:：]/.test(line) ||
      /^ثالثاً[:：]/.test(line) ||
      /^رابعاً[:：]/.test(line) ||
      /^خامساً[:：]/.test(line) ||
      /^سادساً[:：]/.test(line) ||
      /^سابعاً[:：]/.test(line) ||
      /^الخلاصة[:：]?/.test(line) ||
      /^آلية المتابعة والتقييم[:：]?/.test(line);

    const isShortLead =
      !isBullet &&
      !isNumbered &&
      line.length <= 80 &&
      (line.endsWith(":") || line.endsWith("؟") || line.endsWith("?"));

    if (isSectionHeading || isRomanHeading || isShortLead) {
      flushAll();
      elements.push(
        <h3
          key={`h3-${elements.length}`}
          className="text-lg md:text-xl font-bold mt-2"
          style={{ color: "var(--text-primary)" }}
        >
          {line}
        </h3>
      );
      continue;
    }

    if (isBullet) {
      flushParagraph();
      flushNumbered();
      bulletBuffer.push(line.replace(/^•\s*/, ""));
      continue;
    }

    if (isNumbered) {
      flushParagraph();
      flushBullets();
      numberedBuffer.push(line.replace(/^\d+[.)]\s*/, ""));
      continue;
    }

    flushBullets();
    flushNumbered();
    paragraphBuffer.push(line);
  }

  flushAll();

  return <div className="space-y-4">{elements}</div>;
}

export default function GenericContentPage() {
  const { language, dir } = useLanguage();
  const { section = "", page = "" } = useParams();
  const key = `${section}/${page}`;
  const content = genericPages[key];
  const isArabic = language === "ar";
  const isPoliciesPage = key === "about/school-policies";
  const heroImage = content?.heroImage;

  if (!content) {
    return (
      <section className="section-muted pt-32 md:pt-40">
        <div className="container-page">
          <div className="card p-8 max-w-3xl mx-auto">
            <h1 className="section-title">
              {isArabic ? "الصفحة غير متوفرة" : "Page Not Found"}
            </h1>
            <p className="section-subtitle mt-4">
              {isArabic ? "هذه الصفحة غير متاحة حاليًا." : "This page is not available right now."}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-muted relative overflow-hidden pt-32 md:pt-40">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      <div className="absolute -top-24 right-0 w-80 h-80 bg-violet-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="max-w-5xl mx-auto text-center"
        >
          {heroImage && (
            <div
              className="relative mb-8 md:mb-10 overflow-hidden rounded-[1.75rem] md:rounded-[2rem] min-h-[280px] md:min-h-[380px] border"
              style={{
                borderColor: "color-mix(in srgb, var(--accent-primary) 10%, var(--border-color))",
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 20px 50px -30px rgba(15,23,42,.22)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1328]/94 via-[#20224e]/58 to-[#101a37]/22" />
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400/18 via-transparent to-sky-300/12" />
              <div aria-hidden="true" className="absolute -top-14 right-10 h-44 w-44 rounded-full border border-violet-100/20 bg-violet-300/10" />
              <div aria-hidden="true" className="absolute left-10 top-10 h-20 w-20 rotate-45 rounded-2xl border border-white/15 bg-sky-200/10" />

              <div className="relative z-10 flex min-h-[280px] md:min-h-[380px] flex-col items-center justify-end px-5 py-5 md:px-10 md:py-9">
                <div className="w-full max-w-3xl rounded-[1.5rem] border border-white/15 bg-slate-950/25 px-5 py-6 backdrop-blur-md md:rounded-[1.8rem] md:px-9 md:py-8">
                  <span className="badge mb-4">
                    {isArabic ? content.badgeAr : content.badgeEn}
                  </span>

                  <h1 className="text-3xl md:text-5xl font-bold font-serif text-white leading-tight">
                    {isArabic ? content.titleAr : content.titleEn}
                  </h1>
                </div>
              </div>
            </div>
          )}

          {!heroImage && <span className="badge">{isArabic ? content.badgeAr : content.badgeEn}</span>}

          {!heroImage && (
            <h1 className="section-title mt-6">
              {isArabic ? content.titleAr : content.titleEn}
            </h1>
          )}

          <div
            className="mt-8 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 border backdrop-blur-sm"
            style={{
              background: "color-mix(in srgb, var(--bg-elevated) 82%, transparent)",
              borderColor: "color-mix(in srgb, var(--accent-primary) 10%, var(--border-color))",
              boxShadow: "0 20px 50px -30px rgba(15,23,42,.16)",
            }}
          >
            <p
              className="text-base md:text-lg leading-8 md:leading-9 whitespace-pre-line"
              style={{ color: "var(--text-secondary)" }}
            >
              {isArabic ? content.introAr : content.introEn}
            </p>
          </div>
        </motion.div>

        {isPoliciesPage && content.sections && content.sections.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="max-w-5xl mx-auto mt-10 md:mt-12"
          >
            <div className="card p-5 md:p-6">
              <h2
                className="text-xl md:text-2xl font-bold font-serif mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                {isArabic ? "فهرس السياسات" : "Policies Overview"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {content.sections.map((sectionItem, index) => {
                  const sectionId = getPolicySectionId(index, sectionItem.titleEn);

                  return (
                    <a
                      key={sectionItem.titleEn}
                      href={`#${sectionId}`}
                      className="group rounded-2xl border px-4 py-4 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-md"
                      style={{
                        borderColor: "var(--border-color)",
                        background: "color-mix(in srgb, var(--bg-elevated) 70%, transparent)",
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300 font-bold shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h3
                            className="text-sm md:text-base font-bold"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {isArabic ? sectionItem.titleAr : sectionItem.titleEn}
                          </h3>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {content.sections && content.sections.length > 0 && (
          <div
            className={
              isPoliciesPage
                ? "mt-8 md:mt-10 grid grid-cols-1 gap-6 md:gap-7"
                : "mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7"
            }
          >
            {content.sections.map((sectionItem, index) => {
              const sectionId = isPoliciesPage
                ? getPolicySectionId(index, sectionItem.titleEn)
                : slugify(sectionItem.titleEn);

              return (
                <motion.div
                  id={sectionId}
                  key={sectionItem.titleEn}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.32, delay: index * 0.05, ease: "easeOut" }}
                  className={`card p-6 md:p-8 h-full scroll-mt-36 ${
                    isPoliciesPage ? "max-w-5xl mx-auto w-full" : ""
                  }`}
                >
                  <div className="flex items-start gap-4 mb-5">
                    {sectionItem.icon && (
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300 shrink-0">
                        <sectionItem.icon className="w-7 h-7" />
                      </div>
                    )}

                    <div className="min-w-0 flex-1">
                      <h2
                        className="text-xl md:text-2xl font-bold font-serif"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {isArabic ? sectionItem.titleAr : sectionItem.titleEn}
                      </h2>

                      {isPoliciesPage && (
                        <div
                          className="mt-2 text-sm font-medium"
                          style={{ color: "var(--accent-primary)" }}
                        >
                          {isArabic ? `البند ${index + 1}` : `Policy ${index + 1}`}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {isPoliciesPage ? (
                      formatPolicyText(isArabic ? sectionItem.bodyAr : sectionItem.bodyEn)
                    ) : (
                      <p
                        className="text-[0.98rem] md:text-[1.02rem] leading-7 md:leading-8 whitespace-pre-line"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {isArabic ? sectionItem.bodyAr : sectionItem.bodyEn}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {content.actions && content.actions.length > 0 && (
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {content.actions.map((action) => {
              const commonClass =
                "inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm md:text-base font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-[1px]";
              const commonStyle = {
                color: "#ffffff",
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
              };

              const isHashLink = action.href.startsWith("#");

              if (action.external) {
                return (
                  <a
                    key={action.href + action.labelEn}
                    href={action.href}
                    target="_blank"
                    rel="noreferrer"
                    className={commonClass}
                    style={commonStyle}
                  >
                    {isArabic ? action.labelAr : action.labelEn}
                  </a>
                );
              }

              if (isHashLink) {
                return (
                  <a
                    key={action.href + action.labelEn}
                    href={action.href}
                    className={commonClass}
                    style={commonStyle}
                  >
                    {isArabic ? action.labelAr : action.labelEn}
                  </a>
                );
              }

              return (
                <Link
                  key={action.href + action.labelEn}
                  to={action.href}
                  className={commonClass}
                  style={commonStyle}
                >
                  {isArabic ? action.labelAr : action.labelEn}
                </Link>
              );
            })}
          </div>
        )}

        <div className="mt-10 flex justify-center md:justify-start">
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
