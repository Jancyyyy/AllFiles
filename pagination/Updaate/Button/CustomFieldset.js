import React from 'react';
import Table from './Table';
import Button from "../UI/Button";
import { FaPlus } from 'react-icons/fa';

const CustomFieldset = (props) => {
    const {heading, children, showBtn2 = false, showBtn1=false, showAddBtn=false,showTable=false, onBtn1Click, onBtn2Click, btn1, btn2, addBtn} = props

    return (
        <>
            <h1 className="m-3" >{heading}</h1>
            {showAddBtn && <Button customClass='px-4 float-end mb-2 me-4'><FaPlus className="me-3 mb-1"/>{addBtn}</Button>}
            <form style={{clear:"both"}}>

            {children}

            {showBtn1 && <Button click={onBtn1Click} customClass="px-4 m-3">{btn1}</Button>}

            {showBtn2 &&  <Button click={onBtn2Click} customClass="px-4 m-3">{btn2}</Button>}

            
            </form>
            {showTable && <Table/>}
        </>
    )
}


export default CustomFieldset;

/* heading={'Panel Type Master'} showBtn2 = {true} showBtn1={true} showAddBtn={true} showTable={true} onBtn1Click onBtn2Click btn1={'Search'} btn2={'Cancel'} addBtn={'Add Panel Type'} 
   heading={'Add Role Master'} showBtn1={true} showBtn2={true} btn1={'Submit'} btn2={'Cancel'} 
*/