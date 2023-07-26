import React from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from"./menuCard.js";

const Restro = () => {
  const [menuData,setmenuData]=React.useState(Menu);

  // return <menucard menuData={menuData} />
  return (
    <>
      {/* <h1>Hello</h1> */}
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restro;
