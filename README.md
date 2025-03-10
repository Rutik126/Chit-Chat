# Chit-Chat

# Chat Application

A real-time chat application built with **React** (frontend), **Node.js** (backend), and **MongoDB** (database). This application allows users to register, log in, and chat in real-time using **Socket.IO**.

## 🚀 Features

### 🔐 User Authentication
- Sign up with a username, email, and password.
- Log in securely using JWT-based authentication.
- Password hashing with **bcryptjs**.

### 💬 Real-Time Chat
- Send and receive messages instantly using **Socket.IO**.
- Display online/offline status of users.

### 🔒 Protected Routes
- Only authenticated users can access the chat page.
- Automatic redirection to the login page if not authenticated.

### 📱 Responsive Design
- Mobile-friendly UI with a clean and modern design.

## 🛠️ Technologies Used

### Frontend
- **React** – JavaScript library for building the UI.
- **React Router** – For navigation.
- **Axios** – For making HTTP requests.
- **Socket.IO Client** – For real-time communication.
- **CSS** – For styling.

### Backend
- **Node.js** – JavaScript runtime for backend processing.
- **Express.js** – Web framework for building RESTful APIs.
- **MongoDB** – NoSQL database for storing user and message data.
- **Mongoose** – ODM for MongoDB.
- **Socket.IO** – For real-time communication.
- **bcryptjs** – For password encryption.
- **jsonwebtoken (JWT)** – For authentication.

## 📦 Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (Local or MongoDB Atlas)

### Steps

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

#### 2️⃣ Install Dependencies

For the **backend**:
```bash
cd server
npm install
```

For the **frontend**:
```bash
cd client
npm install
```

#### 3️⃣ Set Up Environment Variables
Create a `.env` file in the `server` directory:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/chat-app?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

#### 4️⃣ Start the Backend Server
```bash
cd server
npm start
```

#### 5️⃣ Start the Frontend Server
```bash
cd client
npm start
```

#### 6️⃣ Access the Application
Open your browser and go to:
```
http://localhost:3000
```

## 📂 Project Structure

### Frontend
```
client/
├── public/
├── src/
│   ├── components/
│   │   ├── Chat.js
│   │   ├── Chat.css
│   │   ├── Message.js
│   │   ├── Navbar.js
│   │   ├── ProtectedRoute.js
│   │   └── Sidebar.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── LoginPage.js
│   │   ├── LoginPage.css
│   │   ├── SignupPage.js
│   │   └── SignupPage.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── README.md
```

### Backend
```
server/
├── config/
│   └── db.js
├── controllers/
│   └── messageController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── Message.js
│   └── User.js
├── routes/
│   ├── auth.js
│   └── messages.js
├── .env
├── package.json
└── server.js
```

## 📝 Usage

### 📝 Sign Up
1. Navigate to `/signup`.
2. Enter your username, email, and password.
3. Click **Sign Up** to create an account.

### 🔑 Log In
1. Navigate to `/login`.
2. Enter your username and password.
3. Click **Login** to access the chat page.

### 💬 Chat
- Once logged in, you will be redirected to the chat page (`/`).
- Start chatting in real-time with other users.

### 🚪 Log Out
- Click the **Logout** button to log out and clear your session.

## 📡 API Endpoints

### 🔑 Authentication
- `POST /api/auth/signup` – Register a new user.
- `POST /api/auth/login` – Log in an existing user.
- `POST /api/auth/logout` – Log out the current user.

### 💬 Messages
- `GET /api/messages/:sender/:receiver` – Fetch messages between two users.
- `POST /api/messages` – Send a new message.

## 🤝 Contributing
Contributions are welcome! Follow these steps:

1. **Fork** the repository.
2. Create a **new branch**:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a **Pull Request**.

## 📜 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## 🙌 Acknowledgments
- **React** – For building the frontend.
- **Node.js** – For backend development.
- **MongoDB** – For database storage.
- **Socket.IO** – For real-time communication.

---

Enjoy using the **Chat Application**! 🚀
