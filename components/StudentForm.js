import React, { useState, useEffect } from "react";
import studentServices from "@/services/student.services";

export default function StudentForm({ id, setStudentId }) {
    
    const [rollNumber, setRollNumber] = useState("");
    const [studentName, setStudentName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");
    const [departmentName, setDepartmentName] = useState("");
    const [address, setAddress] = useState("");
    const [busRouteNumber, setBusRouteNumber] = useState("");
    const [pickupLocation, setPickupLocation] = useState("");
    const [aadharNumber, setAadharNumber] = useState("");
    
    const [error, setError] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        
        if (!rollNumber || !studentName || !phoneNumber || !gender || !departmentName || !address || !busRouteNumber || !pickupLocation || !aadharNumber) {
            alert("All fields are required");
            return;
        }
        
        const newStudent = {
            rollNumber,
            studentName,
            phoneNumber,
            gender,
            departmentName,
            address,
            busRouteNumber,
            pickupLocation,
            aadharNumber
        }
        
        try {
            if (id !== undefined && id !== "") {
                await studentServices.updateStudent(id, newStudent);
                setStudentId("");
                alert("Student updated successfully");
            } else {
                await studentServices.addStudent(newStudent);
                alert("Student added successfully");
            }
        } catch (error) {
            console.log(error);
        }
        
        setRollNumber("");
        setStudentName("");
        setPhoneNumber("");
        setGender("");
        setDepartmentName("");
        setAddress("");
        setBusRouteNumber("");
        setPickupLocation("");
        setAadharNumber("");
        
    }
    
    const editHandler = async () => {
        setError("");
        try {
            const studentDoc = await studentServices.getStudent(id);
            if (studentDoc.exists()) {
                const studentData = studentDoc.data();
                setRollNumber(studentData.rollNumber);
                setStudentName(studentData.studentName);
                setPhoneNumber(studentData.phoneNumber);
                setGender(studentData.gender);
                setDepartmentName(studentData.departmentName);
                setAddress(studentData.address);
                setBusRouteNumber(studentData.busRouteNumber);
                setPickupLocation(studentData.pickupLocation);
                setAadharNumber(studentData.aadharNumber);
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        if (id !== undefined && id !== "") {
            editHandler();
        }
    }, [id]);
    
    
    return (<>
        <section className="p-7">
            <h2 className="text-lg font-semibold capitalize">Add Student</h2>
            <form onSubmit={handleSubmit}>
                {error && <p className="text-red-500">{error}</p>}
                <div className="grid grid-cols-1 gap-6 mt-4">
                    <div>
                        <label>
                            Roll Number
                        </label>
                        <input type="number"
                               className="block w-full px-4 py-2 mt-2 bg-white
                                   rounded-md dark:border-gray-600 focus:border-blue-400
                                   focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                                   focus:ring"
                               placeholder="Enter Roll Number"
                               value={rollNumber}
                                 onChange={(e) => setRollNumber(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label>
                            Student Name
                        </label>
                        <input type="text"
                               className="block w-full px-4 py-2 mt-2 bg-white
                                   rounded-md dark:border-gray-600 focus:border-blue-400
                                   focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                                   focus:ring"
                               placeholder="Enter Student Name"
                                 value={studentName}
                                    onChange={(e) => setStudentName(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label>
                            Phone Number
                        </label>
                        <input type="number"
                               className="block w-full px-4 py-2 mt-2 bg-white
                                   rounded-md dark:border-gray-600 focus:border-blue-400
                                   focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                                   focus:ring"
                               placeholder="Enter Phone Number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                </div>
                
                <div className="mt-6">
                    <label>
                        Gender
                    </label>
                    <input type="text"
                           className="block w-full px-4 py-2 mt-2 bg-white
                                   rounded-md dark:border-gray-600 focus:border-blue-400
                                   focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                                   focus:ring"
                           placeholder="Enter Gender"
                           value={gender}
                            onChange={(e) => setGender(e.target.value)}
                    />
                </div>
                
                <div className="mt-6">
                    <label>
                        Aadhar Number
                    </label>
                    <input type="number"
                           className="block w-full px-4 py-2 mt-2 bg-white
                               rounded-md dark:border-gray-600 focus:border-blue-400
                               focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                               focus:ring"
                           placeholder="Enter Aadhar Number"
                            value={aadharNumber}
                            onChange={(e) => setAadharNumber(e.target.value)}
                    />
                </div>
                
                <div className="mt-6">
                    <label>
                        Department Name
                    </label>
                    <input type="text"
                           className="block w-full px-4 py-2 mt-2 bg-white
                               rounded-md dark:border-gray-600 focus:border-blue-400
                               focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                               focus:ring"
                           placeholder="Enter Department Name"
                            value={departmentName}
                            onChange={(e) => setDepartmentName(e.target.value)}
                    />
                </div>
                
                <div className="mt-6">
                    <label>
                        Address
                    </label>
                    <input type="text"
                           className="block w-full px-4 py-2 mt-2 bg-white
                               rounded-md dark:border-gray-600 focus:border-blue-400
                               focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                               focus:ring"
                           placeholder="Enter Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                           
                    />
                </div>
    
                <div className="mt-6">
                    <label>
                        Bus Route Number
                    </label>
                    <input type="number"
                           className="block w-full px-4 py-2 mt-2 bg-white
                               rounded-md dark:border-gray-600 focus:border-blue-400
                               focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                               focus:ring"
                           placeholder="Enter Bus Route Number"
                            value={busRouteNumber}
                            onChange={(e) => setBusRouteNumber(e.target.value)}
                    />
                </div>
    
                <div className="mt-6">
                    <label>
                        Pickup Location
                    </label>
                    <input type="text"
                           className="block w-full px-4 py-2 mt-2 bg-white
                               rounded-md dark:border-gray-600 focus:border-blue-400
                               focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                               focus:ring"
                           placeholder="Enter Pickup Location"
                            value={pickupLocation}
                            onChange={(e) => setPickupLocation(e.target.value)}
                    />
                </div>
                <div className="flex justify-end mt-6">
                    <button
                        className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-green-500
                            rounded-md hover:bg-green-900 focus:outline-none focus:bg-green-900"
                    >Save
                    </button>
                </div>
            </form>
        </section>
    </>)
}