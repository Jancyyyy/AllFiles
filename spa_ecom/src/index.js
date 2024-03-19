import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import Header from "../../componunts/Header/Header";
// import Footer from "../../componunts/Footer/Footer";
// import Layout from "../../Layout/Layout";
// import './HomePage.css';
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
// import { faHeart as fasHeart, faStar } from '@fortawesome/free-solid-svg-icons';
// const Home = ({ imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQok-h1Luj3jjT4woPMDmrXYSfF4dztUMoKNI906e-hKC6KoON_7JOoiicRaQ&s",
//      productName="", 
//     //  description="This is a brief description of the product.", 
//      price="8909",
//      initialRating ="3",
//     }) => {
//     const [isFavorite, setIsFavorite] = useState(false);
//     const [rating, setRating] = useState(initialRating || 0);
//     const toggleFavorite = () => {
//      setIsFavorite(!isFavorite);
//    };
//    const handleStarClick = (clickedIndex) => {
//      setRating(clickedIndex + 1);
//    };
//    const stars = Array(5).fill(0);
//        return(
//         <Layout>
//         <div>
//         <div className="homepage-cards">
//           <div className="card-container">
//           <div className="heart-icon" onClick={toggleFavorite}>
//           <FontAwesomeIcon icon={isFavorite ? fasHeart : farHeart} color={isFavorite ? 'red' : 'black'} />
//           </div>
//           <img src='https://www.shutterstock.com/image-vector/3d-shopping-cart-cloud-online-260nw-2143411437.jpg' alt={productName} 
//           className="card-image" />
//           <div className="card-info">
//           <h2 className="card-name">{productName}</h2>
//           <span className="card-price">{price}</span>
//           </div>

//           <div className="card-rating">
//           {stars.map((_, index) => (
//             <FontAwesomeIcon
//               key={index}
//               icon={faStar}
//               color={index < rating ? 'yellow' : 'grey'}
//               onClick={() => handleStarClick(index)}
//             />
//           ))}
//           </div>
//           <button className="add-to-cart-btn">Add to Cart</button>
//           </div>
//         </div>
//         <Footer />
//       </div>
//       </Layout>
//     )
// }
// export default Home