import React, { useState } from 'react'
import fire from './Fireconfig'


function Login() {
   
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const inputHandler = (e) =>{
        e.preventDefault();
        if(e.target.name == "email"){
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
        }).catch((err)=>{
            console.log(err)
        })
    }
    const signupHandler = () =>{
        fire.auth().createUserWithEmailAndPassword(email,password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err)
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
