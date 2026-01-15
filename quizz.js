const quizData = [
    {
        question: "which of the following language are involved in webDevelopment",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    
    {
        question: "node.js is a JavaScript runtime environment which is used to ?",
        a: "Build back-end & mobile apps",
        b: "front-end only",
        c: "Both back-end & front-end",
        d: "None",
        correct: "a",
    },
    {
        question: "react.js is a JavaScript library which is used to ?",
        a: "Building web applications",
        b: "create user interfaces",
        c: "Both a and b",
        d: "None",
        correct: "c",
    },
    
    {
        question: "Which technology is primarily responsible for the styling of web pages?",
        a: "JavaScript",
        b: "CSS",
        c: "HTML",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which programming language is mainly used for adding interactivity to websites?",
        a: "HTML",
        b: "JavaScript",
        c: "CSS",
        d: "Python",
        correct: "b",
    },
    {
        question: "What is the purpose of front-end web development?",
        a: "To manage databases ",
        b: "To handle server-side",
        c: "To create a visually appealing user interface",
        d: "To interact with web servers",
        correct: "c",
    },
    {
        question: "What is the purpose of the script tag in HTML?",
        a: "To include external CSS styles",
        b: "To include external JavaScript styles",
        c: "To define the page's structure",
        d: "none",
        correct: "b",
    },
    {
        question: "What is primary function of a web server in the context of web development?",
        a: "Executing JavaScript code",
        b: "Storing User Data",
        c: "Handling HTTP requests and serving web pages",
        d: "Rendering web pages",
        correct: "c",
    },
    {
        question: "Which of the following is not a back-end programming language commonly used in web development?",
        a: "PHP",
        b: "Ruby",
        c: "Java",
        d: "HTML",
        correct: "d",
    },
    {
        question: "Which type of the web development allows for both front-end and back-end development using a single language?",
        a: "Full-stack development",
        b: "Cross-platform development",
        c: "Multi-language development",
        d: "none",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})