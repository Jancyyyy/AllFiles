import React from 'react';
const footerstyle={
    width:'100%',
    margin:'10px',
    color:'pink',
    fontsize:'xx-large',
    textAlign:'right'
}
const Footer=()=>{
    return(
        <div>
            <footer style="footerstyle">
                copyright &copy;2022<strong>Zensar Technologies</strong> 
            </footer>
        </div>
    )
}
export default Footer;
/*import React from 'react';
const footerStyle={
    textAlign:'right',
    fontSize:'x-large',
    color:'peachpuff',
    backgroundColor:'maroon',
    margin:'10px',
    width:'100%'
}
const Footer = () => {
    return (
        <div>
            <footer style={footerStyle}>
                Copyright &copy; 2022 <strong>Zensar Technologies</strong>
            </footer>
        </div>
    )
}
export default Footer;*/