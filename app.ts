import express from "express";
import { Express } from "express";
import createHomePageTemplate from "./views";
import createListTemplate from "./views/list";
import GROCERIES_DATA from "./data/data";
import createGroceryItem from "./views/groceryItem";

const app: Express = express();
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

// routes
app.get("/", (req, res) => {
  res.send(createHomePageTemplate());
});

app.get("/groceries", (req, res) => {
  res.send(createListTemplate());
});

app.post("/groceries", (req, res) => {
  const { title, quantity } = req.body;
  const id = Math.random().toString();

  GROCERIES_DATA.push({ id, title, quantity });

  res.redirect(`/groceries/${id}`);
});

app.post("/groceries/delete/:id", (req, res) => {
  const { id } = req.params;

  GROCERIES_DATA.forEach((groceryItem, index) => {
    if (groceryItem.id === id) {
      GROCERIES_DATA.splice(index, 1);
    }
  });

  res.send();
});

app.get("/groceries/:id", (req, res) => {
  const { id } = req.params;
  const groceryItem = GROCERIES_DATA.find(
    (groceryItem) => groceryItem.id === id,
  );

  res.send(createGroceryItem(groceryItem));
});

// listener
app.listen(3000, () => {
  console.log("App listening on port 3000");
});
