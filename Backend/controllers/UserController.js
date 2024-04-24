const { hashPassword, ComparePassword } = require("../Helper/Auth");
const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const Secret_Key = "Shaikh-Majid";


// SINGUP CONTROLLER
const CreateUser = async (req, res) => {
  try {
    const { name, location, password, email } = req.body;

    if (!name || !location || !password || !email) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }
    const hashhPassword = await hashPassword(password);
    const user = await new UserModel({
      name,
      password: hashhPassword,
      email,
      location,
    });

    const savedUser = await user.save();

    return res.status(200).json({
      success: true,
      message: "User Created Successfully",
      savedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while creating User ",
      error: error.message,
    });
  }
};

// login controller

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found Please Register",
      });
    }

    const isMatch = await ComparePassword(password, user.password);
    if (!isMatch) {
      return res.status(404).json({
        success: false,
        message: "Invalid Password",
        error: error.message,
      });
    }
    const token = await jwt.sign({ id: user.id }, Secret_Key, { expiresIn: "1h" })
    // console.log(token);
    return res.status(200).json({
      success: true,
      message: "User Logged In Successfully",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while Login User ",
      error: error.message,
    });
  }
};

module.exports = {
  CreateUser,
  LoginUser,
};
