import { useState } from "react";
import Header from "./components/Layout/Header";
import Boards from "./components/Boards/Boards";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
const App = () => {
  const [cartIsShown, setCartisShown] = useState(false);
  const showCartHandler = () => {
    setCartisShown(true);
  };
  const hideCartHandler = () => {
    setCartisShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Boards />
      </main>
    </CartProvider>
  );
};

export default App;
