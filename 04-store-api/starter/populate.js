// We will automatically add all the JSON object in products.json to the database

require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("success");
    //! To terminate the application
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
};
start();