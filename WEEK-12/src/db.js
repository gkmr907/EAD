import mongoose from "mongoose";

export async function connectDB(uri) {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(uri);
        console.log("Mongodb connected successfully!")
    } catch (error) {
        console.log("error connecting Mongodb: ",error);
    }
}