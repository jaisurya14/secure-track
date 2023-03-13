export default function AllRouteDisplay() {
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
                                        <th className="py-3 px-6 text-center">Route Number</th>
                                        <th className="py-3 px-6 text-center">Route Name</th>
                                        <th className="py-3 px-6 text-center">Pickup and Drop Points</th>
                                        <th className="py-3 px-6 text-center">Pickup and Drop Point Name</th>
                                        <th className="py-3 px-6 text-center">Start Location</th>
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