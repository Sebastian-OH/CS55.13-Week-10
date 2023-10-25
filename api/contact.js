import { db } from "../firebase";
import {
    collection,
    addDoc,
    updateDoc,
    doc,
    deleteDoc,
} from "firebase/firestore";
const addContact = async ({ userId, firstName, lastName, phone, email, status }) => {
    try {
        await addDoc(collection(db, "Contact"), {
            user: userId,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            status: status,
            createdAt: new Date().getTime(),
        });
    } catch (err) { }
};
const toggleContactStatus = async ({ docId, status }) => {
    try {
        const contactRef = doc(db, "Contact", docId);
        await updateDoc(contactRef, {
            status,
        });
    } catch (err) {
        console.log(err);
    }
};
const deleteContact = async (docId) => {
    try {
        const contactRef = doc(db, "Contact", docId);
        await deleteDoc(contactRef);
    } catch (err) {
        console.log(err);
    }
};
export { addContact, toggleContactStatus, deleteContact };



