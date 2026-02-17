# Deployment Guide: Infinity Residences

This guide provides step-by-step instructions for deploying the Infinity Residences portal to a live environment.

## 🏗️ Architecture Overview
- **Backend**: Node.js / Express (Hosted on [Render](https://render.com) or [Railway](https://railway.app)).
- **Frontend**: React / Vite (Hosted on [Vercel](https://vercel.com) or [Netlify](https://netlify.com)).
- **Database**: Managed MySQL (Hosted on [Railway](https://railway.app) or [Aiven](https://aiven.io)).

---

## Step 1: Database Setup (MySQL)
The backend requires a live MySQL database.
1. Sign up for [Railway.app](https://railway.app).
2. Click **"New Project"** -> **"Provision MySQL"**.
3. Once provisioned, go to the **Variables** tab to find:
   - `MYSQLHOST`
   - `MYSQLUSER`
   - `MYSQLPASSWORD`
   - `MYSQLDATABASE`
   - `MYSQLPORT`

---

## Step 2: Backend Deployment (Render)
1. Push your code to a GitHub repository.
2. Sign up for [Render.com](https://render.com).
3. Click **"New +"** -> **"Web Service"**.
4. Connect your GitHub repository.
5. Set the following configurations:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Add the following **Environment Variables** (from your Railway DB):
   - `DB_HOST`: (Your Railway Host)
   - `DB_USER`: (Your Railway User)
   - `DB_PASSWORD`: (Your Railway Password)
   - `DB_NAME`: (Your Railway Database Name)
   - `ADMIN_EMAIL`: `admin@gmail.com`
   - `ADMIN_PASSWORD`: `1234`
7. Click **Deploy**. Note the URL of your deployed backend (e.g., `https://residences-api.onrender.com`).

---

## Step 3: Frontend Update
Before deploying the frontend, you must point it to your live Backend URL.
1. Open `frontend/src/pages/Home.jsx`, `AdminDashboard.jsx`, and `AdminLogin.jsx`.
2. Update the `axios` URLs from `http://localhost:5000` to your live Backend URL.
   > [!TIP]
   > It's best to create a `frontend/.env` file with `VITE_API_URL=https://your-api.com` and use `import.meta.env.VITE_API_URL` in your code.

---

## Step 4: Frontend Deployment (Vercel)
1. Sign up for [Vercel](https://vercel.com).
2. Click **"Add New"** -> **"Project"**.
3. Import your GitHub repository.
4. Set the following configurations:
   - **Root Directory**: `frontend`
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

---

## ✅ Post-Deployment
- Navigate to your Vercel URL.
- The backend will automatically seed the initial content on the first successful connection.
- Access the admin panel at `/admin` to verify you can edit content.
