import { useState } from "react";

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import StudentForm from "@/components/StudentForm";
import AllStudentDisplay from "@/components/AllStudentDisplay";

export default function Student() {
    
    const [studentId, setStudentId] = useState("");
    
    const getStudentIdHandler = (id) => {
        setStudentId(id);
    }
    
    return (
        <>
            <Navbar />
            <div className="p-7 bg-[url('../public/background.jpg')] bg-cover bg-no-repeat h-full">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col text-left">
                        <div className="text-2xl font-bold">Student</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/6">
                        <StudentForm id={studentId} setStudentId={setStudentId}/>
                    </div>
                    <div className="w-5/6">
                        <AllStudentDisplay getStudentId={getStudentIdHandler}/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}