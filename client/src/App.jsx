import { useState } from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const getPriceNumber = (price) => {
    if (typeof price === "number") return price;
    return Number(String(price).replace(/[^0-9.]/g, ""));
  };

  const handleInc = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item,
    );
    setItems(updatedItems);
  };

  const onAdd = (product) => {
    const found = items.find((item) => item.id === product.id);

    if (found) {
      handleInc(product.id);
      return;
    }

    const newItem = {
      ...product,
      price: getPriceNumber(product.price),
      count: 1,
    };

    setItems([...items, newItem]);
  };

  const handleDec = (id) => {
    const remove = items.map((item) =>
      item.id === id && item.count > 0
        ? { ...item, count: item.count - 1 }
        : item,
    );
    setItems(remove.filter((item) => item.count > 0));
  };

  const handleReset = () => {
    const reset = items.map((item) => ({ ...item, count: 0 }));
    setItems(reset.filter((item) => item.count > 0));
  };

  const handleDelete = (id) => {
    const deleted = items.filter((item) => item.id !== id);
    setItems(deleted);
  };

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <>
      <Navbar totalCount={totalCount} />
      <Routes>
        <Route path="/" element={<Home onAdd={onAdd} />} />
        <Route path="/shop" element={<Shop onAdd={onAdd} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/cart"
          element={
            <Cart
              items={items}
              handleInc={handleInc}
              handleDec={handleDec}
              handleDelete={handleDelete}
              handleReset={handleReset}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
