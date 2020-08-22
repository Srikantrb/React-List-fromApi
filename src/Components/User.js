import React, { useState } from 'react'
import '../Css/User.css'
import UserModal from './UserModal'


function User({avatar,email,first_name,id,last_name,onclick}) {
    const[showusermodal,setShowusermodal] = useState(false)
    const name = first_name + " " + last_name;
    
    let modalClose = () => setShowusermodal(false);
    const handleimgclick = () =>{
        setShowusermodal(true)
        
    }

    return (
        <div className = "user_container">
            <img className = "user_img" 
            src = {avatar} 
            alt = "Profile_img"
            onClick = {handleimgclick}
            ></img>
            <h3>{first_name}{" " + last_name}</h3>
            <div>
            <UserModal 
                name = {name}
                email = {email}
                show = {showusermodal}
                onHide = {modalClose}
            ></UserModal>
      </div>
        </div>
    )
}

export default User
