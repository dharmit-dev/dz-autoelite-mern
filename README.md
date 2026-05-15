# DZ AutoElite – Premium Pre-Owned Car Marketplace

DZ AutoElite is a full-stack MERN application built to simulate a modern premium pre-owned car marketplace experience.

The project focuses on combining a polished frontend user experience with a scalable backend architecture, allowing users to browse vehicle inventory, apply filters, view car details, and submit inquiries through a live contact workflow.

This project was built as a portfolio-grade full-stack application to demonstrate practical frontend development, backend API development, database integration, deployment, and production configuration.

## Live Project

Frontend: https://dz-autoelite-mern.vercel.app  
Backend API: https://dz-autoelite-mern.onrender.com

---

## About the Project

The goal of this project was to build a realistic car dealership platform rather than a simple CRUD demo.

The application includes:

- Dynamic vehicle inventory listing
- Filtering by multiple criteria
- Detailed car information display
- Contact inquiry submission
- Responsive premium UI
- Backend API integration
- Cloud database storage
- Production deployment

The focus was on writing clean modular code, separating frontend and backend concerns, and deploying the complete stack successfully.

---

## Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Tailwind CSS
- Framer Motion
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Express Validator
- Helmet
- CORS
- Morgan

### Deployment / Tools
- Vercel
- Render
- GitHub
- MongoDB Atlas

---

## Features

### Frontend Features
- Responsive premium landing page
- Featured inventory section
- Vehicle listing cards
- Search and filtering functionality
- Vehicle details view
- Contact form integration
- Smooth page transitions and animations
- Mobile responsive design
- Reusable component-based architecture

### Backend Features
- REST API architecture
- Vehicle inventory endpoints
- Contact inquiry endpoint
- MongoDB database integration
- Input validation
- Error handling middleware
- Security middleware
- Production-ready CORS configuration
- Request logging

---

## What I Built

This project involved working on the complete full-stack workflow.

Frontend work included:

- Designing the complete UI
- Creating reusable React components
- Managing routing and navigation
- Connecting frontend to backend APIs
- Handling environment configuration
- Optimizing production builds

Backend work included:

- Creating Express server architecture
- Building modular API routes
- Creating controllers and database models
- Setting up MongoDB Atlas connection
- Implementing validation and middleware
- Managing production deployment configuration

Deployment work included:

- GitHub repository setup
- Render backend deployment
- Vercel frontend deployment
- Environment variable configuration
- Cross-origin API communication setup
- Production debugging and testing

---

## Project Structure

```bash
DZ-Intern/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── data/
│   │   └── contexts/
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seed/
│   ├── utils/
│   ├── package.json
│   └── server.js
│
└── .gitignore
```

---

## API Endpoints

### Vehicle APIs

```http
GET /api/cars
GET /api/cars/:id
```

### Contact API

```http
POST /api/contact
```

---

## Local Setup

### Clone the repository

```bash
git clone https://github.com/dharmit-dev/dz-autoelite-mern.git
cd dz-autoelite-mern
```

---

### Backend Setup

Install dependencies:

```bash
cd backend
npm install
```

Create `.env`

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

Run backend:

```bash
npm run dev
```

---

### Frontend Setup

Install dependencies:

```bash
cd frontend
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Run frontend:

```bash
npm run dev
```

---

## Production Configuration

### Backend Environment Variables

```env
MONGO_URI=your_connection_string
PORT=10000
NODE_ENV=production
CLIENT_URL=https://your-frontend-url.vercel.app
```

### Frontend Environment Variables

```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

---

## Key Learning Outcomes

This project helped strengthen practical understanding of:

- Full-stack MERN development
- API design and architecture
- Database modeling with MongoDB
- Frontend and backend integration
- Environment variable management
- Production deployment workflows
- CORS handling
- Request validation
- Error handling
- Git and GitHub workflow
- Writing modular maintainable code

---

## Author

Dharmit Monani

GitHub: https://github.com/dharmit-dev

---

## Note

This project was built as a portfolio and learning project to demonstrate practical full-stack web development skills.
