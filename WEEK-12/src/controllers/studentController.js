import { student } from "../models/student.js";

export async function createStudent(req,res) {
    try {
        const data=await student.create(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({error: err.message});
    }
}

export async function getStudents(req,res) {
    try {
        const data=await student.find({});
        res.status(200).json({success:true,data});
    } catch (error) {
        res.status(400).json({success:false,message:"Error getting data"});
    }
}

export async function updateStudent(req,res) {
    try {
        const id=req.params.id;
        const body=req.body;
        const data= await student.findByIdAndUpdate(id,body);
        res.status(200).json({success:true,message:"updated details",data});
    } catch (error) {
        res.status(400).json({success:false,message:"Error updating data"});
    }
}

export async function deleteStudent(req,res) {
    try {
        await student.findByIdAndDelete(req.params.id);
        res.status(200).json({success:true,message:"Deleted student sucessfully"});
    } catch (error) {
        res.status(400).json({success:false,message:"Error deleting student"});
    }
    
}