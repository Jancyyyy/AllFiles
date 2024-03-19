import React from "react";
import Header from "./Header";
import {Home} from "./Home";
import Footer from "./Footer";
function App(){
  return(
    <div>
    <h2>without Default </h2>
    <Home/>
    <h2>With Default</h2>
    <Footer/>
    <Header/>
    </div>
  )
}
export default App;