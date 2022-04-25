
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDzCk-23z-mvxBCiK2NzHbr5zFv4DPNp30",
      authDomain: "kwitter-82adb.firebaseapp.com",
      databaseURL: "https://kwitter-82adb-default-rtdb.firebaseio.com",
      projectId: "kwitter-82adb",
      storageBucket: "kwitter-82adb.appspot.com",
      messagingSenderId: "77508007978",
      appId: "1:77508007978:web:20a07089f85f3d505a0b53"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
function addRoom(){
     room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
           purpose:"add room name"
     });
     localStorage.setItem("room_name",room_name);
     window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_names"+Room_names);
      "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
 function logout(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location.replace("kwitter.html");
 }