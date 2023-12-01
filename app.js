const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const {default: mongoose} = require("mongoose");
const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/passport-js", {}).then(() => {
  console.log("connected to mongodb");
});

//Setup
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Setup view engine and layout
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "./layout/main.ejs");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} : http://localhost:${PORT}`);
});
