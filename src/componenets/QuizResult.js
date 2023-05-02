import React from 'react'

const QuizResult = (props) => {
  return (
    <>
    <div className='show-score'>
      Your Score:{props.score} <br/>
      Total:{props.totalScore}
    </div>

    <button id="next-btn" onClick={props.tryAgain}>Play Again</button>
    </>
    
  )
}

export default QuizResult
