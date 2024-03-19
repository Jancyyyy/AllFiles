import "./Datepicker.css";
import React, { useState } from "react";

function Datepicker(props) {
  const handleDatePicker = (e) => {
    props.Handler(e.target.value);
  };
  return (
    <>
      <div className={`col-md-1 ${props.bootclasslabel}`}>
        <div className="form-group">
          <label className="fw-bolder  " for={props.for}>
            {props.label}
          </label>
        </div>
      </div>

      <div className={`col-md-4 ${props.bootclassinput}`}>
        <input
          onChange={handleDatePicker}
          disabled={props.disabled}
          min={new Date().toISOString().split("T")[0]}
          className="form-control"
          type={props.type}
          placeholder={props.placeholder}
          required
        />
      </div>
    </>
  );
}

export default Datepicker;
