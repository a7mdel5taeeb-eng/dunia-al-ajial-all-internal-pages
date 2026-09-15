import express from "express";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import fetch from "node-fetch";
import { GoogleGenAI } from "@google/genai";
import admissionHandler from "./api/admission.js";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON
  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/admission", (req, res) => admissionHandler(req, res));

  app.get("/api/facebook-news", async (req, res) => {
    const pageId = process.env.FACEBOOK_PAGE_ID || "61550557628168";
    const accessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

    if (!accessToken) {
      return res.status(500).json({ error: "Facebook Access Token not configured" });
    }

    try {
      const response = await fetch(
        `https://graph.facebook.com/v19.0/${pageId}/posts?fields=message,created_time,full_picture,permalink_url,attachments{media,title,description,url}&limit=3&access_token=${accessToken}`
      );
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Facebook API Error:", errorData);
        return res.status(response.status).json({ error: "Failed to fetch from Facebook", details: errorData });
      }

      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Server Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Gemini Chat (server-side) to avoid exposing API keys in the browser.
  // Client calls POST /api/chat with { message: string }.
  app.post("/api/chat", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(501).json({ error: "GEMINI_API_KEY not configured" });
      }

      const message = (req.body?.message ?? "").toString().trim();
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const ai = new GoogleGenAI({ apiKey });
      const model = process.env.GEMINI_MODEL || "gemini-3.1-pro-preview";

      const response = await ai.models.generateContent({
        model,
        contents: [{ role: "user", parts: [{ text: message }] }],
      });

      // @google/genai returns a structured response; the client just needs text.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const text = (response as any)?.text ?? "";
      return res.json({ text });
    } catch (error) {
      console.error("/api/chat error:", error);
      return res.status(500).json({ error: "Chat request failed" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving would go here
    // For this environment, we focus on dev/preview
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
