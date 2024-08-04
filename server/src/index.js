const express = require("express");
const axios = require("axios");
const axiosRetry = require("axios-retry");
const crypto = require("crypto");
const cors = require("cors");
const NodeCache = require("node-cache");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

const cache = new NodeCache({ stdTTL: 600 }); // 10 minutos

app.use(cors());

// Configurar axios para reintentar solicitudes en caso de errores temporales
axiosRetry(axios, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: (error) => {
    // Retriables errors
    return (
      axiosRetry.isNetworkOrIdempotentRequestError(error) ||
      error.code === "ECONNABORTED"
    );
  },
});

app.get("/api/characters", async (req, res) => {
  try {
    const { nameStartsWith } = req.query;
    console.log(
      "Received request for /api/characters",
      "nameStartsWith:",
      nameStartsWith
    );

    // Generar una clave de caché única considerando el parámetro de búsqueda
    const cacheKey = nameStartsWith
      ? `characters_${nameStartsWith}`
      : "characters";

    // Verificar si los datos están en caché
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      console.log("Returning cached data for key:", cacheKey);
      return res.json(cachedData);
    }

    const ts = new Date().getTime().toString();
    const publicKey = process.env.MARVEL_PUBLIC_KEY;
    const privateKey = process.env.MARVEL_PRIVATE_KEY;

    const hash = crypto
      .createHash("md5")
      .update(ts + privateKey + publicKey)
      .digest("hex");

    // Configurar los parámetros de la solicitud, incluyendo nameStartsWith si está presente
    const params = {
      apikey: publicKey,
      ts,
      hash,
      limit: 50,
      ...(nameStartsWith && { nameStartsWith }), // Añadir nameStartsWith solo si está presente
    };

    console.log("Request params:", params);

    const response = await axios.get(
      "https://gateway.marvel.com/v1/public/characters",
      {
        params,
        timeout: 10000, // Tiempo de espera de 10 segundos
      }
    );

    console.log("Marvel API Response:", response.data);

    // Almacenar en caché la respuesta
    cache.set(cacheKey, response.data);

    res.json(response.data);
  } catch (error) {
    console.error("Error in /api/characters:", error.message);

    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error message:", error.message);
    }

    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
