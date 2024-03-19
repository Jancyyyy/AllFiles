import React from 'react';

const divStyle = {
    padding:'4rem',
    marginBottom: '22rem',
    marginTop: '15rem',
    backgroundColor: 'aqua',
    borderRadius: '25%',
    boxShadow:'5px 20px navy',
    color:'blue'
}

const PageNotFound = () => (
    <div className='container' style={divStyle}>
        <h1 className='text-center'>
            ERROR - 404 - Page Not Found!
        </h1>
    </div>
)

export default PageNotFound;