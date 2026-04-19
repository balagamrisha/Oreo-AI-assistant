# Oreo AI — Minimal Conversational AI

## 📖 Project Overview

Oreo AI is a minimal full-stack conversational AI web application that allows users to enter a single question and receive a single AI-generated response. The response is generated using the **Groq API** (`llama-3.1-8b-instant` model), and every interaction is stored in **MongoDB Atlas**.

The system follows a clean separation of frontend and backend with simple REST architecture.

---

## ⚙️ Tech Stack

### 🖥 Backend
- Node.js
- Express.js
- MongoDB Atlas (Mongoose)
- Groq API (`llama-3.1-8b-instant`)

### 🌐 Frontend
- React (Vite)
- React Router DOM
- Tailwind CSS
- Axios

---

## 📁 Project Structure

```
Oreo-AI-assistant/
│
├── backend/
│   └── src/
│       ├── index.js
│       ├── models/
│       │   └── QueryRecord.js
│       ├── routes/
│       │   └── query.js
│       └── services/
│           └── groq.js
│
├── frontend/
│   └── src/
│       ├── pages/
│       │   ├── Landing.jsx
│       │   └── Chat.jsx
│       ├── api.js
│       ├── App.jsx
│       └── main.jsx
```

---

## 🚀 Features

- Single question → single AI response
- Groq LLM integration (fast inference)
- Stores Q&A in MongoDB Atlas
- Clean UI with Tailwind CSS
- Routing with React Router (Landing + Chat pages)
- REST API architecture

---

## 🔌 API Reference

### `POST /api/query`

**Request**
```json
{
  "question": "What is artificial intelligence?"
}
```

**Response**
```json
{
  "response": "Artificial intelligence is the simulation of human intelligence in machines..."
}
```

---

## 🛠️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd Oreo-AI-assistant
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_atlas_uri
GROQ_API_KEY=your_groq_api_key
```

Run backend:

```bash
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 Deployment

### Backend (Vercel)

- Import `/backend` folder as a separate project
- Add environment variables:
  - `MONGO_URI`
  - `GROQ_API_KEY`
- Start command:
  ```
  node src/index.js
  ```

### Frontend (Vercel)

- Import `/frontend` folder as a separate project
- Build command:
  ```
  npm run build
  ```
- Output directory:
  ```
  dist
  ```

---

## 🔗 Important Notes

- No chat history (stateless system)
- Only single question → single response flow
- Frontend uses React Router pages (Landing & Chat)
- Backend handles API + DB storage only