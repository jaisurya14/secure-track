import { db } from "@/utils/firebase";

import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";


const routeCollectionRef = collection(db, "routes");

class RouteDataService {
    addRoute = async (route) => {
        try {
            await addDoc(routeCollectionRef, route);
        } catch (error) {
            console.log(error);
        }
    }
    
    updateRoute = async (id, updatedRoute) => {
        try {
            const routeDoc = doc(db, "routes", id);
            await updateDoc(routeDoc, updatedRoute);
        } catch (error) {
            console.log(error);
        }
    }
    
    deleteRoute = async (id) => {
        try {
            const routeDoc = doc(db, "routes", id);
            await deleteDoc(routeDoc);
        } catch (error) {
            console.log(error);
        }
    }
    
    getAllRoutes = async () => {
        try {
            return getDocs(routeCollectionRef);
        } catch (error) {
            console.log(error);
        }
    }
    
    getRoute = async (id) => {
        try {
            const routeDoc = doc(db, "routes", id);
            return getDoc(routeDoc);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new RouteDataService();