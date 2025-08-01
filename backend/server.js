import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import contactrouter from './routes/contactRoutes.js';
import authroutes from './routes/authRoutes.js';


dotenv.config();


const app = express();

// ✅ CORS middleware
app.use(cors())

// ✅ JSON & URL-encoded body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use('/api/auth', authroutes);
app.use('/api/contact', contactrouter);

app.get("/", (req, res) => {
  res.send("API Working")
});

// ✅ DB Connection and Server Start
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
