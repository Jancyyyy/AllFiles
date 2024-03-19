import React from 'react';

const imgStyle = {
    display:'block',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'20px',
    marginBottom:'40px',
    width:'50%',
    boxShadow:'25px 15px 50px black'
}

const Home = () =>(
    <div className='container-fluid'>
        <h1 className='text-center display-1 text-danger'>Indian Cricket Team</h1>
        <img src='teamindia.jpg' alt='Team India' style={imgStyle}
        className='img-fluid rounded-circle' />
    </div>
)

export default Home;