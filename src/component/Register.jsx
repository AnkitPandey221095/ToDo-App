import React ,{useState}from 'react'
import './Register.css'
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const navigate=useNavigate();
    const [input,setInput]=useState({
        name:'',
        email:'',
        password:'',
        city:''
    })

function handleName(e){
    setInput({...input,name:e.target.value})
}

function handleEmail(e){
    setInput({...input,email:e.target.value})
}

function handlePassword(e){
    setInput({...input,password:e.target.value})
}

function handleCity(e){
  setInput({...input,city:e.target.value})
}

// Storing Regiter user data in local storage
const handleSubmit=(e)=>{
e.preventDefault();
if(!input.name|| !input.city || !input.email|| !input.password ){
  alert("FAll fields are required!")
  return;
}
localStorage.setItem('User', JSON.stringify(user))
navigate("/LogIn")
}


const navigateToRegistration=()=>{
  navigate('/LogIn')
}

  return (
    <div className='signup_container1'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
      <div className='input_section'>
        <p>Name</p>
        <input type="text" name="" id="name" value={input.name} onChange={handleName} placeholder='Enter Your Name'/>
        <p>City</p>
        <input type="text" name="" id="city" value={input.city} onChange={handleCity} placeholder='Enter Your city'/>
        <p>Email</p>
        <input type="email" name="" id="email" value={input.email} onChange={handleEmail} placeholder='email@gmail.com'/>
        <p>Password</p>
        <input type="password" name="" id="password" value={input.password} onChange={handlePassword} placeholder='******'/>
      </div>
      <div className='submit_btn'>
        <button className='submit'>Sign Up</button>
      </div>
      </form>
      <p className="last_text" onClick={navigateToRegistration}>New Here <span>LogIn Now</span></p>
    </div>
  )
}

export default Register
