import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.DB).then(() => {
        console.log("Mongo Connected");
    }).catch((e) => console.log("Not connected")) 
}

