import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import { pgConnect, syncModels } from "./db.js";
// import productsRouter from "./api/products/index.js";

const server = express();
const port = process.env.PORT || 3001;
//Middlewares
server.use(cors());
server.use(express.json());
//Endpoints
// server.use("/product", productsRouter);
//ErrorHandlers

await pgConnect(); //there is an implicit async
await syncModels();

server.listen(port, () => {
  console.table(listEndpoints(server));
  console.log(`Server is running on port ${port}`);
});
