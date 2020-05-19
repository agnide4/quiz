//Variables declarations
let sbutton = document.getElementById("start");
let quiz = document.getElementById("qContainer");




function getName(){
    let player = prompt("Please enter your name");
    return player;        
}

function showQuiz(){
    quiz.innerHTML = questions.q1;



}

let questions = {
    q1: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    q2: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    q3: " If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph? ",
    q4: "JavaScript is interpreted by: "
};

let answers = {
    choice1: {
        A: ["The User's machine running a Web browser", 0],
        B: ["The Web server", 1],
        C: ["A central machine deep within Netscape's corporate offices", 0 ],
        D: ["None of the above", 0] 
    },
    choice2: {
        A: ["<script href = “formValidation.js”>", 0],
        B: ["<script source = “formValidation.js”>", 1],
        C: ["<script name = “formValidation.js”>", 0],
        D: ["<script src = “formValidation.js”>", 0]
    },
    choice3: {
        A: [" 'New Text?' ", 0],
        B: [" para1.value ='New Text;' ", 0],
        C: [" para1.firstChild.nodeValue= 'New Text'; ", 0],
        D: ["para1.nodeValue='New Text';"]
    },
    choice4: {
        A: ["Client", 0],
        B: ["Server", 0],
        C: ["Object", 0],
        D: ["None of the Above", 1]
    }

};
    





console.log(questions);
console.log(answers.choice1.A[0]);

