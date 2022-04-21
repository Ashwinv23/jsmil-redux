import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import { useSelector } from "react-redux";
import { calcTotal } from "./features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calcTotal());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;
