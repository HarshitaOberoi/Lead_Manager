Simple Lead Manager 📋
A modern Lead Management application showcasing expertise in Next.js, Node.js, MongoDB, and REST API development. This project features a robust backend API, an intuitive frontend UI, and a cloud-hosted MongoDB database for seamless lead management.

✨ Features

Backend: A scalable Node.js and Express REST API with endpoints to create and retrieve leads.
Frontend: A responsive Next.js UI displaying a lead list and a form for adding new leads.
Database: MongoDB (via MongoDB Atlas) for secure and reliable lead storage.
Deployment: Live demo hosted on Vercel (frontend) and Railway (backend).


📋 Prerequisites
Before you begin, ensure you have the following:

Node.js: Version 16 or higher
MongoDB Atlas Account: For cloud database access (or a local MongoDB instance)
Git: To clone the repository


📂 Project Structure
lead-manager/
├── backend/        # Node.js/Express backend with API endpoints
├── frontend/       # Next.js frontend for the UI
└── README.md       # Project documentation


🚀 Setup Instructions
1. Clone the Repository
git clone https://github.com/your-username/lead-manager.git
cd lead-manager

2. Backend Setup

Navigate to the backend directory:
cd backend


Install dependencies:
npm install


Create a .env file in /backend with your MongoDB connection string:
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/lead-manager?retryWrites=true&w=majority
PORT=3001


Replace <username> and <password> with your MongoDB Atlas credentials.
Ensure the database name (lead-manager) matches your setup.


Start the backend:
npm run dev

The API will be available at http://localhost:3001.


3. Frontend Setup

Navigate to the frontend directory:
cd frontend


Install dependencies:
npm install


Start the frontend:
npm run dev

The app will be available at http://localhost:3000.



🔗 API Endpoints
POST /leads
Add a new lead.

Body (JSON):
{
  "name": "John Doe",
  "email": "john@example.com",
  "status": "New"
}


Fields:

name (string, required): Lead’s name
email (string, required, unique): Lead’s email
status (enum, optional): One of "New", "Engaged", "Proposal Sent", "Closed-Won", "Closed-Lost". Defaults to "New".


Responses:

201 Created: Returns the created lead
400 Bad Request: If required fields are missing or email is not unique



GET /leads
Fetch all leads.

Response: Returns a JSON array of all leads.


🌐 Live Deployment

Frontend: https://lead-manager-frontend.vercel.app
Backend: https://lead-manager-backend.railway.app


📝 Notes

Ensure the backend is running before starting the frontend.
The frontend defaults to http://localhost:3001 for API calls. For the deployed version, this is configured via the NEXT_PUBLIC_API_URL environment variable in Vercel.
The MongoDB database is hosted on MongoDB Atlas with IP whitelisting (0.0.0.0/0) enabled for global access.


🛠️ Technologies Used

Backend: Node.js, Express, Mongoose, MongoDB Atlas
Frontend: Next.js (App Router), Axios
Deployment: Vercel (frontend), Railway (backend)


🐞 Troubleshooting

MongoDB Connection Errors:
Verify the MONGODB_URI in backend/.env is correct.
Ensure your IP is whitelisted in MongoDB Atlas.


CORS Issues:
The backend uses cors middleware to allow frontend requests.
Check the frontend’s API URL if issues persist.




🌟 Get Started
Start managing leads with ease! Clone the repo, follow the setup instructions, and explore the live demo. Contributions and feedback are welcome!
