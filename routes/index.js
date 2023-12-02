const { hashSync } = require("bcrypt");
const { userModel } = require("../model/user.model");

const router = require("express").Router();
router.get("/", (req, res) => {
  res.render("index.ejs", { title: "Home" });
});
router.get("/login", (req, res) => {
  res.render("login.ejs", { title: "login" });
});
router.get("/register", (req, res) => {
  res.render("register.ejs", { title: "register" });
});
router.get("/profile", (req, res) => {
  res.render("profile.ejs", {
    title: "profile",
    user: { _id: "", fullName: "", userName: "", password: "" },
  });
});

//router post for register
router.post("/register", async (req, res, next) => {
  try {
    const { fullname: fullName, username, password } = req.body;
    const hashPassword = hashSync(password, 10);
    const user = await userModel.create({
      fullName,
      username,
      password,
    });
    res.redirect("/login");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
