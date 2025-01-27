function Search(props) {
  function handleSearch(searchText) {
    const filteredRestaurants = props.restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    props.filterFunc(filteredRestaurants);
  }
  return (
    <>
      <input
        type="text"
        className="border-2 my-2"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </>
  );
}

export default Search;
