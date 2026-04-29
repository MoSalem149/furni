import Hero from "../components/Hero";
import CartItem from "../components/CartItem";

export default function Cart({
  items,
  handleInc,
  handleDec,
  handleDelete,
  handleReset,
}) {
  return (
    <>
      <Hero
        title={<>Cart</>}
        description=""
        showButtons={false}
        showImage={false}
        showDot={false}
      />
      <CartItem
        items={items}
        handleInc={handleInc}
        handleDec={handleDec}
        handleDelete={handleDelete}
        handleReset={handleReset}
      />
    </>
  );
}
