import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-40 bg-slate-950 transition-colors duration-300 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-violet-500/5 to-transparent pointer-events-none" />
      
      <div className="px-4 max-w-7xl mx-auto sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-16 lg:mb-0"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-violet-200 dark:bg-violet-900/30 rounded-full blur-2xl"></div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-violet-300 text-sm font-bold tracking-widest uppercase mb-8 relative z-10 shadow-sm border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              {t.about.badge || "About Us"}
            </div>

            <h2 className="relative text-5xl md:text-6xl font-serif font-bold !text-white mb-8 leading-tight">{t.about.title}</h2>
            
            <div className="space-y-8 text-xl font-light leading-relaxed">
              <p className="!text-white">{t.about.p1}</p>
              <p className="!text-white">{t.about.p2}</p>
            </div>
          
          <div className="mt-12">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full"
            ></motion.div>
          </div>
          
          <div className="mt-12">
            <a href="#admissions" className="inline-flex items-center text-violet-400 font-bold text-lg hover:text-violet-300 transition-colors group">
              {t.about.learnMore}
              <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-16 lg:mt-0 relative group"
        >
          <div className="absolute inset-0 bg-violet-600 rounded-3xl rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-500"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.01]">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Students studying" 
              className="w-full h-full object-cover"
            />
            {/* Improved Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
}
