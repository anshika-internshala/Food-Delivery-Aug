function TopRatedRestaurants(props) {
  function handleTopRated() {
    props.topRatedFunc();
  }
  return (
    <>
      <button className="border-2 bg-slate-50 mx-2" onClick={handleTopRated}>
        Top Rated Restaurants
      </button>
    </>
  );
}

export default TopRatedRestaurants;
