import React, {useState} from 'react';
import Footer from './Layout/footer';
import Header from './Layout/header';

const divStyle = {
    width:'100%',
    height:'500px',
    border:'3px solid maroon'
}
const Layout = () => {
    const [title,setTitle]=useState('State and Props!');
    // setTimeout(()=>{
    //     setTitle('New Title with '+Date.now());
    // },1000)
    // Virtual DOM
    // Go to the development console (F12)- for most of the browsers
    // In console window, press escape and then click on rendering tab,
    // Select paint flashing checkbox.
    // It will show only specific part of the page
    // in green background that is changed.
    //const changeTitleMethod = (newTitle) => setTitle(newTitle);
    return (
        <div>
            <Header headerTitle={title}
                    changeTitle={(newTitle) => setTitle(newTitle)}/>
            <div style={divStyle} className='display-3 text-success'>
                This is simple div just to have some space in between!
            </div>
            {/* <h1>{title}</h1> */}
            <Footer />
        </div>
    )
}

export default Layout;
