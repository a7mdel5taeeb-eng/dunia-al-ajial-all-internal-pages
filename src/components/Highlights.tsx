import { Newspaper, Calendar, Activity, Megaphone, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

export default function Highlights() {
  const { t, dir } = useLanguage();

  const items = [
    {
      id: 'news',
      title: t.highlights.news.title,
      desc: t.highlights.news.desc,
      action: t.highlights.news.action,
      icon: Newspaper,
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300",
      delay: 0.1
    },
    {
      id: 'events',
      title: t.highlights.events.title,
      desc: t.highlights.events.desc,
      action: t.highlights.events.action,
      icon: Calendar,
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
      delay: 0.2
    },
    {
      id: 'activities',
      title: t.highlights.activities.title,
      desc: t.highlights.activities.desc,
      action: t.highlights.activities.action,
      icon: Activity,
      color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300",
      delay: 0.3
    },
    {
      id: 'announcements',
      title: t.highlights.announcements.title,
      desc: t.highlights.announcements.desc,
      action: t.highlights.announcements.action,
      icon: Megaphone,
      color: "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300",
      delay: 0.4
    }
  ];

  return (
    <section className="section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-page relative z-10">
        <div className="max-w-2xl mb-14">
          <span className="badge">{dir === 'rtl' ? 'أبرز الأقسام' : 'Highlights'}</span>
          <h2 className="section-title mt-6">{dir === 'rtl' ? 'كل ما تحتاجه… في مكان واحد' : 'Everything you need — in one place'}</h2>
          <p className="section-subtitle">{dir === 'rtl' ? 'ادخل بسرعة للأخبار والفعاليات والأنشطة والإعلانات — بشكل واضح وسهل.' : 'Explore news, events, activities, and announcements with a clean, readable layout.'}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.015 }}
              className="group card card-hover p-9 flex flex-col h-full relative overflow-hidden"
            >
              {/* Decorative Gradient Blob */}
              <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${item.color.split(' ')[0]} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-700 pointer-events-none`} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-purple-500/5" />

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${item.color} shadow-sm group-hover:shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative z-10`}>
                <item.icon className="w-8 h-8" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 font-serif group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors relative z-10" style={{ color: 'var(--text-primary)' }}>
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed mb-10 flex-grow font-light relative z-10" style={{ color: 'var(--text-secondary)' }}>
                {item.desc}
              </p>

              {/* Action */}
              <div className="mt-auto pt-6 border-t group-hover:border-purple-200/60 transition-colors relative z-10" style={{ borderColor: 'color-mix(in srgb, var(--border-color) 85%, transparent)' }}>
                <span className="inline-flex items-center text-xs font-bold tracking-widest uppercase transition-colors" style={{ color: 'var(--accent-primary)' }}>
                  {item.action}
                  {dir === 'ltr' ? (
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                  ) : (
                    <ArrowRight className="w-4 h-4 mr-2 rotate-180 transition-transform duration-300 group-hover:-translate-x-2" />
                  )}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
