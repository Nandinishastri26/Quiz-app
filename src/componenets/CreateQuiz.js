import React,{useState} from 'react'
import './CreateQuiz.css'
import { useNavigate } from 'react-router-dom';


const CreateQuiz = () => {

    const navigate = useNavigate();
    const[nav, setNav] = useState(false);
    const[user,setUser]= useState({
      name: "",
      description: "",
      points: "",
      time: ""
    });
     const navHandler = (e)=>{
      postData(e)
      setNav(true)
      nav?navigate('/quiz'):navigate('/')
     }
    let name,value;
    const getUserData=(event)=>{
      event.preventDefault();
    name= event.target.name;
    value=event.target.value;

    /*[name] this is called computed property names and it allows to 
    create object keys dynamically at runtime instead of having to hard code them */

     setUser({ ...user, [name]: value});  
    }

    const postData = async(e)=>{
     e.preventDefault();
      console.log("Post data run: ",user)
     const {name ,description , points , time,} = user;

     if((name && description && points && time)){
     
      const res= await fetch(
        "https://react-quiz-app-da736-default-rtdb.firebaseio.com/quiz-app.json",
        {
          method:"POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
           name ,
           description ,
           points ,
           time,
          }),
        }
        );
        if(res){
          setUser({
          name: "",
          description: "",
          points: "",
          time: ""
          })
          alert("Data stored successfully");
          
          nav?navigate('/quiz'):navigate('/')

        }

     }else{
      alert("All fields are required");
     }
  
    }
    
  return (
    <>
    <form  action="" method='POST'>
     <div >
      <label htmlFor='quizname'>Quiz Name</label>
      <input type="text" name="name"  value={user.name} autoComplete='off'
       onChange={getUserData}
      />
      </div>

      <div>
      <label htmlFor='description'>Description</label>
      <input type="text" name="description" value={user.description} autoComplete='off'
        onChange={getUserData} 
      />
      </div>

      <div>
      <label htmlFor='points'>Points</label>
      <input type="number" name="points"  value={user.points} autoComplete='off'
        onChange={getUserData}
      />
      </div>

      <div>
      <label htmlFor='time'>Time Limit</label>
      <input type="number" name="time"  value={user.time} autoComplete='off'
        onChange={getUserData}
      />
      </div>

      <button type="submit" onClick={navHandler}>Create Quiz</button>
    </form>
     
    </>
   
  )
}

export default CreateQuiz
