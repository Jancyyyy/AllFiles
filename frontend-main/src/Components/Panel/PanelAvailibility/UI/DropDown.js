import './style.css';

const DropDown = (props)=>{

  const changeHandler=(e)=>{
      props.dropdown(e.target.value)
  }
    return(
        <>
        <div className={`col-md-1 ${props.bootclasslabel}`}>
              <div className="form-group">
                <label className="fw-bolder" htmlFor={props.for}>
                  {props.label}
                </label>
              </div>
            </div>
            <div className={`col-md-4 drop__down ${props.bootclassinput}`} >
              <div className="form-group">
                <select value={props.value} onChange={changeHandler} className="form-select responsive" aria-label="Select Role" placeholder="hi">
                  {props.children}
                </select>
              </div>
            </div>
        </>
    )
}

export default DropDown
