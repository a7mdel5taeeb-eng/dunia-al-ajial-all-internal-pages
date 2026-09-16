import { motion } from "motion/react";
import {
  ArrowRight,
  Baby,
  BookOpen,
  Globe2,
  HeartHandshake,
  Palette,
  Shapes,
  Sparkles,
  Trees,
  Users,
  Bookmark,
  School,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

export default function EarlyChildhoodPage() {
  const { language, dir } = useLanguage();
  const isArabic = language === "ar";

  const highlights = isArabic
    ? [
        {
          title: "بيئة ترحيبية وآمنة",
          icon: HeartHandshake,
          content:
            "تتميز فصول الروضة بألوانها الزاهية وتنظيمها المدروس الذي يحفز الإبداع والاستكشاف. زوايا التعلم التفاعلية، والأثاث الملائم للأطفال، والموارد التعليمية المناسبة لأعمارهم، جميعها تخلق فضاءً يشعر فيه الطفل بالأمان والحماس للتعلم.",
        },
        {
          title: "التعلّم القائم على اللعب والشامل",
          icon: Sparkles,
          content:
            "يمزج المنهج بين التعلّم باللعب والأنشطة المنظمة، مما يتيح للأطفال تطوير مهاراتهم المعرفية والاجتماعية والعاطفية والحركية بشكل طبيعي. ومن خلال القصص، والفنون، والحركة، والتجارب العملية، يتعلم الطفل بطريقة ممتعة وذات معنى.",
        },
        {
          title: "التنمية الثنائية اللغة",
          icon: Globe2,
          content:
            "يدمج البرنامج اللغتين العربية والإنجليزية في الأنشطة اليومية، من خلال الأغاني والألعاب والدروس التفاعلية، مما يساعد الأطفال على بناء أساس لغوي قوي في كلتا اللغتين.",
        },
        {
          title: "النمو الاجتماعي والعاطفي",
          icon: Users,
          content:
            "يعمل معلمو الروضة على تهيئة بيئة شاملة ودافئة، يتعلم فيها الطفل المشاركة والتعاون والتعبير عن الذات بثقة، كما تُصقل مهارات العمل الجماعي والتعاطف وحل المشكلات من خلال الأنشطة الجماعية واللعب الموجّه.",
        },
        {
          title: "الاستكشاف الخارجي والنشاط البدني",
          icon: Trees,
          content:
            "توفّر منطقة اللعب الخارجية فرصًا متعددة لتنمية المهارات الحركية الكبرى والتوازن وحب الحركة، سواء من خلال الألعاب المنظمة أو اللعب الحر أو الأنشطة القائمة على الطبيعة.",
        },
        {
          title: "الشراكة مع الأسرة والمجتمع",
          icon: Baby,
          content:
            "تُولي المدرسة أهمية كبرى للشراكة مع أولياء الأمور عبر التواصل المستمر، والفعاليات المشتركة، وإتاحة الفرص للمشاركة الفاعلة في رحلة التعلم المبكر لأبنائهم.",
        },
      ]
    : [
        {
          title: "A Welcoming & Safe Environment",
          icon: HeartHandshake,
          content:
            "The kindergarten classrooms are bright, colorful, and thoughtfully arranged to foster creativity and exploration. Interactive learning corners, child-friendly furniture, and age-appropriate resources create a space where children feel safe, comfortable, and excited to learn.",
        },
        {
          title: "Play-Based & Holistic Learning",
          icon: Sparkles,
          content:
            "The curriculum blends play-based learning with structured activities, allowing children to develop cognitive, social, emotional, and physical skills naturally. Through storytelling, arts and crafts, movement, and hands-on experiments, learning becomes fun and meaningful.",
        },
        {
          title: "Bilingual Development",
          icon: Globe2,
          content:
            "Recognizing the importance of multilingualism, the kindergarten program incorporates Arabic and English instruction through songs, games, and interactive lessons to build a strong foundation in both languages.",
        },
        {
          title: "Social & Emotional Growth",
          icon: Users,
          content:
            "Teachers foster a warm and inclusive environment where children learn to share, collaborate, and express themselves confidently. Social skills such as teamwork, empathy, and problem-solving are nurtured through guided play and group activities.",
        },
        {
          title: "Outdoor Exploration & Physical Activity",
          icon: Trees,
          content:
            "A dedicated outdoor play area helps children develop motor skills, coordination, and a love for physical activity through structured games, free play, and nature-based learning.",
        },
        {
          title: "Parental Involvement & Community",
          icon: Baby,
          content:
            "The school values strong partnerships with parents, keeping them informed through regular updates, shared events, and opportunities to take an active role in their child’s early learning journey.",
        },
      ];

  const levelCards = isArabic
    ? [
        {
          id: "kg1",
          level: "KG1",
          age: "3 سنوات",
          title: "المستوى الأول",
          description:
            "بداية لطيفة وآمنة في عالم التعلم، تركز على التكيّف، واللغة الأولى، والمهارات الاجتماعية الأساسية، والتعلم من خلال اللعب.",
        },
        {
          id: "kg2",
          level: "KG2",
          age: "4 سنوات",
          title: "المستوى الثاني",
          description:
            "مرحلة بناء الثقة وتنمية المهارات الأكاديمية المبكرة من خلال أنشطة أكثر تنظيمًا وتفاعلًا.",
        },
        {
          id: "kg3",
          level: "KG3",
          age: "5 سنوات",
          title: "المستوى الثالث",
          description:
            "مرحلة متقدمة تهيئ الطفل للانتقال إلى الصف الأول عبر ترسيخ مهارات القراءة والكتابة والحساب والتعبير.",
        },
      ]
    : [
        {
          id: "kg1",
          level: "KG1",
          age: "Age 3",
          title: "Level One",
          description:
            "A warm and gentle start to learning, focused on adjustment, early language, social development, and play-based exploration.",
        },
        {
          id: "kg2",
          level: "KG2",
          age: "Age 4",
          title: "Level Two",
          description:
            "A stage of growing confidence and developing early academic skills through more structured and interactive activities.",
        },
        {
          id: "kg3",
          level: "KG3",
          age: "Age 5",
          title: "Level Three",
          description:
            "A more advanced stage preparing children for Grade 1 by strengthening literacy, numeracy, and communication skills.",
        },
      ];

  const curriculum = isArabic
    ? [
        {
          title: "اللغة الإنجليزية",
          icon: BookOpen,
          focus: "تنمية القراءة المبكرة، والتواصل، وأساسيات الصوتيات.",
          kg1: "التعرف على الحروف، والأصوات الأولية، وبناء المفردات من خلال الأغاني والأناشيد، وأنشطة التتبع والتلوين.",
          kg2: "تعزيز التعرف على الحروف والأصوات، وتقديم كلمات بصرية بسيطة، ورواية القصص، وقراءة وكتابة كلمات ثلاثية الأحرف (CVC).",
          kg3: "دمج الأصوات لتكوين الكلمات، وقراءة كلمات ثلاثية وأخرى بحروف مد في جمل قصيرة، وكتابة جمل بسيطة، وممارسة التعبير الشفهي.",
        },
        {
          title: "الرياضيات",
          icon: Shapes,
          focus: "بناء الحس العددي، والأشكال، والأنماط، ومهارات حل المشكلات.",
          kg1: "العد من ١ إلى ١٠، والتعرّف على الأرقام، والأشكال والألوان الأساسية، والتصنيف والمطابقة، والمفاهيم الأولية للقياس مثل كبير/صغير وطويل/قصير.",
          kg2: "العد حتى ٥٠، والتعرف على الأرقام، والتصنيف والأنماط، والإدراك المكاني، والجمع والطرح البسيط باستخدام المجسمات.",
          kg3: "العد حتى ١٠٠، وإتقان الجمع والطرح باستخدام خط الأعداد، والقياس والمقارنة، ومفهوم الوقت، ومقدمة في النقود، والأشكال الهندسية والكسور البسيطة.",
        },
        {
          title: "العلوم",
          icon: Sparkles,
          focus: "استكشاف العالم الطبيعي من خلال الملاحظة والتجارب العملية.",
          kg1: "أجزاء الجسم والوجه، والعادات الصحية السليمة.",
          kg2: "عالم الحيوان والنبات، وجسم الإنسان، والطعام الصحي، وتصنيف الأشياء، والأضداد، والضوء، والتمييز بين الليل والنهار.",
          kg3: "مقدمة إلى الفصول الأربعة، والطقس، وحالات المادة، والحركة والطاقة، والموائل والبيئة، ودورات حياة الحيوان والنبات.",
        },
        {
          title: "اللغة العربية",
          icon: Globe2,
          focus: "تنمية مهارات الاستماع والتحدث والقراءة المبكرة باللغة العربية.",
          kg1: "التعرّف إلى الحروف الهجائية، وتلوينها وتتبع كتابتها، واكتساب المفردات عبر الأناشيد والقصص.",
          kg2: "التعرف إلى الحروف وكتابتها، وتعلم التحيات البسيطة، واكتساب المفردات، والتعرف على الحركات القصيرة.",
          kg3: "كتابة الحروف العربية بشكل متقن، وتكوين كلمات بسيطة، وممارسة المحادثة اليومية.",
        },
        {
          title: "التربية البدنية",
          icon: Users,
          focus: "تنمية المهارات الحركية، والتناسق، والعمل الجماعي.",
          kg1: "الجري، والقفز، وتمارين التوازن، والألعاب الحركية المبسطة، والأنشطة الجماعية المناسبة للعمر.",
          kg2: "الجري، والقفز، وتمارين التوازن، والألعاب الكروية المبسطة، والأنشطة الجماعية التي تنمي الرشاقة والتعاون.",
          kg3: "الجري، والقفز، وتمارين التوازن، والألعاب الكروية المبسطة، والأنشطة الجماعية التي تنمي الرشاقة والتعاون.",
        },
        {
          title: "الفنون والإبداع",
          icon: Palette,
          focus: "تشجيع التعبير عن الذات وتنمية المهارات الحركية الدقيقة.",
          kg1: "الرسم الحر، والتلوين، والتلوين بالأصابع.",
          kg2: "الرسم، والتلوين، والرسم بالألوان المائية، والكولاج، والأعمال الفنية المرتبطة بموضوعات دراسية.",
          kg3: "الرسم، والتلوين، والرسم بالألوان المائية، والكولاج، والأعمال الفنية المرتبطة بموضوعات مثل الفصول والحيوانات والمناسبات.",
        },
        {
          title: "الأنشطة الإثرائية",
          icon: HeartHandshake,
          focus: "دعم النمو الاجتماعي والعاطفي والمعرفي من خلال التعلم القائم على اللعب.",
          kg1: "وقت الحلقة، ورواية القصص، والتعبير الحر، والمناقشات الجماعية البسيطة.",
          kg2: "لعب الأدوار، والموسيقى والحركة، والأنشطة الجماعية، والتفاعل من خلال اللعب الموجّه.",
          kg3: "الرحلات والفعاليات، ووقت الحلقة، والعرض والمشاركة، واللعب الدرامي، والأنشطة الواقعية المرتبطة بالحياة اليومية.",
        },
      ]
    : [
        {
          title: "English Language",
          icon: BookOpen,
          focus: "Developing early literacy, communication, and phonics.",
          kg1: "Letter recognition, basic sounds (phonics), vocabulary building through songs and rhymes, and tracing and coloring the letters.",
          kg2: "Letter recognition, basic sounds, simple sight words, storytelling, and reading and writing CVC words.",
          kg3: "Blending sounds to form words, reading CVC words and long-vowel words in short sentences, writing simple sentences, and expressive speaking activities.",
        },
        {
          title: "Mathematics",
          icon: Shapes,
          focus: "Building number sense, shapes, patterns, and problem-solving.",
          kg1: "Counting (1–10), number recognition, basic shapes and colors, sorting, matching, and simple measurement concepts such as big/small and tall/short.",
          kg2: "Counting (1–50), number recognition, colors and shapes, position, sorting and patterns, and basic addition/subtraction using objects.",
          kg3: "Counting (1–100+), addition and subtraction using number lines, measurement and comparison, time concepts, introduction to money, geometry, and simple fractions.",
        },
        {
          title: "Science",
          icon: Sparkles,
          focus: "Exploring the natural world through observation and hands-on experiments.",
          kg1: "Face and body parts, and good and bad habits.",
          kg2: "Animals, plants, the human body, food, sorting objects, opposites, light, and day and night concepts.",
          kg3: "Introduction to seasons, weather, matter, motion, energy, habitats, environmental awareness, and animal and plant life cycles.",
        },
        {
          title: "Arabic Language",
          icon: Globe2,
          focus: "Developing listening, speaking, and early reading skills in Arabic.",
          kg1: "Arabic alphabet recognition, tracing and coloring the letters, and vocabulary through songs and stories.",
          kg2: "Arabic alphabet recognition, reading and writing letters, basic greetings, vocabulary through songs and stories, and short vowel sounds.",
          kg3: "Writing Arabic letters, forming simple words, and conversational practice in daily contexts.",
        },
        {
          title: "Physical Education (PE)",
          icon: Users,
          focus: "Enhancing motor skills, coordination, and teamwork.",
          kg1: "Running, jumping, balancing exercises, simple movement games, and age-appropriate group activities.",
          kg2: "Running, jumping, balancing exercises, ball games, and fun group activities to develop agility and social interaction.",
          kg3: "Running, jumping, balancing exercises, ball games, and fun group activities to develop agility and social interaction.",
        },
        {
          title: "Art & Creativity",
          icon: Palette,
          focus: "Encouraging self-expression and fine motor development.",
          kg1: "Drawing, coloring, and finger painting.",
          kg2: "Drawing, coloring, painting, collage-making, and crafts linked to meaningful themes.",
          kg3: "Drawing, coloring, painting, collage-making, and creative projects linked to seasons, animals, and cultural events.",
        },
        {
          title: "Activities & Enrichment",
          icon: HeartHandshake,
          focus: "Supporting social, emotional, and cognitive growth through play-based learning.",
          kg1: "Circle time, storytelling, free expression, and simple group discussions.",
          kg2: "Role play, music and movement, guided play, and interactive group activities.",
          kg3: "Field trips, special events, circle time, show-and-tell, dramatic play, and real-world learning experiences.",
        },
      ];

  const eyebrow = isArabic ? "الأكاديمية" : "Academics";
  const mainTitle = isArabic
    ? "روضة الأطفال – مرحلة الطفولة المبكرة (KG)"
    : "Kindergarten – Early Childhood (KG)";
  const heroTitle = isArabic
    ? "بداية تعليمية دافئة ومليئة بالاكتشاف"
    : "A Warm, Joyful, and Inspiring Start to Learning";
  const heroText = isArabic
    ? "في مدرسة دنيا الأجيال العالمية، صُمِّم برنامج رياض الأطفال ليكون بيئة حاضنة ومحفزة وممتعة، حيث يخطو المتعلمون الصغار خطواتهم الأولى في عالم التعليم بشغف وفضول، مع توازن جميل بين التعلم الأكاديمي واللعب والإبداع والنمو الاجتماعي."
    : "At Dunia Al-Ajial International School, the kindergarten program is designed to be a nurturing, engaging, and stimulating environment where young learners take their first steps into education with joy, curiosity, and confidence.";

  const quickLinksTitle = isArabic ? "الانتقال السريع" : "Quick Navigation";

  const curriculumTitle = isArabic
    ? "مناهج المستويات: KG1 وKG2 وKG3"
    : "Curriculum for KG1, KG2 & KG3";

  const curriculumIntro = isArabic
    ? "تقدّم برامج الروضة تجربة تعليمية مبكرة متكاملة، تجمع بين الأساسيات الأكاديمية والإبداع والتطور البدني. تُدرّس جميع المواد بأساليب تفاعلية قائمة على اللعب، لضمان تفاعل الصغار وبناء المهارات الأساسية."
    : "The KG1, KG2, and KG3 programs provide a well-rounded early education experience, blending academic foundations with creative and physical development. Each subject is taught through interactive, play-based methods to ensure children stay engaged while building essential skills.";

  const closingText = isArabic
    ? "تضمن برامج رياض الأطفال في مدرسة دنيا الأجيال العالمية تجربة تعليمية مبكرة متوازنة وممتعة ومحفزة. فمن خلال دمج المعارف الأكاديمية بالإبداع والنشاط البدني والتنمية الاجتماعية، نبني لدى الأطفال أساسًا متينًا لحب التعلّم مدى الحياة. في مدرستنا، الروضة ليست مجرد مرحلة نحو الصف الأول، بل مغامرة مليئة بالاكتشاف نحتفل فيها بإمكانات كل طفل ونرعاه لينمو متفوقًا."
    : "The kindergarten programs at Dunia Al-Ajial International School ensure a balanced, fun, and stimulating early education experience. By integrating academics with creativity, physical activity, and social development, children build a strong foundation for future learning and a lifelong love of discovery. Kindergarten here is more than preparation for primary school — it is a joyful adventure where every child’s potential is celebrated and nurtured.";

  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-20">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-violet-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <div
            className="relative overflow-hidden rounded-[1.75rem] md:rounded-[2rem] min-h-[320px] md:min-h-[430px] border"
            style={{
              borderColor: "color-mix(in srgb, var(--accent-primary) 10%, var(--border-color))",
              backgroundImage: "url('/images/early-childhood-hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 24px 60px -30px rgba(15,23,42,.22)",
            }}
          >
              <div className="absolute inset-0 bg-gradient-to-t from-[#12172f]/95 via-[#2a1d52]/58 to-[#0b1730]/22" />
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 via-transparent to-amber-300/15" />
              <div aria-hidden="true" className="absolute -top-16 -right-14 h-48 w-48 rounded-full border border-white/20 bg-amber-300/10 blur-[1px]" />
              <div aria-hidden="true" className="absolute top-12 left-10 h-20 w-20 rotate-12 rounded-[1.5rem] border border-fuchsia-200/25 bg-fuchsia-300/10" />
              <div aria-hidden="true" className="absolute bottom-10 right-12 h-28 w-28 rounded-full border border-white/15 bg-white/5" />

              <div className="relative z-10 flex min-h-[320px] md:min-h-[430px] flex-col items-center justify-end px-5 py-5 md:px-10 md:py-10 text-center">
                <div className="w-full max-w-4xl rounded-[1.6rem] border border-white/15 bg-slate-950/25 px-5 py-6 backdrop-blur-md md:rounded-[1.9rem] md:px-10 md:py-9">
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold text-white bg-white/10 border-white/20 backdrop-blur-sm">
                  {eyebrow}
                </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-bold font-serif tracking-tight text-white">
                {mainTitle}
              </h1>

              <p className="mt-5 text-xl md:text-2xl font-semibold text-white/95">
                {heroTitle}
              </p>

                <p className="mt-5 max-w-4xl mx-auto text-base md:text-lg leading-8 md:leading-9 text-white/90">
                  {heroText}
                </p>
                </div>
              </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="max-w-5xl mx-auto mt-10"
        >
          <div
            className="rounded-[1.8rem] border p-5 md:p-6"
            style={{
              background: "color-mix(in srgb, var(--bg-elevated) 88%, transparent)",
              borderColor: "color-mix(in srgb, var(--accent-primary) 12%, var(--border-color))",
              boxShadow: "0 18px 50px -32px rgba(15,23,42,.18)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300">
                <Bookmark className="w-5 h-5" />
              </div>
              <h2
                className="text-xl md:text-2xl font-bold font-serif"
                style={{ color: "var(--text-primary)" }}
              >
                {quickLinksTitle}
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {levelCards.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm md:text-base font-bold transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-[1px]"
                  style={{
                    color: "#ffffff",
                    background:
                      "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                  }}
                >
                  {item.level} — {item.age}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-[1.8rem] border p-6 md:p-7 h-full"
                style={{
                  background: "color-mix(in srgb, var(--bg-elevated) 88%, transparent)",
                  borderColor:
                    "color-mix(in srgb, var(--accent-primary) 12%, var(--border-color))",
                  boxShadow: "0 18px 50px -32px rgba(15,23,42,.22)",
                }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300">
                  <Icon className="w-7 h-7" />
                </div>

                <h2
                  className="text-2xl font-bold font-serif mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </h2>

                <p
                  className="text-[0.98rem] md:text-[1.02rem] leading-8"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.content}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="max-w-6xl mx-auto mt-16 md:mt-20"
        >
          <div className="text-center mb-8 md:mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold font-serif"
              style={{ color: "var(--text-primary)" }}
            >
              {curriculumTitle}
            </h2>

            <p
              className="mt-4 max-w-4xl mx-auto text-base md:text-lg leading-8 md:leading-9"
              style={{ color: "var(--text-secondary)" }}
            >
              {curriculumIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {levelCards.map((item, index) => (
              <motion.div
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-[1.8rem] border p-6 md:p-7 scroll-mt-32"
                style={{
                  background: "color-mix(in srgb, var(--bg-elevated) 90%, transparent)",
                  borderColor: "color-mix(in srgb, #8b5cf6 16%, var(--border-color))",
                  boxShadow: "0 18px 50px -32px rgba(15,23,42,.22)",
                }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 bg-purple-500/10 text-purple-600 dark:bg-purple-500/15 dark:text-purple-300">
                  <School className="w-7 h-7" />
                </div>

                <div
                  className="text-sm font-bold mb-2"
                  style={{ color: "var(--accent-primary)" }}
                >
                  {item.level}
                </div>

                <h3
                  className="text-2xl font-bold font-serif mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-sm md:text-base font-semibold mb-4"
                  style={{ color: "var(--accent-primary)" }}
                >
                  {item.age}
                </p>

                <p
                  className="text-[0.98rem] md:text-[1.02rem] leading-8"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curriculum.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="rounded-[1.8rem] border p-6 md:p-7 h-full"
                  style={{
                    background: "color-mix(in srgb, var(--bg-elevated) 88%, transparent)",
                    borderColor: "color-mix(in srgb, #3b82f6 12%, var(--border-color))",
                    boxShadow: "0 18px 50px -32px rgba(15,23,42,.22)",
                  }}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300 shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div>
                      <h3
                        className="text-2xl font-bold font-serif mb-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm md:text-base leading-7"
                        style={{ color: "var(--accent-primary)" }}
                      >
                        {isArabic ? `التركيز: ${item.focus}` : `Focus: ${item.focus}`}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div
                      className="rounded-2xl border p-4"
                      style={{
                        background: "color-mix(in srgb, var(--bg-elevated) 94%, transparent)",
                        borderColor: "var(--border-color)",
                      }}
                    >
                      <div
                        className="text-sm font-bold mb-2"
                        style={{ color: "var(--accent-primary)" }}
                      >
                        KG1
                      </div>
                      <p
                        className="text-[0.97rem] leading-8"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.kg1}
                      </p>
                    </div>

                    <div
                      className="rounded-2xl border p-4"
                      style={{
                        background: "color-mix(in srgb, var(--bg-elevated) 94%, transparent)",
                        borderColor: "var(--border-color)",
                      }}
                    >
                      <div
                        className="text-sm font-bold mb-2"
                        style={{ color: "var(--accent-primary)" }}
                      >
                        KG2
                      </div>
                      <p
                        className="text-[0.97rem] leading-8"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.kg2}
                      </p>
                    </div>

                    <div
                      className="rounded-2xl border p-4"
                      style={{
                        background: "color-mix(in srgb, var(--bg-elevated) 94%, transparent)",
                        borderColor: "var(--border-color)",
                      }}
                    >
                      <div
                        className="text-sm font-bold mb-2"
                        style={{ color: "var(--accent-primary)" }}
                      >
                        KG3
                      </div>
                      <p
                        className="text-[0.97rem] leading-8"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.kg3}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl mx-auto mt-16 md:mt-20 text-center"
        >
          <div
            className="rounded-[2rem] border p-6 md:p-8"
            style={{
              background: "color-mix(in srgb, var(--bg-elevated) 88%, transparent)",
              borderColor: "color-mix(in srgb, var(--accent-primary) 10%, var(--border-color))",
              boxShadow: "0 18px 50px -32px rgba(15,23,42,.22)",
            }}
          >
            <p
              className="text-lg md:text-xl leading-8 md:leading-9"
              style={{ color: "var(--text-secondary)" }}
            >
              {closingText} 🌟
            </p>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
          <Link
            to="/academics/elementary-school"
            className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm md:text-base font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-[1px]"
            style={{
              color: "#ffffff",
              background:
                "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
            }}
          >
            {isArabic ? "استكشف المرحلة الابتدائية" : "Explore Elementary School"}
          </Link>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-200 shadow-sm hover:shadow-md"
            style={{
              color: "#ffffff",
              background:
                "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
            }}
          >
            {isArabic ? "العودة للرئيسية" : "Back to Home"}
            <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </div>
    </section>
  );
}
