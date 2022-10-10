import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard.js"
import Navbar from './Navbar.js';


const Restro = () => {

    const uniqueList = [...new Set(Menu.map((curElem) => {
        return curElem.category;
    })
    ),
        "All",
    ];

    // useState hooks helps in getting data and it returns array of two element.

    const [menuData, setMenuData] = React.useState(Menu);
    const [menuList, setMenuList] = React.useState(uniqueList)

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((curElem) => {
            return curElem.category = category;
        });
        setMenuData(updatedList);
    };
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    );
};

export default Restro;
