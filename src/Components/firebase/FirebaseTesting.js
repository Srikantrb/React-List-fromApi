import React, { useState } from 'react'
import fire from '../FirebaseAuth/Fireconfig'
import swal from 'sweetalert';

function FirebaseTesting() {
    const [bookedslots,setbookedslots] =useState([])
    // const timings = {
    //     timings : [
    //                 "9-10","10-11","11-12",
    //                 "13-14","14-15","15-16"
    //               ],
    //     availabletimings : [
    //                 "9-10","10-11","11-12",
    //                 "13-14","14-15","15-16"
    //                         ],
    //     bookedtimings : [

    //                 ]
    // }

    const slots = [
        "9-10","10-11","11-12",
        "13-14","14-15","15-16"
    ]
    const [htimings,sethtimings] = useState(slots)
    // const [slotcolor,setslotcolor] =useState("color1")
   //////////
    // const data = {
    //     employees : [
    //         {
    //             employee : "Navd",
    //             salary : 20000,
    //             id : "CS2012001"
    //         },
    //         {
    //             employee : "Gets",
    //             salary : 10000,
    //             id : "CS2012002"
    //         },
    //         {
    //             employee : "Sed",
    //             salary : 25000,
    //             id : "CS2012003"
    //         }
    //     ],
    //     departments : [
    //         {
    //             departmentid : "CS",
    //             departmentname : "CSE"
    //         },
    //         {
    //             departmentid : "ME",
    //             departmentname : "MECHANICS"
    //         }
    //     ]
    // };
//
    // const dataupload = () =>{
    //     fire.database().ref().set(data)
    //     .then((response) =>{
    //         console.log("Data uploaded Sucessfully")
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     });

    //     fire.database().ref().set(timings).then((response)=>console.log(response))
    //     .catch((err)=>console.log(err));
    //     // fire.database().ref().set()
    // }
    // const dataupdate = () =>{
    //     fire.database().ref('employees/2').update({
    //         employee : "Sedg",
    //         salary : 21000
    //     })
    //     fire.database().ref('departments/0/departmentname').set(null).then(()=> console.log("Succes")).catch((err)=>console.log(err))
    // }

    // const handleslotbook = ()=>{

    // }
    const handleslotChange =(e)=>{
        var selectedslot = e.target.value
        console.log(selectedslot)
        const updatedslots = htimings.map((timing) =>{
            if(selectedslot !==timing){
                return timing
            }else{
                return null
            }
        })
        console.log(updatedslots)
        // sethtimings(updatedslots)
        const availabletimings = updatedslots;
        fire.database().ref('availabletimings').set(availabletimings).then((response)=>console.log(response))
        .catch((err)=>console.log(err));
       //retriving avilable slots from database
        fire.database().ref().on('value',
        (snapshot)=>{
            const data = snapshot.val()
            const retrivedslots = data.availabletimings
            console.log(retrivedslots);
            sethtimings(retrivedslots)
            
        }
        );
        setbookedslots([selectedslot,...bookedslots])
        console.log(bookedslots)
        ///setting booked slots
        fire.database().ref('bookedtimings').set(bookedslots).then((response)=>console.log(response))
        .catch((err)=>console.log(err));
        // alert(e.target.value + " slot booked succesfully")
        swal(selectedslot + " Slot Booked","Success","success")
    }

    /////////////////
    return (
        <div>
            {/* <button onClick = {dataupload}>Upload</button> 
            <button onClick = {dataupdate}>Update</button> */}
            <select onChange = {handleslotChange} className = "selection">
                <option className = "option">--Select Slot--</option>
                {htimings.map((timing) =>(
                    <option >{timing}</option>
                ))}
            </select>
            {/* <button onClick ={handleslotbook}>Book</button>   */}
        </div>
    )
}

export default FirebaseTesting
