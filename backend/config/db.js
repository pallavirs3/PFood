import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://pallavigowda4123:RZOWYxCtgCDv3kiX@cluster0.sqtsxj0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/PFood').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.