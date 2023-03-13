import { Alerts } from "./Alerts";
import { OperatingBuses } from "./OperatingBuses";
import { MapContainer } from "./MapContainer";
import Footer from "@/components/Footer";

export default function Dashboard () {
    return (<>
        <main>
            <div className="h-full">
                <OperatingBuses />
                <Alerts />
                <MapContainer />
            </div>
        </main>
    </>)
}