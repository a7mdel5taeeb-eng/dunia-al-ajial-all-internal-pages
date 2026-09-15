import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const ANALYTICS_ID = "G-WN3D58L4ZH";
const CONSENT_KEY = "dais-analytics-consent";

function enableAnalytics() {
  if (document.getElementById("dais-google-analytics")) return;

  const script = document.createElement("script");
  script.id = "dais-google-analytics";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", ANALYTICS_ID, { anonymize_ip: true });
}

declare global {
  interface Window {
    dataLayer: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function CookieConsent() {
  const { language, dir } = useLanguage();
  const [choice, setChoice] = useState<"accepted" | "declined" | null>(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    return stored === "accepted" || stored === "declined" ? stored : null;
  });

  useEffect(() => {
    if (choice === "accepted") enableAnalytics();
  }, [choice]);

  if (choice) return null;

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setChoice("accepted");
  };
  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setChoice("declined");
  };

  return (
    <aside
      dir={dir}
      className="fixed bottom-4 left-4 right-4 z-[70] mx-auto max-w-2xl rounded-2xl border p-4 shadow-2xl md:p-5"
      style={{ background: "var(--panel-bg)", borderColor: "var(--border-color)", color: "var(--text-primary)" }}
      role="dialog"
      aria-label={language === "ar" ? "خيارات ملفات الارتباط" : "Cookie preferences"}
    >
      <p className="text-sm leading-6" style={{ color: "var(--text-secondary)" }}>
        {language === "ar"
          ? "نستخدم ملفات تحليل اختيارية لفهم زيارة الموقع وتحسينه. لن يبدأ Google Analytics إلا بعد موافقتك."
          : "We use optional analytics cookies to understand and improve the website. Google Analytics starts only after your consent."}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={accept} className="rounded-full bg-violet-600 px-4 py-2 text-sm font-bold text-white">
          {language === "ar" ? "موافق" : "Accept"}
        </button>
        <button type="button" onClick={decline} className="rounded-full border px-4 py-2 text-sm font-bold" style={{ borderColor: "var(--border-color)" }}>
          {language === "ar" ? "لا، شكرًا" : "No thanks"}
        </button>
      </div>
    </aside>
  );
}
