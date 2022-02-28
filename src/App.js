import Nav from "./components/Nav";
import Box from "./components/Box";
import "./App.css";
import { useState } from "react";

let App = () => {
  let [name, setName] = useState("")
  let [age, setAge] = useState("");

  let [data, setData] = useState([]);
  
  return (
    <>
      <div className="cont">
        <Nav />
        <Box setName={setName} setAge = {setAge} setData = {setData} name = {name} age={age} data = {data}/>
      </div>
    </>
  );
};

export default App;
