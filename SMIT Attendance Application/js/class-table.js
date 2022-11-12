import { collection,onSnapshot,doc,deleteDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { db } from "./firebaseconfig.js";

let tablebody = document.querySelector("#table-body");




async function fetchClassTable() {
    let collectionRef = collection(db, 'class');
    // const q = query(collectionRef, where("uid", "==", auth.currentUser.uid));
    // unsub = 
    await onSnapshot(collectionRef, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                console.log("Class Table Fetched: ", change.doc.data());
                tablebody.innerHTML = tablebody.innerHTML + `<tr>
                <td>${change.doc.data().classTiming}</td>
                <td>${change.doc.data().classSchedule}</td>
                <td>${change.doc.data().teacherName}</td>
                <td>${change.doc.data().sectionName}</td>
                <td>${change.doc.data().courseName}</td>
                <td>${change.doc.data().batchNo}</td>
                <td>${change.doc.data().classNumber}</td>
                <td><button class="fa-sharp fa-solid fa-trash"></button></td>
                <td><i onclick="deleteTable('${change.doc.id}') id="${change.doc.id}" class="fa-solid fa-pen-to-square"></i></td>
              </tr>`
                
            }
            if (change.type === "modified") {

            }
            if (change.type === "removed") {

            }
        })
    })
};

fetchClassTable()

// let deleteBtn = document.querySelector("#delete-table")
// deleteBtn.addEventListener("click",deleteTable)

// function deleteTable(id) {
// console.log("Delete",id)
    // paraRef = todoEl.srcElement.parentNode.id
    // await deleteDoc(doc(dataBase, "RealtimeTodos", paraRef));
    // console.log("Todo deleted")
// }

const deleteTable = async (id) => {
    await deleteDoc(doc(db, "class", id));
  };

window.deleteTable = deleteTable