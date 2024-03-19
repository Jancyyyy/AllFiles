import React from 'react'

// // Class Component
// export default class Hello extends React.Component {
//     render() {
//         return <h1 id='hOne'>Hello World - using typescript - class component!</h1>;
//     }
// }

// Functional Component
export default function Hello(){    
        return <h1 id='hOne'>Hello World - using typescript - functional component!</h1>;
}

// Functional Component
export function BruceImage(){    
    return <img src="bruce.jpg" height="200px" width="200px"
    className="rounded-circle" alt='Bruce Lee'></img>;
}

// Functional components - recommended

// Benefits
// Code is easier to read and understand
// Easy to debug
// Easy to test - don't have to worry about any hidden state
// Better in performance - No state, No lifecycle hooks/ methods

