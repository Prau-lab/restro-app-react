import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard.js"


const Restro = () => {
    // useState hooks helps in getting data and it returns array of two element.
    const [menuData, setMenuData] = React.useState(Menu);
    return (
        <>
        <MenuCard menuData={menuData} />
        </>
    );
};
 
export default Restro;
