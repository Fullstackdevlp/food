import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Hibadev:33858627@cluster0.ik6tp.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}