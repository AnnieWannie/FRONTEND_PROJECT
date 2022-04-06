import './App.css';
// import "./styles.css";
import { useState } from "react";



export default function App() {
 return (
 <div className="App">
  <UserInput />
 </div>
 );
}

function UserInput() {
 const [fname, setfName] = useState("");
 const [lname, setlName] = useState("");
 var onChange1 = (event) => {
 setfName(event.target.value);
 };
 var onChange2 = (event) => {
 setlName(event.target.value);
};

 return (
 <div>
  <h1>Hello {fname} {lname}!</h1>
  <label for="fname">First Name</label><input id="fname" type="text" onChange={onChange1} />
  <br></br>
  <label for="lname">Last Name</label><input id="lname" type="text" onChange={onChange2} />
 </div>
 );

}