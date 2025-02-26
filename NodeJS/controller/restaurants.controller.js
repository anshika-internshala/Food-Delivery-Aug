import restaurantModel from "../model/restaurants.model.js";

export function createRestaurant(req, res) {
  const { name, imageUrl, rating, cuisines } = req.body;

  const newRestaurant = new restaurantModel({
    name,
    imageUrl,
    rating,
    cuisines,
  });

  newRestaurant
    .save()
    .then((data) => {
      if (!data) {
        return res.status(400).send("Something went wrong");
      }

      res.send(data);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
}

export function fetchRestaurants(req, res) {
  restaurantModel
    .find()
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Data not found" });
      }

      res.json(data);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
}

export function updateRestaurant(req, res) {
  const _id = req.params.id;

  restaurantModel
    .findByIdAndUpdate(_id, req.body)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Restaurant not found" });
      }

      res.send(data);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
}

export function deleteRestaurant(req, res) {
  const _id = req.params.id;

  restaurantModel
    .findByIdAndDelete(_id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Restaurant not found" });
      }

      res.send(data);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
}
