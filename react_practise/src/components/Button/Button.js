// import React from 'react';
// // import PropTypes from 'prop-types';
// import './Button.css';
// function Button(props){
//     //destructing we can sue here or directly in props place
//     const{ variant='primary', children, ...rest}=props;
//     //children-content(child elements) passed btw the opening and closing
//     //tags (<Button>Hello(children)</Button>)
//     return(
//         <button className={`button ${variant}`} {...rest}>
//         {children}
//         </button>

//     )
// }
// export default Button


import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
// import ButtonStories from "../stories/Button.stories";
function Button(props){
    //destructing
    const{ variant='primary', children, ...rest}=props;
    return(
        <button className={`button ${variant}`} {...rest}>
        {children}
        </button>

    )
}
Button.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
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
  Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
  };
  
export default Button
