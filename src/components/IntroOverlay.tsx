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
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at top, rgba(124,58,237,.18), transparent 30%), linear-gradient(180deg, #040b16 0%, #08111f 52%, #0b1730 100%)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ opacity: [0.4, 0.65, 0.4], scale: [1, 1.06, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] left-[16%] h-64 w-64 rounded-full blur-3xl bg-violet-500/20"
            />
            <motion.div
              animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[14%] right-[16%] h-80 w-80 rounded-full blur-3xl bg-indigo-500/16"
            />
          </div>

          <div className="absolute inset-0 pointer-events-none opacity-50">
            <div className="absolute top-[18%] left-[28%] h-2.5 w-2.5 rounded-full bg-white/90" />
            <div className="absolute top-[32%] right-[27%] h-2 w-2 rounded-full bg-violet-200/80" />
            <div className="absolute bottom-[28%] left-[34%] h-2 w-2 rounded-full bg-white/80" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
            <div className="relative mb-8 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.86 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="relative h-[340px] w-[340px] md:h-[460px] md:w-[460px] flex items-center justify-center"
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
                  className="absolute inset-[18px] md:inset-[24px] rounded-full border border-violet-300/14"
                />

                <motion.div
                  animate={{ scale: [0.94, 1.02, 0.94], opacity: [0.12, 0.22, 0.12] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-[42px] md:inset-[58px] rounded-full bg-violet-400/10 blur-2xl"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.78, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
                  className="relative flex items-center justify-center"
                >
                  <motion.img
                    src="/images/logo.png"
                    alt="Dunia Al-Ajial"
                    className="h-[260px] w-[260px] md:h-[360px] md:w-[360px] object-contain"
                    style={{
                      filter: "drop-shadow(0 0 24px rgba(139,92,246,.30))",
                    }}
                    initial={{ opacity: 0, rotateX: -10, scale: 0.9 }}
                    animate={{ opacity: 1, rotateX: 0, scale: 1 }}
                    transition={{ duration: 0.75, delay: 0.6 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ x: -150, opacity: 0 }}
                  animate={{ x: 150, opacity: [0, 0.45, 0] }}
                  transition={{ duration: 1.25, delay: 1.05, ease: "easeInOut" }}
                  className="absolute h-32 w-10 rotate-12 rounded-full bg-white/25 blur-md"
                />
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.05 }}
              className="font-serif text-[2.2rem] md:text-6xl font-bold tracking-tight text-white"
            >
              Dunia Al-Ajial
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.2 }}
              className="mt-3 text-xs md:text-base font-extrabold tracking-[0.24em] uppercase text-violet-200/90"
            >
              International School
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.45 }}
              className="mt-5 text-[11px] md:text-sm tracking-[0.18em] uppercase text-white/55"
            >
              Inspiring Future Leaders
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0.5 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.75, duration: 0.55 }}
              className="mt-8 h-px w-36 origin-center bg-gradient-to-r from-transparent via-violet-300/70 to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}