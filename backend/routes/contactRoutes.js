import express from "express";
import {submitContactForm } from "../controllers/contactController.js";

const contactrouter = express.Router();

// POST /api/contact
contactrouter.post("/submit", submitContactForm);

export default contactrouter;
