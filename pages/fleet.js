import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import FleetForm from "@/components/FleetForm"
import AllFleetDisplay from "@/components/AllFleetDisplay"

export default function Fleet() {
    return (
        <>
            <Navbar />
            <div className="p-7 bg-[url('../public/background.jpg')] bg-cover bg-no-repeat h-full">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col text-left">
                        <div className="text-2xl font-bold">Fleet</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/4">
                        <FleetForm/>
                    </div>
                    <div className="w-3/4">
                        <AllFleetDisplay />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}