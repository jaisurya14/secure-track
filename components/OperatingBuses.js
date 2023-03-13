export const OperatingBuses = () => {
    return (
        <div className="grid grid-cols-2 text-center">
            <div className="bg-[#4aea5a] m-3 p-5 rounded-lg flex flex-col drop-shadow-2xl">
                <h2 className="text-4xl text-black font-bold">Bus Operating</h2>
                <h1 className="text-6xl mt-5 text-black font-bold">45</h1>
            </div>
            <div className="bg-[#ea9595] m-3 p-5 rounded-lg flex flex-col drop-shadow-2xl">
                <h2 className="text-4xl text-black font-bold">Bus Not Operating</h2>
                <h1 className="text-6xl mt-5 text-black font-bold">5</h1>
            </div>
        </div>
    )
}