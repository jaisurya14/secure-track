import { db } from "@/firebase/firebase";

import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";


const fleetCollectionRef = collection(db, "fleets");

class FleetDataService {
    addFleet = async (fleet) => {
        try {
            await addDoc(fleetCollectionRef, fleet);
        } catch (error) {
            console.log(error);
        }
    }
    
    updateFleet = async (id, updatedFleet) => {
        try {
            const fleetDoc = doc(db, "fleets", id);
            await updateDoc(fleetDoc, updatedFleet);
        } catch (error) {
            console.log(error);
        }
    }
    
    deleteFleet = async (id) => {
        try {
            const fleetDoc = doc(db, "fleets", id);
            await deleteDoc(fleetDoc);
        } catch (error) {
            console.log(error);
        }
    }
    
    getAllFleets = async () => {
        try {
            return getDocs(fleetCollectionRef);
        } catch (error) {
            console.log(error);
        }
    }
    
    getFleet = async (id) => {
        try {
            const fleetDoc = doc(db, "fleets", id);
            return getDoc(fleetDoc);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new FleetDataService();