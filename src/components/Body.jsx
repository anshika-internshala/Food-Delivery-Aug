import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Search from "./Search";
import TopRatedRestaurants from "./TopRatedRestaurants";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";

function Body() {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const userInfo = useContext(userContext);

  useEffect(() => {
    // API calls --- fetch data from server
    // If API calls takes time , then component rendering is not impacted

    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6909835&lng=77.44527719999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((response) => response.json())
      .then((data) => {
        setFilteredRestaurants(
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        setAllRestaurants(
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      });
  }, []);

  function filterRestaurants(filterRestaurants) {
    setFilteredRestaurants(filterRestaurants);
  }

  function filterTopRatedRestaurants() {
    console.log("coming here");
    const topRatedRestaurants = filteredRestaurants.filter(
      (res) => res.info.avgRating >= 4.4
    );

    setFilteredRestaurants(topRatedRestaurants);
  }

  function persistData(value) {
    localStorage.setItem("userName", value);
    userInfo.setUserName(value);
  }

  return (
    <div className="bg-slate-50 w-3/4  mx-auto my-8 h-screen">
      {console.log("Body component is rendered")}
      <h1 className="font-bold text-xl">
        Restaurants with Online Food Delivery in India
      </h1>

      <Search filterFunc={filterRestaurants} restaurants={allRestaurants} />

      <TopRatedRestaurants topRatedFunc={filterTopRatedRestaurants} />

      <input
        type="text"
        className="border-2"
        onChange={(e) => persistData(e.target.value)}
      />

      <div className="flex flex-wrap">
        {filteredRestaurants.map((res) => (
          <Link to={`/restaurant/${res.info.id}`} key={res.info.id}>
            <RestaurantCard resDetails={res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;

// Props --- Passing properties from one component to another
// React Reconciliation and Virtual DOMs
// Hooks --- Simple JavaScript Function
// useState Hook - To create state variables
// State variables --- Whenever state variables change , your UI is re rendered
// useEffect Hook --- Code inside useEffect is executed after the component is rendered (after the component is mounted)
