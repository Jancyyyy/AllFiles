import React from "react";
import './Button.css';
const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
  
};
export default Button;













// import React from "react";
// import './Button.css';
// function Button() {
//   return  <button className="add-to-cart-btn">Add to Cart</button>
//   ;
// };

// export default Button;
