export default function CrewForm() {
    return (<>
        <section className="p-7">
            <h2 className="text-lg font-semibold capitalize">Add Crew</h2>
            <form>
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