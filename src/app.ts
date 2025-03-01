import express from "express";
import authRoutes from "./routes/authRoutes"
import userRoutes from "./routes/userRoutes"
import cookieParser from 'cookie-parser'

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Health Check')
})

app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);

export default app;