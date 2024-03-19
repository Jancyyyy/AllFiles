/*import { Fragment } from "react";
const Car = props =>(
    <Fragment>
        <p>Name: {props.name}</p>
        <p>Price: {props.price}</p>
        <button onClick={props.incrementPrice}>&uarr;</button>
        <button onClick={props.decrementPrice}>&darr;</button>
    </Fragment>
)

export default Car;*/
import {Fragment} from 'react';
const Car=props=>{
    <Fragment>
        <p>Name:{props.name}</p>
        <p>Price:{props.price}</p>
        <button onClick={props.decrementPrice}>&uarr;</button>
        <button onClick={props.decrementPrice}>&darr;</button>
    </Fragment>
}
export default Car;