import React,{useState} from 'react'
import { QuizData } from '../utility/QuestionData';
import "./Quiz.css";
import QuizResult from './QuizResult';

const Quiz = () => {

  const[ques,setQues]=useState(0);
  const[score,setScore]=useState(0);
  const[clickOpt,setClickOpt]=useState(0);
  const[showResult,setShowResult]=useState(false);

 const nextQuestion=()=>{
  updateScore();
  if(ques<QuizData.length-1){
    setQues(ques+1);
    setClickOpt(0);
  }

  else{
     setShowResult(true);
  }
  
 }
 const updateScore=()=>{
  if(clickOpt===QuizData[ques].answer){
    setScore(score+1);
  }
 }

 const resetAll=()=>{
  setShowResult(false);
  setQues(0);
  setClickOpt(0);
  setScore(0);
 }
  
  return (
    <div>
       <h1 className='heading'>QUIZ APP</h1>
       <div className='container'>
        {showResult ? (
          <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
        ) : (
        <>
       <div className='question'>
       <span id="que-no">{ques+1}.</span>
       <span id="que-txt">{QuizData[ques].question}</span>
        </div>
        <div className='opt-container'>
       {QuizData[ques].options.map((option,index)=>{
        return(
          <button 
          //className='opt-btn' 
          /*This type of dynamic class can be used to style elements based on user interaction, such as highlighting a 
          selected option or button. When the clickOpt value changes, the class for the corresponding 
          element will be updated accordingly, triggering any associated CSS rules to take effect.*/
          className={`opt-btn ${
          clickOpt=== index+1 ? "checked":null
        }`}
          key={index}
          onClick={()=>setClickOpt(index+1)}
          >
           {option}
          </button>
        )
       })}
        </div>
        <input type="button" value="Next" id="next-btn" onClick={nextQuestion}></input>
        </>
        )}
       </div>
    </div>
    
  )
}

export default Quiz





