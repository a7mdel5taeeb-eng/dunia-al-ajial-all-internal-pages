import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";
import { motion } from "motion/react";

export default function OnlineApplicationPage() {

const { language } = useLanguage();
const { theme } = useTheme();
const isArabic = language === "ar";
const isDark = theme === "dark";

const [step,setStep] = useState(1);
const [loading,setLoading] = useState(false);
const [success,setSuccess] = useState(false);
const [formError, setFormError] = useState("");

const steps = isArabic
  ? ["الطالب", "ولي الأمر", "الدراسة", "المستندات", "الإرسال"]
  : ["Student", "Parent", "Academic", "Documents", "Submit"];

const [form,setForm] = useState({
studentName:"",
gender:"",
dob:"",
nationality:"",
grade:"",
previousSchool:"",
city:"",
parentName:"",
relationship:"",
mobile:"",
email:"",
id:"",
address:"",
currentGrade:"",
curriculum:"",
notes:""
});

const [privacyConsent, setPrivacyConsent] = useState(false);
const [website, setWebsite] = useState("");

const handleChange = (e:any)=>{
setForm({...form,[e.target.name]:e.target.value})
};

const requiredFieldsByStep: Record<number, (keyof typeof form)[]> = {
  1: ["studentName", "grade"],
  2: ["parentName", "mobile", "email"],
};

const validateStep = (targetStep: number) => {
  const missingField = requiredFieldsByStep[targetStep]?.find((field) => !form[field].trim());
  if (missingField) {
    setFormError(isArabic ? "يرجى استكمال الحقول المطلوبة قبل المتابعة." : "Please complete the required fields before continuing.");
    return false;
  }
  setFormError("");
  return true;
};

const goToNextStep = () => {
  if (validateStep(step)) setStep(step + 1);
};

const handleSubmit = async (e:any)=>{
e.preventDefault();

if (!validateStep(1) || !validateStep(2)) return;

if (!privacyConsent) {
  setFormError(isArabic ? "يرجى الموافقة على إشعار الخصوصية قبل الإرسال." : "Please accept the privacy notice before submitting.");
  return;
}

if (website) return;

setLoading(true);
setFormError("");

try {
  const res = await fetch("/api/admission", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ form, website })
  });
  const data = await res.json();
  if(data.success){
    setSuccess(true);
  }else{
    setFormError(isArabic ? "تعذر إرسال الطلب الآن. يرجى المحاولة مرة أخرى أو التواصل مع قسم القبول." : "We could not send your application. Please try again or contact the admissions team.");
  }
} catch {
  setFormError(isArabic ? "تعذر الاتصال بخدمة التقديم. يرجى المحاولة لاحقًا." : "We could not reach the admissions service. Please try again later.");
} finally {
  setLoading(false);
}

};

if(success){
return(

<section className="pt-40 pb-40 text-center" style={{background:"var(--bg-primary)"}}>

<div className="max-w-xl mx-auto">

<h1 className="text-4xl font-bold mb-6" style={{color:"var(--text-primary)"}}>
{isArabic ? "تم إرسال الطلب" : "Application Submitted"}
</h1>

<p className="opacity-70 mb-10">
{isArabic ? "شكرًا لك. سيقوم فريق القبول بمراجعة طلبك والتواصل معك قريبًا." : "Thank you. Our admissions team will review your application and contact you soon."}
</p>

<a
href="/"
className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-3 rounded-full"
>
{isArabic ? "العودة للرئيسية" : "Back to Home"}
</a>

</div>

</section>

)
}

