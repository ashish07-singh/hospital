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

// ✅ Dynamic CORS configuration
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

// ✅ Allow preflight requests
app.options('*', cors());

// ✅ Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use('/api/auth', authroutes);
app.use('/api/contact', contactrouter);
app.use('/api/chatbot', chatbotRoutes);

// ✅ Admin HTML route
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
});
