const DropDown = (props)=>{
  const handleInput = (e) => {
    props.Handler(e.target.value);
  };
    return(
      
        <>
        <div className={`col-md-1 ${props.bootclasslabel}`}>
              <div className="form-group">
                <label className="fw-bolder" for={props.for}>
                  {props.label}
                </label>
              </div>
            </div>
            <div className={`col-md-4 ${props.bootclassinput}`} >
              <div className="form-group">
                <select className="form-select" aria-label="Select Role" placeholder={props.placeholder} onChange={handleInput}>
                  {props.children}
                </select>
              </div>
            </div>
        </>
    )
}

export default DropDown

{/* <option value="" >Select Role</option>
                  <option value="Practice Head(PH)">Practice Head(PH)</option>
                  <option value="Talent Acquisition(TA)">Talent Acquisition(TA)</option>
                  <option value="Panel(Interviewer)">Panel(Interviewer)</option> */}