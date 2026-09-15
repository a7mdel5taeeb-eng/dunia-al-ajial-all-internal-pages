import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface FAQItem {
  keywords: string[];
  answerAr: string;
  answerEn: string;
}

export default function Chatbot() {
  const { dir, language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions =
    language === 'ar'
      ? ['كيف أقدّم؟', 'ما هي الرسوم؟', 'أين الفروع؟', 'أرقام التواصل', 'الوظائف المتاحة']
      : ['How do I apply?', 'What are the fees?', 'Where are the branches?', 'Contact numbers', 'Careers'];

  const schoolFaqs: FAQItem[] = [
    {
      keywords: ['admission', 'apply', 'application', 'register', 'registration', 'قبول', 'تقديم', 'التسجيل', 'سجل'],
      answerAr:
        `يمكنك التقديم من خلال [صفحة التقديم الإلكتروني](/admissions/online-application).

ولو احتجت مساعدة إضافية يمكنك التواصل مع قسم القبول عبر البريد:

[‎admission@duniaalajial.edu.sa](mailto:admission@duniaalajial.edu.sa)`,
      answerEn:
        `You can apply through the [Online Application page](/admissions/online-application).

If you need additional help, please contact the admissions team at:

[‎admission@duniaalajial.edu.sa](mailto:admission@duniaalajial.edu.sa)`,
    },
    {
      keywords: ['fees', 'tuition', 'financial', 'finance', 'رسوم', 'الرسوم', 'مالي', 'النظام المالي'],
      answerAr:
        `يمكنك الاطلاع على [صفحة الرسوم](/admissions/fees) و[النظام المالي](/admissions/financial-system) داخل قسم القبول.`,
      answerEn:
        `You can find fee details on the [Fees page](/admissions/fees) and the [Financial System page](/admissions/financial-system).`,
    },
    {
      keywords: ['location', 'address', 'map', 'branch', 'موقع', 'عنوان', 'الخريطة', 'الفرع', 'فروع'],
      answerAr:
        `لدينا فرعان في الخرج:

- [فرع البنين – حي الخزامى](https://maps.app.goo.gl/YAygujNekXEKCMxZ7)
- [فرع البنات – حي الحمراء](https://maps.app.goo.gl/MYKSZJp9cwWn2EMk8)`,
      answerEn:
        `We have two campuses in Al-Kharj:

- [Boys Campus – Al Khuzama](https://www.google.com/maps?q=24.1276835,47.2727108)
- [Girls Campus – Al Hamra](https://www.google.com/maps?q=24.1614634,47.3070865)`,
    },
    {
      keywords: ['phone', 'call', 'mobile', 'contact number', 'رقم', 'هاتف', 'تليفون', 'اتصال', 'اتصل'],
      answerAr:
        `يمكنك الاتصال بالمدرسة مباشرة على:

[‎0560232669](tel:+966560232669)`,
      answerEn:
        `You can call the school directly on:

[‎0560232669](tel:+966560232669)`,
    },
    {
      keywords: ['email', 'mail', 'بريد', 'ايميل', 'إيميل'],
      answerAr:
        `يمكنك التواصل مع المدرسة عبر البريد الإلكتروني التالي:

**admission@duniaalajial.edu.sa**`,
      answerEn:
        `You can contact the school via email at:

**admission@duniaalajial.edu.sa**`,
    },
    {
      keywords: ['tour', 'visit', 'school tour', 'زيارة', 'جولة', 'جولة مدرسية'],
      answerAr:
        `يمكنك حجز زيارة أو جولة مدرسية من خلال صفحة **الجولة المدرسية** داخل قسم القبول.`,
      answerEn:
        `You can book a visit or school tour through the **School Tour** page in the Admissions section.`,
    },
    {
      keywords: ['career', 'job', 'work', 'وظيفة', 'وظائف', 'توظيف'],
      answerAr:
        `للاطلاع على الوظائف أو التقديم، يمكنك زيارة صفحة **Career** أو التواصل عبر:

**hr@duniaalajial.edu.sa**`,
      answerEn:
        `To view career opportunities or apply, please visit the **Career** page or contact:

**hr@duniaalajial.edu.sa**`,
    },
    {
      keywords: ['news', 'facebook', 'events', 'اخبار', 'أخبار', 'فعاليات', 'فيسبوك'],
      answerAr:
        `يمكنك متابعة آخر أخبار المدرسة من قسم **آخر الأخبار** في الصفحة الرئيسية، حيث يتم عرض أحدث منشورات صفحة المدرسة.`,
      answerEn:
        `You can follow the latest school updates in the **Latest News** section on the homepage, where recent school posts are displayed.`,
    },
    {
      keywords: ['policy', 'policies', 'homework', 'ai', 'aup', 'سياسة', 'سياسات', 'الواجبات', 'الذكاء الاصطناعي'],
      answerAr:
        `يمكنك الاطلاع على جميع السياسات المدرسية من خلال صفحة **School Policies** داخل قسم **About Us**.`,
      answerEn:
        `You can view all school policies through the **School Policies** page under **About Us**.`,
    },
    {
      keywords: ['curriculum', 'american', 'kg', 'elementary', 'middle', 'high', 'منهج', 'امريكي', 'أمريكي', 'ابتدائي', 'متوسط', 'ثانوي', 'رياض'],
      answerAr:
        `يمكنك التعرف على المراحل الدراسية والمحتوى الأكاديمي من خلال صفحات **الأكاديمية** في الموقع مثل:
- الطفولة المبكرة  
- الابتدائية  
- المتوسطة والثانوية`,
      answerEn:
        `You can learn more about the academic stages through the **Academics** pages on the website, including:
- Early Childhood  
- Elementary School  
- Middle & High School`,
    },
    {
      keywords: ['bus', 'transport', 'transportation', 'uniform', 'زي', 'الزي', 'باص', 'حافلة', 'مواصلات'],
      answerAr:
        `للتأكد من توفر النقل المدرسي أو تفاصيل الزي للمستوى المطلوب، تواصل مباشرة مع المدرسة على:

[‎0560232669](tel:+966560232669)`,
      answerEn:
        `For school transport availability or uniform details for a specific grade, please contact the school directly:

[‎0560232669](tel:+966560232669)`,
    },
  ];

  const fallbackAnswerAr = `أعتذر، لم أتمكن من فهم سؤالك بشكل دقيق.

يمكنك تصفح صفحات الموقع أو التواصل مباشرة مع المدرسة عبر:

[‎0560232669](tel:+966560232669)

أو البريد الإلكتروني:

[‎admission@duniaalajial.edu.sa](mailto:admission@duniaalajial.edu.sa)`;

  const fallbackAnswerEn = `Sorry, I could not fully understand your question.

Please browse the website pages or contact the school directly via:

[‎0560232669](tel:+966560232669)

or email:

[‎admission@duniaalajial.edu.sa](mailto:admission@duniaalajial.edu.sa)`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'model',
          text:
            language === 'ar'
              ? 'مرحبًا! أنا مساعد المدرسة. يمكنني مساعدتك في القبول، الرسوم، الموقع، التواصل، والسياسات.'
              : 'Hello! I am the school assistant. I can help with admissions, fees, location, contact details, and policies.',
        },
      ]);
    }
  }, [isOpen, messages.length, language]);

  const normalizeText = (text: string) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ى/g, 'ي')
      .replace(/ة/g, 'ه')
      .replace(/[ًٌٍَُِّْ]/g, '');

  const getBotReply = (message: string) => {
    const normalizedMessage = normalizeText(message);

    const matchedFaq = schoolFaqs
      .map((faq) => ({
        faq,
        score: faq.keywords.filter((keyword) => normalizedMessage.includes(normalizeText(keyword))).length,
      }))
      .filter(({ score }) => score > 0)
      .sort((first, second) => second.score - first.score)[0]?.faq;

    if (matchedFaq) {
      return language === 'ar' ? matchedFaq.answerAr : matchedFaq.answerEn;
    }

    return language === 'ar' ? fallbackAnswerAr : fallbackAnswerEn;
  };

  const sendMessage = (userMessage: string) => {
    if (!userMessage.trim() || isLoading) return;

    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    setTimeout(() => {
      const reply = getBotReply(userMessage);
      setMessages((prev) => [...prev, { role: 'model', text: reply }]);
      setIsLoading(false);
    }, 500);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    const userMessage = inputText.trim();
    if (!userMessage || isLoading) return;
    setInputText('');
    sendMessage(userMessage);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-[100] flex h-[600px] max-h-[80vh] w-[90vw] flex-col overflow-hidden rounded-2xl border font-sans shadow-2xl md:w-96"
            style={{
              direction: dir,
              backgroundColor: isDark ? '#0f172a' : '#ffffff',
              borderColor: isDark ? '#334155' : '#d8dee9',
            }}
          >
            <div
              className="flex shrink-0 items-center justify-between p-4 text-white"
              style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}
            >
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-1.5 rounded-full">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-bold">
                  {language === 'ar' ? 'مساعد المدرسة' : 'School Assistant'}
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div
              className="flex-1 overflow-y-auto space-y-4 p-4"
              style={{ backgroundColor: isDark ? '#020617' : '#f8fafc' }}
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 ${
                      msg.role === 'user'
                        ? 'text-white rounded-tr-none rtl:rounded-tl-none rtl:rounded-tr-2xl'
                        : 'rounded-tl-none border shadow-sm rtl:rounded-tl-2xl rtl:rounded-tr-none'
                    }`}
                    style={
                      msg.role === 'model'
                        ? {
                            backgroundColor: isDark ? '#172033' : '#ffffff',
                            color: isDark ? '#f8fafc' : '#0f172a',
                            borderColor: isDark ? '#334155' : '#dbe3ee',
                          }
                        : { background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }
                    }
                  >
                    {msg.role === 'model' ? (
                      <div
                        className="text-sm leading-6 [&_a]:font-semibold [&_a]:underline [&_li]:my-0 [&_ol]:my-2 [&_p]:m-0 [&_p+p]:mt-2 [&_ul]:my-2"
                        style={{ color: isDark ? '#f8fafc' : '#0f172a' }}
                      >
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      </div>
                    ) : (
                      <p className="text-sm">{msg.text}</p>
                    )}
                  </div>
                </div>
              ))}

              {!isLoading && (
                <div className="space-y-2 pt-1">
                  <p className="text-xs font-semibold" style={{ color: isDark ? '#cbd5e1' : '#475569' }}>
                    {language === 'ar' ? 'اختر موضوعًا سريعًا:' : 'Choose a quick topic:'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.map((question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() => sendMessage(question)}
                        className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                          isDark
                            ? 'border-purple-400/40 bg-purple-500/15 text-violet-100 hover:bg-purple-500/25'
                            : 'border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100'
                        }`}
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {isLoading && (
                <div className="flex justify-start">
                  <div
                    className="flex items-center gap-2 rounded-2xl rounded-tl-none border p-3 shadow-sm rtl:rounded-tl-2xl rtl:rounded-tr-none"
                    style={{
                      backgroundColor: isDark ? '#172033' : '#ffffff',
                      borderColor: isDark ? '#334155' : '#dbe3ee',
                    }}
                  >
                    <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
                    <span className="text-xs" style={{ color: isDark ? '#cbd5e1' : '#475569' }}>
                      {language === 'ar' ? 'جارٍ التفكير...' : 'Thinking...'}
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div
              className="shrink-0 border-t p-4"
              style={{
                backgroundColor: isDark ? '#0f172a' : '#f8fafc',
                borderColor: isDark ? '#334155' : '#dbe3ee',
              }}
            >
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={language === 'ar' ? 'اكتب سؤالك هنا...' : 'Ask your question here...'}
                  className={`flex-1 rounded-full border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    isDark
                      ? 'border-slate-700 bg-slate-800 text-white placeholder:text-slate-400'
                      : 'border-slate-300 bg-white text-slate-900 placeholder:text-slate-500'
                  }`}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || isLoading}
                  className="rounded-full p-2 text-white transition-all hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
                  style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}
                >
                  {dir === 'ltr' ? (
                    <Send className="w-5 h-5" />
                  ) : (
                    <Send className="w-5 h-5 rotate-180" />
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full border border-white/25 text-white shadow-lg shadow-indigo-950/30 transition-all hover:brightness-105 hover:shadow-xl"
        style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
      </motion.button>
    </>
  );
}
