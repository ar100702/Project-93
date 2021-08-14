// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB-3k7u-NQrIl5WCJEnbH2rx0Nowh8UTNs",
  authDomain: "kwitter-956a9.firebaseapp.com",
  projectId: "kwitter-956a9",
  storageBucket: "kwitter-956a9.appspot.com",
  messagingSenderId: "257839023050",
  appId: "1:257839023050:web:5533b7e0b54d8b4e584533"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code

  //End code
  });});}
getData();
