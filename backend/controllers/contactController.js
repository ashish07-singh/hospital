import Contact from "../models/Contact.js";

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, department, message } = req.body;

    // Basic validation
    if (!name || !email || !phone || !department || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({ name, email, phone, department, message });
    await newContact.save();

    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (err) {
    console.error("Contact form error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
