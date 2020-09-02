import React, { useEffect, useState } from 'react';
import './App.css';
import User from './Components/User';
import axios from 'axios'
import fire from './Components/FirebaseAuth/Fireconfig';
import Login from './Components/FirebaseAuth/Login';
// import FirebaseTesting from './Components/firebase/FirebaseTesting';


function App() {
  const[users,setUsers] = useState([]);
  const [search,setSearch] = useState("")
  
  // fire base authentication
  const[user,setUser] = useState({})
   
  const authenticate = ()=>{
      fire.auth().onAuthStateChanged((user)=>{
          if(user){
              setUser({user})
          }else{
              setUser(null)
          }
      })
  }

  // To fetch Data from an Api
  const fetchData = () =>{
    const userspage1 = "https://reqres.in/api/users?page=1"
    const userspage2 = "https://reqres.in/api/users?page=2"
    const getusersp1 = axios.get(userspage1)
    const getusersp2 = axios.get(userspage2)
    axios.all([getusersp1,getusersp2])
    .then(response =>{
      const usersarray = [...response[0].data.data,...response[1].data.data]
      console.log(usersarray)
      setUsers(usersarray)
    }
    ).catch(error =>{
      console.log(error)
    });
  }

  useEffect(()=>{
    fetchData()
    authenticate()
  },[])
  // To filter the users List (Search Engine)
  const filtereduserslist = users.filter((user) =>{ 

    return (user.first_name.toLowerCase().indexOf(search.toLowerCase()) !== -1 
      || user.last_name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    )
  })
  // Logout,Login Button Handler
  const logoutHandler = (e) =>{
    e.preventDefault();
    fire.auth().signOut()
    // setIslogedin(false)
  }
  
  return (
    <div className="App">
      {/* <FirebaseTesting></FirebaseTesting> */}
      <div className = "auth-buttons">
        {user ? (<button onClick = {logoutHandler }>LogOut</button>) : null}
        {/* {user ? (<firebaseTesting></firebaseTesting>) : null} */}
      </div>
      <div>
        {user ? 
        (<div>
        <input className = "searchfield" placeholder = "Search Here..." value = {search} onChange = {(e) => setSearch(e.target.value)}></input>
        <div className = "userslist">
          {
            filtereduserslist.length ?
            filtereduserslist.map(
              (({avatar,email,first_name,id,last_name}) =>
                <User
                  key = {id} 
                  avatar = {avatar}
                  email = {email}
                  first_name = {first_name}
                  id = {id}
                  last_name = {last_name}
                />
              )
            ) :
            null     
          }
        </div>
        </div>) : (<Login/>)}
      </div>
      
    </div>
  );
}

export default App;
