
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyD6hAxWiv8WCsL8S9HR9HCM7sjsSdXcs-I",
  authDomain: "test2-3e043.firebaseapp.com",
  databaseURL: "https://test2-3e043-default-rtdb.firebaseio.com",
  projectId: "test2-3e043",
  storageBucket: "test2-3e043.appspot.com",
  messagingSenderId: "634878779297",
  appId: "1:634878779297:web:8c54617cfd5e3103ee75e0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


//get roomName from input and put it in fire base.
//  put the same roomName in local  storage.
// navigate to another page
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}


//first line get the data from database
//document.getEle("output")-->clears previously added room names to avoid duplication
function getData() {  firebase.database().ref("/").on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;

       //from this kids need to type
       //display the room name in console
       //in a variable add the following-->putting a common class; creating id with the roomName; a common onclick function; display the roomName with # symbol.-->writing html code, if you click roomName has to navigate to that room.
      //  diplay that variable in the row.
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

//running the function automativlly once the page is loaded; the function displays all roomnames
getData();

//onclicking the the room name -->store the name to the key ; go to next page
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

//onclicking logout remove unser name and roomName; go to first page.
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
