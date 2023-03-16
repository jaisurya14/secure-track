import React, {useEffect, useState} from "react";
import routeServices from "@/services/route.services";

export default function Route({id, setRouteId}) {
    
    const [fleetId, setFleetId] = useState("");
    const [routeNumber, setRouteNumber] = useState("");
    const [routeName, setRouteName] = useState("");
    const [startLocation, setStartLocation] = useState("");
    
    const [error, setError] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        
        if (!fleetId || !routeNumber || !routeName || !startLocation) {
            alert("All fields are required");
            return;
        }
        
        const newRoute = {
            fleetId, routeNumber, routeName, startLocation
        }
        
        console.log(newRoute)
        
        try {
            if (id !== undefined && id !== "") {
                await routeServices.updateRoute(id, newRoute);
                setRouteId("");
                alert("Route updated successfully")
            } else {
                await routeServices.addRoute(newRoute);
                alert("Route added successfully")
            }
        } catch (error) {
            setError(error.message);
        }
        
        setFleetId("");
        setRouteNumber("");
        setRouteName("");
        setStartLocation("");
    }
    
    
    const editHandler = async () => {
        try {
            const routeDoc = await routeServices.getRoute(id);
            if (routeDoc.exists()) {
                const routeData = routeDoc.data();
                setFleetId(routeData.fleetId);
                setRouteNumber(routeData.routeNumber);
                setRouteName(routeData.routeName);
                setStartLocation(routeData.startLocation);
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
            <h2 className="text-lg font-semibold capitalize">Add Fleet</h2>
            <form onSubmit={handleSubmit}>
                {error && <p className="text-red-500">{error}</p>}
                <div className="grid grid-cols-1 gap-6 mt-4">
                    <div>
                        <label>
                            Fleet ID
                        </label>
                        <input type="number"
                               className="block w-full px-4 py-2 mt-2 bg-white
                                   rounded-md dark:border-gray-600 focus:border-blue-400
                                   focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                                   focus:ring"
                               placeholder="Enter Fleet Id"
                               value={fleetId}
                               onChange={(e) => setFleetId(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label>
                            Route Number
                        </label>
                        <input type="number"
                               className="block w-full px-4 py-2 mt-2 bg-white
                                   rounded-md dark:border-gray-600 focus:border-blue-400
                                   focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                                   focus:ring"
                               placeholder="Enter Route Number"
                               value={routeNumber}
                               onChange={(e) => setRouteNumber(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label>
                            Route Name
                        </label>
                        <input type="name"
                               className="block w-full px-4 py-2 mt-2 bg-white
                                   rounded-md dark:border-gray-600 focus:border-blue-400
                                   focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                                   focus:ring"
                               placeholder="Enter Route Name"
                               value={routeName}
                               onChange={(e) => setRouteName(e.target.value)}
                        />
                    </div>
                </div>
                
                
                <div className="mt-6">
                    <label>
                        Start Location
                    </label>
                    <input type="text"
                           className="block w-full px-4 py-2 mt-2 bg-white
                               rounded-md dark:border-gray-600 focus:border-blue-400
                               focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                               focus:ring"
                           placeholder="Enter Start Location"
                           value={startLocation}
                           onChange={(e) => setStartLocation(e.target.value)}
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