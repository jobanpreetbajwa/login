import { useState } from "react"
import classes from "./registration.module.css"
export default function Registration(props){

    const [username,setUsername]=useState("")
    const [show,setShow]=useState(false)
    const [showOrhide,setShoworhide]=useState("Show")
    const [email,setEmail]=useState("")
    const [emailError,setEmailerror]=useState(false)
    const [password,setPassword]=useState("")
    const [contact,setContact]=useState("")
    const [contactError,setContacterror]=useState("")
    const [passwordError,setPassworderror]=useState(false)
    const [msgError,setMsgerror]=useState("password length atleast 6 ")


    const showHandler=()=>{
      if(show){
        setShow(false)
        setShoworhide("Show")
      }
      else{
        setShow(true)
        setShoworhide("Hide")
      }
    }

    const userHandler=(e)=>{
        setUsername(e.target.value)
    }

    const contactHandler=(e)=>{
      if(contact.length>=9){
        e.target.value=e.target.value.slice(0,9)
        setContacterror("only 9 numbers are allowed.")
      }else{
        setContact(e.target.value)}
      }

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
        setPassworderror(false)
    }

    const resgisterHandler=()=>{
      if(password.length){
        if(!/[a-z]/.test(password)){
            setMsgerror("password must contain a-z")
            setPassworderror(true)
    
          }
          else{
            if(!/[A-Z]/.test(password)){
          
              setMsgerror("password must contain A-Z")
              setPassworderror(true)
            }
            else{
              if(!/[-~!@#$%^&*()_+=]/.test(password)){
                setMsgerror("password must contain [~!@#$%^&*]")
                setPassworderror(true)
              }
              else{
                if(!/\d/.test(password)){
                  setMsgerror("password must contain 0-9")
                  setPassworderror(true)
                }
                else{
                    localStorage.setItem(`${email}`,`${password}`)
                    alert("register successfully")
                    props.usr(true)
                    new Promise((res,rej)=>{
                      res(fetch("http://localhost:5000/login",{
                        method:"POST",
                        headers:{
                            "content-type":"application/json "
                        },
                        body:JSON.stringify({
                            name:username,
                            email:email,
                            contact:contact,
                            password:password
                          })
                      }))
                    }).then((response)=>{
                      console.log(response,"data sent.")
                    })
                }
              }
            }
          } 
        }
        else{
          setPassworderror(true)
        }
    }

    return<>
    <div className={classes.registration}>
    <div className={classes.heading}>
        <p>Registration Page</p>
      </div>

      <div className={classes.inner}>

            <div className={classes.outerfeild}>
                <label id="user">Username</label>
                <input type="text" name="user" className="feild" onChange={userHandler}/>
            </div>

            <div className={classes.error}>
                {<p>{contactError}</p>}
            </div>

            <div className={classes.outerfeild}>
                <label id="phone">Contact</label>
                <input type="number"  name="phone" className="feild" onChange={contactHandler} />
            </div>

            <div className={classes.error}>
                {emailError && <p>please use correct syntax</p>}
            </div>

            <div className={classes.outerfeild}>
                <label id="email">Email</label>
                <input type="text" name="email" className="feild" onChange={emailHandler} onBlur={focusHandler}/>
            </div>

            <div className={classes.error}>
                {passwordError && <p>{msgError}</p>}
            </div>

            <div className={classes.outerfeild}>
                <label id="password">Password</label>
                <input type={show?"text":"password"} className="feild" name="password" onChange={passHandler}/>
                <button className={classes.show} onClick={showHandler}>{showOrhide}</button>
            </div>

            <div className={classes.submit}>
                <button className={classes.btn} onClick={resgisterHandler}>register</button>
            </div>

        </div>
      </div>
    </>
}