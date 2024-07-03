import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  setDoc,
  addDoc,
  doc,
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
  const overlay = $("#overlay");

  function showOverlay() {
    overlay.css("display", "block");
  }

  function hideOverlay() {
    overlay.css("display", "none");
  }

  function generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  function checkAndSetUUID() {
    let uuid = localStorage.getItem("GDJS-internal-player-uuid");
    if (!uuid) {
      uuid = generateUUID();
      localStorage.setItem("GDJS-internal-player-uuid", uuid);
    } else {
      console.log("UUID already exists: ", uuid);
    }
  }

  checkAndSetUUID();

  const PlayerUUID = localStorage.getItem("GDJS-internal-player-uuid");
  $("#player-uuid").val(PlayerUUID);

  async function addData(
    playerUUID,
    receiptName,
    timestamp,
    name,
    score,
    time,
    phoneNumber,
    email
  ) {
    showOverlay();
    try {
      const docRef = await setDoc(doc(db, "form-submission", playerUUID), {
        eligible: false,
        receipt: receiptName,
        timestamp: timestamp,
        name: name,
        score: score,
        time: time,
        phoneNumber: phoneNumber,
        email: email,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      hideOverlay();
    }
  }

  async function uploadReceipt(receiptName, receipt) {
    const storageRef = await ref(storage, receiptName);
    const storageImagesRef = await ref(storage, `images/${receiptName}`);

    console.log(storageRef.name);
    console.log(storageImagesRef.name);

    await uploadBytes(storageRef, receipt).then((snapshot) => {
      alert("Uploaded the receipt!");
    });
  }
  async function resetForm() {
    $("form")[0].reset();
    localStorage.clear();
  }

  $("form").on("submit", async (e) => {
    e.preventDefault();

    let playerUUID = $("#player-uuid").val();
    let name = $("#name").val();
    let score = localStorage.getItem("score");
    let time = localStorage.getItem("time");
    let phoneNumber = $("#phoneNumber").val();
    let email = $("#email").val();
    let receiptInput = $("#receipt");
    const date = new Date();
    const formattedDate = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
    const timestamp = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const receiptName = formattedDate + "-" + receiptInput[0].files[0].name;
    const receipt = receiptInput[0].files[0];

    await addData(
      playerUUID,
      receiptName,
      timestamp,
      name,
      score,
      time,
      phoneNumber,
      email
    );

    await uploadReceipt(receiptName, receipt);

    await resetForm();
  });

  function convertTimeFormat(timeString) {
    const parts = timeString.split(' ');
    if (parts.length < 4) {
      throw new Error(`Invalid time string format: ${timeString}`);
    }
  
    const day = parseInt(parts[0].replace('d', ''));
    const month = parseInt(parts[1].replace('m', '')) - 1; // months are 0-based in JS
    const hours = parseInt(parts[2].replace('hrs', ''));
    const minutes = parseInt(parts[3].replace('mins', ''));
  
    const year = new Date().getFullYear();
  
    const date = new Date(year, month, day, hours, minutes, 0, 0);
    return date.toISOString();
  }

  const getUsers = async (db) => {
    const userCol = collection(db, "leaderboards");
    const userSnapshot = await getDocs(userCol, {
      orderBy: "score", // order by score in descending order
      limit: 50 // limit to 50 documents
    });
    const userList = userSnapshot.docs.map((doc) => {
      const timestamp = doc.data().timestamp;
      const isoString = convertTimeFormat(timestamp);
      return {...doc.data(), timestamp: isoString };
    });
    
    // // Filter results to show only records from a certain date
    // const filteredList = userList.filter((user) => {
    //   const userDate = new Date(user.timestamp);
    //   const cutoffDate = new Date('2024-06-24T00:00:00.000Z');
    //   console.log(`userDate: ${userDate}, cutoffDate: ${cutoffDate}, result: ${userDate <= cutoffDate}`);
    //   return userDate <= cutoffDate;
    // });
    
   // Filter results to show only records within a certain date range
   const startDate = new Date('2024-06-29T00:00:00.000Z');
   const endDate = new Date('2024-07-01T00:00:00.000Z');
   
   // Set hours and minutes to 00:00:00
   startDate.setHours(0, 0, 0, 0);
   endDate.setHours(23, 59, 59, 999); // set end of day
   
   const filteredList = userList.filter((user) => {
     const userDate = new Date(user.timestamp);
     console.log(`userDate: ${userDate}, startDate: ${startDate}, endDate: ${endDate}, result: ${userDate >= startDate && userDate <= endDate}`);
     return userDate >= startDate && userDate <= endDate;
   });
  
   
    return filteredList;
  };

  const users_data = getUsers(db);
  users_data.then((users) => {
    const usrObj = {
      data: [],
    };
    usrObj.data = users.slice(0, 100); // limit the array to the first 50 elements

    const usrArr = [];

    usrObj.data.forEach((user) => {
      usrArr.push([user.name, user.score, user.time, user.timestamp]);
    });

    new DataTable("#table", {
      data: usrArr,
    });

    $(document).ready(function() {
      const table = $('#table').DataTable({
        data: usrArr,
        columns: [
          { title: "Name" },
          { title: "Score" },
          { title: "Time" },
          { title: "Created" }
        ],
        order: [[1, 'desc']] // sort by score in descending order
      }); 
    });
  });
});
