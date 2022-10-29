import express from "express";
import bodyParser from "body-parser";
import router, { PORT } from "./routes/routes.js";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening for connections on port ${PORT}`);
});
