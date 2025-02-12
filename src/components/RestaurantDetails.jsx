import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

function RestaurantDetails() {
  const params = useParams();
  const dispatch = useDispatch();

  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6909835&lng=77.44527719999999&restaurantId=${params.id}&catalog_qa=undefined&submitAction=ENTER`
    )
      .then((data) => data.json())
      .then((result) => {
        let menuItems =
          result?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card?.itemCards;

        if (menuItems == undefined) {
          menuItems =
            result?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.itemCards;

          setMenuData(menuItems);
        } else {
          setMenuData(menuItems);
        }
      });
  });

  function handleAddItem(item) {
    dispatch(addItem(item));
  }

  return (
    <>
      {menuData.map((res) => {
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
              onClick={() => handleAddItem(res)}
            >
              Add +
            </button>
          </div>
        );
      })}
    </>
  );
}

export default RestaurantDetails;
