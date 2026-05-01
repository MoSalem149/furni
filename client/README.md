# Furni — Client

The React frontend for the Furni furniture e-commerce app. Built with **Vite**, **React 19**, **React Router 7**, and **MUI**.

## Structure

```
client/
├── public/
│   └── favicon.png
├── src/
│   ├── assets/          # Fonts, icons, images
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── FeaturedProducts.jsx
│   │   ├── CartItem.jsx
│   │   ├── Hero.jsx
│   │   ├── ImageGrid.jsx
│   │   ├── BlogCard.jsx
│   │   ├── BlogPreview.jsx
│   │   ├── ContactForm.jsx
│   │   ├── OurTeam.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Testimonials.jsx
│   │   └── WhyChooseUs.jsx
│   ├── data/            # Static local data (nav links, team, posts…)
│   ├── pages/           # Route-level components
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Blog.jsx
│   │   ├── Cart.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Root component — routing + cart state
│   └── main.jsx         # Entry point
├── index.html
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js ≥ 18
- The **server** must be running on `http://localhost:3000` (see `../server/README.md`)

### Install & Run

```bash
npm install
npm run dev
# Opens at http://localhost:5173
```

### Build for Production

```bash
npm run build
# Output in dist/
```

## Environment Variables

Create a `.env` file at the root of `client/` to override the API URL:

```env
VITE_API_URL=http://localhost:3000
```

Update the axios base URL in your fetch calls to use `import.meta.env.VITE_API_URL` so you can point to a deployed server.

## Deployment on Deno Deploy

Deno Deploy hosts **Deno** applications, not Node.js. To deploy a Vite-built React app there:

### Step 1 — Build the static files

```bash
npm run build
# Produces: dist/
```

### Step 2 — Create a Deno static-file server

Create `serve.ts` in the `client/` folder:

```ts
import { serveDir } from "https://deno.land/std/http/file_server.ts";

Deno.serve((req) => {
  return serveDir(req, {
    fsRoot: "dist",
    urlRoot: "",
    showDirListing: false,
    enableCors: true,
  });
});
```

### Step 3 — Update the API URL

Before building, set `VITE_API_URL` in `.env` to your deployed server URL (see `../server/README.md` for server deployment options):

```env
VITE_API_URL=https://your-furni-server.deno.dev
```

Then rebuild:

```bash
npm run build
```

### Step 4 — Deploy to Deno Deploy

1. Push the `client/` folder (including `dist/` and `serve.ts`) to GitHub.
2. Go to [https://dash.deno.com](https://dash.deno.com) → **New Project**.
3. Connect your GitHub repo and select the `client/` folder as the root.
4. Set the entry point to **`serve.ts`**.
5. Click **Deploy**.

> **Tip:** Add `dist/` to a separate `.gitignore` entry only for local development if you want to commit the build output for Deno Deploy. Alternatively, use Deno Deploy's GitHub Actions integration to build and deploy automatically on every push.

### Alternative — Deploy to Netlify / Vercel (zero config)

These platforms support Vite out of the box with no extra server file needed:

| Platform | Build command   | Publish directory |
|----------|-----------------|-------------------|
| Netlify  | `npm run build` | `dist`            |
| Vercel   | `npm run build` | `dist`            |
