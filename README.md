Simple Lead Manager
A straightforward Lead Management application built to demonstrate skills in Next.js, Node.js, MongoDB, and API development. This project includes a REST API backend, a basic frontend UI, and a MongoDB database to store and manage leads.
Features

Backend: Node.js and Express REST API with endpoints to add and fetch leads.
Frontend: Next.js UI to display a list of leads and a form to add new leads.
Database: MongoDB (via MongoDB Atlas) to store lead data.
Deployment: Deployed to Vercel (frontend) and Railway (backend) for live demo.

Prerequisites

Node.js: Version 16 or higher.
MongoDB Atlas Account: For database access (or a local MongoDB instance).
Git: To clone the repository.

Project Structure

/backend: Node.js/Express backend with API endpoints.
/frontend: Next.js frontend for the UI.
/README.md: Project documentation.

Setup Instructions
Clone the Repository
git clone https://github.com/your-username/lead-manager.git
cd lead-manager

Backend Setup

Navigate to the backend folder:cd backend


Install dependencies:npm install


Create a .env file in /backend with your MongoDB connection string:MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/lead-manager?retryWrites=true&w=majority
PORT=3001


Replace <user> and <password> with your MongoDB Atlas credentials.
Ensure the database name (lead-manager) matches your setup.


Run the backend:npm run dev

The API will be available at http://localhost:3001.

Frontend Setup

Navigate to the frontend folder:cd frontend


Install dependencies:npm install


Run the frontend:npm run dev

The app will be available at http://localhost:3000.

API Endpoints

POST /leads: Add a new lead.
Body (JSON):{
  "name": "John Doe",
  "email": "john@example.com",
  "status": "New"
}


Fields:
name (string, required): Lead’s name.
email (string, required, unique): Lead’s email.
status (enum, optional): One of "New", "Engaged", "Proposal Sent", "Closed-Won", "Closed-Lost". Defaults to "New".


Response:
201 Created: Returns the created lead.
400 Bad Request: If required fields are missing or email is not unique.




GET /leads: Fetch all leads.
Response: Returns a JSON array of all leads.



Live Deployment

Frontend: https://lead-manager-frontend.vercel.app
Backend: https://lead-manager-backend.railway.app


Notes

Ensure the backend is running before starting the frontend.
The frontend uses http://localhost:3001 for API calls by default. For the deployed version, this is configured via the NEXT_PUBLIC_API_URL environment variable in Vercel.
The MongoDB database is hosted on MongoDB Atlas, and IP whitelisting (0.0.0.0/0) is enabled to allow access from anywhere.

Technologies Used

Backend: Node.js, Express, Mongoose, MongoDB Atlas
Frontend: Next.js (App Router), Axios
Deployment: Vercel (frontend), Railway (backend)

Troubleshooting

MongoDB Connection Errors: Ensure the MONGODB_URI in backend/.env is correct and your IP is whitelisted in MongoDB Atlas.
CORS Issues: The backend uses the cors middleware to allow requests from the frontend. If issues arise, verify the frontend’s API URL.

