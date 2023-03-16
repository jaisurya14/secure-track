import React, { useState, useEffect} from "react"
import fleetServices from "@/services/fleet.services";
import Image from "next/image";

export default function AllFleetDisplay({getFleetId}) {
    
    const [fleets, setFleets] = useState([]);
    
    useEffect(() => {
        getFleets();
    })
    
    const getFleets = async () => {
        try {
            const data = await fleetServices.getAllFleets();
            setFleets(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        } catch (error) {
            console.log(error);
        }
    }
    
    const deleteFleet = async (id) => {
        await fleetServices.deleteFleet(id);
        await getFleets();
    }
    
    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="min-w-screen flex items-center justify-center font-sans overflow-hidden">
                        <div className="w-full p-4">
                            <div className={"flex justify-end"}>
                                <button className="items-end rounded-lg bg-gray-400 p-2" onClick={getFleets}>
                                    <Image src="/refresh.png" width={20} height={20}/>
                                </button>
                            </div>
                            <div className="bg-white shadow-md rounded my-6">
                                <table className="table-auto">
                                    <thead>
                                    <tr className="uppercase text-sm leading-normal w-fit">
                                        <th className="py-3 px-6 text-center">Fleet Id</th>
                                        <th className="py-3 px-6 text-center">Vehicle Type</th>
                                        <th className="py-3 px-6 text-center">Registration Number</th>
                                        <th className="py-3 px-6 text-center">Seating Capacity</th>
                                        <th className="py-3 px-6 text-center">Year of Registration</th>
                                        <th className="py-3 px-6 text-center">Last FC</th>
                                        <th className="py-3 px-6 text-center">Vehicle Condition</th>
                                        <th className="py-3 px-6 text-center">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {fleets.map((fleet, index) => (
                                        <tr className="border-b border-gray-200" key={fleet.id}>
                                            <td className="py-3 px-6 text-center">
                                                <div className="flex items-center justify-center">
                                            <span className="font-medium">{fleet.fleetId}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-left">
                                                <div className="flex items-center">
                                                    <span>{fleet.vehicleType}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <span>{fleet.registrationNumber}</span>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <span>{fleet.seatingCapacity}</span>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <span>{fleet.yearOfRegistration}</span>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <span>{fleet.lastFC}</span>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <span>{fleet.vehicleCondition}</span>
                                            </td>
                                            <td className={"py-3 px-6 text-center"}>
                                                <div className="flex item-center justify-center">
                                                    <div className="mr-2">
                                                        <button className="py-2 px-4"
                                                                onClick={(e) => getFleetId(fleet.id)}
                                                        >
                                                            <Image src="/edit.png" alt="Edit" width={30} height={30}/>
                                                        </button>
                                                    </div>
                                                    <div className="mr-2">
                                                        <button className="py-2 px-4" onClick={(e) => deleteFleet(fleet.id)}>
                                                            <Image src="/trash.png" alt="Trash" width={30} height={30} />
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
        </>
    )
}