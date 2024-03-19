import React ,{useState}from "react";
import "./Datepicker.css";
import Datepicker from "./datePicker";
import InputField from "./inputFields";


function DeletePanelLevel() {
  // const[name,setName]=useState(null);
  // // const[print,setPrint]=useState(false);
  // function handleInput (val) {
  //   alert(val)
  //   setName( val.target.value );
  
  // };

  return (
    <>
      <div className="container-wrap">
    
        <form>
          <div className="row mb-3">
            <InputField
              label={"Associate Name"}
              placeholder={"Associate Name"}
              type={"text"}
              for={"name"}
              // onChange={handleInput}
          />
            {/* <p>{name}</p> */}
          
          </div>

          <div className="row mb-3">
            <InputField
              label={"Associate id"}
              placeholder={"Associate id"}
              type={"text"}
              for={"id"}
            />
            <div className="col-sm-1"></div>

            <InputField
              label={"Associate Grade"}
              placeholder={"Associate Grade"}
              type={"text"}
              for={"Grade"}
            />
          </div>

          <div className="row mb-3">
            <Datepicker
              for={"Date"}
              placeholder={"select Date"}
              label={"from Date"}
            />
          </div>

          <div className="row mb-3">
            <Datepicker
              label={"From time"}
              placeholder={"select time"}
              type={"time"}
              for={"fromtime"}
            />

            <div className="col-sm-1"></div>

            <Datepicker
              label={"To time"}
              placeholder={"select time"}
              type={"time"}
              for={"totime"}
            />
           
          </div>
       
        </form>
      </div>
    </>
  );
}

export default DeletePanelLevel;
