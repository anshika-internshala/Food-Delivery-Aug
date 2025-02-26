import { useSelector, useDispatch } from "react-redux";
import { clearCart, addItem, removeItem } from "../utils/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  function clear() {
    dispatch(clearCart());
  }

  function handleAddItem(item) {
    dispatch(addItem(item));
  }

  function handleRemoveItem(item) {
    dispatch(removeItem(item));
  }

  return (
    <>
      <button
        className="border bg-slate-50 mx-auto w-screen m-2"
        onClick={clear}
      >
        Clear Cart
      </button>
      {cartItems.map((res) => {
        return (
          <div className="flex w-3/4 mx-auto mb-10 border-b-4 p-4">
            <div className="flex flex-col w-3/4">
              <h1>{res.card.info.name}</h1>
              <h1>{res.card.info.defaultPrice / 100}</h1>
              <h1>{res.card.info.description}</h1>
            </div>
            <img
              className="w-52 h-44 rounded-md border shadow-lg border-gray-100"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${res.card.info.imageId}`}
              alt=""
            />

            <button
              className="border bg-green-300 h-8 relative top-16 right-5"
              onClick={() => handleRemoveItem(res)}
            >
              -
            </button>

            <span className="border bg-green-300 h-8 relative top-16 right-5">
              {res.quantity}
            </span>

            <button
              className="border bg-green-300 h-8 relative top-16 right-5"
              onClick={() => handleAddItem(res)}
            >
              +
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Cart;
