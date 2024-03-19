import React from 'react'

const Edit = () => {
  return (
    <div>
      <h2 style={{"textAlign":"center"}}>Edit Form</h2>
      <form className='form-horizontal' autocomplete='off'>
      <div className='form-group'>
      <label className='control-label col-sm-2'>FirstName:</label>
      <div className='col-sm-4'>
      <input type='text' className='form-control' placeholder='FirstName' name='firstname'/>
      </div>
      </div>
      <div className='form-group'>
      <label className='control-label col-sm-2'>LastName:</label>
      <div className='col-sm-4'>
      <input type='text' className='form-control' placeholder='LastName' name='lastname'/>
      </div>
      </div>
      <div className='form-group'>
      <label className='control-label col-sm-2'>Email:</label>
      <div className='col-sm-4'>
      <input type='email' className='form-control' placeholder='Enter Email' name='email'/>
      </div>
      </div>
      <div className='form-group'>
      <div className='col-sm-offset-2 col-sm-10'>
      <input  type='submit' className='btn btn-success' value='Save'/>
      </div>
      </div>
      </form>
    </div>
  )
}

export default Edit
