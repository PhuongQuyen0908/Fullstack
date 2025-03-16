import express from "express";
import configViewEngine from "./configs/viewEngine.js";
import initWebRoutes from "./routes/web.js";

//Phải khai báo thư viện dotenv mới dùng được lệnh process.env
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

//config view Engine
configViewEngine(app);

//init web routes
initWebRoutes(app);



app.listen(PORT, () => {
    console.log(">>> JWT Backend is running on the port = " + PORT);
}) 