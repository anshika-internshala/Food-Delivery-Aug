function RestaurantCard({ resDetails }) {
  const { name, avgRating, cloudinaryImageId, cuisines } = resDetails;
  return (
    <div className="m-4 border w-fit p-3">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt=""
        width="200px"
        className="rounded-xl h-32"
      />
      <h2 className="font-bold">{name}</h2>
      <span>{avgRating}</span>
      <p>{cuisines}</p>
    </div>
  );
}

export default RestaurantCard;
