const express = require('express');
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");

const dotenv = require("dotenv");
//dot en configuration
dotenv.config();

const connectDb = require("./config/DB");

//DB connection
connectDb();



//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//route
// URL => http://localhost:8080
app.use("/test", require("./routes/testRoutes"));
app.use("/auth", require("./routes/authRoutes"));
app.use("/user", require("./routes/userRoutes"));
app.use("/restaurant", require("./routes/restaurantRoutes"));
app.use("/category", require("./routes/categoryRoutes"));
app.use("/food", require("./routes/foodRoutes"));

app.get("/", (req, res) => {
  return res
    .status(200)
    .send("<h1>Welcome to Food Server APP API BASE PROJECT </h1>");
});

//PORT
const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.white.bgMagenta);
});

