const express = require("express");
const axios = require("axios");
const crypto = require("crypto");
const cors = require("cors");
const NodeCache = require("node-cache");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

const cache = new NodeCache({ stdTTL: 600 });

app.use(cors());

app.get("/api/characters", async (req, res) => {
  try {
    console.log("Received request for /api/characters");

    // Chequear si tenemos datos en caché
    const cachedData = cache.get("characters");
    if (cachedData) {
      console.log("Returning cached data");
      return res.json(cachedData);
    }

    const ts = new Date().getTime().toString();
    const publicKey = process.env.MARVEL_PUBLIC_KEY;
    const privateKey = process.env.MARVEL_PRIVATE_KEY;

    console.log("Timestamp generated:", ts);

    const hash = crypto
      .createHash("md5")
      .update(ts + privateKey + publicKey)
      .digest("hex");

    console.log("Hash generated:", hash);

    console.time("Marvel API Request");
    const response = await axios.get(
      `https://gateway.marvel.com/v1/public/characters`,
      {
        params: {
          apikey: publicKey,
          ts,
          hash,
          limit: 50,
        },
      }
    );
    console.timeEnd("Marvel API Request");

    // Almacenar en caché la respuesta
    cache.set("characters", response.data);

    res.json(response.data);
  } catch (error) {
    console.error("Error in /api/characters:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
