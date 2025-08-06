// 👇 Only needed for __dirname in ES module
import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import contactrouter from './routes/contactRoutes.js';
import authroutes from './routes/authRoutes.js';
import chatbotRoutes from "./routes/chatbotRoutes.js";

// ✅ Required for __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

// ✅ Connect DB
connectDB();

// ✅ CORS setup
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'https://hmsc-ashish07-singhs-projects.vercel.app',
  'https://hospital-git-main-ashish07-singhs-projects.vercel.app',
  'https://hospital-rho-azure.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.options('*', cors());

// ✅ Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use('/api/auth', authroutes);
app.use('/api/contact', contactrouter);
app.use('/api/chatbot', chatbotRoutes);

// ✅ Serve admin.html
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// ✅ Default route
app.get("/", (req, res) => {
  res.send("API Working");
});

// ✅ Export app for Vercel
export default app;
