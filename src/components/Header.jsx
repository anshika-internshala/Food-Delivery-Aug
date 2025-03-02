// Functional Component --- simple JavaScript Function which returns JSX
// JSX --- syntax extension of JavaScript --- HTML like code
// Default and Named Exports and Imports

import useOnlineStatus from "../utils/useOnlinestatus";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import Login from "./Login";

function Header() {
  const onlineStatus = useOnlineStatus();

  const userInfo = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);

  const loggedInUser = localStorage.getItem("userName");

  const [isVisible, setIsVisible] = useState(false);

  function openModal() {
    setIsVisible(true);
  }

  function closeModal() {
    setIsVisible(false);
  }

  return (
    <nav className="flex justify-between  px-4 border-b-2">
      <img
        src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
        alt=""
        width="80px"
        height="80px"
      />
      <ul className="flex items-center mr-10 gap-10">
        <li>{loggedInUser ? loggedInUser : userInfo.loggedInUser}</li>
        <li>{onlineStatus ? "🟢" : "🔴"}</li>
        <li>
          <a href="/search">Search</a>
        </li>
        <li>
          <Link to="/offers">Offers</Link>
        </li>
        <li>
          <a href="">Help</a>
        </li>
        <li>
          <Link onClick={openModal}>SignIn</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
          <span> {cartItems.length}</span>
        </li>
      </ul>
      <Login isVisible={isVisible} onClose={closeModal}></Login>
    </nav>
  );
}

export default Header;
