import React, {useEffect, useState} from "react";
import crewServices from "@/services/crew.services";

export default function CrewForm( {id, setCrewId} ) {
    
    const [driverId, setDriverId] = useState("");
    const [driverName, setDriverName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [address, setAddress] = useState("");
    const [aadharNumber, setAadharNumber] = useState("");
    const [drivingLicenseNumber, setDrivingLicenseNumber] = useState("");
    const [routeNumber, setRouteNumber] = useState("");
    
    const [error, setError] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setError("");
        
        if (!driverId || !driverName || !contactNumber || !address || !aadharNumber || !drivingLicenseNumber || !routeNumber) {
            alert("All fields are required");
            return;
        }
        
        const newCrew = {
            driverId,
            driverName,
            contactNumber,
            address,
            aadharNumber,
            drivingLicenseNumber,
            routeNumber
        }
        
        try {
            if (id !== undefined && id !== "") {
                await crewServices.updateCrew(id, newCrew);
                alert("Crew updated successfully");
            } else {
                await crewServices.addCrew(newCrew);
                alert("Crew added successfully");
            }
        } catch (error) {
            console.log(error);
        }
        
        setDriverId("");
        setDriverName("");
        setContactNumber("");
        setAddress("");
        setAadharNumber("");
        setDrivingLicenseNumber("");
        setRouteNumber("");
    }
    
    const editHandler = async () => {
        setError("");
        try {
            const crewDoc = await crewServices.getCrew(id);
            if (crewDoc.exists()) {
                const crewData = crewDoc.data();
                setDriverId(crewData.driverId);
                setDriverName(crewData.driverName);
                setContactNumber(crewData.contactNumber);
                setAddress(crewData.address);
                setAadharNumber(crewData.aadharNumber);
                setDrivingLicenseNumber(crewData.drivingLicenseNumber);
                setRouteNumber(crewData.routeNumber);
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
            <h2 className="text-lg font-semibold capitalize">Add Crew</h2>
            <form onSubmit={handleSubmit}>
                {error && <div className="text-red-500">{error}</div>}
                <div className="grid grid-cols-1 gap-6 mt-4">
                    <div>
                        <label>
                            Driver ID
                        </label>
                        <input type="number"
                               className="block w-full px-4 py-2 mt-2 bg-white
                                   rounded-md dark:border-gray-600 focus:border-blue-400
                                   focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                                   focus:ring"
                               placeholder="Enter Driver Id"
                               value={driverId}
                                 onChange={(e) => setDriverId(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label>
                            Driver Name
                        </label>
                        <input type="name"
                               className="block w-full px-4 py-2 mt-2 bg-white
                                   rounded-md dark:border-gray-600 focus:border-blue-400
                                   focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                                   focus:ring"
                               placeholder="Enter Route Number"
                                 value={driverName}
                                    onChange={(e) => setDriverName(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label>
                            Contact No
                        </label>
                        <input type="number"
                               className="block w-full px-4 py-2 mt-2 bg-white
                                   rounded-md dark:border-gray-600 focus:border-blue-400
                                   focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                                   focus:ring"
                               placeholder="Enter Route Name"
                                    value={contactNumber}
                                    onChange={(e) => setContactNumber(e.target.value)}
                        />
                    </div>
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
                        Driving License Number
                    </label>
                    <input type="number"
                           className="block w-full px-4 py-2 mt-2 bg-white
                               rounded-md dark:border-gray-600 focus:border-blue-400
                               focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                               focus:ring"
                           placeholder="Enter Driving License Number"
                            value={drivingLicenseNumber}
                            onChange={(e) => setDrivingLicenseNumber(e.target.value)}
                    />
                </div>
                
                <div className="mt-6">
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