import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";

const server = express();
const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.table(listEndpoints(server));
  console.log(`Server is running on port ${port}`);
});
