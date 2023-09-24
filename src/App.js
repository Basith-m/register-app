// import './App.css';

// function App() {
//   return (
//     <div style={{height:'100vh', background: 'linear-gradient(to right, #FFC0CB, #8A2BE2, #FFC0CB)'}}  className='d-flex justify-content-center align-items-center w-100'>
//         <div style={{width:'400px'}} className='bg-light rounded'>
//           <h1 className='text-center'>Register</h1>
//         </div>
//     </div>
//   );
// }

// export default App;


import { TextField, Button } from "@mui/material";
import "./App.css";
import { useState } from "react";

function App() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirm,setConfirmPassword] = useState("")

  const [isNameValid,setIsNameValid] = useState(true)
  const [isEmailValid,setIsEmailValid] = useState(true)
  const [isPasswordValid,setIsPasswordValid] = useState(true)
  const [isConfirmValid,setIsConfirmValid] = useState(true)

  // form
  
  // name Validation
  const validateInput = (e)=>{

    const {value} = e.target

    if(!! value.match(/^([a-zA-Z ]){2,30}$/)){
        setName(value)
        setIsNameValid(true)
    }else{
        setName(value)
        setIsNameValid(false)
    }

  }

   // email validation
   const validateEmail = (e)=>{

    const {value} = e.target

    if(!!value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) ){
        setEmail(value)
        setIsEmailValid(true)
    }else{
        setEmail(value)
        setIsEmailValid(false)
    }

   }


  //  password validation
  const validatePassword = (e)=>{

    const {value} = e.target

    if(value.length >= 8 ){
      setPassword(value)
      setIsPasswordValid(true)}
    else{
      setPassword(value)
      setIsPasswordValid(false)
    }

   }
  
  // passwordConfirm validation
  const validateConfirm = (e)=>{

    const {value} = e.target

    if(value === password){
      setConfirmPassword(value)
      setIsConfirmValid(true)
    }else{
      setConfirmPassword(value)
      setIsConfirmValid(false)
    }
  }

  // alert show
  const showDetails = (e)=>{
    e.preventDefault()

    if(!name || !email || !password || !confirm ){
      alert("Fill the Form Compeletly..")
    }else{
      if(isNameValid && isEmailValid && isPasswordValid){
        alert(
          `...User Profile....
  
  
          Name : ${name}
  
          Email : ${email}
  
          Password : ${password}
          `
          )

      }else{
        alert("Please Complete form Properly..!!")
      }
    
    }

  } 
  

  return (

    <div style={{ height: "100vh", background:'linear-gradient(to right, #E6E6FA, #0000FF, #E6E6FA)'}} className="d-flex justify-content-center align-items-center w-100" >
      <div style={{ width: "450px" }} className="bg-light rounded-4">
        <h1 className="text-center p-2">Register</h1>
        <hr />

        <form onSubmit={showDetails} className="p-5 pt-2">

          <div className="mb-5">
            <TextField
              className="w-100"
              id="standard-basic"
              label="Name"
              variant="standard" name="name" value={ name || "" } onChange={(e)=>validateInput(e)}/>

              {
                !isNameValid && 
                <div className=" text-danger fw-bolder">
                 Invalid User Name
                </div>
              }
          </div>
      

          <div className="mb-5">
            <TextField
              className="w-100"
              id="standard-basic"
              label="Email"
              type="email"
              variant="standard" name="email" value={ email || "" } onChange={(e)=>validateEmail(e)} />

              {
                !isEmailValid && 
                <div className=" text-danger fw-bolder">
                 Invalid User Email
                </div>
              }
          </div>

          <div className="mb-5">
            <TextField
              className="w-100"
              id="standard-basic"
              label="Password"
              type="password"
              variant="standard" name="password" value={ password || "" } onChange={(e)=>validatePassword(e)} />
              {
                !isPasswordValid && 
                <div className=" text-danger fw-bolder">
                 Password must be at least 8 characters 
                </div>
              }
          </div>

          <div className="mb-5">
            <TextField
              className="w-100"
              id="standard-basic"
              label="Confirm Password"
              type="password"
              variant="standard" name="confirm" value={ confirm || ""  } onChange={(e)=>validateConfirm(e)} />
             
              {
                ! isConfirmValid && 
                <div className=" text-danger fw-bolder">
                 Password don't Match
                </div>
              }
          </div>

          <Button
            type="submit"
            className="w-100 rounded-5 p-3 text-dark border-dark"
            variant="outlined">
            <b>Sign Up</b>
          </Button>

          <div className="text-center pt-4">
            Have an Account? 
            <a className="text-decoration-none" href="index.html">
              Login Here
            </a>
          </div>

        </form>

      </div>
    </div>
  );
}

export default App;