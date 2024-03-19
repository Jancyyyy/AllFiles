import React, { useState } from "react";
import "./Datepicker.css";
import Datepicker from "./datePicker";
import InputField from "./inputFields";
import Button from "./Button";

function DeletePanelLevel() {
 
  const [selectedFromName, setSelectedAssociatenName] = useState();
  const [selectedFromId, setSelectedAssociatenId] = useState();
  const [selectedFromDate, setSelectedFromDate] = useState();
  const [selectedFromtime, setSelectFromTime] = useState();
  const [selectedTotime, setSelectToTime] = useState();

  let data;
  data={
    Id: selectedFromId,
    Name:selectedFromName,
    FromDate:selectedFromDate,
    FromTime:selectedFromtime,
    ToTime:selectedTotime
  };
  
  const getFromAssociatenName = (Name) => {
    setSelectedAssociatenName(`FName ${Name}`);
  
  };
  const getFromDate = (FromDate) => {
    setSelectedFromDate(`From date ${FromDate}`); 
    
  };
  const getFromTime = (FromTime) => {
    setSelectFromTime(`From time ${FromTime}`);
    
  };
  const getToTime = (ToTime) => {
    setSelectToTime(`To Time ${ToTime}`);

  };
  let fetchName='phsingle';
  // fetch(`http://localhost:8080/${fetchName}/`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   }.then(res => res.json)
    

  // );
 
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
              NameHandler={getFromAssociatenName}
            />
          </div>

          <div className="row mb-3">
            <InputField
              label={"Associate Id"}
              placeholder={"Associate Id"}
              type={"text"}
              for={"id"}
              disabled={"true"}
            />
            <div className="col-sm-1"></div>

            <InputField
              label={"Associate Grade"}
              placeholder={"Associate Grade"}
              type={"text"}
              for={"Grade"}
              disabled={"true"}
            />
          </div>

          <div className="row mb-3">
            <Datepicker
              for={"Date"}
              placeholder={"Select Date"}
              label={"From Date"}
              type={"date"}
              Handler={getFromDate}
            />
          </div>

          <div className="row mb-3">
            <Datepicker
              label={"From Time"}
              placeholder={"Select Time"}
              type={"time"}
              for={"fromtime"}
              Handler={getFromTime}
            />

            <div className="col-sm-1"></div>

            <Datepicker
              label={"To Time"}
              placeholder={"Select Time"}
              type={"time"}
              for={"totime"}
              Handler={getToTime}
            />
          </div>

          <div className="row">
            <div className="col-md-1 me-5">
              <Button>Submit</Button>
            </div>
            <div className="col-md-1">
              <Button>Cancel</Button>
            </div>
          </div>
        </form>
        {/* {selectedFromDate}
        {selectedTotime}
        {selectedFromName}
        {selectedFromtime} */}
        { JSON.stringify(data)}
      </div>
    </>
  );
}

export default DeletePanelLevel;
