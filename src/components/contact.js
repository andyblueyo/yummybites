  // Initialize Firebase
var config = {
    apiKey: "AIzaSyDDtngUhP1hFklPUvLNmdcWTF-3D0wbK7s",
    authDomain: "yummybites-1481101599031.firebaseapp.com",
    databaseURL: "https://yummybites-1481101599031.firebaseio.com",
    storageBucket: "yummybites-1481101599031.appspot.com",
    messagingSenderId: "186131591848"
    };


firebase.initializeApp(config);

var messageForm = document.querySelector(".new-message-form");
var firstName = document.querySelector(".firstName");
var lastName = document.querySelector(".lastName");
var email = document.querySelector(".email");
var messageInput = document.querySelector(".new-messege");
var storage = firebase.storage();
var storageRef = storage.ref();
var messageRef = firebase.database().ref("general");

var currentUser;


firebase.auth().signInAnonymously().catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    currentUser = user;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
  } else {
  }
});

messageForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    var message = {
        message: messageInput.value.trim(),
        createdBy: {
            Name: firstName.value.trim() + " " + lastName.value.trim(),
            email: email.value.trim()
        }
    };
    messageRef.push(message);
    alert("Thank you! your message has been sent");
    messageInput.value = "";
    firstName.value = "";
    lastName.value = "";
    email.value = "";

    return false;
});