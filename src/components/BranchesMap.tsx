import { MapPin, Phone, Building2, ExternalLink } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

export default function BranchesMap() {
  const { language } = useLanguage();

  const branches =
    language === "ar"
      ? [
          {
            title: "فرع البنين – حي الخزامى",
            address: "مدارس دنيا الأجيال العالمية (بنون)، 47HF+33G، الخزامى، الخرج 16272",
            phone: "+966 56 240 9829",
            map: "https://maps.app.goo.gl/YAygujNekXEKCMxZ7",
          },
          {
            title: "فرع البنات – حي الحمراء",
            address: "مدارس دنيا الأجيال العالمية – فرع الحمراء، حي الحمراء، 8028 علي بن أحمد بن سعيد، الخرج 16278",
            phone: "+966 53 770 0100",
            map: "https://maps.app.goo.gl/MYKSZJp9cwWn2EMk8",
          },
        ]
      : [
          {
  title: "Boys Campus – Al Khuzama",
  address: "Dunia Al-Ajial International Schools, Al Khuzama District, Al-Kharj",
  phone: "+966 56 240 9829",
  map: "https://www.google.com/maps?q=24.1276835,47.2727108",
},
{
  title: "Girls Campus – Al Hamra",
  address: "Dunia Al-Ajial International Schools, Al Hamra District, Al-Kharj",
  phone: "+966 53 770 0100",
  map: "https://www.google.com/maps?q=24.1614634,47.3070865",
},
        ];

  return (
    <section className="section-muted">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <span className="badge">
            <MapPin className="w-4 h-4" />
            {language === "ar" ? "مواقع الفروع" : "Our Campuses"}
          </span>

          <h2 className="section-title mt-6">
            {language === "ar" ? "فروعنا" : "Our Branches"}
          </h2>

          <p className="section-subtitle">
            {language === "ar"
              ? "تعرّف على مواقع فروع المدرسة وبيانات التواصل الخاصة بكل فرع."
              : "Explore our school branches and contact details for each campus."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card card-hover p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center bg-violet-500/10 text-violet-500 shrink-0">
                  <Building2 className="w-6 h-6 md:w-7 md:h-7" />
                </div>

                <div className="flex-1">
                  <h3
                    className="text-xl md:text-2xl font-serif font-bold mb-4"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {branch.title}
                  </h3>

                  <div className="space-y-4" style={{ color: "var(--text-secondary)" }}>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 mt-1 text-violet-400 shrink-0" />
                      <p>{branch.address}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-violet-400 shrink-0" />
                      <p>{branch.phone}</p>
                    </div>
                  </div>

                  <a
                    href={branch.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-5 font-semibold hover:underline"
                    style={{ color: "var(--accent-primary)" }}
                  >
                    {language === "ar" ? "افتح الموقع على الخريطة" : "Open in Google Maps"}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:mt-10 rounded-[2rem] overflow-hidden border border-white/10 shadow-lg">
          <iframe
            title="School Branches Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232988.47411870907!2d47.45121650804285!3d24.15612480605533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e254f3ec6382fb7%3A0x97e26e6625397379!2z2KfZhNiu2LHYrA!5e0!3m2!1sar!2ssa!4v1773796030937!5m2!1sar!2ssa"
            className="w-full h-[260px] md:h-[360px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}