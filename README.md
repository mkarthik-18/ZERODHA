# Zerodha - Stock Trading Platform

A full-stack MERN (MongoDB, Express, React, Node.js) stock trading platform inspired by Zerodha.

## Project Structure

```
├── backend/          # Node.js + Express + MongoDB API
├── frontend/         # React landing page (public site)
└── dashboard/        # React trading dashboard
```

## Tech Stack

- **Frontend:** React 18, React Router
- **Dashboard:** React 18, Material-UI, Chart.js, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose, Passport.js
- **Authentication:** Passport Local Strategy

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/madhavabhotlakarthik/ZERODHA.git
cd ZERODHA
```

2. Install dependencies for all services:

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

**Dashboard:**
```bash
cd dashboard
npm install
```

3. Set up environment variables:
Create a `.env` file in the backend directory with your MongoDB connection string and other config.

4. Run the applications:

**Backend (Port 3001):**
```bash
cd backend
npm start
```

**Frontend (Port 3000):**
```bash
cd frontend
npm start
```

**Dashboard (Port 3002):**
```bash
cd dashboard
npm start
```

## Features

- Landing page with product information
- Pricing page
- About page
- Support section
- User signup
- Trading dashboard with:
  - Holdings tracking
  - Positions management
  - Order history
  - Funds management
  - Interactive charts

## Author

**Madhava Bhotla Karthik**

## License

ISC

## Acknowledgments

- Built as a full-stack MERN learning project
- UI inspired by Zerodha's design
