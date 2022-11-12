import { collection,addDoc,Timestamp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { db } from "./firebaseconfig.js";

//    Inputs
let classTimingInput = document.querySelector("#classTiming")
let classScheduleInput = document.querySelector("#classSchedule")
let teacherNameInput = document.querySelector("#teacherName")
let sectionNameInput = document.querySelector("#sectionName")
let courseNameInput = document.querySelector("#courseName")
let batchNoInput = document.querySelector("#batchNo")
let classNumberInput = document.querySelector("#classNumber")
//

let submitBtn = document.querySelector("submit-btn");



async function submitForm() {
    console.log('Class Submited',);
    let collectionRef = collection(db, "class");
    await addDoc(collectionRef, {
        classTiming: classTimingInput.value,
        classSchedule: classScheduleInput.value,
        teacherName: teacherNameInput.value,
        sectionName: sectionNameInput.value,
        courseName: courseNameInput.value,
        batchNo: batchNoInput.value,
        classNumber: classNumberInput.value,
        registerDate: Timestamp.fromDate(new Date())
    })
    classTimingInput.value = "";
    classScheduleInput.value = "";
    teacherNameInput.value = "";
    sectionNameInput.value = "";
    courseNameInput.value = "";
    batchNoInput.value = "";
    classNumberInput.value = "";
}











window.submitForm = submitForm