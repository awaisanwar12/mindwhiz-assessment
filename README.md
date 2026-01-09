# MindWhiz E-commerce Module

A full-stack e-commerce application demonstrating Next.js frontend, Node.js backend, and MongoDB database integration.

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, CSS Modules
- **Backend:** Node.js, Express, TypeScript
- **Database:** MongoDB (via Mongoose)

## Architecture

- **Frontend:** Pages Router structure. 
  - `pages/index.tsx`: Main product grid.
  - `pages/product/[id].tsx`: Product detail view.
  - `pages/login.tsx`: Simple authentication form.
  - `pages/add-product.tsx`: Admin-only product creation form.
- **Backend:** REST API with Controller-Service pattern (simplified to Controllers).
  - `server.ts`: Entry point, database connection, seeding.
  - `routes/`: API route definitions.
  - `controllers/`: Request handling logic.
- **Database:** Mongoose models for schema definition.

## Setup & Running

### Prerequisites
- Node.js installed
- MongoDB running locally (default: `mongodb://localhost:27017`)

### 1. Backend

```bash
cd backend
npm install
npm run dev
```

Server runs on `http://localhost:5000`.
On first run, it will seed the database with 5 sample products.

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:3000`.

## Features

- **Product Listing:** View all products in a responsive grid.
- **Product Details:** Click "View Details" to see more info.
- **Authentication (Mock):**
  - **Admin:** `admin@mindwhiz.com` / `admin123` (Access to Add Product)
  - **User:** `user@mindwhiz.com` / `user123` (Read-only)
- **RBAC:** "Add Product" button and page are only accessible to Admin users.
- **Design:** Minimalist UI with #39B54A primary color.

## Environment Variables

**Backend (`backend/.env`):**
```
PORT=5000
DB_URI=mongodb://localhost:27017/mindwhiz
```
# mindwhiz-assessment
