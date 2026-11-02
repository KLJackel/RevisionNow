import React from 'react'
import { useState } from 'react'
import {ScienceData} from '../assets/ScienceData'
import '../index.css'

function ScienceQuestions() {
const [questionsAndAnswers, setQuestionsAndAnswers] = useState(ScienceData)
const [currentQuestion, setCurrentQuestion] = useState(null)
const [score, setScore] = useState(0)
const [hidden, setHidden] = useState(true)
const [wrongAnswer, setWrongAnswer] = useState(false)
const [answerOptions, setAnswerOptions] = useState(true)

function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questionsAndAnswers.length)
  setCurrentQuestion(questionsAndAnswers[randomIndex])
  setHidden(false)
}

function resetQuiz() {
  setCurrentQuestion(questionsAndAnswers[randomIndex])
  setScore(0)
  setHidden(false)
  setWrongAnswer(false)
  setAnswerOptions(true)
}

function handleWrongAnswer() {
  setWrongAnswer(true)
}

function handleAnswer(event) {
  const selectedOption = event.target.textContent
  if (selectedOption === currentQuestion.answer) {
    setScore(score + 1)
    getRandomQuestion()
  } else if (selectedOption !== currentQuestion.answer) {
    setAnswerOptions(false)
    handleWrongAnswer()
  }
}

const randomIndex = Math.floor(Math.random() * questionsAndAnswers.length)
const [randomQuestion, setRandomQuestion] = useState(questionsAndAnswers[randomIndex])

  return (
    <>
      <div className="header-container">
        <h3 className="header">Science Questions</h3>
        <p className="score">Score: {score}</p>
        {hidden && <button onClick={getRandomQuestion} className="btn btn-begin">Begin Quiz</button>}
      </div>
      <div className="question-container">
        {currentQuestion && (
          <div>
            <p>{currentQuestion.question}</p>
              {answerOptions && (
                currentQuestion.options.map((option, index) => (
                  <button key={index} onClick={handleAnswer} className="btn">
                    {option}
                  </button>
                ))
              )}
          </div>
        )}
        {wrongAnswer &&  (
          <div className="wrong-answer">
            <p>Incorrect Answer!</p>
            <p>Your Score was: {score}</p>
            <p>Correct Answer: {currentQuestion.answer}</p>
            <button onClick={()=>resetQuiz()} className="btn btn-restart">Restart Quiz</button>
          </div>
        )}
      </div> 
       
    


        
  
    </>
  )
}

export default ScienceQuestions