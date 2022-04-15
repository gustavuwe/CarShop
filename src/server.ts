import express from "express";
import { itemsRoutes } from "./routes/items.routes";

const app = express();

app.use(express.json());

app.use("/items", itemsRoutes)

app.listen(3333, () => console.log("Server is running!"));