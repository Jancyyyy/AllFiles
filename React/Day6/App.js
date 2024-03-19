import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
//import callMe from './00immutability';
//import callMe from './01_basic-setup';
//import callMe from './02_multiple-reducers';
//import callMe from './03_middleware';
import callMe from './04_Async-middleware';
function App() {
  callMe();
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
      </header>
    </div>
  );
}
export default App;
