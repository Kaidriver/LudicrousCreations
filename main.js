var config = {
    apiKey: "AIzaSyDfXow_zdmsA7OEVFEsglCVlBj7yQ5jNbw",
    authDomain: "ludicrous-creations.firebaseapp.com",
    databaseURL: "https://ludicrous-creations.firebaseio.com",
    projectId: "ludicrous-creations",
    storageBucket: "ludicrous-creations.appspot.com",
    messagingSenderId: "870965788782"
};
firebase.initializeApp(config);

var sugData = firebase.database().ref();

function pushMessage() {

    var name = $('#nameInput').val();
    var text = $('#messageInput').val();
    sugData.push({name: name, suggestion: text});
    $('#nameInput').val('');
    $('#messageInput').val('');

}










/*
$('#messageInput').val('');
*/
