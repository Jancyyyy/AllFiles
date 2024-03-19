import React from "react";
import MyProvider from "./MyProvider";
import ProductList from "./ProductList";
const WithContextAPI = () => {
    return (
        <div>
            <h1>WithContext API</h1>
            <MyProvider>
                <ProductList />
            </MyProvider>
        </div>
    )
}
export default WithContextAPI;
/*  im
*/