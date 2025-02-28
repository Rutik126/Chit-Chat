const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const authMiddleware = require('../middleware/auth');

// Protect all message routes
router.use(authMiddleware);

// Send a message
router.post('/', authMiddleware, async (req, res) => {
    const { receiver, message } = req.body;
    const sender = req.userId;
  
    const newMessage = new Message({ sender, receiver, message });
  
    try {
      await newMessage.save();
      console.log('Message saved:', newMessage); // Debugging
      res.status(201).json(newMessage);
    } catch (err) {
      console.error('Database error:', err); // Debugging
      res.status(400).json({ message: err.message });
    }
  });
  
  // Fetch messages between two users
  router.get('/:receiver', authMiddleware, async (req, res) => {
    const sender = req.userId;
    const receiver = req.params.receiver;
  
    try {
      const messages = await Message.find({
        $or: [
          { sender, receiver },
          { sender: receiver, receiver: sender },
        ],
      }).sort({ timestamp: 1 });
  
      res.json(messages);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

// Send new message
router.post('/', async (req, res) => {
  const { receiver, message } = req.body;
  const sender = req.userId;

  const newMessage = new Message({ sender, receiver, message });

  try {
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
  router.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    res.json({ file });
  });

module.exports = router;