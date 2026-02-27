{\rtf1\ansi\ansicpg936\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let currentQuestionIndex = 0;\
const questions = [\
  \{\
    question: "1 + 1 = ?",\
    options: ["1", "2", "3"],\
    correctAnswer: "2",\
    explanation: "1 + 1 \uc0\u31561 \u20110  2"\
  \},\
  \{\
    question: "2 + 2 = ?",\
    options: ["2", "3", "4"],\
    correctAnswer: "4",\
    explanation: "2 + 2 \uc0\u31561 \u20110  4"\
  \}\
];\
\
function loadQuestion() \{\
  const questionData = questions[currentQuestionIndex];\
  const questionContainer = document.getElementById('question-container');\
  questionContainer.innerHTML = `\
    <p>$\{questionData.question\}</p>\
    $\{questionData.options.map(option => `<button onclick="checkAnswer('$\{option\}')">$\{option\}</button>`).join('')\}\
  `;\
\}\
\
function checkAnswer(selectedOption) \{\
  const questionData = questions[currentQuestionIndex];\
  if (selectedOption === questionData.correctAnswer) \{\
    alert('\uc0\u27491 \u30830 \u65281 ' + questionData.explanation);\
  \} else \{\
    alert('\uc0\u38169 \u35823 \u65281 ' + questionData.explanation);\
  \}\
\}\
\
function nextQuestion() \{\
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;\
  loadQuestion();\
\}\
\
loadQuestion();  // \uc0\u21021 \u22987 \u21152 \u36733 }