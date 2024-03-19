import { Component, useRef } from 'react';
import './App.css';
import CheckBox from './checkbox';
import Main from './controlled_uncontrolled';
import { Counter } from './Counter';
import Greet from './greet_props';
import Hello from './hello';
import Todos from './Todos';
import x, { welcome } from './welcome';

function App() {
  return (
    <div className="App">


      {/*<Main />*/}
      <Counter />

      {/*<Todos /> */}

      {/*<Counter />*/}

       {/*<CheckBox /> */}

       {/*<Greet />
      <Greet name='Thorupunuri'/> 
       <h1>Hello React.js!</h1>
      <Hello/>
      Value of x is {x}!
  {welcome} */}
    </div>
  );
}

export default App;
