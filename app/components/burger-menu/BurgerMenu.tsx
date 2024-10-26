import { useState } from "react";
import { Burger, Menu, Nav, SubMenu, SubMenuItem, Expeditions } from "./style";
import Link from "next/link";

type BurgerMenuProps = {
  isScrolled?: boolean;
};

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Nav>
      <Burger isScrolled={isScrolled} isOpen={isOpen} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </Burger>
      <Menu isOpen={isOpen}>
        <a href="/">Home</a>
        <div>
          <Expeditions onClick={toggleDropdown}>
            Expeditions {isDropdownOpen ? "▲" : "▼"}
          </Expeditions>
          <SubMenu isOpen={isDropdownOpen}>
            <Link href={"/amadablam"}><SubMenuItem>Amadablam</SubMenuItem></Link>
            <Link href={"/lobuche"}><SubMenuItem>Lobuche</SubMenuItem></Link>
            <Link href={"/islandpeak"}><SubMenuItem >Island Peak</SubMenuItem></Link>
            <Link href={"/everest"}><SubMenuItem>Everest base camp</SubMenuItem></Link>
          </SubMenu>
        </div>
        <a href="/story">Our Story & Mission</a>
      </Menu>
    </Nav>
  );
};

export default BurgerMenu;
