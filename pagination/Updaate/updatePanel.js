import React, { useState } from "react";
import "./Datepicker.css";
import Datepicker from "./datePicker";
import InputField from "./inputFields";
import Button from "./Button";
import DropDown from "./DropDown";

function DeletePanelLevel() {

  const [selectedFromtime, setSelectFromTime] = useState();
  const [selectedTotime, setSelectToTime] = useState();
  const [selectedStatus, setSelectStatus] = useState();

  const getFromTime = (FromTime) => {
    setSelectFromTime(`From time ${FromTime}`);
  };

  const getToTime = (ToTime) => {
    setSelectToTime(`To Time ${ToTime}`);
  };

  const getStatus = (status) => {
    setSelectStatus(`Status ${status}`);
  };
  const roles = ["PanelNoShow", "CandidateNoShow ", "PanelWithdrawn"];
  const dropdownItems = roles.map((role) => {
    return <option value={role}>{role}</option>;
  });

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
              disabled={"true"}
            />
          </div>

          <div className="row mb-3">
            <InputField
              label={"Associate id"}
              placeholder={"Associate id"}
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
              placeholder={"select Date"}
              label={"Date"}
              type={"date"}
              disabled={"true"}
            />
          </div>

          <div className="row mb-3">
            <Datepicker
              label={"From time"}
              placeholder={"select time"}
              type={"time"}
              for={"fromtime"}
              Handler={getFromTime}
            />

            <div className="col-sm-1"></div>

            <Datepicker
              label={"To time"}
              placeholder={"select time"}
              type={"time"}
              for={"totime"}
              Handler={getToTime}
            />
          </div>
          <div className="row mb-3">
            <DropDown label="status" for="Status" placeholder="select Status" Handler={getStatus}>
              <option value="" >Select Status</option>
              {dropdownItems}
              
            </DropDown>
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

        {selectedTotime}
        {selectedStatus}
        {selectedFromtime}
      </div>
    </>
  );
}

export default DeletePanelLevel;
