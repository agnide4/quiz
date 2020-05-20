//$( document ).ready(showQuiz);


//Variables declarations
let sbutton = document.getElementById("start");
let quiz = document.getElementById("qContainer");
let ask = document.getElementsByClassName("question");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");
let answer = document.getElementsByClassName("answer");
let name = "";

//Questions
let questions = [
    {
        ask: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        choiceA: "The User's machine running a Web browser",
        choiceB: "The Web server",
        choiceC: "A central machine deep within Netscape's corporate offices",
        choiceD: "None of the above",
        isCorrect: "None of the above"
    },
    {
        ask: "What is the correct form to link HTML to JS file?",
        choiceA: "<script href = “formValidation.js”>",
        choiceB: "<script source = “formValidation.js”>",
        choiceC: "<script name = “formValidation.js”>",
        choiceD: "<script src = “formValidation.js”>",
        isCorrect: "<script src = “formValidation.js”>"
    },
    {
        ask:"If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?",
        choiceA: "'New Text?' ",
        choiceB: " para1.value ='New Text;' ",
        choiceC:" para1.firstChild.nodeValue= 'New Text'; ",
        choiceD: "para1.nodeValue='New Text';",
        isCorrect: "para1.nodeValue='New Text';"
    },
    {
        ask: "JavaScript is interpreted by:",
        choiceA: "Client",
        choiceB: "Server",
        choiceC: "Object",
        choiceD: "None of the Above",
        isCorrect: "client"
    }

]

//Function to show questions in HTML
let lastQindex = questions.length - 1;
let currQindex = 0;


function showQuiz(){
    
    let q = questions[currQindex];
    ask.innerHTML = "<p>" + q.ask + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    
}

function checkAnswer(){
    let score = 0;
    if (answer === q.isCorrect){
        document.getElementsByClassName("result").innerHTML = "You are correct";
        score += 1;
        document.getElementById("score").innerHTML = "Total point is:" + score;
    } else {
        document.getElementsByClassName("result").innerHTML = "Need to study more";
        //add timer her
    }
    
}










function getName(){
    let player = prompt("Please enter your name");
    return player;        
}







    




//console.log(questions);
//console.log(answers.choice1.A[0]);

