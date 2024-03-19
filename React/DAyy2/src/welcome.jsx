import "./welcome.css";
import nStyles from './welcome.module.css'

// CSS Module
const hStyle = {
    fontSize: '15px',
    border: '5px solid navy',
    color: 'red'
}

const x = 5;
export default x;

export const welcome = (
    <div>
        <h3>Result is 4*5!</h3>
        {/*Inline Style*/}
        <h3 style={{ color: 'blue', backgroundColor: 'peachpuff' }}>Welcome to React.js!</h3>

        {/*from .css file*/}
        <h3 className="myClass text-success">Welcome to React.js!</h3>

        <h3 style={hStyle}>Welcome to React.js!</h3>

        <h3 className={nStyles.newClass}>
            <b className='text-success'>Welcome to React.js!</b>
        </h3>
    </div>
)