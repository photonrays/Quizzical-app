import React from "react"
import Question from "./components/Question"
import { nanoid } from 'nanoid'

export default function App() {

    //create list of question data
    const [quizData, setQuizData] = React.useState([])

    const API_URL = "https://opentdb.com/api.php?amount=5&category=31&type=multiple"

    function shuffleArray(arr) {
        const shuffledArray = arr.sort((a, b) => 0.5 - Math.random());
        return shuffledArray;
    }

    React.useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setQuizData(data.results.map(quiz => {
                return {
                    question: quiz.question,
                    correct: quiz.correct_answer,
                    answer: shuffleArray([...quiz.incorrect_answers, quiz.correct_answer]),
                    id: nanoid(),
                    userChoice: ""
                }
            })));
    }, [])

    console.log(quizData)

    const questionElement = quizData.map(quiz => {
        return (
            <Question 
                question={quiz.question}
                answer={quiz.answer}
        />       
        )
    })

    return quizData.length > 0 ? ( 
        <div className="container">
            <div>
                {questionElement}
            </div>
            <button>Check answers</button>         
        </div> 
        ) : (
        <h2 className="container">Loading...</h2>
    )
}