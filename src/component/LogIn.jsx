import React ,{useState}from 'react'
import './LogIn.css'
import {useNavigate} from 'react-router-dom'



const LogIn = () => {
    const navigate=useNavigate();
    const [input,setInput]=useState({
        email:'',
        password:''
    })

function handleEmail(e){
    setInput({...input,email:e.target.value})
}

function handlePassword(e){
    setInput({...input,password:e.target.value})
}

// Storing Regiter user data in local storage
const handleLogIn=(e)=>{
e.preventDefault();
let data=JSON.parse(localStorage.getItem('User'))
if(input.email===data.email && input.password===data.password){
  navigate("/Todo")
}
else{
  alert('Email or Password is not defined')
}
}


const navigateToRegistration=()=>{
  navigate('/')
}

  return (
    <div className='signup_container'>
      <h1>LogIn</h1>
      <form onSubmit={handleLogIn}>
      <div className='input_section'>
        <p>Email</p>
        <input type="email" name="" id="email" value={input.email} onChange={handleEmail} placeholder='email@gmail.com'/>
        <p>Password</p>
        <input type="password" name="" id="password" value={input.password} onChange={handlePassword} placeholder='******'/>
      </div>
      <div className='submit_btn'>
        <button className='submit'>LogIn</button>
      </div>
      </form>
      <p className="last_text" onClick={navigateToRegistration}>New Here <span>Register Now</span></p>
    </div>
  )
}

export default LogIn
