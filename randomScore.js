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
  
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
  
    console.log("Initializing App...");
  
    const updateScores = async (db) => {
        console.log("Updating Scores...");
        const userCol = collection(db, "leaderboards");
        const userSnapshot = await getDocs(userCol);
        userSnapshot.docs.forEach((doc) => {
          const newScore = Math.floor(Math.random() * (9999 - 10 + 1)) + 10;
          console.log("New Score:", newScore);
          try {
            await updateDoc(doc.ref, { score: newScore });
            console.log("Score updated successfully!");
          } catch (error) {
            console.error("Error updating score:", error);
          }
        });
      };
  
    updateScores(db);
  });
