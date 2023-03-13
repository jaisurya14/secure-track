import { GoogleMap, useLoadScript } from "@react-google-maps/api";

export const MapContainer = () => {
    
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })
    
    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

function Map() {
    return (
        <div className={"p-7 flex items-center justify-center"}>
            <GoogleMap zoom={10} center={{lat: 13.082680, lng: 80.270721}} mapContainerClassName={"map-container"}>
    
            </GoogleMap>
        </div>
    )
}