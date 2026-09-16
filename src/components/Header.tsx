import { Menu, X, Globe, Moon, Sun, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { motion, useScroll, useMotionValueEvent, AnimatePresence, type Variants } from "motion/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavItem } from "../data/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const { language, setLanguage, t, dir } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);
  const { scrollY } = useScroll();

  const aboutItems: NavItem[] = [
    { key: "ceoWord", to: "/about/ceo-word" },
    { key: "whyDais", to: "/about/why-dais" },
    { key: "schoolHistory", to: "/about/school-history" },
    { key: "missionVision", to: "/about/mission-vision" },
    { key: "schoolPolicies", to: "/about/school-policies" },
    { key: "codeOfConduct", to: "/about/code-of-conduct" },
    { key: "calendar", to: "/about/calendar" },
  ];

  const academicsItems: NavItem[] = [
    { key: "directorWord", to: "/academics/director-word" },
    { key: "earlyChildhood", to: "/academics/early-childhood" },
    { key: "elementary", to: "/academics/elementary-school" },
    { key: "middleHigh", to: "/academics/middle-high-school" },
    { key: "studentPortal", to: "/academics/student-portal" },
  ];

  const admissionsItems: NavItem[] = [
    { key: "admissionProcess", to: "/admissions/admission-process" },
    { key: "requirements", to: "/admissions/requirements" },
    { key: "fees", to: "/admissions/fees" },
    { key: "financialSystem", to: "/admissions/financial-system" },
    { key: "onlineApplication", to: "/admissions/online-application" },
  ];

  const newsItems: NavItem[] = [
    { key: "upcomingEvents", to: "/news-events/upcoming-events" },
    { key: "photoGallery", to: "/gallery" },
    { key: "activities", to: "/activities" },
    { key: "achievements", to: "/achievements" },
  ];

  const fallbackMenuLabels =
    language === "ar"
      ? {
          ceoWord: "كلمة المدير التنفيذي",
          whyDais: "لماذا دنيا الأجيال",
          schoolHistory: "تاريخ المدرسة",
          missionVision: "الرسالة والرؤية",
          schoolPolicies: "سياسات المدرسة",
          codeOfConduct: "مدونة السلوك",
          calendar: "التقويم",
          careers: "الوظائف",
          upcomingEvents: "الفعاليات القادمة",
          photoGallery: "معرض الصور",
          sportsAchievements: "الرياضة والإنجازات",
          activities: "الأنشطة",
          achievements: "الإنجازات",
          newsletter: "النشرة الإخبارية",
        }
      : {
          ceoWord: "CEO Word",
          whyDais: "Why DAIS",
          schoolHistory: "School History",
          missionVision: "Mission & Vision",
          administrationStaff: "Administration & Staff",
          schoolPolicies: "School Policies",
          codeOfConduct: "Code of Conduct",
          calendar: "Calendar",
          careers: "Careers",
          upcomingEvents: "Upcoming Events",
          photoGallery: "Photo Gallery",
          sportsAchievements: "Sports & Achievements",
          activities: "Activities",
          achievements: "Achievements",
        };

  const getMenuLabel = (menu: Record<string, string> | undefined, key: string) => {
    return menu?.[key] || fallbackMenuLabels[key as keyof typeof fallbackMenuLabels] || key;
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 18);
  });

  const toggleLanguage = () => setLanguage(language === "en" ? "ar" : "en");

  const openDesktopDropdown = (name: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setActiveDesktopDropdown(name);
  };

  const closeDesktopDropdownSoon = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setActiveDesktopDropdown(null), 120);
  };

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown((prev) => (prev === name ? null : name));
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  const handleNavAction = (to: string) => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setActiveDesktopDropdown(null);
      closeMobileMenu();
      return;
    }

    navigate(to);
    setActiveDesktopDropdown(null);
    closeMobileMenu();
  };

  const handleMobileNavigate = (to: string) => {
    handleNavAction(to);
  };

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, y: -8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const mobileMenuItemVariants: Variants = {
    hidden: { opacity: 0, y: 4 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.13, ease: [0.22, 1, 0.36, 1] } },
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDesktopDropdown(null);
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    closeMobileMenu();
    setActiveDesktopDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      setActiveMobileDropdown(null);
    }
  }, [isMenuOpen]);

  const desktopLinkColor = isScrolled
    ? "var(--text-secondary)"
    : theme === "dark"
      ? "rgba(255,255,255,0.94)"
      : "#334155";

  const headerBackground = isScrolled
    ? theme === "dark"
      ? "linear-gradient(90deg, rgba(10,16,30,.62) 0%, rgba(15,23,42,.58) 50%, rgba(76,29,149,.36) 100%)"
      : "linear-gradient(90deg, rgba(255,255,255,.62) 0%, rgba(248,250,252,.58) 60%, rgba(243,232,255,.46) 100%)"
    : theme === "dark"
      ? "linear-gradient(90deg, rgba(5,10,24,.96) 0%, rgba(12,23,52,.94) 42%, rgba(67,48,120,.56) 100%)"
      : "linear-gradient(90deg, rgba(255,255,255,.95) 0%, rgba(248,250,252,.94) 60%, rgba(243,232,255,.84) 100%)";

  const headerBorderColor = isScrolled
    ? theme === "dark"
      ? "rgba(255,255,255,.10)"
      : "rgba(148,163,184,.22)"
    : theme === "dark"
      ? "rgba(255,255,255,.08)"
      : "rgba(148,163,184,.18)";

  const desktopNavClass =
    "relative text-[12px] min-[1600px]:text-[13px] font-bold tracking-wide py-2 transition-all duration-300 whitespace-nowrap";

  const desktopControlSurface = isScrolled
    ? "transparent"
    : theme === "dark"
      ? "rgba(255,255,255,.06)"
      : "rgba(255,255,255,.78)";

  const dropdownBg =
    theme === "dark"
      ? "rgba(21,33,61,.86)"
      : "rgba(255,255,255,.82)";
  const dropdownBorder = theme === "dark" ? "rgba(148,163,184,.16)" : "rgba(148,163,184,.18)";

  const dropdownItemClass =
    "block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 hover:shadow-sm leading-snug";

  const handleDropdownEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.background = theme === "dark" ? "rgba(139,92,246,.16)" : "rgba(237,233,254,.9)";
    e.currentTarget.style.color = theme === "dark" ? "#ffffff" : "#6d28d9";
  };

  const handleDropdownLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.color = theme === "dark" ? "#e5edf8" : "#334155";
  };

  const renderDesktopDropdown = (
    dropdownKey: string,
    label: string,
    items: NavItem[],
    menu: Record<string, string>,
    widthClass: string = "w-72"
  ) => (
    <div
      className="relative shrink-0"
      onMouseEnter={() => openDesktopDropdown(dropdownKey)}
      onMouseLeave={closeDesktopDropdownSoon}
    >
      <button
        type="button"
        className={`${desktopNavClass} flex items-center rounded-full px-2.5 xl:px-3`}
        style={{
          color: desktopLinkColor,
          background:
            isScrolled && activeDesktopDropdown === dropdownKey
              ? theme === "dark"
                ? "rgba(255,255,255,.08)"
                : "rgba(255,255,255,.55)"
              : "transparent",
        }}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-150 ${dir === "rtl" ? "mr-1" : "ml-1"} ${
            activeDesktopDropdown === dropdownKey ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute ${dir === "rtl" ? "right-0" : "left-0"} mt-2 ${widthClass} rounded-2xl border shadow-2xl transition-all duration-150 ease-out origin-top z-50 ${
          activeDesktopDropdown === dropdownKey
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-1 invisible"
        }`}
        style={{
          background: dropdownBg,
          borderColor: dropdownBorder,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="p-2">
          {items.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => handleNavAction(item.to)}
              className={`${dropdownItemClass} w-full text-start`}
              style={{ color: theme === "dark" ? "#e5edf8" : "#334155" }}
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              {getMenuLabel(menu, item.key)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMobileDropdown = (
    dropdownKey: string,
    label: string,
    items: NavItem[],
    menu: Record<string, string>
  ) => (
    <motion.div variants={mobileMenuItemVariants} className="w-full rounded-2xl overflow-hidden">
      <button
        type="button"
        onClick={() => toggleMobileDropdown(dropdownKey)}
        className="w-full flex items-center justify-start gap-3 px-4 py-3 rounded-xl text-[15px] font-semibold transition-all duration-200 hover:-translate-y-px"
        style={{
          color: "var(--text-primary)",
          background: theme === "dark" ? "rgba(255,255,255,.035)" : "rgba(15,23,42,.035)",
        }}
      >
        <span className="flex items-center gap-3">
          <span>{label}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              activeMobileDropdown === dropdownKey ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {activeMobileDropdown === dropdownKey && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="pb-2 pt-1 px-2 space-y-1">
              {items.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => handleMobileNavigate(item.to)}
                  className="block w-full text-start px-4 py-2.5 rounded-xl text-sm leading-snug transition-colors duration-150 hover:bg-violet-100 dark:hover:bg-white/5 hover:text-violet-700 dark:hover:text-white"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {getMenuLabel(menu, item.key)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 relative transition-all duration-500 ease-out ${
        isScrolled ? "py-2.5 md:py-3 shadow-premium" : "py-4 md:py-5"
      }`}
      style={{
        background: headerBackground,
        borderBottom: `1px solid ${headerBorderColor}`,
        backdropFilter: isScrolled ? "saturate(180%) blur(26px)" : "blur(18px)",
        WebkitBackdropFilter: isScrolled ? "saturate(180%) blur(26px)" : "blur(18px)",
        boxShadow: isScrolled
          ? theme === "dark"
            ? "0 16px 40px rgba(0,0,0,.34)"
            : "0 16px 40px rgba(15,23,42,.10)"
          : "none",
      }}
    >
      <div className="container-page">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          <div className="flex flex-1 xl:flex-none items-center gap-2.5 xl:gap-3 min-w-0">
            <Link to="/" className="flex items-center gap-2.5 md:gap-3 shrink-0 min-w-0 max-w-full xl:max-w-none">
              <img
                src="/images/logo.webp"
                alt={t.header.schoolName}
                className={`w-auto shrink-0 object-contain transition-all duration-500 ${
                  isScrolled ? "h-12 lg:h-14 xl:h-16" : "h-14 lg:h-16 xl:h-20"
                }`}
              />
              <div className="min-w-0">
                <div
                  className={`font-serif font-bold leading-none tracking-tight transition-all duration-500 ${
                    isScrolled
                  ? "text-sm lg:text-[1.2rem] xl:text-[1.5rem]"
                      : "text-base sm:text-lg lg:text-[1.7rem] xl:text-[2rem]"
                  }`}
                  style={{
                    color: isScrolled ? "var(--text-primary)" : theme === "dark" ? "#ffffff" : "#0f172a",
                  }}
                >
                  {t.header.schoolName}
                </div>

                <div
                  className={`mt-1.5 text-[9px] lg:text-[11px] xl:text-sm font-bold ${
                    language === "ar"
                      ? "tracking-[0.08em]"
                      : "tracking-[0.12em] xl:tracking-[0.15em] uppercase"
                  }`}
                  style={{
                    color: isScrolled
                      ? "var(--accent-primary)"
                      : theme === "dark"
                        ? "rgba(255,255,255,0.84)"
                        : "#64748b",
                  }}
                >
                  {t.header.schoolType}
                </div>
              </div>
            </Link>

          </div>

          <nav className="hidden">
            <button
              type="button"
              className={`${desktopNavClass} rounded-full px-2.5 xl:px-3 shrink-0`}
              style={{
                color: desktopLinkColor,
                background:
                  isScrolled
                    ? theme === "dark"
                      ? "rgba(255,255,255,.04)"
                      : "rgba(255,255,255,.35)"
                    : "transparent",
              }}
              onMouseEnter={() => setActiveDesktopDropdown(null)}
              onClick={() => handleNavAction("/")}
            >
              {t.header.home}
            </button>

            {renderDesktopDropdown("about", t.header.about, aboutItems, t.header.aboutMenu, "w-80")}
            {renderDesktopDropdown("academics", t.header.academics, academicsItems, t.header.academicsMenu, "w-72")}
            {renderDesktopDropdown("admissions", t.header.admissions, admissionsItems, t.header.admissionsMenu, "w-72")}
            {renderDesktopDropdown("newsEvents", t.header.newsEvents, newsItems, t.header.newsEventsMenu, "w-72")}

            <button
              type="button"
              className={`${desktopNavClass} rounded-full px-2.5 xl:px-3 shrink-0`}
              style={{
                color: desktopLinkColor,
                background:
                  isScrolled
                    ? theme === "dark"
                      ? "rgba(255,255,255,.04)"
                      : "rgba(255,255,255,.35)"
                    : "transparent",
              }}
              onMouseEnter={() => setActiveDesktopDropdown(null)}
              onClick={() => handleNavAction("/contact/contact-us")}
            >
              {t.header.contact}
            </button>

            <button
              type="button"
              className={`${desktopNavClass} rounded-full px-2 xl:px-2.5 shrink-0`}
              style={{
                color: desktopLinkColor,
                background:
                  isScrolled
                    ? theme === "dark"
                      ? "rgba(255,255,255,.04)"
                      : "rgba(255,255,255,.35)"
                    : "transparent",
              }}
              onMouseEnter={() => setActiveDesktopDropdown(null)}
              onClick={() => handleNavAction("/career")}
            >
              {getMenuLabel(t.header.aboutMenu, "careers")}
            </button>

            <div
              className={`flex items-center gap-1.5 xl:gap-2 shrink-0 ${dir === "rtl" ? "border-r pr-2 xl:pr-3" : "border-l pl-2 xl:pl-3"}`}
              style={{
                borderColor: isScrolled
                  ? "var(--border-color)"
                  : theme === "dark"
                    ? "rgba(255,255,255,.18)"
                    : "rgba(148,163,184,.18)",
              }}
            >
              <button
                onClick={toggleTheme}
                className={`relative rounded-full transition-all duration-300 shadow-sm hover:scale-[1.03] ${
                  isScrolled ? "p-2" : "p-2.5"
                }`}
                style={{
                  color: isScrolled ? "var(--text-primary)" : theme === "dark" ? "#ffffff" : "#334155",
                  background: isScrolled
                    ? theme === "dark"
                      ? "rgba(255,255,255,.08)"
                      : "rgba(255,255,255,.50)"
                    : desktopControlSurface,
                  border: `1px solid ${
                    isScrolled
                      ? theme === "dark"
                        ? "rgba(255,255,255,.12)"
                        : "rgba(148,163,184,.20)"
                      : theme === "dark"
                        ? "rgba(255,255,255,.14)"
                        : "rgba(148,163,184,.22)"
                  }`,
                  boxShadow: isScrolled
                    ? theme === "dark"
                      ? "0 8px 22px rgba(0,0,0,.22)"
                      : "0 8px 22px rgba(148,163,184,.12)"
                    : "none",
                }}
                aria-label="Toggle Dark Mode"
              >
                <div className="relative w-5 h-5">
                  <motion.div
                    initial={false}
                    animate={{
                      scale: theme === "dark" ? 1 : 0,
                      opacity: theme === "dark" ? 1 : 0,
                      rotate: theme === "dark" ? 0 : 90,
                    }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Moon className="w-5 h-5" />
                  </motion.div>

                  <motion.div
                    initial={false}
                    animate={{
                      scale: theme === "light" ? 1 : 0,
                      opacity: theme === "light" ? 1 : 0,
                      rotate: theme === "light" ? 0 : -90,
                    }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Sun className="w-5 h-5" />
                  </motion.div>
                </div>
              </button>

              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-2 rounded-full font-bold tracking-wide border transition-all duration-300 shadow-sm hover:scale-[1.02] ${
                  isScrolled
                    ? "px-2.5 xl:px-3 py-2 text-[10px] xl:text-[11px]"
                    : "px-3 xl:px-3.5 py-2.5 text-[11px] xl:text-xs"
                }`}
                style={{
                  color: isScrolled ? "var(--text-primary)" : theme === "dark" ? "#ffffff" : "#334155",
                  borderColor: isScrolled
                    ? theme === "dark"
                      ? "rgba(255,255,255,.12)"
                      : "rgba(148,163,184,.22)"
                    : theme === "dark"
                      ? "rgba(255,255,255,.20)"
                      : "rgba(148,163,184,.24)",
                  background: isScrolled
                    ? theme === "dark"
                      ? "rgba(255,255,255,.07)"
                      : "rgba(255,255,255,.48)"
                    : desktopControlSurface,
                  boxShadow: isScrolled
                    ? theme === "dark"
                      ? "0 8px 22px rgba(0,0,0,.22)"
                      : "0 8px 22px rgba(148,163,184,.12)"
                    : "none",
                }}
              >
                <Globe className="h-3.5 w-3.5" />
                {language === "en" ? "العربية" : "English"}
              </button>
            </div>
          </nav>

          <div className="flex items-center gap-1.5 shrink-0">
            <Link
              to="/admissions/online-application"
              className="hidden lg:inline-flex items-center justify-center whitespace-nowrap rounded-full px-3.5 py-2.5 text-[13px] font-semibold tracking-normal transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-[1px]"
              style={{
                color: "#ffffff",
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                border: "1px solid rgba(255,255,255,.10)",
                minWidth: 116,
              }}
            >
              {language === "ar" ? "سجّل الآن" : "Register Now"}
            </Link>
            <motion.button
              onClick={toggleLanguage}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(139,92,246,0)",
                  "0 0 15px rgba(139,92,246,.28)",
                  "0 0 0 rgba(139,92,246,0)",
                ],
              }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center justify-center rounded-full transition-all duration-150 shadow-sm px-2.5 py-2.5 text-[11px] font-bold"
              style={{
                color: isScrolled ? "var(--text-primary)" : theme === "dark" ? "#ffffff" : "#334155",
                background: desktopControlSurface,
                border: `1px solid ${
                  isScrolled
                    ? "var(--border-color)"
                    : theme === "dark"
                      ? "rgba(255,255,255,.14)"
                      : "rgba(148,163,184,.22)"
                }`,
              }}
              aria-label="Toggle language"
            >
              {language === "en" ? "AR" : "EN"}
            </motion.button>

            <motion.button
              onClick={toggleTheme}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(139,92,246,0)",
                  "0 0 15px rgba(139,92,246,.28)",
                  "0 0 0 rgba(139,92,246,0)",
                ],
              }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.55 }}
              className="p-2.5 rounded-full transition-all duration-150 shadow-sm shrink-0"
              style={{
                color: isScrolled ? "var(--text-primary)" : theme === "dark" ? "#ffffff" : "#334155",
                background: desktopControlSurface,
                border: `1px solid ${
                  isScrolled
                    ? "var(--border-color)"
                    : theme === "dark"
                      ? "rgba(255,255,255,.14)"
                      : "rgba(148,163,184,.22)"
                }`,
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </motion.button>

            <motion.button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(139,92,246,0)",
                  "0 0 15px rgba(139,92,246,.28)",
                  "0 0 0 rgba(139,92,246,0)",
                ],
              }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
              className="relative p-2.5 rounded-full transition-colors duration-150 shadow-sm shrink-0"
              style={{
                color: isScrolled ? "var(--text-primary)" : theme === "dark" ? "#ffffff" : "#334155",
                background: desktopControlSurface,
                border: `1px solid ${
                  isScrolled
                    ? "var(--border-color)"
                    : theme === "dark"
                      ? "rgba(255,255,255,.14)"
                      : "rgba(148,163,184,.22)"
                }`,
              }}
              aria-label="Menu"
            >
              <span className="flex">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </span>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={dropdownRef}
            className={`absolute top-full z-50 mt-2 w-[min(22rem,calc(100vw-2rem))] ${
              dir === "rtl"
                ? "left-4 sm:left-6 lg:left-8 xl:left-[calc((100%-80rem)/2+2rem)]"
                : "right-4 sm:right-6 lg:right-8 xl:right-[calc((100%-80rem)/2+2rem)]"
            }`}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              initial={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
              animate={{ boxShadow: theme === "dark" ? "0 18px 42px rgba(0,0,0,.35)" : "0 18px 42px rgba(15,23,42,.15)" }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="w-full overflow-hidden rounded-2xl border shadow-2xl"
              style={{
                background: theme === "dark" ? "rgba(15,25,47,.72)" : "rgba(255,255,255,.78)",
                borderColor: theme === "dark" ? "rgba(255,255,255,.14)" : "rgba(148,163,184,.28)",
                backdropFilter: "saturate(150%) blur(22px)",
                WebkitBackdropFilter: "saturate(150%) blur(22px)",
              }}
            >
              <motion.div
                dir={dir}
                className={`space-y-1.5 p-2.5 ${dir === "rtl" ? "text-right" : "text-left"}`}
                variants={{ visible: { transition: { delayChildren: 0.02, staggerChildren: 0.018 } } }}
              >
                <motion.button
                  variants={mobileMenuItemVariants}
                  type="button"
                  onClick={() => handleMobileNavigate("/")}
                  className="block w-full text-start px-4 py-3 rounded-xl text-[15px] font-semibold transition-all duration-150 hover:-translate-y-px"
                  style={{ color: "var(--text-primary)", background: theme === "dark" ? "rgba(255,255,255,.035)" : "rgba(15,23,42,.035)" }}
                >
                  {t.header.home}
                </motion.button>

                {renderMobileDropdown("mobile-about", t.header.about, aboutItems, t.header.aboutMenu)}
                {renderMobileDropdown("mobile-academics", t.header.academics, academicsItems, t.header.academicsMenu)}
                {renderMobileDropdown("mobile-admissions", t.header.admissions, admissionsItems, t.header.admissionsMenu)}
                {renderMobileDropdown("mobile-newsEvents", t.header.newsEvents, newsItems, t.header.newsEventsMenu)}

                <motion.button
                  variants={mobileMenuItemVariants}
                  type="button"
                  onClick={() => handleMobileNavigate("/contact/contact-us")}
                  className="block w-full text-start px-4 py-3 rounded-xl text-[15px] font-semibold transition-all duration-150 hover:-translate-y-px"
                  style={{ color: "var(--text-primary)", background: theme === "dark" ? "rgba(255,255,255,.035)" : "rgba(15,23,42,.035)" }}
                >
                  {t.header.contact}
                </motion.button>

                <motion.button
                  variants={mobileMenuItemVariants}
                  type="button"
                  onClick={() => handleMobileNavigate("/career")}
                  className="block w-full text-start px-4 py-3 rounded-xl text-[15px] font-semibold transition-all duration-150 hover:-translate-y-px"
                  style={{ color: "var(--text-primary)", background: theme === "dark" ? "rgba(255,255,255,.035)" : "rgba(15,23,42,.035)" }}
                >
                  {getMenuLabel(t.header.aboutMenu, "careers")}
                </motion.button>

                <motion.button
                  variants={mobileMenuItemVariants}
                  type="button"
                  onClick={() => handleMobileNavigate("/admissions/online-application")}
                  className="flex w-full items-center justify-center whitespace-nowrap rounded-full px-4 py-3 text-sm font-semibold tracking-normal transition-all duration-200 shadow-sm"
                  style={{
                    color: "#ffffff",
                    background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                    border: "1px solid rgba(255,255,255,.08)",
                  }}
                >
                  {language === "ar" ? "سجّل الآن" : "Register Now"}
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
