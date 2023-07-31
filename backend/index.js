import express from "express";
import cors from "cors";
// import db from "./config/database.js";
import session from "express-session";
import dotenv from "dotenv";
import UserRoute from "./routes/UserRoute.js";
import RapRoute from "./routes/RapRoute.js";

dotenv.config();

const app = express();

// (async () => {
//   await db.sync();
// })();

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: "auto",
    },
  })
);
app.use(
  cors({
    Credential: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(UserRoute);
app.use(RapRoute);

app.listen(process.env.APP_PORT, () => {
  console.log("SERVER RUNING...");
});
