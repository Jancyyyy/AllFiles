import react, { useState } from "react";
const FieldInput = (props) => {
  const handleInput = (e) => {
    props.NameHandler(e.target.value);
  };
  return (
    <>
      <div className={`col-md-1 ${props.bootclass}`}>
        <div className="form-group">
          <label className="fw-bolder  " for={props.for}>
            {props.label}
          </label>
        </div>
      </div>
      <div className={`col-md-4 ${props.bootclass}`}>
        <div className="form-group">
          <input
            type={props.type}
            className="form-control"
            onChange={handleInput}
            placeholder={props.placeholder}
            disabled={props.disabled}
          />
        </div>
      </div>
    </>
  );
};

export default FieldInput;
