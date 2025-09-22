# Event Scheduler Application

A minimal **Event Scheduler Application** built with the MERN stack.

## Features
- Add events (title, date, time, location, description)
- View all upcoming events
- Delete events

## Tech Stack
- **Frontend**: React + Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB + Mongoose

## Project Structure
```
event-scheduler/
  ├── client/        # React frontend
  ├── server/        # Express backend
  ├── .env.example   # Environment variable template
  └── README.md
```

## Setup Instructions

### 1. Clone the project
```bash
git clone <repo_url>
cd event-scheduler
```

### 2. Backend Setup
```bash
cd server
cp ../.env.example .env   # configure MONGO_URI and PORT
npm install
npm run dev   # start backend with nodemon
```
- Runs on http://localhost:5000

### 3. Frontend Setup
```bash
cd ../client
npm install
npm start
```
- Runs on http://localhost:3000

### 4. Usage
- Open browser at http://localhost:3000
- Add new events via form
- View events list
- Delete events

