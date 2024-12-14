import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';
import connectDB from './config/db.js';
import router from './routes/index.js';  // Make sure to add `.js` when using ES Modules

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

const PORT = process.env.PORT || 8080;

const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, "/frontend/build")));

app.get('*', (_, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"));
});

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("connected to DB");
        console.log("server is now running");
    });
});
