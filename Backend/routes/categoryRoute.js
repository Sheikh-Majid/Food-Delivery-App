const express = require("express");

const router = express.Router();
const {
  CreateCategory,
  UpdateCategory,
  GetAllCategory,
  getSingleCategory,
  deleteCategory,
} = require("../controllers/CategoryController");

// category routes

router.post("/createCategory", CreateCategory);
router.put("/updateCategory/:id", UpdateCategory);
router.get("/getAllCategory", GetAllCategory);
router.get("/getSingleCategory/:slug", getSingleCategory)
router.delete("/deleteCategory/:id", deleteCategory)

module.exports = router;
