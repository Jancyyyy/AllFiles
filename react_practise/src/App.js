// import React from "react";
// import { Medium } from './Input/Input.stories';
// import {PrimaryA} from './Button/Button.stories';
// import { ImageCard } from "./Card/Card.stories";
// export default{
//     title:'Form/Subscription'
// }
// export const PrimarySubscription = () => (
//         <>
//             <Medium/>
//             <ImageCard/>
 
//             <br/>
//             <PrimaryA/>
//         </>
// )

import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import { PrimarySubscription } from './components/Subscription/cardsub.stories';
import HomePage from './components/pages/HomePage';
// im
// import Input from './COMP/Input';
function App() {
  return (
    <div>
    <PrimarySubscription/>
    <HomePage/>
    </div>
  );
}

export default App;
