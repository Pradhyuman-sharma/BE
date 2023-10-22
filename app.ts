import express from "express";
import { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./src/routes/auth.route"
import sleepFormRoute from "./src/routes/sleepForm.route"
// Create the express app and  import the type of app from express;
const app: Application = express();

// Cors
app.use(cors());
//configure env;
dotenv.config();
// Parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
const PORT: number = 8000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome To Wysa Sleep Rest APIs </h1>");
});

app.use("/api/auth", authRoute);
app.use("/api/sleepForm", sleepFormRoute);

// Listen the server
app.listen(PORT, async () => {
  console.log(`🗄️  Server Fire on http://localhost:${PORT}`);

  // Connect To The Database
  try {
    await mongoose.connect(   //please change the connection string to localhost if for some reason the hosted url not working
      process.env.DATABASE_URL as string
    );
    console.log("🛢️  Connected To Database");
  } catch (error) {
    console.log("⚠️ Error to connect Database");
  }
});
