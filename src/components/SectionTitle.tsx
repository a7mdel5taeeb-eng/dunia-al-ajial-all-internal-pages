type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "start" | "center";
};

export default function SectionTitle({
  title,
  subtitle,
  align = "start",
}: SectionTitleProps) {
  const alignmentClass = align === "center" ? "text-center mx-auto" : "text-start";

  return (
    <div className={`max-w-3xl ${alignmentClass}`}>
      <h2
        className="text-2xl md:text-3xl font-bold leading-tight"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="mt-3 text-base md:text-[17px] leading-8"
          style={{ color: "var(--text-secondary)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}