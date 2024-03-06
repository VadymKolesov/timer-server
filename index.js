const express = require("express");

const PORT = process.env.PORT || 3010;
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

const timerItems = require("./timer.json");
app.get("/api/timer-items", (req, res) => {
  res.json(timerItems);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
