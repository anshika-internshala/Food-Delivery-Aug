import {
  createRestaurant,
  deleteRestaurant,
  fetchRestaurants,
  updateRestaurant,
} from "../controller/restaurants.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

export function routes(app) {
  app.post("/api/restaurant", createRestaurant);
  app.get("/api/restaurants", verifyToken, fetchRestaurants);
  app.put("/api/restaurant/:id", updateRestaurant);
  app.delete("/api/restaurant/:id", deleteRestaurant);
}
