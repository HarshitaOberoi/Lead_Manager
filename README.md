# 📋 Simple Lead Manager

A modern Lead Management application showcasing expertise in **Next.js**, **Node.js**, **MongoDB**, and **REST API** development. This project includes a robust backend API, an intuitive frontend UI, and a cloud-hosted MongoDB database for seamless lead tracking and management.

---

## ✨ Features

- **Backend**: Scalable Node.js + Express REST API for lead creation and retrieval  
- **Frontend**: Responsive Next.js UI with lead list and add-lead form  
- **Database**: MongoDB Atlas for secure and reliable storage  
- **Deployment**: Live demo hosted on **Vercel** (frontend) and **Railway** (backend)

---

## 📂 Project Structure

| Path             | Description                                   |
|------------------|-----------------------------------------------|
| `/backend`       | Node.js + Express backend with REST API       |
| `/frontend`      | Next.js frontend for lead management UI       |
| `/README.md`     | Project documentation                         |

---

## 📋 Prerequisites

Ensure the following are installed:

- **Node.js** v16 or higher  
- **MongoDB Atlas** account (or local instance)  
- **Git**

---



## ⚙️ Setup & API Reference
# 🔧  Clone the Repository

```bash
git clone https://github.com/your-username/lead-manager.git
cd lead-manager
---

## 🖥️ Backend Setup

| Step | Command / File | Description |
|------|----------------|-------------|
| 1 | `cd backend` | Navigate to backend folder |
| 2 | `npm install` | Install backend dependencies |
| 3 | `.env` file | Create file with:<br>`MONGODB_URI=your_mongodb_uri`<br>`PORT=3001` |
| 4 | `npm run dev` | Start the backend server at `http://localhost:3001` |

---

### 🌐 Frontend Setup

| Step | Command / File | Description |
|------|----------------|-------------|
| 1 | `cd frontend` | Navigate to frontend folder |
| 2 | `npm install` | Install frontend dependencies |
| 3 | `.env.local` | Create file with:<br>`NEXT_PUBLIC_API_URL=http://localhost:3001` |
| 4 | `npm run dev` | Start the frontend at `http://localhost:3000` |

---

### 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/leads` | Create a new lead. Requires `{ name, email, status? }` in JSON body |
| `GET` | `/leads` | Fetch all leads. Returns array of lead objects |

**POST `/leads` Body Example:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "status": "New"
}

