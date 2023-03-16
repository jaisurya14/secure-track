import React, {useState, useEffect} from "react";
import fleetServices from "@/services/fleet.services";

export default function Fleet({id, setFleetID}) {
    
    const [fleetId, setFleetId] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const [registrationNumber, setRegistrationNumber] = useState("");
    const [seatingCapacity, setSeatingCapacity] = useState("");
    const [yearOfRegistration, setYearOfRegistration] = useState("");
    const [lastFC, setLastFC] = useState("");
    const [vehicleCondition, setVehicleCondition] = useState("");
    
    const [error, setError] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        
        if (!fleetId || !vehicleType || !registrationNumber || !seatingCapacity || !yearOfRegistration || !lastFC || !vehicleCondition) {
            alert("All fields are required");
            return;
        }
        
        const newFleet = {
            fleetId, vehicleType, registrationNumber, seatingCapacity, yearOfRegistration, lastFC, vehicleCondition
        }
        
        try {
            if (id !== undefined && id !== "") {
                await fleetServices.updateFleet(id, newFleet);
                setFleetID("");
                alert("Fleet updated successfully");
            } else {
                await fleetServices.addFleet(newFleet);
                alert("Fleet created successfully");
            }
        } catch (error) {
            console.log(error)
        }
        
        setFleetId("");
        setVehicleType("");
        setRegistrationNumber("");
        setSeatingCapacity("");
        setYearOfRegistration("");
        setLastFC("");
        setVehicleCondition("");
        
    }
    
    const editHandler = async () => {
        setError("");
        try {
            const fleetDoc = await fleetServices.getFleet(id);
            if (fleetDoc.exists()) {
                const fleetData = fleetDoc.data();
                setFleetId(fleetData.fleetId);
                setVehicleType(fleetData.vehicleType);
                setRegistrationNumber(fleetData.registrationNumber);
                setSeatingCapacity(fleetData.seatingCapacity);
                setYearOfRegistration(fleetData.yearOfRegistration);
                setLastFC(fleetData.lastFC);
                setVehicleCondition(fleetData.vehicleCondition);
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        if (id !== undefined && id !== "") {
            editHandler();
        }
    } , [id]);
    
    
    return (<>
        <section className="p-7">
            <h2 className="text-lg font-semibold capitalize">Add Fleet</h2>
            <form onSubmit={handleSubmit}>
                {error && <div className="text-red-500">{error}</div>}
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
                            Vehicle Type
                        </label>
                        <input type="name"
                               className="block w-full px-4 py-2 mt-2 bg-white
                                   rounded-md dark:border-gray-600 focus:border-blue-400
                                   focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                                   focus:ring"
                               placeholder="Enter Vehicle Type"
                               value={vehicleType}
                               onChange={(e) => setVehicleType(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label>
                            Registration Number
                        </label>
                        <input type="number"
                               className="block w-full px-4 py-2 mt-2 bg-white
                                   rounded-md dark:border-gray-600 focus:border-blue-400
                                   focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                                   focus:ring"
                               placeholder="Enter Registration Number"
                               value={registrationNumber}
                               onChange={(e) => setRegistrationNumber(e.target.value)}
                        />
                    </div>
                </div>
                
                <div className="mt-6">
                    <label>
                        Seating Capacity
                    </label>
                    <input type="number"
                           className="block w-full px-4 py-2 mt-2 bg-white
                                   rounded-md dark:border-gray-600 focus:border-blue-400
                                   focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                                   focus:ring"
                           placeholder="Enter Seating Capacity"
                           value={seatingCapacity}
                           onChange={(e) => setSeatingCapacity(e.target.value)}
                    />
                </div>
                
                <div className="mt-6">
                    <label>
                        Year of Registration
                    </label>
                    <input type="number"
                           className="block w-full px-4 py-2 mt-2 bg-white
                               rounded-md dark:border-gray-600 focus:border-blue-400
                               focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                               focus:ring"
                           placeholder="Enter Year of Registration"
                           value={yearOfRegistration}
                           onChange={(e) => setYearOfRegistration(e.target.value)}
                    />
                </div>
                
                <div className="mt-6">
                    <label>
                        Last FC
                    </label>
                    <input type="date"
                           className="block w-full px-4 py-2 mt-2 bg-white
                               rounded-md dark:border-gray-600 focus:border-blue-400
                               focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                               focus:ring"
                           placeholder="Enter Last FC Date"
                           value={lastFC}
                           onChange={(e) => setLastFC(e.target.value)}
                    />
                </div>
                
                <div className="mt-6">
                    <label>
                        Vehicle Condition
                    </label>
                    <input type="text"
                           className="block w-full px-4 py-2 mt-2 bg-white
                               rounded-md dark:border-gray-600 focus:border-blue-400
                               focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                               focus:ring"
                           placeholder="Enter Vehicle Condition"
                           value={vehicleCondition}
                           onChange={(e) => setVehicleCondition(e.target.value)}
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