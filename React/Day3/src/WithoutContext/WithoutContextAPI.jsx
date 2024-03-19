import React from "react";
import { useState } from "react";
import ProductList from "./ProductList";

const WithoutContextAPI = () =>{
    const [cars,setCars] = useState(
        {
                car001:{name:'Honda City',price:1000000},
                car002:{name:'BMW',price:6000000},
                car003:{name:'Tata Tigor',price:800000}
        }
    )
    const incrementCarPrice = function(selectedID){
        const localCars = Object.assign({},cars);
        localCars[selectedID].price = localCars[selectedID].price + 100000;
        setCars(localCars);
    }
    const decrementCarPrice = function(selectedID){
        const localCars = Object.assign({},cars);
        localCars[selectedID].price = localCars[selectedID].price - 100000;
        setCars(localCars);
    }
    return(
        <div>
            <ProductList
                cars = {cars}
                incrementCarPrice = {incrementCarPrice}
                decrementCarPrice = {decrementCarPrice} />
        </div>
    )
}

export default WithoutContextAPI;