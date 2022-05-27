const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./DataBase/connect");
const task = require("./routes/taskRoute");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("Wellcome to To-Do List app");
// });

app.use("/", task);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log("your server run in on port:", PORT);
    });
  } catch (error) {
    console.error(error);
  }
};
start();
