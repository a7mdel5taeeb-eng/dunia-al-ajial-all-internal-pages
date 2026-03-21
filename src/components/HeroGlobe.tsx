import { motion } from "motion/react";

export default function HeroGlobe() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:flex items-center justify-end overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative translate-x-10"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        >
          <svg
            width="420"
            height="420"
            viewBox="0 0 420 420"
            fill="none"
            className="opacity-[0.22] dark:opacity-[0.28] drop-shadow-[0_0_30px_rgba(139,92,246,.10)]"
          >
            <circle
              cx="210"
              cy="210"
              r="140"
              stroke="url(#globeStroke)"
              strokeWidth="1.6"
            />
            <path d="M70 210H350" stroke="url(#globeStroke)" strokeWidth="1.2" />
            <path d="M100 155C140 172 280 172 320 155" stroke="url(#globeStroke)" strokeWidth="1.1" />
            <path d="M100 265C140 248 280 248 320 265" stroke="url(#globeStroke)" strokeWidth="1.1" />
            <path d="M210 70C176 106 164 314 210 350" stroke="url(#globeStroke)" strokeWidth="1.1" />
            <path d="M210 70C244 106 256 314 210 350" stroke="url(#globeStroke)" strokeWidth="1.1" />
            <circle
              cx="210"
              cy="210"
              r="170"
              stroke="rgba(167,139,250,.18)"
              strokeWidth="1"
              strokeDasharray="5 8"
            />

            <defs>
              <linearGradient id="globeStroke" x1="70" y1="70" x2="350" y2="350" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgba(124,58,237,.95)" />
                <stop offset="1" stopColor="rgba(59,130,246,.65)" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full blur-3xl bg-violet-500/10"
        />
      </motion.div>
    </div>
  );
}