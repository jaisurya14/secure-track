import Image from "next/image"
import React, { useState, useEffect} from "react"
import RouteServices from "@/services/route.services";

export default function AllRouteDisplay({getRouteId}) {
    
    const [routes, setRoutes] = useState([]);
    
    useEffect(() => {
        getRoutes();
    }, []);
    
    const getRoutes = async () => {
        try {
            const data = await RouteServices.getAllRoutes();
            setRoutes(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        } catch (error) {
            console.log(error);
        }
    }
    
    const deleteRoute = async (id) => {
        await RouteServices.deleteRoute(id);
        await getRoutes();
    }
    
    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="min-w-screen flex items-center justify-center font-sans overflow-hidden">
                        <div className="w-full p-4">
                            <div className={"flex justify-end"}>
                                <button className="items-end rounded-lg bg-gray-400 p-2" onClick={getRoutes}>
                                    <Image src="/refresh.png" width={20} height={20}/>
                                </button>
                            </div>
                            <div className="bg-white shadow-md rounded my-6">
                                <table className="table-auto">
                                    <thead>
                                    <tr className="uppercase text-sm leading-normal w-fit">
                                        <th className="py-3 px-6 text-center">Fleet ID</th>
                                        <th className="py-3 px-6 text-center">Route Number</th>
                                        <th className="py-3 px-6 text-center">Route Name</th>
                                        <th className="py-3 px-6 text-center">Start Location</th>
                                        <th className="py-3 px-6 text-center">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {routes.map((route) => (
                                        <tr className="border-b border-gray-200" key={route.id}>
                                            <td className="py-3 px-6 text-center whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <span className="font-medium">{route.fleetId}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-left">
                                                <div className="flex items-center">
                                                    <span>{route.routeNumber}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <span>{route.routeName}</span>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <span>{route.startLocation}</span>
                                            </td>
                                            <td className={"py-3 px-6 text-center"}>
                                                <div className="flex item-center justify-center">
                                                    <div className="mr-2">
                                                        <button className="py-2 px-4"
                                                                onClick={(e) => getRouteId(route.id)}
                                                        >
                                                            <Image src="/edit.png" alt="Edit" width={20} height={20}/>
                                                        </button>
                                                    </div>
                                                    <div className="mr-2">
                                                        <button className="py-2 px-4" onClick={(e) => deleteRoute(route.id)}>
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
        </>
    )
}