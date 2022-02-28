// import { useState } from "react";
import { useState } from "react";
import "./Box.css";
import List from "./List";
let Box = ({ setName, setAge, setData, name, age, data }) => {

  let [val,setVal]=useState();

  const clearUI = (e) => {
    setName("");
    setAge("");
  };
  // console.log(data);

  const clearAll=()=>{
    setData([]);
  }

  const saveButton = (e) => {
    e.preventDefault();
    // console.log("clicked");

    if(name && age){
      if(isNaN(age)){
        alert("Age you entered is not a number ")
      }
      else{

      
      setData([
        ...data,
        {
          name: name,
          age: age,
          id: Math.random() * 1000
        },
      ]);
  
      setName("");
      setAge("");
    }
    }
    else{
      alert("Please fill all entries")
    }
    // setData([
    //   ...data,
    //   {
    //     name: name,
    //     age: age,
    //     id: Math.random() * 1000
    //   },
    // ]);

    // setName("");
    // setAge("");
  };

  return (
    <>
      <div className="box">
        <div className="innerbox">
          <div className="subdivs A">
            <div className="sumit">
              <div className="inputs">
                <div className="cntnr">
                  <h4>Full Name</h4>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="nameInput"
                  />
                  <h4>Age</h4>
                  <input
                    type="text"
                    value={age}
                    onChange={(e) => {
                      setAge(e.target.value);
                      setVal(e.target.value)
                    }}
                    className="ageInput"
                  />
                </div>
              </div>
              <div className="buttons">
                <button className="save" onClick={saveButton}>
                  Save
                </button>
                <button className="clear" onClick={clearUI}>
                  Clear
                </button>
              </div>
            </div>
          </div>
          <div className="subdivs B">
            <div className="list-box">
              <h3>Users</h3>
              <div className="header">
                <span>Full Name</span>
                <span>Marks</span>
                {/* <span></span> */}
              </div>
              <div className="list-items">
                {/* <List data={data} /> */}

                {data.map((list) =>
                  // console.log(List)
                  <List element={list} name={list.name} age={list.age} key={list.id} data={data} setData={setData} />
                )}


              </div>
              <div className="clear-all-container">
                <button onClick={clearAll} className="clear-all">CLEAR ALL</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;
