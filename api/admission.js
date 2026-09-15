const requiredFields = ["studentName", "parentName", "mobile", "email"];

function cleanText(value, maxLength = 1000) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ success: false, message: "Method not allowed" });
  }

  const payload = request.body ?? {};
  const form = payload.form ?? {};

  // Honeypot: acknowledge bots without forwarding their data.
  if (cleanText(payload.website)) {
    return response.status(200).json({ success: true });
  }

  if (requiredFields.some((field) => !cleanText(form[field]))) {
    return response.status(400).json({ success: false, message: "Missing required information" });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return response.status(503).json({ success: false, message: "Admissions service is not configured" });
  }

  const fields = Object.fromEntries(
    Object.entries(form).map(([key, value]) => [key, cleanText(value)])
  );

  const submission = new FormData();
  submission.append("access_key", accessKey);
  submission.append("subject", "New Student Application - Dunia Al Ajial");
  submission.append("from_name", "Dunia Al-Ajial International School");
  submission.append("replyto", fields.email);
  submission.append("website", "https://www.dunia-alajial.com");
  submission.append(
    "message",
    [
      "New Student Application",
      "",
      "Student Information",
      `Student Name: ${fields.studentName || "-"}`,
      `Gender: ${fields.gender || "-"}`,
      `Date of Birth: ${fields.dob || "-"}`,
      `Nationality: ${fields.nationality || "-"}`,
      `Grade: ${fields.grade || "-"}`,
      `Previous School: ${fields.previousSchool || "-"}`,
      `City: ${fields.city || "-"}`,
      "",
      "Parent Information",
      `Parent Name: ${fields.parentName || "-"}`,
      `Relationship: ${fields.relationship || "-"}`,
      `Mobile: ${fields.mobile || "-"}`,
      `Email: ${fields.email || "-"}`,
      `ID: ${fields.id || "-"}`,
      `Address: ${fields.address || "-"}`,
      "",
      "Academic Details",
      `Current Grade: ${fields.currentGrade || "-"}`,
      `Curriculum: ${fields.curriculum || "-"}`,
      "",
      "Additional Notes",
      fields.notes || "-",
    ].join("\n")
  );

  try {
    const upstream = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: submission,
    });
    const result = await upstream.json();
    return response.status(upstream.ok && result.success ? 200 : 502).json({ success: Boolean(result.success) });
  } catch {
    return response.status(502).json({ success: false, message: "Admissions service is unavailable" });
  }
}
