import { ReactNode } from "react";
import { useTheme } from "../contexts/ThemeContext";

type InfoCardProps = {
  icon?: ReactNode;
  title: string;
  description: string;
};

export default function InfoCard({
  icon,
  title,
  description,
}: InfoCardProps) {
  const { theme } = useTheme();

  return (
    <div
      className="rounded-[2rem] border p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{
        borderColor: "var(--border-color)",
        background: "var(--card-bg)",
      }}
    >
      {icon && (
        <div
          className="mb-4 inline-flex items-center justify-center rounded-xl p-3"
          style={{
            background:
              theme === "dark"
                ? "rgba(139,92,246,.16)"
                : "rgba(237,233,254,.9)",
            color: "var(--accent-primary)",
          }}
        >
          {icon}
        </div>
      )}

      <h3
        className="text-lg font-bold"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h3>

      <p
        className="mt-2 text-sm leading-7"
        style={{ color: "var(--text-secondary)" }}
      >
        {description}
      </p>
    </div>
  );
}