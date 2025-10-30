import {Router} from "express";
import { createStudent, getStudents, updateStudent, deleteStudent} from "../controllers/studentController.js";

const router = Router();

router.post("/create",createStudent);
router.get("/get-students",getStudents);
router.put("/update/:id",updateStudent);
router.delete("/delete/:id",deleteStudent);

export default router;

