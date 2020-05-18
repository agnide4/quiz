//Variables declarations
let sbutton = document.getElementById("start");
let quiz = document.getElementById("qContainer");
let player = document.getElementById("pName");

getName();

function getName(){
    if (confirm("Would you like to test your knowledge in JS? ")){
        alert("Please enter your name");
        

    } else {
        alert("Sorry to see you leave");
        window.close();
    };
}
    

