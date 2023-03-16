import React, {useState, useEffect} from 'react'
import CrewServices from "@/services/crew.services";
import Image from "next/image";

export default function AllCrewDisplay({getCrewId}) {
    
    const [crews, setCrews] = useState([]);
    
    useEffect(() => {
        getCrews().then(r => console.log(r));
    }, []);
    
    const getCrews = async () => {
        try {
            const data = await CrewServices.getAllCrews();
            setCrews(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        } catch (error) {
            console.log(error);
        }
    }
    
    const editCrew = (id) => {
        getCrewId(id);
    }
    
    const deleteCrew = async (id) => {
        await CrewServices.deleteCrew(id);
        await getCrews();
    }
    
    return (<>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="min-w-screen flex items-center justify-center font-sans overflow-hidden">
                        <div className="w-full p-4">
                            <div className={"flex justify-end"}>
                                <button className="items-end rounded-lg bg-gray-400 p-2" onClick={getCrews}>
                                    <Image src="/refresh.png" width={20} height={20}/>
                                </button>
                            </div>
                            <div className="bg-white shadow-md rounded my-6">
                                <table className="table-auto">
                                    <thead>
                                    <tr className="uppercase text-sm leading-normal w-fit">
                                        <th className="py-3 px-6 text-center">Driver ID</th>
                                        <th className="py-3 px-6 text-center">Driver Name</th>
                                        <th className="py-3 px-6 text-center">Contact No</th>
                                        <th className="py-3 px-6 text-center">Address</th>
                                        <th className="py-3 px-6 text-center">Aadhar No</th>
                                        <th className="py-3 px-6 text-center">Driving License No</th>
                                        <th className="py-3 px-6 text-center">Route No</th>
                                        <th className="py-3 px-6 text-center">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {crews.map((crew, index) => (
                                        <tr className="border-b border-gray-200" key={crew.id}>
                                            <td className="py-3 px-6 text-center">
                                                <div className="flex items-center justify-center">
                                            <span className="font-medium">{crew.driverId}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <div className="flex items-center justify-center">
                                            <span className="font-medium">{crew.driverName}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <div className="flex items-center justify-center">
                                            <span className="font-medium">{crew.contactNumber}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <div className="flex items-center justify-center">
                                            <span className="font-medium">{crew.address}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <div className="flex items-center justify-center">
                                            <span className="font-medium">{crew.aadharNumber}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <div className="flex items-center justify-center">
                                            <span className="font-medium">{crew.drivingLicenseNumber}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <div className="flex items-center justify-center">
                                            <span className="font-medium">{crew.routeNumber}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <div className="flex item-center justify-center space-x-5">
                                                    <div className="mr-2">
                                                        <Image src="/edit.png" alt="edit" width={20} height={20}
                                                                onClick={() => getCrewId(crew.id)}/>
                                                    </div>
                                                    <div className="mr-2">
                                                        <Image src="/trash.png" alt="delete" width={20} height={20}
                                                                onClick={() => deleteCrew(crew.id)}/>
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