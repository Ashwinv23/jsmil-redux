import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import { useSelector } from "react-redux";
import { calcTotal } from "./features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calcTotal());
  }, [cartItems]);
  return (
    <main>
      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;
