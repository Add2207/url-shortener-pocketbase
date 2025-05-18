import pb from "../services/pocketbaseClient.js";
import generateShortCode from "../utils/generateShortCode.js";

export async function shortenUrl(req, res) {
  const { url, expiration } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const shortCode = generateShortCode();
  const createdAt = new Date().toISOString();

  try {
    console.log("Trying to connect to PocketBase...");
    const health = await pb.health.check();
    console.log("PocketBase health check:", health);
  } catch (err) {
    console.error("PocketBase connection error:", err);
  }

  try {
    const record = await pb.collection("urls").create({
      originalUrl: url, // must match PocketBase field name
      shortCode, // must match PocketBase field name
      createdAt, // must match PocketBase field name
      expiration, // now correctly passed
    });

    res.status(201).json({ shortCode });
  } catch (error) {
    console.error(
      "PocketBase error:",
      error.response?.data || error.message || error
    );
    res.status(500).json({ error: "Failed to shorten URL" });
  }
}
