import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import connectDB from './config/db.js';
import contactrouter from './routes/contactRoutes.js';
import authroutes from './routes/authRoutes.js';
import chatbotRoutes from "./routes/chatbotRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

// ✅ CORS middleware - Allow local + deployed frontend
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:5174',
      'https://hmsc-ashish07-singhs-projects.vercel.app', // frontend deployed
      'https://hospital-git-main-ashish07-singhs-projects.vercel.app', // backend (preview/alias)
      'https://hospital-rho-azure.vercel.app',
    ],
    credentials: true,
  })
);

// ✅ Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use('/api/auth', authroutes);
app.use('/api/contact', contactrouter);
app.use('/api/chatbot', chatbotRoutes);

// ✅ Serve admin page
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// ✅ Default route
app.get("/", (req, res) => {
  res.send("API Working");
});

// ✅ Connect to DB and start server
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🏥 Admin panel available at: http://localhost:${PORT}/admin`);
  console.log(`🌐 CORS enabled for: http://localhost:5173, http://localhost:5174, and deployed frontend`);
});
