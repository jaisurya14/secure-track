import { db } from "@/firebase/firebase";

import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";


const studentCollectionRef = collection(db, "students");

class StudentDataService {
    addStudent = async (student) => {
        try {
            await addDoc(studentCollectionRef, student);
        } catch (error) {
            console.log(error);
        }
    }
    
    updateStudent = async (id, updatedStudent) => {
        try {
            const studentDoc = doc(db, "students", id);
            await updateDoc(studentDoc, updatedStudent);
        } catch (error) {
            console.log(error);
        }
    }
    
    deleteStudent = async (id) => {
        try {
            const studentDoc = doc(db, "students", id);
            await deleteDoc(studentDoc);
        } catch (error) {
            console.log(error);
        }
    }
    
    getAllStudents = async () => {
        try {
            return getDocs(studentCollectionRef);
        } catch (error) {
            console.log(error);
        }
    }
    
    getStudent = async (id) => {
        try {
            const studentDoc = doc(db, "students", id);
            return getDoc(studentDoc);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new StudentDataService();