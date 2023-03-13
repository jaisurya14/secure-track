import React, { useEffect, useState } from 'react';
import StudentServices from '@/services/student.services';

export default function AllStudentDisplay({getStudentId}) {
    
    const [students, setStudents] = useState([]);
    
    useEffect(() => {
        getStudents().then(r => console.log(r));
    }, [])
    
    const getStudents = async () => {
        const data = await StudentServices.getAllStudents();
        console.log(data.docs);
        setStudents(data.docs.map(doc => ({...doc.data(), id: doc.id})) );
    }
    
    const editStudent = async (id) => {
        getStudentId(id);
    }
    
    const deleteStudent = async (id) => {
        await StudentServices.deleteStudent(id);
        await getStudents();
    }
    
    return (<>
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="min-w-screen flex items-center justify-center font-sans overflow-hidden">
                    <div className="w-full p-4">
                        <div className="flex justify-end">
                            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={getStudents}>Refresh</button>
                        </div>
                        <div className="bg-white shadow-md rounded my-6">
                            <table className="table-auto">
                                
                                <thead>
                                <tr className="uppercase text-sm leading-normal w-fit rounded-lg">
                                    <th className="py-3 px-6">Roll Number</th>
                                    <th className="py-3 px-6">Name</th>
                                    <th className="py-3 px-6">Phone Number</th>
                                    <th className="py-3 px-6">Gender</th>
                                    <th className="py-3 px-6">Aadhar Number</th>
                                    <th className="py-3 px-6">Department Name</th>
                                    <th className="py-3 px-6">Address</th>
                                    <th className="py-3 px-6">Bus Route Number</th>
                                    <th className="py-3 px-6">Pickup Location</th>
                                    <th className="py-3 px-6">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {students.map((student) => (
                                    <tr className="border-b border-gray-200" key={student.id}>
                                        <td className="py-3 px-6 text-center whitespace-nowrap">
                                            <div className="flex items-center justify-center">
                                                <span className="font-medium">{student.rollNumber}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center justify-center">
                                                <span>{student.studentName}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center justify-center">
                                                <span>{student.phoneNumber}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center justify-center">
                                                <span>{student.gender}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center justify-center">
                                                <span>{student.aadharNumber}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center justify-center">
                                                <span>{student.departmentName}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center justify-center">
                                                <span>{student.address}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center justify-center">
                                                <span>{student.busRouteNumber}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center justify-center">
                                                <span>{student.pickupLocation}</span>
                                            </div>
                                        </td>
                                        <td className={"py-3 px-6 text-center"}>
                                            <div className="flex item-center justify-center space-x-20">
                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                                                            onClick={(e) => editStudent(student.id)}
                                                    >
                                                        Edit
                                                    </button>
                                                </div>
                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg" onClick={(e) => deleteStudent(student.id)}>
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
