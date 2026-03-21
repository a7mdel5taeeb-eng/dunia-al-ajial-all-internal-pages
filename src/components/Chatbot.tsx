import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
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
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const schoolFaqs: FAQItem[] = [
    {
      keywords: ['admission', 'apply', 'application', 'register', 'registration', 'قبول', 'تقديم', 'التسجيل', 'سجل'],
      answerAr:
        `يمكنك التقديم من خلال صفحة **التقديم الإلكتروني** الموجودة في الموقع.  
ولو احتجت مساعدة إضافية يمكنك التواصل مع قسم القبول عبر البريد:  
**admission@duniaalajial.edu.sa**`,
      answerEn:
        `You can apply through the **Online Application** page on the website.  
If you need additional help, please contact the admissions team at:  
**admission@duniaalajial.edu.sa**`,
    },
    {
      keywords: ['fees', 'tuition', 'financial', 'finance', 'رسوم', 'الرسوم', 'مالي', 'النظام المالي'],
      answerAr:
        `يمكنك الاطلاع على تفاصيل الرسوم من خلال صفحة **الرسوم** وصفحة **النظام المالي** داخل قسم القبول بالموقع.`,
      answerEn:
        `You can find fee details on the **Fees** page and the **Financial System** page under the Admissions section.`,
    },
    {
      keywords: ['location', 'address', 'map', 'branch', 'موقع', 'عنوان', 'الخريطة', 'الفرع', 'فروع'],
      answerAr:
        `يمكنك العثور على مواقع فروع المدرسة من خلال صفحة **الموقع** في قسم **تواصل معنا**.`,
      answerEn:
        `You can find the school branch locations on the **Location** page under **Contact Us**.`,
    },
    {
      keywords: ['phone', 'call', 'mobile', 'contact number', 'رقم', 'هاتف', 'تليفون', 'اتصال', 'اتصل'],
      answerAr:
        `رقم التواصل مع المدرسة هو: **0560232669**`,
      answerEn:
        `The school contact number is: **0560232669**`,
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
      keywords: ['policy', 'policies', 'homework', 'bus', 'ai', 'aup', 'سياسة', 'سياسات', 'الواجبات', 'الحافلة', 'الذكاء الاصطناعي'],
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
  ];

  const fallbackAnswerAr = `أعتذر، لم أتمكن من فهم سؤالك بشكل دقيق.  
يمكنك تصفح صفحات الموقع أو التواصل مباشرة مع المدرسة عبر:  
**0560232669**  
أو البريد الإلكتروني:  
**admission@duniaalajial.edu.sa**`;

  const fallbackAnswerEn = `Sorry, I could not fully understand your question.  
Please browse the website pages or contact the school directly via:  
**0560232669**  
or email:  
**admission@duniaalajial.edu.sa**`;

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

  const getBotReply = (message: string) => {
    const normalizedMessage = message.toLowerCase().trim();

    const matchedFaq = schoolFaqs.find((faq) =>
      faq.keywords.some((keyword) => normalizedMessage.includes(keyword.toLowerCase()))
    );

    if (matchedFaq) {
      return language === 'ar' ? matchedFaq.answerAr : matchedFaq.answerEn;
    }

    return language === 'ar' ? fallbackAnswerAr : fallbackAnswerEn;
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMessage = inputText.trim();
    setInputText('');
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    setTimeout(() => {
      const reply = getBotReply(userMessage);
      setMessages((prev) => [...prev, { role: 'model', text: reply }]);
      setIsLoading(false);
    }, 500);
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
            className="fixed bottom-24 right-6 w-[90vw] md:w-96 h-[600px] max-h-[80vh] bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-300 dark:border-slate-800 z-50 flex flex-col overflow-hidden font-sans"
            style={{ direction: dir }}
          >
            <div className="bg-purple-600 p-4 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-1.5 rounded-full">
                  <Bot className="w-5 h-5" />
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

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white dark:bg-slate-950/50">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-purple-600 text-white rounded-tr-none rtl:rounded-tl-none rtl:rounded-tr-2xl'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-sm border border-slate-200 dark:border-slate-700 rounded-tl-none rtl:rounded-tr-none rtl:rounded-tl-2xl'
                    }`}
                  >
                    {msg.role === 'model' ? (
                      <div className="prose prose-sm max-w-none dark:prose-invert prose-p:text-slate-900 dark:prose-p:text-slate-100 prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-li:text-slate-900 dark:prose-li:text-slate-100">
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      </div>
                    ) : (
                      <p className="text-sm">{msg.text}</p>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none rtl:rounded-tr-none rtl:rounded-tl-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-purple-600" />
                    <span className="text-xs text-slate-600 dark:text-slate-400">
                      {language === 'ar' ? 'جارٍ التفكير...' : 'Thinking...'}
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shrink-0">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={language === 'ar' ? 'اكتب سؤالك هنا...' : 'Ask your question here...'}
                  className="flex-1 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full px-4 py-2 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || isLoading}
                  className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
        className="fixed bottom-6 right-6 w-14 h-14 bg-purple-600 text-white rounded-full shadow-lg hover:shadow-purple-500/40 flex items-center justify-center z-50 transition-shadow"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
      </motion.button>
    </>
  );
}