return(

<section className="pt-32 pb-24 transition" style={{background:"var(--bg-primary)"}}>

<div className="container-page max-w-6xl">

<h1 className="text-4xl font-serif font-bold text-center mb-16" style={{color:"var(--text-primary)"}}>
{isArabic ? "التسجيل الإلكتروني" : "Online Application"}
</h1>

{/* STEP BAR */}

<div className="max-w-4xl mx-auto mb-16">

<div className="flex justify-between">

{steps.map((label,i)=>{

const index=i+1;
const active=step>=index;

return(

<div key={i} className="flex flex-col items-center flex-1">

<div
className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm transition
${active ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg"
: "bg-slate-300 dark:bg-slate-700 text-slate-600"}`}
>
{index}
</div>

<div className={`text-xs mt-2 font-semibold ${active?"text-violet-600":"text-slate-500"}`}>
{label}
</div>

</div>

)

})}

</div>

<div className="mt-4 h-1 bg-slate-200 rounded-full overflow-hidden">

<motion.div
animate={{width:`${(step-1)/(steps.length-1)*100}%`}}
transition={{duration:.4}}
className="h-full bg-gradient-to-r from-violet-600 to-purple-600"
/>

</div>

</div>


<div className="grid lg:grid-cols-[1fr_340px] gap-12">

{/* FORM */}

<div
className="rounded-3xl shadow-xl p-10 md:p-14 border transition"
style={{
background:"var(--panel-bg)",
borderColor:"var(--border-color)"
}}
>

<form onSubmit={handleSubmit} className="space-y-8">

<div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
  <label htmlFor="website">Website</label>
  <input
    id="website"
    name="website"
    tabIndex={-1}
    autoComplete="off"
    value={website}
    onChange={(event) => setWebsite(event.target.value)}
  />
</div>

{step===1 &&(

<div className="grid md:grid-cols-2 gap-6">

<input required name="studentName" aria-label={isArabic ? "اسم الطالب كاملًا" : "Student full name"} placeholder={isArabic ? "اسم الطالب كاملًا *" : "Student Full Name *"}
className="input" onChange={handleChange}/>

<input name="gender" aria-label={isArabic ? "النوع" : "Gender"} placeholder={isArabic ? "النوع" : "Gender"}
className="input" onChange={handleChange}/>

<input name="dob" type="date" aria-label={isArabic ? "تاريخ الميلاد" : "Date of birth"}
className="input" onChange={handleChange}/>

<input name="nationality" aria-label={isArabic ? "الجنسية" : "Nationality"} placeholder={isArabic ? "الجنسية" : "Nationality"}
className="input" onChange={handleChange}/>

<select required name="grade" aria-label={isArabic ? "الصف المطلوب" : "Grade applying for"} className="input" onChange={handleChange}>

<option value="">{isArabic ? "الصف المطلوب *" : "Grade Applying For *"}</option>

<option value="KG1">KG1</option>
<option value="KG2">KG2</option>
<option value="KG3">KG3</option>

{Array.from({length:12}).map((_,i)=>(
<option key={i} value={`Grade ${i+1}`}>{isArabic ? `الصف ${i+1}` : `Grade ${i+1}`}</option>
))}

</select>

<input name="city" aria-label={isArabic ? "المدينة" : "City"} placeholder={isArabic ? "المدينة" : "City"}
className="input" onChange={handleChange}/>

</div>

)}

{step===2 &&(

<div className="grid md:grid-cols-2 gap-6">

<input required name="parentName" aria-label={isArabic ? "اسم ولي الأمر" : "Parent name"} placeholder={isArabic ? "اسم ولي الأمر *" : "Parent Name *"}
className="input" onChange={handleChange}/>

<input name="relationship" aria-label={isArabic ? "صلة القرابة" : "Relationship"} placeholder={isArabic ? "صلة القرابة" : "Relationship"}
className="input" onChange={handleChange}/>

<input required type="tel" name="mobile" aria-label={isArabic ? "رقم الجوال" : "Mobile number"} placeholder={isArabic ? "رقم الجوال *" : "Mobile *"}
className="input" onChange={handleChange}/>

<input required type="email" name="email" aria-label={isArabic ? "البريد الإلكتروني" : "Email"} placeholder={isArabic ? "البريد الإلكتروني *" : "Email *"}
className="input" onChange={handleChange}/>

<input name="id" aria-label={isArabic ? "رقم الهوية أو الإقامة" : "National ID or Iqama"} placeholder={isArabic ? "رقم الهوية / الإقامة" : "National ID / Iqama"}
className="input" onChange={handleChange}/>

<input name="address" aria-label={isArabic ? "العنوان" : "Address"} placeholder={isArabic ? "العنوان" : "Address"}
className="input" onChange={handleChange}/>

</div>

)}

{step===3 &&(

<div className="grid md:grid-cols-2 gap-6">

<input name="currentGrade" aria-label={isArabic ? "الصف الحالي" : "Current grade"} placeholder={isArabic ? "الصف الحالي" : "Current Grade"}
className="input" onChange={handleChange}/>

<input name="previousSchool" aria-label={isArabic ? "المدرسة السابقة" : "Previous school"} placeholder={isArabic ? "المدرسة السابقة" : "Previous School"}
className="input" onChange={handleChange}/>

<input name="curriculum" aria-label={isArabic ? "المنهج الدراسي" : "Curriculum"} placeholder={isArabic ? "المنهج الدراسي" : "Curriculum"}
className="input" onChange={handleChange}/>

<textarea name="notes" aria-label={isArabic ? "ملاحظات إضافية" : "Additional notes"} placeholder={isArabic ? "ملاحظات إضافية" : "Additional Notes"}
className="input h-32 md:col-span-2"
onChange={handleChange}
/>

</div>

)}

{step===4 &&(

<div className="space-y-5">

<p className="text-base font-semibold" style={{color:"var(--text-primary)"}}>
  {isArabic ? "المستندات المطلوبة" : "Required documents"}
</p>

<div className="rounded-2xl border p-5 text-sm leading-7" style={{borderColor:"var(--border-color)", color:"var(--text-secondary)"}}>
  <p className="font-semibold" style={{color:"var(--text-primary)"}}>
    {isArabic ? "لا ترفع أي مستندات من خلال الموقع في هذه المرحلة." : "Please do not upload documents through the website at this stage."}
  </p>
  <p className="mt-2">
    {isArabic ? "بعد مراجعة الطلب، سيتواصل معك فريق القبول لتحديد المستندات المطلوبة وطريقة تسليمها بأمان." : "After your application is reviewed, the admissions team will contact you with the required documents and a secure submission method."}
  </p>
</div>

</div>

)}

{step===5 &&(

<div className="text-center space-y-6">

<p className="text-lg font-semibold">
{isArabic ? "راجع بياناتك ثم أرسل الطلب" : "Review your information and submit"}
</p>

<label className="mx-auto flex max-w-xl items-start gap-3 rounded-2xl border p-4 text-left text-sm leading-6" style={{borderColor:"var(--border-color)", color:"var(--text-secondary)"}}>
  <input
    type="checkbox"
    checked={privacyConsent}
    onChange={(event) => setPrivacyConsent(event.target.checked)}
    className="mt-1 h-4 w-4 shrink-0 accent-violet-600"
  />
  <span>
    {isArabic
      ? "أوافق على استخدام بياناتي للتواصل معي بخصوص طلب الالتحاق. تُرسل البيانات إلى فريق القبول فقط ولا تُستخدم لأغراض تسويقية."
      : "I agree that my details may be used to contact me about this admission application. They are sent only to the admissions team and are not used for marketing."}
  </span>
</label>

<button
type="submit"
disabled={loading}
className="bg-gradient-to-r from-violet-600 to-purple-600
text-white px-10 py-3 rounded-full font-semibold shadow-lg"
>
{loading ? (isArabic ? "جارٍ الإرسال..." : "Submitting...") : (isArabic ? "إرسال الطلب" : "Submit Application")}
</button>

</div>

)}

{formError && (
<p
className="rounded-xl border px-4 py-3 text-sm font-semibold leading-6"
role="alert"
style={{
  borderColor: isDark ? "rgba(251,113,133,.55)" : "#fecaca",
  background: isDark ? "rgba(127,29,29,.42)" : "#fef2f2",
  color: isDark ? "#fecdd3" : "#b91c1c"
}}
>
  {formError}
</p>
)}

<div className="flex justify-between pt-12">

{step>1 &&(

<button
type="button"
onClick={()=>setStep(step-1)}
className="px-6 py-3 rounded-xl border"
>
{isArabic ? "السابق" : "Previous"}
</button>

)}

{step<5 &&(

<button
type="button"
onClick={goToNextStep}
className="px-6 py-3 rounded-xl
bg-gradient-to-r from-violet-600 to-purple-600 text-white"
>
{isArabic ? "التالي" : "Next"}
</button>

)}

</div>

</form>

</div>


{/* SIDEBAR */}

<div
className="rounded-3xl p-8 border h-fit shadow-lg"
style={{
background:"var(--panel-bg)",
borderColor:"var(--border-color)"
}}
>

<h3 className="font-bold text-lg mb-4">
{isArabic ? "معلومات القبول" : "Admissions Information"}
</h3>

<ul className="space-y-3 text-sm opacity-80">

<li>{isArabic ? "التقديم متاح من KG1 حتى الصف الثاني عشر" : "Applications open for KG1 – Grade 12"}</li>
<li>{isArabic ? "يراجع فريق القبول كل طلب" : "Admissions team reviews every application"}</li>
<li>{isArabic ? "ستصلك استجابة خلال 48 ساعة" : "You will receive a response within 48 hours"}</li>
<li>{isArabic ? "يُطلب التحقق من المستندات بعد مراجعة الطلب" : "Required documents are verified after the application review"}</li>

</ul>

</div>

</div>

</div>

</section>

)
}
