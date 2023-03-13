export default function Fleet() {
    return (<>
        <section className="p-7">
            <h2 className="text-lg font-semibold capitalize">Add Fleet</h2>
            <form>
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