import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  setDoc,
  doc,
  getDocs,
  collection,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

$(() => {

  $("#receipt").on('change', (event) => {
    const file = event.target.files[0];
    if (file && file.size > 3145728){
      alert("File is too big!");
      $("#receipt").val('');
    }
  })


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
        timestamp: serverTimestamp(),
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
      
        setupAlert(); // Call setupAlert() immediately
        showAlert();
    });
  }

  // Function to show the alert box
function showAlert() {
  document.getElementById('customAlert').classList.remove('hidden');
}

// Function to set up event listeners
function setupAlert() {
  const closeAlertBtn = document.getElementById('closeAlertBtn');
  const alertBox = document.getElementById('customAlert');

  if (closeAlertBtn) {
    console.log('Adding event listener to closeAlertBtn');
    closeAlertBtn.addEventListener('click', () => {
      console.log('Close button clicked');
      if (alertBox) {
        console.log('alertBox element found');
        alertBox.classList.add('hidden');
        console.log('Hidden class added to alertBox');
      } else {
        console.log('alertBox element not found');
      }
    });
  } else {
    console.log('closeAlertBtn element not found');
  }
}


// Ensure the event listeners are set up after the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', setupAlert);

// document.getElementById('saveButton').addEventListener('click', function() {
//     var image = document.getElementById('image');
//     var imageURL = image.src;

//     var link = document.createElement('a');
//     link.href = imageURL;
//     link.download = 'saved_image.jpg'; // The default filename
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// });

document.getElementById('shareButton').addEventListener('click', function() {
    var imageURL = document.getElementById('image').src;
    var facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imageURL)}&hashtag=%23jomrun`;

    window.open(facebookShareURL, '_blank', 'width=600,height=400');
});

document.getElementById('instagramButton').addEventListener('click', function() {
    var image = document.getElementById('image');
    var imageURL = image.src;

    var link = document.createElement('a');
    link.href = imageURL;
    link.download = 'saved_image.jpg'; // The default filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(function() {
        alert('To post on Instagram:\n1. Open Instagram and create a new post.\n2. Upload the saved image and use the hashtag #jomrun in your caption.');
        window.open('instagram://app', '_blank');
    }, 1000); // Delay to ensure the image is downloaded
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('saveButton').addEventListener('click', function() {
      var image = document.getElementById('image');
      var imageURL = image.src;

      var link = document.createElement('a');
      link.href = imageURL;
      link.download = 'saved_image.jpg'; // The default filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  });

  document.getElementById('shareButton').addEventListener('click', function() {
      var imageURL = document.getElementById('image').src;
      var facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imageURL)}&hashtag=%23jomrun`;

      window.open(facebookShareURL, '_blank', 'width=600,height=400');
  });

  document.getElementById('instagramButton').addEventListener('click', function() {
      var image = document.getElementById('image');
      var imageURL = image.src;

      var link = document.createElement('a');
      link.href = imageURL;
      link.download = 'saved_image.jpg'; // The default filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(function() {
          alert('To post on Instagram:\n1. Open Instagram and create a new post.\n2. Upload the saved image and use the hashtag #jomrun in your caption.');
          window.open('instagram://app', '_blank');
      }, 1000); // Delay to ensure the image is downloaded
  });
});


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
    const receiptName = formattedDate + "-" + receiptInput[0].files[0].name;
    const receipt = receiptInput[0].files[0];

    await addData(
      playerUUID,
      receiptName,
      name,
      score,
      time,
      phoneNumber,
      email
    );

    await uploadReceipt(receiptName, receipt);

    await resetForm();
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
