import express from "express";
import mongoose from "mongoose";
import { routes } from "./routes/restaurants.routes.js";
import { userRoutes } from "./routes/users.routes.js";
import cors from "cors";

const app = express();
const port = 8009;

app.listen(port, () => {
  console.log("Application running successfully");
});

// Inbuilt middleware
app.use(express.json()); // helps in parsing the json request

app.get("/", (req, res) => {
  res.send("Learning NodeJS");
});

function logRequest(req, res, next) {
  console.log("request");
  next();
}

function printDetails(req, res, next) {
  console.log("print details");
  next();
}

app.use(printDetails);
app.use(cors());

// route level middleware
app.get("/users", logRequest, (req, res) => {
  res.send("Hello World");
});

mongoose.connect(
  "mongodb+srv://internshala11:internshala@cluster0.2u0kq.mongodb.net/"
);

const db = mongoose.connection;

db.on("open", () => {
  console.log("Database connected successfully");
});

console.log(db);

routes(app);
userRoutes(app);

const users = [
  {
    id: 1,
    firstName: "Pradeep",
    lastName: "Chowdhary",
    age: 24,
  },
  {
    id: 2,
    firstName: "Ananda",
    lastName: "Bhardwaj",
    age: 16,
  },
  {
    id: 3,
    firstName: "Naim",
    lastName: "Haider",
    age: 67,
  },
];

// create a new user in this data

app.post("/user", (req, res) => {
  const { firstName, lastName, age } = req.body;

  const newUser = {
    id: Math.trunc(Math.random() * 20),
    firstName: firstName,
    lastName: lastName,
    age: age,
  };

  users.push(newUser);

  res.send(users);
});

// Update a particular user by id

app.patch("/user/:id", (req, res) => {
  const id = req.params.id;

  const user = users.find((user) => user.id == id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const keys = Object.keys(req.body);

  keys.forEach((key) => {
    if (!user[key]) {
      return res.status(404).end({ message: "Invalid key" });
    }

    user[key] = req.body[key];
  });

  res.json(users);
});

// Delete a user by id

app.delete("/user/:id", (req, res) => {
  const id = req.params.id;

  const user = users.find((user) => user.id == id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const filteredUsers = users.filter((user) => user.id != id);
  res.json(filteredUsers);
});

// Common JS Modules -- old
// ES Modules -- new

// HTTP ---> POST , GET , PUT (update) , DELETE , PATCH (partial update)
// CRUD operations ---> Create , Read , Update , Delete
// Middlewares --->
