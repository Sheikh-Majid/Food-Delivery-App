const express = require("express");
const { CreateUser, LoginUser } = require("../controllers/UserController");

const router = express.Router();

// user Routes
router.post("/createUser", CreateUser);
router.post("/loginUser", LoginUser);




module.exports = router;