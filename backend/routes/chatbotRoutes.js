import express from "express";
import User from "../models/User.js";
import Chat from "../models/Chat.js";

const router = express.Router();

// Simple auto-responses for common queries
const autoResponses = {
  "appointment": "I can help you book an appointment. What type of appointment do you need?",
  "billing": "I can assist with billing questions. What specific billing issue do you have?",
  "emergency": "For emergencies, please call 911 immediately or visit our emergency department.",
  "hours": "Our visiting hours are 10 AM to 8 PM. Emergency services are 24/7.",
  "contact": "You can reach us at +1-555-0123 or email info@hospital.com",
  "insurance": "We accept most major insurance providers. Please bring your insurance card.",
  "pharmacy": "Our pharmacy is open Monday to Friday, 8 AM to 8 PM.",
  "lab": "Lab services are available Monday to Friday, 7 AM to 6 PM.",
  "covid": "COVID-19 testing is available. Please call 9876543210 to schedule.",
  "default": "Thank you for your message. Our support team will respond shortly."
};

// Send message from user
router.post("/", async (req, res) => {
  try {
    const { message, sessionId, email, userId } = req.body;
    
    if (!message) {
      return res.status(400).json({ 
        reply: "Please enter a message." 
      });
    }

    // Generate or use existing session ID
    const currentSessionId = sessionId || Math.random().toString(36).substring(2, 15);
    
    // Find or create chat session
    let chat = await Chat.findOne({ sessionId: currentSessionId });
    
    if (!chat) {
      chat = new Chat({
        sessionId: currentSessionId,
        userId: userId,
        userEmail: email,
        messages: []
      });
    }

    // Add user message
    const userMessage = {
      from: "user",
      text: message,
      timestamp: new Date(),
      userId: userId,
      email: email
    };
    
    chat.messages.push(userMessage);
    chat.lastMessage = new Date();
    await chat.save();

    // Update user's chat session if registered
    if (userId) {
      await User.findByIdAndUpdate(userId, {
        chatSessionId: currentSessionId,
        isOnline: true,
        lastMessage: new Date()
      });
    }

    // Auto-response based on keywords
    let reply = autoResponses.default;
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes("appointment") || lowerMessage.includes("book")) {
      reply = autoResponses.appointment;
    } else if (lowerMessage.includes("billing") || lowerMessage.includes("payment")) {
      reply = autoResponses.billing;
    } else if (lowerMessage.includes("emergency") || lowerMessage.includes("urgent")) {
      reply = autoResponses.emergency;
    } else if (lowerMessage.includes("hours") || lowerMessage.includes("visit")) {
      reply = autoResponses.hours;
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("phone")) {
      reply = autoResponses.contact;
    } else if (lowerMessage.includes("insurance")) {
      reply = autoResponses.insurance;
    } else if (lowerMessage.includes("pharmacy") || lowerMessage.includes("medicine")) {
      reply = autoResponses.pharmacy;
    } else if (lowerMessage.includes("lab") || lowerMessage.includes("test")) {
      reply = autoResponses.lab;
    } else if (lowerMessage.includes("covid")) {
      reply = autoResponses.covid;
    }

    // Add bot response
    const botMessage = {
      from: "bot",
      text: reply,
      timestamp: new Date()
    };
    
    chat.messages.push(botMessage);
    await chat.save();

    res.json({ 
      reply,
      sessionId: currentSessionId,
      email: email,
      userId: userId
    });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Get chat messages for a session
router.get("/chat/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    
    const chat = await Chat.findOne({ sessionId });
    if (chat) {
      res.json({ messages: chat.messages });
    } else {
      res.json({ messages: [] });
    }
  } catch (error) {
    console.error('Error getting chat:', error);
    res.status(500).json({ error: 'Failed to get chat' });
  }
});

// Admin: Get all active chats
router.get("/admin/chats", async (req, res) => {
  try {
    const chats = await Chat.find({ isActive: true })
      .populate('userId', 'name email phone')
      .sort({ lastMessage: -1 });
    
    res.json({ chats });
  } catch (error) {
    console.error('Error getting chats:', error);
    res.status(500).json({ error: 'Failed to get chats' });
  }
});

// Admin: Send reply to a chat
router.post("/admin/reply", async (req, res) => {
  try {
    const { sessionId, reply } = req.body;
    
    if (!sessionId || !reply) {
      return res.status(400).json({ error: "Session ID and reply are required" });
    }

    const chat = await Chat.findOne({ sessionId });
    if (!chat) {
      return res.status(404).json({ error: "Chat session not found" });
    }

    // Add admin message
    const adminMessage = {
      from: "admin",
      text: reply,
      timestamp: new Date()
    };
    
    chat.messages.push(adminMessage);
    chat.lastMessage = new Date();
    await chat.save();

    // Update user's unread count if registered
    if (chat.userId) {
      await User.findByIdAndUpdate(chat.userId, {
        $inc: { unreadMessages: 1 }
      });
    }

    res.json({ 
      success: true, 
      message: "Reply sent successfully"
    });
  } catch (error) {
    console.error('Error sending admin reply:', error);
    res.status(500).json({ error: 'Failed to send reply' });
  }
});

// Get all users for admin
router.get("/admin/users", async (req, res) => {
  try {
    const users = await User.find({}).select('name email phone isOnline lastMessage unreadMessages chatSessionId');
    res.json({ users });
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Failed to get users' });
  }
});

export default router;