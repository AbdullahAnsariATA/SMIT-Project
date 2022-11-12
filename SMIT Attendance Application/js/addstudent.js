import { collection,addDoc,Timestamp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { db } from "./firebaseconfig.js";

//    Inputs
let studentNameInput = document.querySelector("#studentName")
let fatherNameInput = document.querySelector("#fatherName")
let rollNumberInput = document.querySelector("#rollNumber")
let contactNumberInput = document.querySelector("#contactNumber")
let cnicNumberInput = document.querySelector("#cnicNumber")
let courseNameInput = document.querySelector("#courseName")
let classNumberInput = document.querySelector("#classNumber")
//

let submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener('click',submitForm)



async function submitForm() {
    console.log('Students Submited',);
    let collectionRef = collection(db, "students");
    await addDoc(collectionRef, {
        StudentName: studentNameInput.value,
        fatherName: fatherNameInput.value,
        rollNo: rollNumberInput.value,
        contactNo: contactNumberInput.value,
        cnicNo: cnicNumberInput.value,
        courseName: courseNameInput.value,
        classNumber: classNumberInput.value,
        registerDate: Timestamp.fromDate(new Date())
    })
studentNameInput.value = "";
fatherNameInput.value = "";
rollNumberInput.value = "";
contactNumberInput.value = "";
cnicNumberInput.value = "";
courseNameInput.value = "";
classNumberInput.value = "";
}











window.submitForm = submitForm