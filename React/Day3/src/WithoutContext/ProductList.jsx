import React from "react";
import Cars from "./Cars";

const ProductList = (props) => {
    return (
        <div>
            <Cars
                cars={props.cars}
                incrementCarPrice={props.incrementCarPrice}
                decrementCarPrice={props.decrementCarPrice} />
                {/* Other products Mobiles, Electronics, Shoes etc. */}
        </div>
    )
}

export default ProductList;