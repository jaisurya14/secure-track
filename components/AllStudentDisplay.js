import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import StudentServices from '@/services/student.services';

export default function AllStudentDisplay({getStudentId}) {
    
    const [students, setStudents] = useState([]);
    
    useEffect(() => {
        getStudents();
    }, [])
    
    const getStudents = async () => {
        try {
            const data = await StudentServices.getAllStudents();
            setStudents(data.docs.map(doc => ({...doc.data(), id: doc.id})) );
        } catch (error) {
            console.log(error);
        }
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
                        <div className={"flex justify-end"}>
                            <button className="items-end rounded-lg bg-gray-400 p-2" onClick={getStudents}>
                                <Image src="/refresh.png" width={20} height={20}/>
                            </button>
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
                                            <div className="flex item-center justify-center">
                                                <div className="mr-2">
                                                    <button className="px-4 py-2" onClick={() => getStudentId(student.id)}>
                                                        <Image src="/edit.png" width={20} height={20}/>
                                                    </button>
                                                </div>
                                                <div className="mr-2">
                                                    <button className="py-2 px-4" onClick={(e) => deleteStudent(student.id)}>
                                                        <Image src="/trash.png" alt="Trash" width={20} height={20} />
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
