require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");

const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
//my Routes
const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/user.js");
const categoryRoutes = require("./routes/category");

//This is DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DATABASE CONNECTED");
  });

//This is my middlewares
app.use(bodyParser.json());
app.use(cookieParser()); /* cookieParser helps in creating cooking ,fetching value from cookie or 
                        putting some value in the cookie */
app.use(cors());

//My Routes

app.get("/", (req,res)=>{
  res.send("It is working fine.")
})
app.use("/api", authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);

//Port
const port = process.env.PORT || 5000;

//Starting a server
app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
