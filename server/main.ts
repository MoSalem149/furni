import db from "./db.json" with { type: "json" };

const corsHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

Deno.serve((req) => {
  const url = new URL(req.url);

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // GET /products
  if (url.pathname === "/products") {
    const category = url.searchParams.get("category");
    const data = category
      ? db.products.filter((p) => p.category === category)
      : db.products;
    return new Response(JSON.stringify(data), { headers: corsHeaders });
  }

  // GET /products/:id
  const match = url.pathname.match(/^\/products\/(\d+)$/);
  if (match) {
    const product = db.products.find((p) => p.id === Number(match[1]));
    if (!product) {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: corsHeaders,
      });
    }
    return new Response(JSON.stringify(product), { headers: corsHeaders });
  }

  return new Response(JSON.stringify({ error: "Not found" }), {
    status: 404,
    headers: corsHeaders,
  });
});
