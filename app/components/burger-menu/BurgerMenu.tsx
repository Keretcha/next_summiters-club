import { useState } from "react";
import { Burger, Menu, Nav, SubMenu, SubMenuItem, Expeditions } from "./style";

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
            <SubMenuItem href="/amaDablam">Amadablam</SubMenuItem>
            <SubMenuItem href="/Lobuche">Lobuche</SubMenuItem>
            <SubMenuItem href="/islandPeak">Island Peak</SubMenuItem>
            <SubMenuItem href="/everestBaseCamp">Everest base camp</SubMenuItem>
          </SubMenu>
        </div>
        <a href="/story">Our Story & Mission</a>
      </Menu>
    </Nav>
  );
};

export default BurgerMenu;
