import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  addDoc,
  getDocs,
  collection,
  serverTimestamp,
  updateDoc,
  query,
  where,
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

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

const leaderboardRef = collection(db, 'leaderboards');

for (let i = 0; i < 100; i++) {
  const data = {
    name: `NewName${i}`,
    score: `9999`,
    time: `27`,
    timestamp: `30d 6m 0hrs 5mins`
  };
  addDoc(leaderboardRef, data);
}});