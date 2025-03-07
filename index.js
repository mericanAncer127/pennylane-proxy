"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const proxyRoutes = require("./routes/invoice");

// Constants
const PORT = 3000;
const HOST = "0.0.0.0";

// Seed the database
// App
const app = express();
app.use(cors());
app.use(bodyParser.json()); // This middleware parses incoming JSON payloads

// Health check
app.get("/health", (req, res) => {
  res.send("Hello World");
});

// Write your endpoints here

// Register routes
app.use("/api/invoice", proxyRoutes); // User-Group routes

// Export the Express app instance

module.exports = app;
