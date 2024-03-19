import React from "react";
import Layout from "../../Molecules/Layout/Layout";
import { useNavigate } from "react-router-dom";
import HomePage from "../Home/HomePage";
import Footer from "../../Organisms/Footer/Footer";
 
const Categories=()=> {
  const navigate = useNavigate(); // Initialize useNavigate
 
  function CategoryItem({ name, imageUrl }) {
    return (
      <div
        style={{ margin: "10px", textAlign: "center" }}
        onClick={() => redirectToHomePage()} // Add onClick event for redirection
      >
        <img
          src={imageUrl}
          alt={`${name} category`}
          style={{ width: "100px", height: "100px", marginBottom: "18px" }}
        />
        <p>{name}</p>
      </div>
    );
  }
 
  // Function to redirect to the homepage
  function redirectToHomePage() {
    navigate("/"); // adjusting the path as needed
  }
 
  return (
    <Layout>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <h2>What are you shopping for today?</h2>
      </div>
 
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          fontWeight: "bold",
        }}
      >
      <CategoryItem name="Women" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWc2hO4zhIp-VBO1nMwSE5nxa7Mv6omymVJQ&usqp=CAU" />
      <CategoryItem name="Men" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_JaMFesv0nyt_g9AvpbSJsi44JViTfOcaA&usqp=CAU" />
      <CategoryItem name="Kids" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsIaHIYl3ndbFQCyO2q0ZIXdYMcGTeUazYzQ&usqp=CAU" />
      <CategoryItem name="Footwear" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRET2aVWLZITEtzRxSWn4d2mlckAiD1BdmfCQ&usqp=CAU"/>
      <CategoryItem name="jewelry" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTitSHU4ekkuCLhnljfgzrVWf6aOQAK3B7icQ&usqp=CAU"/>
      <CategoryItem name="Beauty" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooKtW-v4U8ArQ6I_j7WiIqHGl-KayjtEiIQ&usqp=CAU"/>
      <CategoryItem name='Decor' imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dtArC8D0og5UuVtzi9mr2z5Dqt_AOOen4o8JpYwzRhcMVBZxrCol_1T99yzdkeRVovU&usqp=CAU"/>
      <CategoryItem name="Home" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDQSej5rghUN2qz9TURo95Cz5LxqCKboP3qQ&usqp=CAU"/>
      </div> 
    </Layout>
  );
}
 
export default Categories;


// import React from "react";
// import Footer from "../../componunts/Header/Header";
// import Header from "../../componunts/Footer/Footer";
// import Layout from "../../Layout/Layout";

 
// function Categories() {
//   return (
//     <Layout>
//     <>
//       <div style={{ textAlign: "center", margin: "20px" }}>
//         <h2>What are you shopping for today?</h2>
//       </div>
//       <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap",fontWeight:"bold" }}>
//         <CategoryItem name="Women" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWc2hO4zhIp-VBO1nMwSE5nxa7Mv6omymVJQ&usqp=CAU" />
//         <CategoryItem name="Men" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_JaMFesv0nyt_g9AvpbSJsi44JViTfOcaA&usqp=CAU" />
//         <CategoryItem name="Kids" imageUrl="data:image/jpeg;base64,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" />
//         <CategoryItem name="Shoes" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRET2aVWLZITEtzRxSWn4d2mlckAiD1BdmfCQ&usqp=CAU"/>
//         <CategoryItem name="jewelry" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTitSHU4ekkuCLhnljfgzrVWf6aOQAK3B7icQ&usqp=CAU"/>
//         <CategoryItem name="Beauty" imageUrl="data:image/jpeg;base64,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"/>
//         <CategoryItem name="Decor" imageUrl="data:image/jpeg;base64,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"/>
//         <CategoryItem name="Home" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDQSej5rghUN2qz9TURo95Cz5LxqCKboP3qQ&usqp=CAU"/>
//       </div>
//     </>
//   </Layout>
//   );
// }
 
// function CategoryItem({ name, imageUrl }) {
//   return (
//     <div style={{ margin: "10px", textAlign: "center" }}>
//       <img src={imageUrl} alt={`${name} category`} style={{ width: "100px", height: "100px", marginBottom: "10px" }} />
//       <p>{name}</p>
//     </div>
//   );
// }
 
// export default Categories;









//import Layout from "../../Layout/Layout";
//function Categories(){
//     return(
//         <Layout>
//         <div>
//         <h3>This page will contain details of the products when they are delivered.</h3>
//         </div>
//         </Layout>
//     )
// }
// export default Categories;

// import React from "react";
// import Footer from "../../componunts/Header/Header";
// import Header from "../../componunts/Footer/Footer";
// import Layout from "../../Layout/Layout";
// import './Categories.css'
// function Categories() {
//   return (
//     <>
//       <Footer />
//       {/* Displaying a message */}
//       <div style={{ textAlign: "center", margin: "20px" }}>
//         <h2>What are you shopping for today?</h2>
//       </div>
 
//       {/* Displaying categories with images */}
//       <div className="text-style">
//       <div className="image-style">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi20TOaaKiALZBAAJdrcFqcb0E5GV1JGudvqKNNYO9muvxmEIwkJCr6dF67NRSeKLcqnQ&usqp=CAU" 
//         name="Women" />
//         <img src="" name="Men" imageUrl="url-to-men-image" />
//         <img src="" name="Kids" imageUrl="url-to-kids-image" />
   
//         {/* Add more categories as needed */}
//         </div>
//       </div>
//       <Header />
//     </>
//   );
// }
 
// // function CategoryItem({ name, imageUrl }) {
// //   return (
// //     <div style={{ margin: "10px", textAlign: "center" }}>
// //       <img src={imageUrl} alt={`${name} category`} style={{ width: "100px", height: "100px", marginBottom: "10px" }} />
// //       <p>{name}</p>
// //     </div>
// //   );
// // }
 
// export default Categories;