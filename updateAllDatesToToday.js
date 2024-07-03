import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  addDoc,
  getDocs,
  collection,
  serverTimestamp,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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

  const updateTimestamps = async (db) => {
    const userCol = collection(db, "leaderboards");
    const userSnapshot = await getDocs(userCol);
    userSnapshot.docs.forEach((doc) => {
      const newTimestamp = '26d 6m 0hrs 5mins';
      const isoString = convertTimeFormat(newTimestamp);
      updateDoc(doc.ref, { timestamp: isoString });
    });
  };
  
  updateTimestamps(db);
});

