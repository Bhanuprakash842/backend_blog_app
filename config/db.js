import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.DB_URI);
    console.log("Database is connected...");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;