import React from 'react';

const footerStyle={
    fontWeight:'bolder',
    fontSize:'xx-large',
    margin:'10px'
}

const Footer = () => (
    <footer className='text-center' style={footerStyle}>
        <h3 style={{textShadow:'5px 5px 6px red'}}>Copyright &copy; 2022, Zensar Technologies</h3>
    </footer>
)

export default Footer;