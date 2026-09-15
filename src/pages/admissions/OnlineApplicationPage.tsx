import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { motion } from "motion/react";

export default function OnlineApplicationPage() {

const { language } = useLanguage();
const isArabic = language === "ar";

const [step,setStep] = useState(1);
const [loading,setLoading] = useState(false);
const [success,setSuccess] = useState(false);

const steps = ["Student","Parent","Academic","Documents","Submit"];

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

const handleSubmit = async (e:any)=>{
e.preventDefault();

if (!privacyConsent) {
  alert(isArabic ? "يرجى الموافقة على سياسة الخصوصية قبل الإرسال." : "Please accept the privacy notice before submitting.");
  return;
}

if (website) return;

setLoading(true);

const formData = new FormData();

Object.entries(form).forEach(([key, value]) => {
  formData.append(key, value as string);
});

formData.append("access_key", "a68b58ed-fb15-4ec2-916d-8adfa00f0d88");
formData.append("subject", "New Student Application - Dunia Al Ajial");
formData.append("from_name", "Dunia Al-Ajial International School");
formData.append("from_email", "admission@duniaalajial.edu.sa");
formData.append("replyto", form.email);
formData.append("website", "https://www.dunia-alajial.com");

// الرسالة المرتبة التي ستظهر في الإيميل
formData.append(
  "message",
  `
New Student Application

-----------------------------------
Student Information
-----------------------------------
Student Name: ${form.studentName || "-"}
Gender: ${form.gender || "-"}
Date of Birth: ${form.dob || "-"}
Nationality: ${form.nationality || "-"}
Grade: ${form.grade || "-"}
Previous School: ${form.previousSchool || "-"}
City: ${form.city || "-"}

-----------------------------------
Parent Information
-----------------------------------
Parent Name: ${form.parentName || "-"}
Relationship: ${form.relationship || "-"}
Mobile: ${form.mobile || "-"}
Email: ${form.email || "-"}
ID: ${form.id || "-"}
Address: ${form.address || "-"}

-----------------------------------
Academic Details
-----------------------------------
Current Grade: ${form.currentGrade || "-"}
Curriculum: ${form.curriculum || "-"}

-----------------------------------
Additional Notes
-----------------------------------
${form.notes || "-"}

-----------------------------------
Submitted from Dunia Al-Ajial International School Website
`.trim()
);

const res = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  body: formData
});

const data = await res.json();

setLoading(false);

if(data.success){
setSuccess(true);
}else{
alert("Something went wrong. Please try again.");
}

};

if(success){
return(

<section className="pt-40 pb-40 text-center" style={{background:"var(--bg-primary)"}}>

<div className="max-w-xl mx-auto">

<h1 className="text-4xl font-bold mb-6" style={{color:"var(--text-primary)"}}>
Application Submitted
</h1>

<p className="opacity-70 mb-10">
Thank you. Our admissions team will review your application and contact you soon.
</p>

<a
href="/"
className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-3 rounded-full"
>
Back to Home
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

<input required name="studentName" placeholder="Student Full Name"
className="input" onChange={handleChange}/>

<input name="gender" placeholder="Gender"
className="input" onChange={handleChange}/>

<input name="dob" type="date"
className="input" onChange={handleChange}/>

<input name="nationality" placeholder="Nationality"
className="input" onChange={handleChange}/>

<select name="grade" className="input" onChange={handleChange}>

<option>Grade Applying For</option>

<option>KG1</option>
<option>KG2</option>
<option>KG3</option>

{Array.from({length:12}).map((_,i)=>(
<option key={i}>Grade {i+1}</option>
))}

</select>

<input name="city" placeholder="City"
className="input" onChange={handleChange}/>

</div>

)}

{step===2 &&(

<div className="grid md:grid-cols-2 gap-6">

<input required name="parentName" placeholder="Parent Name"
className="input" onChange={handleChange}/>

<input name="relationship" placeholder="Relationship"
className="input" onChange={handleChange}/>

<input required type="tel" name="mobile" placeholder="Mobile"
className="input" onChange={handleChange}/>

<input required type="email" name="email" placeholder="Email"
className="input" onChange={handleChange}/>

<input name="id" placeholder="National ID / Iqama"
className="input" onChange={handleChange}/>

<input name="address" placeholder="Address"
className="input" onChange={handleChange}/>

</div>

)}

{step===3 &&(

<div className="grid md:grid-cols-2 gap-6">

<input name="currentGrade" placeholder="Current Grade"
className="input" onChange={handleChange}/>

<input name="previousSchool" placeholder="Previous School"
className="input" onChange={handleChange}/>

<input name="curriculum" placeholder="Curriculum"
className="input" onChange={handleChange}/>

<textarea name="notes" placeholder="Additional Notes"
className="input h-32 md:col-span-2"
onChange={handleChange}
/>

</div>

)}

{step===4 &&(

<div className="space-y-5">

<p className="text-sm font-semibold">Upload Documents</p>

<input type="file" name="birth_certificate" className="input"/>
<input type="file" name="passport_copy" className="input"/>
<input type="file" name="report_cards" className="input"/>

</div>

)}

{step===5 &&(

<div className="text-center space-y-6">

<p className="text-lg font-semibold">
Review your information and submit
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
{loading ? "Submitting..." : "Submit Application"}
</button>

</div>

)}

<div className="flex justify-between pt-12">

{step>1 &&(

<button
type="button"
onClick={()=>setStep(step-1)}
className="px-6 py-3 rounded-xl border"
>
Previous
</button>

)}

{step<5 &&(

<button
type="button"
onClick={()=>setStep(step+1)}
className="px-6 py-3 rounded-xl
bg-gradient-to-r from-violet-600 to-purple-600 text-white"
>
Next
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
Admissions Information
</h3>

<ul className="space-y-3 text-sm opacity-80">

<li>Applications open for KG1 – Grade 12</li>
<li>Admissions team reviews every application</li>
<li>You will receive response within 48 hours</li>
<li>Required documents will be verified later</li>

</ul>

</div>

</div>

</div>

</section>

)
}
