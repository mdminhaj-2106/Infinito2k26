<div align="center">
  <img src="./frontend/public/infinito-logo.png" alt="Infinito Logo" width="200" />

  # Infinito 2024 / 2025 - Official Sports Fest Platform

  <p>
    The premier annual sports festival management and registration platform. Built for scale, performance, and an exceptional user experience.
  </p>

  [![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://react.dev/)
  [![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
</div>

---

## 📖 Overview

This repository contains the complete source code for **Infinito**, an inter-college sports festival platform. It is engineered to seamlessly handle large-scale participant traffic encompassing registrations, accommodations, merchandise sales, and real-time updates for events.

The system is split into two primary segments:
- **`frontend/`**: A sleek, highly responsive Single Page Application (SPA) built with Vite, React, and TailwindCSS.
- **`backend/`**: A robust, secure Express REST API paired with MongoDB, handling business logic, payments, and document generation.

---

## ✨ Features & Core Modules

### 1. Advanced Event Registration System
- **Categories**: Segregated flows for individual vs. team-based sports (`teamRegistration` & `simpleEventRegistration`).
- **Dynamic Rules**: Granular config for maximum squad sizes, substitute limits, and captain verifications.
- **Participation Consent**: Built-in support for mandatory medical and liability waivers (`consent.controller`).

### 2. Campus Ambassador (CA) Portal
- **Outreach Management**: A gamified platform where designated Campus Ambassadors refer participants from their respective colleges.
- **Task & Leaderboard**: CAs complete promotional tasks (`task.model`), submit proofs (`taskSubmission.model`), and earn points for a live leaderboard.

### 3. Accommodations & Contingent Management
- **Logistics Control**: Complete flow for out-of-station contingents to book hostel slots and meal plans.
- **Discount Engine**: Flexible promo codes (`coupon.model`) capable of percentage-based and flat-rate deductions for bulk college registrations.

### 4. Official Merchandise Store
- **Integrated E-Commerce**: Dedicated portal to browse, select sizes, and purchase official Infinito apparel (`merchorder`, `product`).
- **Order Tracking**: Links Razorpay transactions with user profiles to generate pickup slips.

### 5. Admin Control Panel
- **Transactions & Verification**: Central hub to verify payment statuses, resolve discrepancies, and issue digital receipts.
- **Analytics**: High-level overview of total registrations, revenue, and active CA statistics.

---

## 🚀 Technology Stack

### Frontend Architecture
- **Framework**: `React 18` powered by `Vite` for lightning-fast HMR and optimized builds.
- **UI & Styling**: `Tailwind CSS` utility classes, integrated with `PostCSS` and `Autoprefixer`.
- **Motion & Interaction**: `Framer Motion`, `Vanilla Tilt`, and `Canvas Confetti` for premium, engaging micro-interactions.
- **State & Routing**: `React Router v6` for navigation, `Context API` for global variables.
- **Authentication**: `React OAuth` for seamless Google Sign-In.

### Backend Architecture
- **Runtime**: `Node.js` with `Express.js` API routing.
- **Database**: `MongoDB` utilizing `Mongoose` ORM for rigid schema definitions.
- **Security**: JWT-based stateless authentication (`jsonwebtoken`), password hashing (`bcrypt/bcryptjs`), and `Joi` validation for API payloads.
- **Media Management**: `Multer` combined with `Cloudinary` to stream multipart-form uploads (proofs, avatars) directly to the cloud.
- **Financial & Comms**: `Razorpay` gateway for secure payments, `Nodemailer` for transactional emails, and `PDFKit` for generating PDF event tickets.

---

## 📂 Project Structure

```text
infinito/
├── backend/               
│   ├── config/            # DB Connections and environment setups
│   ├── controllers/       # Business logic (events, ca, auth, accommodation, merch)
│   ├── middlewares/       # JWT verifications, role checks, Cloudinary uploaders
│   ├── models/            # Mongoose Schemas (User, Event, Task, Transaction, etc.)
│   ├── routes/            # REST API endpoints mapping to controllers
│   ├── utils/             # Helpers: password gen, mailers, PDF renderers
│   └── index.js           # Express app instantiation and server listener
│
└── frontend/              
    ├── public/            # Static assets
    ├── src/
    │   ├── components/    # Reusable UI elements (Navigation, Modals, Cards)
    │   ├── pages/         # Feature Views (Home, Auth, Events, Admin, Merch, CA)
    │   ├── context/       # Auth/Theme State Contexts
    │   └── utils/         # Axios interceptors, constants
    ├── tailwind.config.js # Design system tokens
    └── vite.config.js     # Build settings
```

---

## 🛠️ Developer Onboarding (Local Environment)

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v16+)
- [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) Cluster or Community Edition
- Cloudinary, Razorpay, and Google Client Credentials for full functionality.

### Backend Setup
1. `cd backend && npm install`
2. Create a `.env` file (refer to the documentation for keys: Port, DB URI, JWT Secret, Cloudinary configs, Razorpay configs, SMTP credentials).
3. Start the server: `npm run dev` (Runs on `http://localhost:5000`)

### Frontend Setup
1. `cd frontend && npm install`
2. Create a `.env` file with `VITE_API_BASE_URL=http://localhost:5000` and `VITE_GOOGLE_CLIENT_ID`.
3. Start the Vite server: `npm run dev` (Runs on `http://localhost:5173`)

---

## 🚀 Deployment & Maintenance

For details regarding deploying the platform to Vercel/Render, maintaining the database, and managing environment variables safely, please refer to our dedicated guide:
[**👉 VIEW DEPLOYMENT_AND_MAINTENANCE.md**](./DEPLOYMENT_AND_MAINTENANCE.md)

---

## 🤝 Contribution Guidelines
1. We follow a standard Git Flow.
2. Branch naming: `feature/[your-feature]` or `bugfix/[issue-name]`.
3. Open a PR against the `main` or `develop` branch for peer review.

---
*Developed by the Infinito Tech Team.*
