const router = require("express").Router();
router.get("/", (req, res) => {
  res.render("index.ejs", {title: "Home"});
});
router.get("/login", (req, res) => {
  res.render("login.ejs", {title: "login"});
});
router.get("/register", (req, res) => {
  res.render("register.ejs", {title: "register"});
});
router.get("/profile", (req, res) => {
  res.render("profile.ejs", {
    title: "profile",
    user: {_id: "", fullName: "", userName: "", password: ""},
  });
});
module.exports = router;
