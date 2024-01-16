import { useState } from "react";
import "./App.css"
import Registration from "./registration"
function App() {


  const [user,setUser]=useState(true)
  const [email,setEmail]=useState('')
  const [emailError,setEmailerror]=useState(false)
  const [password,setPassword]=useState("")

  const emailHandler=(e)=>{
    setEmail(e.target.value)
    if(email.length==0 && /\d/.test(+e.target.value)){
      setEmailerror(true)
    }
    if(email.length){
      setEmailerror(false)
    }
  }

  const focusHandler=()=>{
    if(!email.length){
      setTimeout(()=>{
        setEmailerror(false)
      },1000)
    }
    if(/\D[a-zA-Z0-9]*@gmail.com$/.test(email)){
      setEmailerror(false)
    }
    else{
      setEmailerror(true)
    }
    }

    const passHandler=(e)=>{
      setPassword(e.target.value)
    }

  const sumbitHandler=async(e)=>{
    e.preventDefault()
    // await new Promise((res,rej)=>{
    //   res( setPassword(document.getElementsByClassName("passwordFeild")[0].value))
    // })
    if(email && password){
      if(!localStorage[`${email}`]){ 
        console.log("email not found")
        alert("new user sign up first")
        setTimeout(()=>{
          setUser(false)
        },2000)
      }
      else{
        if(localStorage[`${email}`]!=password){
          console.log("password incorrect")
          alert("password not matched try again")
          
        }
        else{
          alert("login successfully...")
        } 
      }
  }
  else{
    alert("email and password fields are required")
  }
}


  return <>
   {user && <div className="container">

      <div className="loginHeading">
        <p>Login Page</p>
      </div>

      <div className="inner">

        <div className="error">
          {emailError && <p>please use correct syntax</p>}
        </div>

        <div className="email">
          <label id="email">Email</label>
          <input type="text" name="email" className="emailFeild" onChange={emailHandler} onBlur={focusHandler}/>
        </div>

        <div className="pass">
          <label id="password">Password</label>
          <input type="password" className="passwordFeild" name="password" onChange={passHandler}/>
        </div>

        <div className="submit">
          <button className="btn" onClick={sumbitHandler}>submit</button>
          <button className="signup" onClick={()=>{setUser(false)}}>Sign up</button>
        </div>

      </div>

    </div> }
    {!user && <Registration usr={setUser} pass={sumbitHandler}/>}
    </>
}

export default App;
