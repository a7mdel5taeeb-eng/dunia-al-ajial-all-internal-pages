import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type IntroOverlayProps = {
  onFinish?: () => void;
};

export default function IntroOverlay({ onFinish }: IntroOverlayProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("dais-intro-seen");

    if (hasSeenIntro) {
      setIsVisible(false);
      onFinish?.();
      return;
    }

    const timer = window.setTimeout(() => {
      sessionStorage.setItem("dais-intro-seen", "true");
      setIsVisible(false);
      onFinish?.();
    }, 4200);

    return () => window.clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.75, ease: "easeInOut" } }}
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden px-4"
          style={{
            background:
              "radial-gradient(circle at top, rgba(124,58,237,.18), transparent 30%), linear-gradient(180deg, #040b16 0%, #08111f 52%, #0b1730 100%)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ opacity: [0.4, 0.65, 0.4], scale: [1, 1.06, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] left-[10%] sm:left-[16%] h-40 w-40 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-full blur-3xl bg-violet-500/20"
            />
            <motion.div
              animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[12%] right-[8%] sm:right-[16%] h-52 w-52 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-full blur-3xl bg-indigo-500/16"
            />
          </div>

          <div className="absolute inset-0 pointer-events-none opacity-50">
            <div className="absolute top-[18%] left-[18%] sm:left-[28%] h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-white/90" />
            <div className="absolute top-[30%] right-[18%] sm:right-[27%] h-2 w-2 rounded-full bg-violet-200/80" />
            <div className="absolute bottom-[26%] left-[24%] sm:left-[34%] h-2 w-2 rounded-full bg-white/80" />
          </div>

          <div className="relative z-10 flex w-full max-w-[820px] flex-col items-center justify-center px-2 sm:px-6 text-center">
            <div className="relative mb-5 sm:mb-6 md:mb-8 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.86 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="relative h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] md:h-[380px] md:w-[380px] lg:h-[460px] lg:w-[460px] flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-white/10"
                  style={{
                    boxShadow: "0 0 55px rgba(139,92,246,.10)",
                  }}
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[14px] sm:inset-[18px] md:inset-[24px] rounded-full border border-violet-300/14"
                />

                <motion.div
                  animate={{ scale: [0.94, 1.02, 0.94], opacity: [0.12, 0.22, 0.12] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-[34px] sm:inset-[42px] md:inset-[58px] rounded-full bg-violet-400/10 blur-2xl"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.78, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                      opacity: [0.25, 0.45, 0.25],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute h-[115%] w-[115%] rounded-full bg-violet-500/20 blur-2xl"
                  />

                  <motion.img
                    src="/images/logo.webp"
                    alt="Dunia Al-Ajial"
                    className="w-[74%] sm:w-[82%] md:w-[96%] object-contain"
                    style={{
                      filter: "drop-shadow(0 0 32px rgba(139,92,246,.45))",
                    }}
                    animate={{
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    initial={{ opacity: 0, rotateX: -10, scale: 0.9 }}
                    whileInView={{ opacity: 1, rotateX: 0, scale: 1 }}
                  />
                </motion.div>
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.05 }}
              className="font-serif text-[1.9rem] sm:text-[2.4rem] md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-none"
            >
              Dunia Al-Ajial
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.2 }}
              className="mt-2 sm:mt-3 text-[10px] sm:text-xs md:text-base font-extrabold tracking-[0.18em] sm:tracking-[0.24em] uppercase text-violet-200/90"
            >
              International School
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.45 }}
              className="mt-4 sm:mt-5 text-[10px] sm:text-[11px] md:text-sm tracking-[0.14em] sm:tracking-[0.18em] uppercase text-white/55"
            >
              Inspiring Future Leaders
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0.5 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.75, duration: 0.55 }}
              className="mt-6 sm:mt-8 h-px w-24 sm:w-32 md:w-36 origin-center bg-gradient-to-r from-transparent via-violet-300/70 to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
