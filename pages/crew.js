import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import CrewForm from "@/components/CrewForm"
import AllCrewDisplay from "@/components/AllCrewDisplay"

export default function Crew() {
    return (
        <>
            <Navbar />
            <div className="p-7 bg-[url('../public/background.jpg')] bg-cover bg-no-repeat h-full">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col text-left">
                        <div className="text-2xl font-bold">Crew</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/4">
                        <CrewForm/>
                    </div>
                    <div className="w-3/4">
                        <AllCrewDisplay />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}