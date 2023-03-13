export default function AllFleetDisplay() {
    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="min-w-screen flex items-center justify-center font-sans overflow-hidden">
                        <div className="w-full p-4">
                            <button className="items-end rounded-lg bg-gray-400 p-2">
                                Refresh
                            </button>
                            <div className="bg-white shadow-md rounded my-6">
                                <table className="table-auto">
                                    <thead>
                                    <tr className="uppercase text-sm leading-normal w-fit">
                                        <th className="py-3 px-6 text-center">Fleet ID</th>
                                        <th className="py-3 px-6 text-center">Vehicle Type</th>
                                        <th className="py-3 px-6 text-center">Registration Number</th>
                                        <th className="py-3 px-6 text-center">Seating Capacity</th>
                                        <th className="py-3 px-6 text-center">Year of Registration</th>
                                        <th className="py-3 px-6 text-center">Last FC</th>
                                        <th className="py-3 px-6 text-center">Vehicle Condition</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 px-6 text-center whitespace-nowrap">
                                            <div className="flex items-center">
                                                <span className="font-medium">1</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <span>Driver Name</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <span>Contact Number</span>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <span>Address</span>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <span>Aadhar Number</span>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <span>Lisence Card Number</span>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <span>Route Number</span>
                                        </td>
                                    </tr>
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