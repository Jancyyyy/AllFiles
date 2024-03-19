/*import React from 'react';
import {useState} from 'react';
import MyContext from './MyContext';
const MyProvider=(props)=>{
const [cars, setCars]=useState(
    {
        car001:{ name:'Honda City',price:'10000000'},
        car002:{name:'BMW',price:'6000000'},
        car003:{name:'Tata Tigor',price:'8000000'}
    }
)
return(
MyContext.Provider
value={{
cars:cars,


}}
)
}
export default MyProvider;*/
import React from "react";
import { useState } from "react";
import MyContext from "./MyContext";
const MyProvider = (props) => {
    const [cars, setCars] = useState(
        {
            car001: { name: 'Honda City', price: 1000000 },
            car002: { name: 'BMW', price: 6000000 },
            car003: { name: 'Tata Tigor', price: 800000 }
        }
    )
    return (
        <MyContext.Provider
            value={{
                cars: cars,
                incrementCarPrice: function (selectedID) {
                    const localCars = Object.assign({}, cars);
                    localCars[selectedID].price = localCars[selectedID].price + 100000;
                    setCars(localCars);
                },
                decrementCarPrice: function (selectedID) {
                    const localCars = Object.assign({}, cars);
                    localCars[selectedID].price = localCars[selectedID].price - 100000;
                    setCars(localCars);
                }
            }}>
                {props.children}
        </MyContext.Provider>
    )
}
export default MyProvider;