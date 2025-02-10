import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RestaurantDetails() {
  const params = useParams();
  console.log("params", params);

  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6909835&lng=77.44527719999999&restaurantId=686202&catalog_qa=undefined&submitAction=ENTER"
    )
      .then((data) => data.json())
      .then((result) => {
        console.log("result", result);
        let menuItems =
          result?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card?.itemCards;

        console.log("menuItems", menuItems);
        setMenuData(menuItems);
      });
  });
  return (
    <>
      <h1>Restaurant Details</h1>
      <h2>Restaurant id: {params.id}</h2>
    </>
  );
}

export default RestaurantDetails;
