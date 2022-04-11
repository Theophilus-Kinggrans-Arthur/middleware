const express = require("express");
const authRouter = require("./routes/auth.router");
const indexRoouter = require("./routes/index.router");

const app = express();

// app.use((req, res, next) => {
//   console.log("Global Middleware");
//   next();
// });

app.use("/", indexRoouter);
app.use("/auth", authRouter);

app.listen(3000, () => {
  console.log("🚀 Server up and running");
});
