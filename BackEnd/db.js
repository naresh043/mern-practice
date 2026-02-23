const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ Database Connected Successfully");
  } catch (error) {
    console.log("❌ DB Connection Failed", error);
    process.exit(1);
  }
};

module.exports = dbConnection;