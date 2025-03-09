const mongoose = require("mongoose");

const connectedToDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://danielbirhanu:danielbirhanu@cluster0.xdzic.mongodb.net/");
    console.log("Connected to database successfully")
  } catch (error) {
    console.log("Database connection failed: ", error);
    process.exit(1)
  }
};

module.exports = connectedToDb