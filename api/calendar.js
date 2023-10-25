import { db } from "../firebase";
import {
    collection,
    addDoc,
    updateDoc,
    doc,
    deleteDoc,
} from "firebase/firestore";
const addCalendar = async ({ userId, title, date, description, status }) => {
    try {
        await addDoc(collection(db, "Calendar"), {
            user: userId,
            title: title,
            date: date,
            description: description,
            status: status,
            createdAt: new Date().getTime(),
        });
    } catch (err) { }
};
const toggleCalendarStatus = async ({ docId, status }) => {
    try {
        const calendarRef = doc(db, "Calendar", docId);
        await updateDoc(calendarRef, {
            status,
        });
    } catch (err) {
        console.log(err);
    }
};
const deleteCalendar = async (docId) => {
    try {
        const calendarRef = doc(db, "Calendar", docId);
        await deleteDoc(calendarRef);
    } catch (err) {
        console.log(err);
    }
};
export { addCalendar, toggleCalendarStatus, deleteCalendar };