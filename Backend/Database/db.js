const mongoose = require("mongoose");

// MongoDB connection string
const mongoURI =
  "mongodb+srv://NextFood:czslnBZIBWVgtfC1@cluster0.zn5ivmf.mongodb.net/NextFood";

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
