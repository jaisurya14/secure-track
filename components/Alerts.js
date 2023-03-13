export const Alerts = () => {
    return (
        <>
            <div className="grid grid-cols-3 mt-3">
                <div className="bg-[#19d52d] p-3 m-3 text-center rounded-lg drop-shadow-2xl h-26">
                    <h2 className="text-4xl font-bold ">30</h2>
                    <h1 className="text-xl font-semibold text-black">
                        Green
                    </h1>
                </div>
                <div className="bg-[#ffb900] p-3 m-3 text-center rounded-lg drop-shadow-2xl h-26">
                    <h2 className="text-4xl font-bold ">7</h2>
                    <h1 className="text-xl font-semibold text-black">
                        Orange
                    </h1>
                </div>
                <div className="bg-[#FF0000] p-3 m-3 text-center rounded-lg drop-shadow-2xl h-26">
                    <h2 className="text-4xl font-bold ">3</h2>
                    <h1 className="text-xl font-semibold text-black">
                        Red
                    </h1>
                </div>
            </div>
        </>
    )
}