import React, { useState } from "react";
import "./Datepicker.css";
import Datepicker from "./datePicker";
import InputField from "./inputFields";
import Button from "./Button";

function DeletePanelLevel() {
  const [selectedFromName, setSelectedAssociatenName] = useState();
  const getFromAssociatenName = (Name) => {
    setSelectedAssociatenName(`FName ${Name}`);
  };
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
              Handler={getFromAssociatenName}
            />
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
              type={"date"}
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
          <div className="row">
            <div className="col-md-1 me-4">
              <Button>Submit</Button>
            </div>
            <div className="col-md-1">
              <Button>Cancel</Button>
            </div>
          </div>
        </form>

        {selectedFromName}
      </div>
    </>
  );
}

export default DeletePanelLevel;
