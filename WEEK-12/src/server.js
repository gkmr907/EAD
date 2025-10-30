import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import router from "./routes/students.js";

dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());

app.use("/api/students",router);
app.get("/",(_req,res)=>res.send("Api is running"));

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGO_URI;

try {
    connectDB(URI);
    app.listen(PORT,()=>console.log(`app is running on port  http://localhost:${PORT}`));
} catch (error) {
    console.log("Error connect DB");
}
