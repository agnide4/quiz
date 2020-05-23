//$( document ).ready(showQuiz);


//Variables declarations
let sbutton = document.getElementById("start");
let quiz = document.getElementById("qContainer");
let ask = document.getElementById("question");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");
let answer = document.getElementsByClassName("answer");
let name = "";


//Questions
let questions = [

    {
        ask: "What is the meaning of JS",
        choiceA: "John Smith",
        choiceB: "Jason Staton",
        choiceC: "Julius Ceasar",
        choiceD: "Javascript",
        isCorrect: "Javascript"
    },  
    {
        ask: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        choiceA: "The User's machine running a Web browser",
        choiceB: "The Web server",
        choiceC: "A central machine deep within Netscape's corporate offices",
        choiceD: "None of the above",
        isCorrect: "None of the above"
    },
    {
        ask: "JavaScript is interpreted by:",
        choiceA: "Client",
        choiceB: "Server",
        choiceC: "Object",
        choiceD: "None of the Above",
        isCorrect: "Client"
    },

        
    {
        ask:"If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?",
        choiceA: "New Text?",
        choiceB: "para1.value = New Text;",
        choiceC: "para1.firstChild.nodeValue= New Text; ",
        choiceD: "para1.nodeValue=New Text;",
        isCorrect: "para1.nodeValue=New Text;"
    },
    

    
]

$(sbutton).on('click', showQuiz);


//Function to show questions in HTML
let lastQindex = questions.length - 1;
console.log(lastQindex);
let currQindex = 0;
let ans = "";



function showQuiz(){
    let q = questions[currQindex];    
    
    ask.innerHTML = "<p>" + q.ask + "</p>";
    choiceA.innerHTML = "<button>" + q.choiceA + "</button>";
    choiceA.addEventListener('click', function(){
        ans = q.choiceA;
        checkAnswer(ans);
    });
    choiceB.innerHTML = "<button>" + q.choiceB + "</button>";
    choiceB.addEventListener('click', function(){
        ans = q.choiceB;
        checkAnswer(ans);
    });
    choiceC.innerHTML = "<button>" + q.choiceC + "</button>";
    choiceC.addEventListener('click', function(){
        ans = q.choiceC;
        checkAnswer(ans);
    });
    choiceD.innerHTML = "<button>" + q.choiceD + "</button>";  
    choiceD.addEventListener('click', function(){
        ans = q.choiceD;
        checkAnswer(ans);
    });
    
    
}


let score = 0;
function checkAnswer(){
        console.log(currQindex);
        console.log(ans);
        if (ans == questions[currQindex].isCorrect){
        document.getElementById("result").innerHTML = "<h3>You are correct </h3>";
        score++;
        document.getElementById("score").innerHTML = "<h6>You current score is:</h4>" + score;
    } else {
        document.getElementById("result").innerHTML = "<h3>Need to study more</h3>";
        document.getElementById("score").innerHTML = "<h6>You current score is:</h4>" + score;
        //add timer her
    }
    
    currQindex++;
    quizFlow();

}

function quizFlow(){
    if (currQindex<=lastQindex){
        
        showQuiz();
    }else {
        document.getElementById("score").innerHTML = "Your total score is" + score;
    }
}

//showQuiz();









//function getName(){
   // let player = prompt("Please enter your name");
   // return player;        
//}//







    




//console.log(questions);
//console.log(answers.choice1.A[0]);

