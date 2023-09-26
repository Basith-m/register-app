import { useState } from 'react';
import './App.css';
import { TextField , Button } from '@mui/material';

function App() {

  // creating state

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [isNameValid,setIsNameValid] = useState(true)
  const [isEmailValid,setIsEmailValid] = useState(true)
  const [isPasswordValid,setIsPasswordValid] = useState(true)
  const [isConfirmPasswordValid,setIsConfirmPasswordValid] = useState(true)

  // Name Validation
  const validateName = (e)=> {
    const {value} = e.target

    if(!! value.match(/^[A-Za-z\s.'-]+$/))
    {
      setName(value)
      setIsNameValid(true)
    }
    else
    {
      setName(value)
      setIsNameValid(false)
    }
  }

  // email validation
  const validateEmail = (e)=> {
    const {value} = e.target

    if(!! value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/))
    {
      setEmail(value)
      setIsEmailValid(true)
    }
    else
    {
      setEmail(value)
      setIsEmailValid(false)
    }
  }

  // password validation
  const validatePassword = (e)=>{
    const {value} = e.target

    if(value.length >= 8)
    {
      setPassword(value)
      setIsPasswordValid(true)
    }
    else
    {
      setPassword(value)
      setIsPasswordValid(false) 
    }
  }

  // Confirm Password Validation
  const validateConfirmPassword = (e)=>{
    const {value} = e.target

    if(value === password)
    {
      setConfirmPassword(value)
      setIsConfirmPasswordValid(true)
    }
    else{
      setConfirmPassword(value)
      setIsConfirmPasswordValid(false)
    }
  }

  const handleSignUp = (e)=>{

    e.preventDefault()
    
    if(name || email || password || confirmPassword)
    {
      if(isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid)
      {
        alert(`
          Congratulation ${name}
          Now get start
        `)
      }
      else
      {
        alert("Please fill the form completely!!!")
      }
    }
    else{
      alert("Please fill the form completely!!!")
    }
  }

  return (
    <div style={{height:'100vh', background: 'linear-gradient(to right, #3498db, #9b59b6, #2ecc71)'
  }} className="d-flex justify-content-center align-items-center w-100">
    <div style={{width:'400px'}} className='bg-light rounded-5 '>
      <h2 className='text-center pt-4 pb-2'>Register</h2>
      <hr />
      <form className='pt-2 px-5 pb-2' onSubmit={handleSignUp}>
      <TextField name='name' id="standard-basic" label="Name" variant="standard" className='w-100 mb-4' value={name || ""} onChange={(e)=>validateName(e)}/>

      {
        !isNameValid && 
        <div className='mb-1 text-danger fw-bold'>
          Invalid User name
        </div>
      }

      <TextField name='email' id="standard-basic" label="Email" variant="standard" className='w-100 mb-4' value={email || ""} onChange={(e)=>validateEmail(e)} />

      {
        !isEmailValid &&
        <div className='mb-1 text-danger fw-bold'>
        Invalid Email
        </div>
      }

      <TextField name='password' id="standard-basic" label="Password" variant="standard" className='w-100 mb-4' value={password || ""} onChange={(e)=>validatePassword(e)} />

      {
        !isPasswordValid &&
        <div className='mb-1 text-danger fw-bold'>
        Password must be at least 8 characters
        </div>
      }

      <TextField name='confirmPassword' id="standard-basic" label="Confirm Password" variant="standard" className='w-100 mb-3' value={confirmPassword || ""} onChange={(e)=>validateConfirmPassword(e)} />

      {
        !isConfirmPasswordValid &&
        <div className='mb-1 text-danger fw-bold'>
        Password doesn't match
        </div>
      }

      <Button variant="outlined" type='submit' className='text-dark border-dark rounded-5 p-3 fw-bold w-100 mt-4 mb-4'>Sign Up</Button>
      </form>
      <p className='text-center mb-5'>Have an Account?<span className='text-primary'>Login Here</span></p>
    </div>
  </div>
  );
}

export default App;


