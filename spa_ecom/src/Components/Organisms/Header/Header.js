import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import SearchBar from "../../Molecules/SearchBar/SearchBar";
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
const Header = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
     return(
      <Navbar bg="black" data-bs-theme="dark" className="nav-class">
      <div className="header-border">
      <div className="header-name">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCqfw-CbImdrHUYd0gxB5XYVMnjRL7dFqIiw&usqp=CAU"
          className="header-image"
        />
        <h1 className="Header-text">ShopCart</h1>
      </div>
      <div className="Header-Content">
      <Container>
      <Nav className="me-auto">
        <Nav.Link href="/">HomePage</Nav.Link>
        <Nav.Link href="/Details">Details</Nav.Link>
        <Nav.Link href="/WhatsNew">WhatsNew</Nav.Link>
        <Nav.Link href="/Delivery">Delivery</Nav.Link>
        <Nav.Link href='Categories'>Categories</Nav.Link>
      </Nav>
    </Container>
      </div>
      <SearchBar />
    </div>
    </Navbar>
    )
     }
export default Header;


// import React from 'react';
// import { Link, Routes, Route } from 'react-router-dom';
// import SearchBar from '../Searchbar/SearchBar';
// import './Header.css';
// import Delivery from '../pages/Delivery';
// import Details from '../pages/Details';
// import WhatsNew from '../pages/WhatsNew';
// const Header = () => {
//   return (
//     <div className="header-border">
//       <div className="header-name">
//         <img
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCqfw-CbImdrHUYd@gxB5XYVMnjRL7dFqI1w&usqp=CAU"
//           className="header-image"
//           alt="ShopCart Logo"/>
//         <h1 className="Header-text">ShopCart</h1>
//       </div>
//       <div className="Header-Content">
//         {/* Use Links for navigation */}
//         <Link to="/">Delivery</Link>
//         <Link to="/details">Details</Link>
//         <Link to="/whatsnew">What's New</Link>
//         {/* Use Routes to define your route components */}
//       </div>
//       <SearchBar />
//     </div>
//   );
// };
 
// export default Header;


