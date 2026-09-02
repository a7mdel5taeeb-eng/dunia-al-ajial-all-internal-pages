import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { genericPages } from "../pages/genericPagesData";

type PageMeta = { titleAr: string; titleEn: string; descriptionAr: string; descriptionEn: string };

const schoolName = "Dunia Al-Ajial International Schools";

const pageMeta: Record<string, PageMeta> = {
  "/": {
    titleAr: "مدارس دنيا الأجيال العالمية",
    titleEn: schoolName,
    descriptionAr: "مدارس دنيا الأجيال العالمية - تعليم أمريكي متميز من الروضة حتى المرحلة الثانوية.",
    descriptionEn: "Dunia Al-Ajial International Schools offers a distinguished American education from kindergarten through high school.",
  },
  "/about/why-dais": {
    titleAr: "لماذا مدارس دنيا الأجيال؟",
    titleEn: "Why Choose DAIS?",
    descriptionAr: "اكتشف ما يميز مدارس دنيا الأجيال العالمية وبرامجها التعليمية المعتمدة دوليًا.",
    descriptionEn: "Discover what makes Dunia Al-Ajial International Schools and its internationally accredited programs distinctive.",
  },
  "/about/code-of-conduct": {
    titleAr: "مدونة السلوك",
    titleEn: "Code of Conduct",
    descriptionAr: "مدونة السلوك والالتزامات الأساسية في مدارس دنيا الأجيال العالمية.",
    descriptionEn: "The code of conduct and core expectations at Dunia Al-Ajial International Schools.",
  },
  "/career": {
    titleAr: "الوظائف",
    titleEn: "Careers",
    descriptionAr: "فرص العمل والانضمام إلى فريق مدارس دنيا الأجيال العالمية.",
    descriptionEn: "Career opportunities at Dunia Al-Ajial International Schools.",
  },
  "/gallery": {
    titleAr: "معرض الصور",
    titleEn: "Photo Gallery",
    descriptionAr: "شاهد صورًا من أنشطة وفعاليات مدارس دنيا الأجيال العالمية.",
    descriptionEn: "Explore photos from activities and events at Dunia Al-Ajial International Schools.",
  },
  "/activities": {
    titleAr: "الأنشطة الطلابية",
    titleEn: "Student Activities",
    descriptionAr: "الأنشطة والفعاليات التي تثري تجربة طلاب مدارس دنيا الأجيال.",
    descriptionEn: "Activities and events that enrich the student experience at DAIS.",
  },
  "/achievements": {
    titleAr: "الإنجازات",
    titleEn: "Achievements",
    descriptionAr: "إنجازات طلاب ومجتمع مدارس دنيا الأجيال العالمية.",
    descriptionEn: "Achievements of Dunia Al-Ajial International Schools students and community.",
  },
  "/admissions/requirements": {
    titleAr: "متطلبات القبول",
    titleEn: "Admissions Requirements",
    descriptionAr: "متطلبات وإجراءات القبول في مدارس دنيا الأجيال العالمية.",
    descriptionEn: "Admissions requirements and procedures at Dunia Al-Ajial International Schools.",
  },
};

function updateMeta(selector: string, attribute: "name" | "property", value: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

export default function SeoMeta() {
  const { pathname } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const genericPage = genericPages[pathname.replace(/^\//, "")];
    const meta = pageMeta[pathname] ?? (genericPage && {
      titleAr: genericPage.titleAr,
      titleEn: genericPage.titleEn,
      descriptionAr: genericPage.introAr,
      descriptionEn: genericPage.introEn,
    }) ?? pageMeta["/"];
    const isArabic = language === "ar";
    const title = `${isArabic ? meta.titleAr : meta.titleEn} | ${schoolName}`;
    const description = isArabic ? meta.descriptionAr : meta.descriptionEn;

    document.title = title;
    updateMeta('meta[name="description"]', "name", "description", description);
    updateMeta('meta[property="og:title"]', "property", "og:title", title);
    updateMeta('meta[property="og:description"]', "property", "og:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}${pathname}`;
  }, [language, pathname]);

  return null;
}
