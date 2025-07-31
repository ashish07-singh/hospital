import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'User already exists' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login attempt for:', email); // Debug log

    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found:', email); // Debug log
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('Stored hash:', user.password); // Debug log
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password match:', isMatch); // Debug log

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });

    res.status(200).json({
      message: 'Login successful',
      user: { id: user._id, name: user.name, email: user.email },
      token
    });
  } catch (err) {
    console.error('Login error:', err); // Debug log
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
