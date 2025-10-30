import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    branch:{type:String, required:true}
})

export const student = mongoose.model("student",studentSchema);