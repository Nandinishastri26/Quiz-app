import React from 'react'
import CreateQuiz from './componenets/CreateQuiz'
import Quiz from './componenets/Quiz'
import { BrowserRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<CreateQuiz/>}/>
    <Route path='/quiz' element={<Quiz/>}/>
   </Routes>
    </BrowserRouter>

  )
}

export default App
