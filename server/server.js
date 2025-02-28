const express = require('express');
const mongoose = require('mongoose');
const authMiddleware = require('./middleware/auth');
const cors = require('cors');
require('dotenv').config();

const http = require('http');
const socketIo = require('socket.io');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Apply authMiddleware to all routes
// app.use(authMiddleware);

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('sendMessage', (message) => {
    io.emit('receiveMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/messages');

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));