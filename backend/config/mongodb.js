import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log("Database Connected  внатурі"))
    console.log("mongodb = ", process.env.MONGODB_URI);
    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)

}

export default connectDB;


