import react,{useState} from 'react';
const FieldInput=(props)=>{
   const[inputdata,SetInputdata]=useState()
  //const[print,setPrint]=useState(false);
  function handleInput(val){
     SetInputdata(val.target.value);
  }
    return (<>
    <div className={`col-md-1 ${props.bootclass}`}>
                  <div className="form-group">
                    <label className="fw-bolder  " for={props.for}>
                      {props.label}
                    </label>
                  </div>
                </div>
                <div className={`col-md-4 ${props.bootclass}`}>
                  <div className="form-group">
                    <input type={props.type}
                      className="form-control"
    
                      placeholder={props.placeholder}
                      onChange={handleInput}
                    
                    />
                   
                  </div>
                  <p>{inputdata}</p>
                </div>
    </>)
    }
    
    export default FieldInput;