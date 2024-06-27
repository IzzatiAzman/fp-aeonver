import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  addDoc,
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

$(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyBE9tWytUvjpjQ2k0CsUyIhVXC0Vpr4HxI",
    authDomain: "leaderboard-48dfb.firebaseapp.com",
    projectId: "leaderboard-48dfb",
    storageBucket: "leaderboard-48dfb.appspot.com",
    messagingSenderId: "248440155827",
    appId: "1:248440155827:web:c7ae7daff0da23b4bc4ac6",
    measurementId: "G-0LCDSJMXKE",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);

  async function addData(name, phoneNumber, email) {
    try {
      const docRef = await addDoc(collection(db, "form-submission"), {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  async function uploadReceipt(receiptName, receipt){
    const storageRef = await ref(storage, receiptName);
    const storageImagesRef = await ref(storage, `images/${receiptName}`);

    console.log(storageRef.name);
    console.log(storageImagesRef.name);


    await uploadBytes(storageRef, receipt).then((snapshot) => {
      alert("Uploaded the receipt!");
    });
  }

  $("form").on("submit", async(e) => {
    e.preventDefault();

    const name = $("#name").val();
    const phoneNumber = $("#phoneNumber").val();
    const email = $("#email").val();
    const receiptInput = $("#receipt");
    const date = new Date();
    const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
    const receiptName = formattedDate + "-" + receiptInput[0].files[0].name;
    const receipt = receiptInput[0].files[0];

    await addData(name, phoneNumber, email);

    await uploadReceipt(receiptName, receipt);
  });

  const getUsers = async (db) => {
    const userCol = collection(db, "leaderboards");
    const userSnapshot = await getDocs(userCol);
    const userList = userSnapshot.docs.map((doc) => doc.data());
    return userList;
  };

  const users_data = getUsers(db);
  users_data.then((users) => {
    const usrObj = {
      data: [],
    };
    usrObj.data = users;

    const usrArr = [];

    usrObj.data.forEach((user) => {
      usrArr.push([user.name, user.score, user.time]);
    });
    new DataTable("#table", {
      data: usrArr,
    });
  });
});
