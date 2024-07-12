import express from "express";
import dotenv from "dotenv";
import authroutes from "./routes/auth.routes.js";
import connectToMongoDb from "./db/connectToMongoDb.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  // https://localhost:5000/
  res.send(`Hello World, server currently running on port ${PORT}`);
});
app.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server is running on port ${PORT}`);
});

//defing auth routes
app.use("/api/auth", authroutes);
