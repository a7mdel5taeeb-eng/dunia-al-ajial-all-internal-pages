import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { footerLinks } from "../data/navigation";

export default function Footer() {
  const { t, dir, language } = useLanguage();
  const { theme } = useTheme();

  const socialLinks = [
  {
    label: "X",
    href: "https://twitter.com/DuniaAlAjial",
    icon: FaXTwitter,
    hoverColor: "#000000",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/%D9%85%D8%AF%D8%A7%D8%B1%D8%B3-%D8%AF%D9%86%D9%8A%D8%A7-%D8%A7%D9%84%D8%A3%D8%AC%D9%8A%D8%A7%D9%84-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A9-Dunia-AlAjial-International-Schools/61550557628168/",
    icon: FaFacebookF,
    hoverColor: "#2563eb",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dunia_alajial_schools/",
    icon: FaInstagram,
    hoverColor: "#db2777",
  },
];

  const purpleLabelStyle = {
    color: theme === "dark" ? "#c4b5fd" : "#6d28d9",
  };

  const panelBg =
    theme === "dark" ? "rgba(255,255,255,.03)" : "rgba(255,255,255,.76)";

  const panelBgStrong =
    theme === "dark" ? "rgba(255,255,255,.04)" : "rgba(255,255,255,.92)";

  const panelBorder =
    theme === "dark"
      ? "1px solid rgba(255,255,255,.06)"
      : "1px solid rgba(148,163,184,.18)";

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t"
      style={{
        background:
          theme === "dark"
            ? "linear-gradient(180deg, rgba(7,17,31,1) 0%, rgba(10,20,36,1) 100%)"
            : "linear-gradient(180deg, rgba(248,250,252,1) 0%, rgba(241,245,249,1) 100%)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-0 h-72 w-72 rounded-full blur-3xl bg-violet-500/10" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full blur-3xl bg-indigo-500/10" />
      </div>

      {/* Full-width layout */}
      <div className="relative z-10 w-full px-4 md:px-6 xl:px-10 py-8 md:py-10">
        <div
          className="w-full rounded-[1.9rem] border px-5 md:px-7 xl:px-8 py-6 md:py-7"
          style={{
            borderColor: "var(--border-color)",
            background:
              theme === "dark"
                ? "rgba(255,255,255,.03)"
                : "rgba(255,255,255,.60)",
            backdropFilter: "blur(18px) saturate(160%)",
            WebkitBackdropFilter: "blur(18px) saturate(160%)",
            boxShadow:
              theme === "dark"
                ? "0 20px 44px -26px rgba(0,0,0,.42)"
                : "0 18px 40px -28px rgba(15,23,42,.12)",
          }}
        >
          <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.95fr_1.2fr] gap-8 xl:gap-10 items-start">
            {/* Brand */}
            <div className="min-w-0">
              <div className="flex items-start gap-4">
                <img
                  src="https://i.imgur.com/Q7UOUaC.png"
                  alt={t.header.schoolName}
                  className="h-14 md:h-16 w-auto object-contain shrink-0"
                />

                <div className="min-w-0">
                  <h3
                    className="font-serif font-bold text-[2rem] md:text-[2.3rem] leading-none tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {t.header.schoolName}
                  </h3>

                  <p
                    className="mt-2 text-xs md:text-sm font-extrabold tracking-[0.18em] uppercase"
                    style={purpleLabelStyle}
                  >
                    {t.header.schoolType}
                  </p>
                </div>
              </div>

              <p
                className={`mt-5 text-[15px] md:text-base leading-8 max-w-2xl ${
                  dir === "rtl" ? "border-r pr-4" : "border-l pl-4"
                }`}
                style={{
                  color: "var(--text-secondary)",
                  borderColor:
                    "color-mix(in srgb, var(--accent-primary) 28%, var(--border-color))",
                }}
              >
                {t.hero.subtitle}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                      style={{
                        borderColor: "var(--border-color)",
                        background:
                          theme === "dark"
                            ? "rgba(255,255,255,.04)"
                            : "rgba(255,255,255,.90)",
                        color: "var(--text-secondary)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 22px ${item.hoverColor}55`;
                        e.currentTarget.style.borderColor = `${item.hoverColor}66`;
                        e.currentTarget.style.color = item.hoverColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.borderColor = "var(--border-color)";
                        e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      <Icon className="h-4.5 w-4.5 transition-all duration-300 group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="min-w-0">
              <h4
                className="font-serif font-bold text-xl md:text-[1.7rem]"
                style={{ color: "var(--text-primary)" }}
              >
                {t.footer.quickLinks}
              </h4>

              <ul className="mt-4 space-y-2.5">
                {footerLinks.map((item, index) => (
                  <li key={item.key}>
                    <motion.div
                      initial={{ opacity: 0, x: dir === "rtl" ? 18 : -18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.38, delay: index * 0.06 }}
                      whileHover={{ x: dir === "rtl" ? -4 : 4 }}
                    >
                      <Link
                        to={item.path}
                        className="group flex items-center justify-between gap-3 rounded-xl px-3.5 py-3 transition-all duration-300 hover:-translate-y-[2px]"
                        style={{
                          color: "var(--text-secondary)",
                          background: panelBgStrong,
                          border: panelBorder,
                          boxShadow:
                            theme === "dark"
                              ? "0 10px 20px -18px rgba(0,0,0,.45)"
                              : "0 12px 24px -20px rgba(15,23,42,.18)",
                        }}
                      >
                        <span className="flex items-center gap-3 min-w-0">
                          <span
                            className="h-2.5 w-2.5 rounded-full shrink-0 transition-all duration-300 group-hover:scale-125"
                            style={{ background: "var(--accent-primary)" }}
                          />
                          <span
                            className="text-sm md:text-[15px] font-semibold truncate transition-colors duration-300"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {t.footer.links[item.key as keyof typeof t.footer.links]}
                          </span>
                        </span>

                        <ArrowUpRight
                          className={`h-4 w-4 shrink-0 opacity-60 transition-all duration-300 group-hover:opacity-100 ${
                            dir === "rtl"
                              ? "rotate-180 group-hover:-translate-x-1"
                              : "group-hover:translate-x-1"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="min-w-0">
              <h4
                className="font-serif font-bold text-xl md:text-[1.7rem]"
                style={{ color: "var(--text-primary)" }}
              >
                {t.footer.contactUs}
              </h4>

              <div className="mt-4 space-y-3.5">
                <div
                  className="rounded-[1.3rem] border p-4"
                  style={{
                    border: panelBorder,
                    background: panelBg,
                  }}
                >
                  <div
                    className="text-[11px] md:text-xs font-extrabold uppercase tracking-[0.16em]"
                    style={purpleLabelStyle}
                  >
                    {dir === "ltr" ? "Al-Khuzama Branch (Boys)" : "فرع الخزامى (بنين)"}
                  </div>

                  <div className="mt-3 space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-4.5 w-4.5 shrink-0 text-violet-600 dark:text-violet-300" />
                      <p className="text-sm leading-7" style={{ color: "var(--text-secondary)" }}>
                        {dir === "ltr"
                          ? "6812 Al-Khuzama Dist., Al-Kharj 16272"
                          : "شارع 6812، حي الخزامى، الخرج 16272"}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-4.5 w-4.5 shrink-0 text-violet-600 dark:text-violet-300" />
                      <a
                        href="tel:+966560232669"
                        dir="ltr"
                        className="text-sm font-bold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        +966 56 023 2669
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="rounded-[1.3rem] border p-4"
                  style={{
                    border: panelBorder,
                    background: panelBg,
                  }}
                >
                  <div
                    className="text-[11px] md:text-xs font-extrabold uppercase tracking-[0.16em]"
                    style={purpleLabelStyle}
                  >
                    {dir === "ltr" ? "Al-Hamra Branch ( Girls)" : "فرع الحمراء ( بنات)"}
                  </div>

                  <div className="mt-3 space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-4.5 w-4.5 shrink-0 text-violet-600 dark:text-violet-300" />
                      <p className="text-sm leading-7" style={{ color: "var(--text-secondary)" }}>
                        {dir === "ltr"
                          ? "Ali Bin Ahmed St, Al-Hamra Dist., Al-Kharj 16278"
                          : "شارع علي بن أحمد بن سعيد، حي الحمراء، الخرج 16278"}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-4.5 w-4.5 shrink-0 text-violet-600 dark:text-violet-300" />
                      <a
                        href="tel:+966537600100"
                        dir="ltr"
                        className="text-sm font-bold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        +966 53 760 0100
                      </a>
                    </div>
                  </div>
                </div>

                {/* Larger support cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  

                  <a
  href="mailto:info@duniaalajial.edu.sa"
  className="rounded-[1.2rem] border px-5 py-6 min-h-[120px] lg:col-span-2"
  style={{
    border: panelBorder,
    background: panelBgStrong,
  }}
>
                    <div
                      className="text-[11px] md:text-xs font-extrabold uppercase tracking-[0.16em]"
                      style={purpleLabelStyle}
                    >
                      {dir === "ltr" ? "Email Us" : "راسلنا عبر البريد"}
                    </div>
                    <div
                      className="mt-2 text-sm md:text-[15px] leading-7 font-extrabold break-all"
                      style={{ color: "var(--text-primary)" }}
                    >
                      info@duniaalajial.edu.sa
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-4 w-full rounded-[1.25rem] border px-5 md:px-6 py-3.5 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{
            borderColor: "var(--border-color)",
            background:
              theme === "dark"
                ? "rgba(255,255,255,.02)"
                : "rgba(255,255,255,.55)",
          }}
        >
          <p className="text-sm text-center md:text-start" style={{ color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>

          <div className="flex items-center gap-4 text-sm">
            <Link
              to="/about/school-policies"
              className="transition-colors duration-300 hover:text-violet-700 dark:hover:text-violet-300"
              style={{ color: "var(--text-secondary)" }}
            >
              {t.footer.links.privacy}
            </Link>
            <span style={{ color: "var(--text-muted)" }}>•</span>
            <Link
              to="/about/school-policies"
              className="transition-colors duration-300 hover:text-violet-700 dark:hover:text-violet-300"
              style={{ color: "var(--text-secondary)" }}
            >
              {language === "ar" ? "الشروط والأحكام" : "Terms of Service"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}