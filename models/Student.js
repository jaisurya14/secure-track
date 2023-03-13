import { Schema, model, models } from "mongoose";

const studentSchema = new Schema({
    rollNo: Number,
    name: String,
    gender: String,
    department: String,
    address: String,
    busRouteNo: Number,
    busStop: String,
    phoneNo: Number,
});

const Student = models.Student || model("Student", studentSchema);

export default Student;