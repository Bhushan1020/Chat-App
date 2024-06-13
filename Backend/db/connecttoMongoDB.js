import mongoose from "mongoose";


const connecttoMongoDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to mongodb");
    } catch (error) {
        console.log("Error", error.message);
    }
}

export default connecttoMongoDB;