import express from 'express';
import { loginUser, registerUser } from '../controllers/authController.js';

const authroutes = express.Router();

authroutes.post('/register', registerUser);
authroutes.post('/login', loginUser);

export default authroutes;
