const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "MiniPost API server is running",
  });
});

app.post("/api/request", async (req, res) => {
  const { method, url, headers = [], body } = req.body;

  if (!url) {
    return res.status(400).json({
      error: "URL is required",
    });
  }

  try {
    const requestHeaders = {};

    headers.forEach((header) => {
      if (header.key && header.value) {
        requestHeaders[header.key] = header.value;
      }
    });

    const startTime = Date.now();

    const response = await fetch(url, {
      method,
      headers: requestHeaders,
      body:
        method === "GET" || method === "DELETE"
          ? undefined
          : body || undefined,
    });

    const responseTime = Date.now() - startTime;

    const responseText = await response.text();

    let responseBody;

    try {
      responseBody = JSON.parse(responseText);
    } catch {
      responseBody = responseText;
    }

    const responseHeaders = Object.fromEntries(
      response.headers.entries()
    );

    res.json({
      status: response.status,
      statusText: response.statusText,
      time: responseTime,
      headers: responseHeaders,
      body: responseBody,
    });
  } catch (error) {
    console.error("Request failed:", error.message);

    res.status(500).json({
      error: "Failed to reach the requested API",
      message: error.message,
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});