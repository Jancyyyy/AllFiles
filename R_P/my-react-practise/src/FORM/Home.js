import React ,{ useState} from 'react';
import firebaseDB from './firebase'
const Home = () => {
  const [data,setData]=useState({
    firstname:"",
    lastname:"",
    email:""
  })
  const {firstname,lastname,email}={...data}
  const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler=e=>{
    e.preventDefault();
    firebaseDB.child('register').push(
      data,
      err=>{
        if(err){
          console.log(err);
        }
      }
    )
    // console.log(data);
  }
  return (
    <div>
    <h2 style={{"textAlign":"center"}}>Register Form</h2>
    <form className='form-horizontal' onSubmit={submitHandler} 
    autoComplete='off'>
    <div className='form-group'>
    <label className='control-label col-sm-2'>First Name:</label>
    <div className='col-sm-4'>
    <input type="text" className='form-control' 
    placeholder='FirstName' name='firstname' value={firstname} 
    onChange={changeHandler}/>
    </div>
    </div>
    <div className='form-group'>
    <label className='control-label col-sm-2'>Last Name:</label>
    <div className='col-sm-4'>
    <input type='text' className='form-control' 
    placeholder='LastName' name='lastname' value={lastname} 
    onChange={changeHandler}/>
    </div>
    </div>
    <div className='form-group'>
    <label className='control-label col-sm-2'>Email:</label>
    <div className='col-sm-4'> 
    <input type='email' className='form-control' 
    placeholder='Enter Email' name='email' value={email} 
    onChange={changeHandler} />
    </div>
    </div>
    <div className='form-group'>
    <div className='control-label col-sm-2'>
    <input type='submit' className='btn btn-success' value='Submit'/>
    </div>
    </div>
    </form>
    
    </div>
  )
}

export default Home