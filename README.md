# ZERODHA - Stock Trading Platform

A full-stack **MERN** (MongoDB, Express, React, Node.js) stock trading platform inspired by Zerodha.

## 🚀 Features

- **Landing Page** - Product showcase built with React + Bootstrap 5
- **Trading Dashboard** - Interactive holdings, positions, orders & charts (MUI + Chart.js)
- **RESTful API** - Node.js + Express backend with MongoDB persistence
- **Responsive Design** - Works across desktop and mobile
- **Environment-based Config** - Sensitive data kept out of version control

## 📁 Project Structure

```
ZERODHA/
├── backend/                # Node.js + Express + MongoDB API (port 3002)
│   ├── model/              # Mongoose models
│   ├── schemas/            # Database schemas
│   ├── index.js            # Main server entry point
│   ├── .env.example        # Template for env vars (safe to commit)
│   └── .env                # YOUR secrets (git-ignored)
├── frontend/               # React landing page (port 3000)
│   ├── public/media/       # Images & static assets
│   └── src/landing_page/   # Pages & components
├── dashboard/              # React trading dashboard (port 3001)
│   ├── public/
│   └── src/components/     # Dashboard widgets & charts
├── .gitignore
├── LICENSE
└── README.md
```

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, React Router, Bootstrap 5 |
| Dashboard | React 18, Material-UI, Chart.js, Axios |
| Backend | Node.js, Express, Passport.js |
| Database | MongoDB Atlas / MongoDB Community |
| ODM | Mongoose |

## ⚙️ Setup Instructions

### Prerequisites

- Node.js v14 or higher
- npm or yarn
- MongoDB (local install or a free MongoDB Atlas cluster)

### 1. Clone the Repository

```bash
git clone https://github.com/mkarthik-18/ZERODHA.git
cd ZERODHA
```

### 2. Configure the Backend

```bash
cd backend
npm install

# Create your env file from the template
cp .env.example .env
# Now edit backend/.env and paste in your MongoDB connection string
```

⚠️ **Important:** `.env` is git-ignored on purpose. Never commit it — it contains your database password.

### 3. Start the Backend (do this first)

```bash
npm start
```

You should see `App started!` followed by `DB started!`. If you see `bad auth`, your MongoDB password in `.env` is wrong.

Backend runs on **http://localhost:3002**

### 4. Start the Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on **http://localhost:3000**

### 5. Start the Dashboard

```bash
cd dashboard
npm install
npm start
```

Dashboard runs on **http://localhost:3001** — it calls the backend at `localhost:3002`, so the backend must be running first.

## 🔧 Environment Variables

`backend/.env` (create from `backend/.env.example`):

```env
# MongoDB connection string
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/zerodha

# Server port
PORT=3002
```

Note the variable name is **`MONGO_URL`** (not `MONGO_URI`) — that's what `index.js` reads.

### Getting MongoDB Atlas (free, forever)

1. Sign up at [mongodb.com/atlas](https://www.mongodb.com/atlas) — no credit card
2. Create a cluster and choose the **M0 Sandbox** free tier
3. **Security → Database Access** → add a user (save your password!)
4. **Security → Network Access** → allow `0.0.0.0/0` so your machine can connect
5. Copy the connection string into `backend/.env`

### Using Local MongoDB instead

```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

Then use: `MONGO_URL=mongodb://127.0.0.1:27017/zerodha`

## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/allHoldings` | Fetch all holdings |
| `GET` | `/allPositions` | Fetch all positions |
| `POST` | `/newOrder` | Create a new order (body: `name`, `qty`, `price`, `mode`) |

## 🔒 Security Notes

- `.env` is excluded via `.gitignore` — **never** commit credentials
- `.env.example` is a placeholder template safe for public repos
- Rotate your MongoDB password regularly
- Keep secrets in environment variables, not in source code

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Madhava Bhotla Karthik** — [@mkarthik-18](https://github.com/mkarthik-18)

## 🙏 Acknowledgments

- UI and design inspired by [Zerodha](https://zerodha.com)
- Built as a full-stack MERN learning project
