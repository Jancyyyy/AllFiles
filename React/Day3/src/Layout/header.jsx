import React from'react';
import Title from './Header/title';
const headerstyle={
    width:'10px',
    color:'gray',
    textAlign:'center',
    fontsize:'x-large',
    marginBottom: '20px'
}
const Header=()=>{
    return(
        <div>
            <header style={headerstyle}>
                Welcome to Zensar
            </header>
        </div>
    )
}
export default Header;
/*import React from 'react';
import Title from './Header/title';
const headerStyle = {
    textAlign: 'center',
    fontSize: 'xx-large',
    marginBottom: '20px'
}
const Header = (props) => {
    return (
        <div>
            <header style={headerStyle}>{/* Welcome to Zensar! *//* {props.headerTitle} */
                /*<Title titleTitle={props.headerTitle} />
                <input type='text' value={props.headerTitle}
                    onChange={(evt) => {
                        let newTitle = evt.target.value;
                        // props are immutable
                        // props.headerTitle = newTitle;
                        props.changeTitle(newTitle);// calling callback method
                    }} />
            </header>
        </div>
    )
}
export default Header;*/
