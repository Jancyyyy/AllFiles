import React from "react";
import DisplayScore from "./DisplayScore";
import MyProvider from "./MyProvider";
// import Abc from './Abc'
// import ProductList from "./ProductList";
const WithContextAPI = () => {
    return (
        <div>
            <h1>WithContext API</h1>
            <MyProvider >
                {/* <ProductList /> */}
                <DisplayScore/>
                {/* <Abc/> */}
            </MyProvider>
        </div>
    )
}
export default WithContextAPI;