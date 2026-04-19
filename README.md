# 🍪 Oreo AI — Minimal Full-Stack Conversational AI

## 📌 Project Overview

Oreo AI is a minimal full-stack conversational AI web application that allows users to enter a question and receive a single AI-generated response.

The system uses the **Groq API (llama-3.1-8b-instant)** to generate responses and stores every interaction in **MongoDB Atlas**.

The project follows a clean full-stack architecture with a React frontend and Node.js backend.

---

## 🚀 Features

- Accepts a single user question
- Generates AI response using Groq API
- Stores question + response in MongoDB
- Clean, minimal chat UI
- Markdown-supported AI responses
- Fully deployed frontend and backend

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS
- React Markdown

### Backend
- Node.js
- Express.js
- MongoDB Atlas (Mongoose)
- Groq API (`llama-3.1-8b-instant`)
- CORS & dotenv

### Deployment
- Vercel (Frontend + Backend)

---

## 📂 Project Structure

```
Oreo-AI-assistant/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Landing.jsx
│   │   │   └── Chat.jsx
│   │   ├── api.js
│   │   └── App.jsx
│
├── backend/
│   ├── src/
│   │   ├── index.js
│   │   ├── routes/
│   │   ├── models/
│   │   └── services/
│
├── README.md
└── vibecoded.md
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/your-username/Oreo-AI-assistant.git
cd Oreo-AI-assistant
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key
PORT=5000
```

Run backend:

```bash
npm start
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 API Usage

### Endpoint

```
POST /api/query
```

### Request Body

```json
{
  "question": "What is AI?"
}
```

### Response

```json
{
  "response": "AI refers to..."
}
```

---

## 🚀 Deployment Steps

### Backend (Vercel)

1. Import GitHub repository into Vercel
2. Set Root Directory → `backend`
3. Add Environment Variables:
   - `MONGO_URI`
   - `GROQ_API_KEY`
4. Deploy

### Frontend (Vercel)

1. Import same repository into Vercel
2. Set Root Directory → `frontend`
3. Update API URL in `api.js` to backend Vercel URL
4. Deploy

---

## 🔐 Environment Variables

### Backend

| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB Atlas connection string |
| `GROQ_API_KEY` | Groq API key |
| `PORT` | Server port (default `5000`) |

---

## 📊 Functional Flow

```
User → Frontend (React)
     → Backend (Express API)
     → Groq AI API
     → MongoDB (store logs)
     → Response → Frontend → User
```

---

## ❌ Non-Goals

- No authentication system
- No chat history
- No multi-turn conversations
- No user accounts

---

## 📌 Evaluation Focus

- Clean architecture
- Correct API integration
- Successful deployment
- Proper Git usage
- Functional UI + backend integration