import './Datepicker.css'
import React ,{useState}from 'react'

function Datepicker(props){
  const[name,setName]=useState(null);
  //const[print,setPrint]=useState(false);
  function handleInput(val){
    console.log(val)
     setName(val.target.value);
  }
 
        return(
            <>
            <div className={`col-md-1 ${props.bootclasslabel}`}>
              <div className="form-group">
                <label className="fw-bolder  " for={props.for}>
                  {props.label}
                </label>
              </div>
            </div>
            
                
                    <div className={`col-md-4 ${props.bootclassinput}`}>
                        <input className="form-control" type="date" placeholder={props.placeholder} required onChange={handleInput} />
                        <p>{name}</p>
                    </div>
                    </>
        )
    }
     

 
export default Datepicker;