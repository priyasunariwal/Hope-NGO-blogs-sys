const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const mongoURI = "mongodb://127.0.0.1:27017/ngo";


const connectMongo = async () => {

  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
  
};


module.exports = connectMongo;
