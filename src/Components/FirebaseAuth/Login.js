import React, { useState } from 'react'
import fire from './Fireconfig'
import swal from 'sweetalert';

function Login() {
   
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const inputHandler = (e) =>{
        e.preventDefault();
        if(e.target.name === "email"){
            setEmail(e.target.value)
        }else{
            setPassword(e.target.value)
        }
    }
    const submitHandler = (e) =>{
        e.preventDefault();
    }
    const loginHandler = () =>{
        fire.auth().signInWithEmailAndPassword(email,password).then((u)=>{
            console.log(u)
            swal("Sign in success","welcome","success")
        }).catch((err)=>{
            console.log(err)
            if(err.code === "auth/network-request-failed"){
                swal("Oops...","Please check your Connection","error")
            }else if(err.code === "auth/wrong-password"){
                swal("Oops...","Please check your password!","error")
            }else if(err.code === "auth/user-not-found"){
                swal("Oops...","User not found","error")
            }
        })
    }
    const signupHandler = () =>{
        fire.auth().createUserWithEmailAndPassword(email,password).then((u)=>{
            console.log(u)
            swal("Sign Up success","welcome","success")
        }).catch((err)=>{
            console.log(err)
            if(err.code === "auth/network-request-failed"){
                swal("Oops...","Please check your Connection","error")
            }
            else if(err.code === "auth/email-already-in-use"){
                swal("Oops...","email-already-in-use","error") 
            }
            else if(err.code === "auth/weak-password"){
                swal("Oops...","Weak Password","error")
            }
        })
    }

    return (
        <div>
            <form onSubmit = {submitHandler}>
                <input 
                name= "email" 
                type = "text"
                placeholder = "Enter your Mail"
                value = {email}
                onChange = {inputHandler}
                ></input>
                <input 
                name= "password" 
                type = "password"
                placeholder = "Enter Your Password"
                value = {password}
                onChange = {inputHandler}
                ></input>
                <div>
                    <button type = "submit" onClick = {loginHandler}>LogIn</button>
                    <button type = "submit" onClick ={signupHandler}>SignUp</button>
                </div>
            </form>
        </div>
    )
}

export default Login
