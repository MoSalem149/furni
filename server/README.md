# Furni — Server

A lightweight REST API powered by **[json-server](https://github.com/typicode/json-server)** that serves furniture product data and static product images.

## Structure

```
server/
├── db.json          # Database — products array (17 items)
├── public/
│   └── images/      # Product images served as static files
└── package.json
```

## Getting Started

### Prerequisites

- Node.js ≥ 18

### Install & Run

```bash
npm install
npm run json-server
```

The server starts at **http://localhost:3000**.

### Available Endpoints

| Method | Endpoint          | Description           |
|--------|-------------------|-----------------------|
| GET    | `/products`       | All products          |
| GET    | `/products/:id`   | Single product        |
| GET    | `/images/:file`   | Static product image  |

### Example

```bash
curl http://localhost:3000/products
curl http://localhost:3000/products?category=Chairs
```

## Data

`db.json` contains 17 products across four categories:

- **Chairs** (6 items)
- **Sofas** (4 items)
- **Tables** (4 items)
- **Lighting** (3 items)

Each product has: `id`, `name`, `price`, `image`, `category`.

## Deployment on Deno Deploy

`json-server` is a Node.js tool and **cannot run directly on Deno Deploy**. To deploy the API you have two options:

### Option A — Convert to a Deno HTTP server (recommended)

1. Create a `main.ts` file that reads `db.json` and responds to fetch requests:

```ts
import db from "./db.json" with { type: "json" };

Deno.serve((req) => {
  const url = new URL(req.url);

  // CORS headers
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  if (url.pathname === "/products") {
    const category = url.searchParams.get("category");
    const data = category
      ? db.products.filter((p) => p.category === category)
      : db.products;
    return new Response(JSON.stringify(data), { headers });
  }

  const match = url.pathname.match(/^\/products\/(\d+)$/);
  if (match) {
    const product = db.products.find((p) => p.id === Number(match[1]));
    if (!product) return new Response("Not found", { status: 404 });
    return new Response(JSON.stringify(product), { headers });
  }

  return new Response("Not found", { status: 404 });
});
```

2. Push to GitHub and connect the repo to [Deno Deploy](https://dash.deno.com).
3. Set the entry point to `main.ts`.

> **Note on images:** Deno Deploy does not serve static files from disk.  
> Upload your product images to a free CDN (e.g. [Cloudinary](https://cloudinary.com), [Imgur](https://imgur.com), or a GitHub raw URL) and update the `image` URLs in `db.json` before deploying.

### Option B — Use a Node.js host

Deploy to any Node.js-compatible host (Railway, Render, Fly.io) with no code changes:

```bash
# Render / Railway — just set the start command to:
npx json-server --watch db.json --port 3000
```

Remember to update the `VITE_API_URL` in the client to point to the new server URL.
