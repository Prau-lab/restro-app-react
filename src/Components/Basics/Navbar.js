import React from 'react';

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {
                        menuList.map((curElem) => {
                            return (
                                <button className="btn-group__item" onClick={() => filterItem(curElem)}>{curElem}</button>
                            )
                        })
                    }
                    {/* whenever you are calling function and passing argument you should better add a flat arrow function. */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
