const slugify = require("slugify");
const CategoryModel = require("../models/CategoryModel");

const CreateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Category name is required",
      });
    }

    const existingCategory = await CategoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({
        success: false,
        message: "Category already exists",
      });
    }

    const newCategory = await new CategoryModel({
      name,
      slug: slugify(name),
    }).save();

    return res.status(201).json({
      success: true,
      message: "Category created successfully",
      newCategory,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: "Error while creating category",
      error: err.message,
    });
  }
};

const UpdateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    const category = await CategoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Category updated successfully",
      category,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Error while updating category",
      error: err.message,
    });
  }
};

// get all category

const GetAllCategory = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    return res.status(200).json({
      success: true,
      message: "Category fetched successfully",
      categories,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Error while fetching  All category",
      error: err.message,
    });
  }
};


// get single category

const getSingleCategory = async (req, res) => {
    try {
        
        const SignleCategory = await CategoryModel.findOne({ slug : req.params.slug});
        return res.status(200).json({
            success: true,
            message: "Category get Successfully!",
            getSingleCategory
        })
    } catch (error) {
          return res.status(404).json({
            success: false,
            message: "Error while fetching  All category",
            error: err.message,
          });
    }
}

// delete category

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteCategory = await CategoryModel.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "Category deleted Successfully!",
            deleteCategory
        })
    } catch (error) {
          return res.status(404).json({
            success: false,
            message: "Error while fetching  All category",
            error: err.message,
          });
    }
}

module.exports = {
  CreateCategory,
    UpdateCategory,
    GetAllCategory,
    getSingleCategory,
  deleteCategory
};
