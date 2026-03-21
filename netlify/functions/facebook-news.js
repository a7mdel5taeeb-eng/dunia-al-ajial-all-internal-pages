export default async (req, context) => {
  try {
    const PAGE_ID = process.env.FACEBOOK_PAGE_ID;
    const ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;

    const fields = "message,permalink_url,created_time,full_picture";

    const url = `https://graph.facebook.com/v19.0/${PAGE_ID}/feed?fields=${fields}&limit=5&access_token=${ACCESS_TOKEN}`;

    const response = await fetch(url);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch Facebook news" }),
      { status: 500 }
    );
  }
};