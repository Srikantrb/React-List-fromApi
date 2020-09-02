import React,{useState} from 'react'
import {Modal,Button,Row,Col,Form} from 'react-bootstrap'
import moment from 'moment'
import ReactTimeslotCalendar from 'react-timeslot-calendar'
import '../Css/UserModal.css'
import FirebaseTesting from '../Components/firebase/FirebaseTesting'

const year = new Date().getFullYear(); 
const month = new Date().getMonth();
const day = new Date().getDate();

function UserModal(props) {
    // const [slot,setSlot] = useState([])
    // const handlesubmit = (event) => {
    //     event.preventDefault()
    //     console.log("Hello")
    //     console.log(event.current.value)  
    // }
    let onSelectTimeslot = (allTimeslots, lastSelectedTimeslot) => {
        /**
         * All timeslot objects include `startDate` and `endDate`.
      
         * It is important to note that if timelots provided contain a single
         * value (e.g: timeslots = [['8'], ['9', '10']) then only `startDate` is filled up with
         * the desired information.
         */
        console.log(lastSelectedTimeslot.startDate); // MomentJS object.
      
      }
    
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className = "modal"
            >
                <Modal.Header closeButton className = {props.type} className= "modalheader">
                    <Modal.Title id="contained-modal-title-vcenter" >
                    Person Bio
                    </Modal.Title>
                </Modal.Header>
                
                <Modal.Body >
                    <div className = "modalbody">
                        <div className = "modalfield">
                            <label className = "modallable">Name : </label>
                            <p>{props.name}</p>
                        </div>
                        <div className ="modalfield">
                            <label className = "modallable">Email : </label>
                            <p>{props.email}</p>
                        </div>
                        <hr></hr>
                        <div className = "calander">
                          {/* <ReactTimeslotCalendar
                            initialDate={moment().format()}
                            // onTimeslotClick = {setSlot(selectedTimeslots)}
                            onSelectTimeslot={onSelectTimeslot}
                            
                          /> */}
                          <div className = "input-container">
                            <input type="text" readOnly value = {year} className = "input"></input>
                            <input type="text" readOnly value = {month} className = "input"></input>
                            <input type = "text" readOnly value = {day} className = "input"></input>
                          </div>
                          <FirebaseTesting></FirebaseTesting>
                        </div>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant = "danger" onClick={props.onHide}>Close</Button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}


export default UserModal
