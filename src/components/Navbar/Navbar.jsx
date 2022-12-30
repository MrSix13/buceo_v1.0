import React,{useState, useEffect, useRef} from "react";
import styles from "./navbar.module.css";
import { RiUserLine,RiSearchLine,RiShoppingCartLine } from "react-icons/ri";
import { Menu } from "./menu";
import MenuItems from "./MenuItems";

function Navbar() {

  return (
    <header className={styles.navbar_container}>
      <div>
        logo
      </div>

      <nav>
        <ul className={styles.menu}>
          {Menu.map((menu, index)=>(<MenuItems items={menu} key={index}/>))}
        </ul>
      </nav>

      <div className={styles.navbar_icons}>
        <RiSearchLine/>
        <RiUserLine/>
        <RiShoppingCartLine/>
      </div>
    </header>
  );
}

export default Navbar;
