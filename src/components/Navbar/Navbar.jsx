import React,{useState, useEffect, useRef} from "react";
import styles from "./navbar.module.css";
import { RiUserLine,RiSearchLine,RiShoppingCartLine,RiMenuLine } from "react-icons/ri";
import { Menu } from "./menu";
import MenuItems from "./MenuItems";

function Navbar() {
  const [toggle, setToggle] = useState(true)

  const handleMenu = ()=>{
    setToggle((prev)=>!prev)
    console.log(toggle)
  }
  
  return (
    <header className={styles.navbar_container}>
      <div className={styles.navbar_logo}>
        <h1>Logo</h1>
      </div>

      <nav>
        <ul className={toggle ? styles.menu : styles.menu_open}>
          {Menu.map((menu, index)=>(<MenuItems items={menu} key={index}/>))}
        </ul>
      </nav>

      <div className={styles.navbar_icons}>
        <RiSearchLine/>
        <RiUserLine/>
        <RiShoppingCartLine/>
        <RiMenuLine onClick={handleMenu} className={styles.navbar_hamburguermenu}/>
      </div>
    </header>
  );
}

export default Navbar;
