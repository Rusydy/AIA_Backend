const express = require("express");
const cors = require("cors");

const Routes = require("./routes/Routes");

const app = express();

// get the port from the environment variables
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "*",
  credentials: true,
  headers: { "Access-Control-Allow-Origin": "*" },
};

app.use(cors(corsOptions));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});
app.use(Routes);
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is runnin on port : ${port}`);
});
