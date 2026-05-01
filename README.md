# Furni 🪑

A full-stack furniture e-commerce application built with **React + Vite** (client) and **json-server** (server).

## Project Structure

```
furni/
├── client/          # React frontend (Vite, React Router, MUI)
└── server/          # REST API (json-server)
```

## Quick Start

### 1. Start the server

```bash
cd server
npm install
npm run json-server
# Runs on http://localhost:3000
```

### 2. Start the client

```bash
cd client
npm install
npm run dev
# Runs on http://localhost:5173
```

## Tech Stack

| Layer    | Technology                          |
|----------|-------------------------------------|
| Frontend | React 19, Vite, React Router 7, MUI |
| Backend  | json-server (mock REST API)         |
| Styling  | Emotion, MUI, custom CSS            |

## Features

- 🛋️ Browse furniture by category (Chairs, Sofas, Tables, Lighting)
- 🛒 Shopping cart with add / increment / decrement / delete
- 📄 Pages: Home, Shop, About, Services, Blog, Contact, Cart
- 🔌 Client fetches products from the local json-server API

## Deployment

See individual `README.md` files in `client/` and `server/` for deployment instructions, including a guide to hosting on **Deno Deploy**.
