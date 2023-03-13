import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import RouteForm from "@/components/RouteForm"
import AllRouteDisplay from "@/components/AllRouteDisplay"

export default function Route() {
    return (
        <>
            <Navbar />
            <div className="p-7 bg-[url('../public/background.jpg')] bg-cover bg-no-repeat h-full">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col text-left">
                        <div className="text-2xl font-bold">Route</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/4">
                        <RouteForm/>
                    </div>
                    <div className="w-3/4">
                        <AllRouteDisplay />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}