# 🚀 Deployment and Maintenance Guide

This document outlines the standard operating procedures for deploying the Infinito platform to production/staging environments, as well as maintaining the database and integrated services.

---

## 🌍 1. Deployment Strategies

### Frontend Deployment (Vercel)
The `frontend` directory is fully optimized for **Vercel**, making it the recommended platform for fast, edge-cached React delivery.

**Steps to deploy:**
1. Connect your GitHub repository to your [Vercel](https://vercel.com/) account.
2. Create a new Project and select the `Infinito` repository.
3. Keep the "Root Directory" settings, or specify `frontend` if deploying a sub-directory.
4. **Build Settings:**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Install Command: `npm install`
5. **Environment Variables:**
   - Add `VITE_API_BASE_URL` pointing to your deployed backend API (e.g., `https://api.infinito.com`).
   - Add `VITE_GOOGLE_CLIENT_ID` for Google Authentication.
6. Click **Deploy**. Vercel will auto-deploy any subsequent pushes to the main branch.

---

### Backend Deployment (Render / Railway / AWS Base)
Due to its robust Node.js and Express architecture, the backend requires a Node.js runtime environment. PaaS providers like **Render** or **Railway** are ideal for quick, scalable deployment.

**Steps to deploy (Render example):**
1. Create a "New Web Service" on [Render](https://render.com/).
2. Connect the repository and set the "Root Directory" to `backend`.
3. **Configurations:**
   - Runtime: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start` (Make sure `package.json` maps `"start": "node index.js"`)
4. **Environment Variables (CRITICAL):**
   - You must manually add your production secrets to the dashboard:
     - `PORT`: (Usually handled automatically by Render)
     - `MONGODB_URI`: Production MongoDB Atlas connection string.
     - `JWT_SECRET`: A long, randomized string for signing auth tokens.
     - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
     - `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`
     - `SMTP_EMAIL`, `SMTP_PASSWORD`
5. Click **Deploy Web Service**.
6. Once deployed, take the URL (e.g., `https://infinito-backend.onrender.com`) and update the `VITE_API_BASE_URL` in your frontend's Vercel dashboard.

---

## 🛠️ 2. Platform Maintenance

### Database Management (MongoDB Atlas)
- **IP Allowlisting**: For security, ensure that MongoDB Network Access allows the IPs of your deployed backend (or `0.0.0.0/0` if you're using dynamic PaaS IPs).
- **Indexing**: Frequently monitor slow queries in the Atlas Dashboard. Ensure fields like `email` in `user.model.js` and `razorpay_order_id` in `transaction.model.js` remain properly indexed.
- **Backups**: Set up automated daily snapshots in MongoDB Atlas leading up to the final event days, as data loss on registrations/payments is critical.

### Handling File Uploads
- All user uploads (CA task proofs, screenshots, profile pictures) are managed securely via Multer and offloaded to **Cloudinary**.
- **Maintenance**: Periodically check your Cloudinary storage limits. If the asset limit is approaching, you can safely write a script to clear images belonging to rejected CA task submissions.

### Razorpay Webhooks & Payments
- Double-check API Keys when transitioning from Development/Test mode to Live Mode. 
- *Crucial*: Make sure Razorpay test keys (starts with `rzp_test_`) are **NOT** in the production environment variables.
- Monitor the Razorpay dashboard for abandoned checkouts and reconcile them with pending entries in your `transaction.model.js`.

### Email Delivery
- The backend utilizes `Nodemailer` for user communications (welcome emails, tickets processing).
- If using Gmail standard SMTP, the `SMTP_PASSWORD` should be an "App Password" generated from Google Account Settings, *not* a standard login password.
- For high-volume delivery during peak registration days, consider swapping to a dedicated service like SendGrid, Resend, or AWS SES to avoid rate limits.

---

## 🚨 Incident Response & Troubleshooting

1. **CORS Errors in Browser**: Verify that the Vercel Frontend URL is expressly allowed within the `backend/app.js` CORS configuration.
2. **"MongoDB Authentication Failed"**: The `MONGODB_URI` string is likely malformed, or the database user lacks Read/Write permissions.
3. **High Cold-Start Times**: If using a free tier PaaS for the backend, note that the server will sleep after inactivity. It might take 15-30 seconds to wake up on the first request. Recommend keeping it active with a CRON ping or upgrading the instance during the actual fest.
