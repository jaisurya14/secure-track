import { db } from "@/firebase/firebase";

import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";


const crewCollectionRef = collection(db, "crews");

class CrewDataService {
    addCrew = async (crew) => {
        try {
            await addDoc(crewCollectionRef, crew);
        } catch (error) {
            console.log(error);
        }
    }
    
    updateCrew = async (id, updatedCrew) => {
        try {
            const crewDoc = doc(db, "crews", id);
            await updateDoc(crewDoc, updatedCrew);
        } catch (error) {
            console.log(error);
        }
    }
    
    deleteCrew = async (id) => {
        try {
            const crewDoc = doc(db, "crews", id);
            await deleteDoc(crewDoc);
        } catch (error) {
            console.log(error);
        }
    }
    
    getAllCrews = async () => {
        try {
            return getDocs(crewCollectionRef);
        } catch (error) {
            console.log(error);
        }
    }
    
    getCrew = async (id) => {
        try {
            const crewDoc = doc(db, "crews", id);
            return getDoc(crewDoc);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new CrewDataService();