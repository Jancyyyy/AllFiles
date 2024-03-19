import React from 'react';
import './Input.css';
import PropTypes from 'prop-types';
function Input(props)
{
    const{size= 'small', ...rest}=props;
    return(
        <div>
            <input className={`Input ${size}`} {...rest}/>
        </div>
    )
}
Input.propTypes = {
 
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * Size of the button
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
  };
 
  Input.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
 
  };
export default Input





// import React from "react";
// import './Buttonsize.css';
// function Buttonsize(props){
//     const{ size='medium',  ...rest}=props;
//     return(
//         <input className={`buttonsize ${size}`}{...rest}>
//         </input>
//     )
// }
// export default Buttonsize
