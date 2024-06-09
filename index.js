import express from "express";
const app = express();
import bootstrap  from "./bootstrap.js";
bootstrap(app,express);
const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) {
    return console.log('Error: ', err);
  }
  console.log(`Server listening on port ${port}`);
});
