// Functional Component --- simple JavaScript Function which returns JSX
// JSX --- syntax extension of JavaScript --- HTML like code
// Default and Named Exports and Imports

import useOnlineStatus from "../utils/useOnlinestatus";
import { Link } from "react-router-dom";

function Header() {
  const onlineStatus = useOnlineStatus();
  return (
    <nav className="flex justify-between  px-4 border-b-2">
      <img
        src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
        alt=""
        width="80px"
        height="80px"
      />
      <ul className="flex items-center mr-10 gap-10">
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
          <a href="">SignIn</a>
        </li>
        <li>
          <a href="">Cart</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
