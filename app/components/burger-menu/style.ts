// style.ts
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  position: relative;
  margin-right: 2rem;

  @media (min-width: 768px) {
    display: none; /* Hide burger menu on larger screens */
  }
`;

export const Expeditions = styled.p`
  font-size: 1.6rem;
  color: white;
  margin-left: 1.9rem;
`;

type BurgerProps = {
  isOpen: boolean;
  isScrolled?: boolean;
};

export const Burger = styled.div<BurgerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  z-index: 10; /* Ensure the burger button is above the menu when open */

  div {
    width: 2.1rem;
    height: 0.25rem;
    background-color: ${({ isScrolled }: { isScrolled:BurgerProps}) =>
      isScrolled ? "#39aab2" : "#fff"};;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:nth-child(1) {
       transform: ${({ isOpen }: { isOpen: BurgerProps}) =>
        isOpen ? "rotate(45deg)" : "rotate(0)"};
    }
    }

    &:nth-child(2) {
     opacity: ${({ isOpen }: { isOpen: BurgerProps }) => (isOpen ? "0" : "1")};
      transform: ${({ isOpen }: { isOpen: BurgerProps }) =>
        isOpen ? "translateX(20px)" : "translateX(0)"};
    }

    &:nth-child(3) {
       transform: ${({ isOpen }: { isOpen: BurgerProps }) =>
        isOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  };
    }
  }
`;

export const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #333;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
   transform: ${({ isOpen }: { isOpen: BurgerProps}) =>
    isOpen ? "translateX(0)" : "translateX(100%)"};;
  transition: transform 0.3s ease-in-out;
  z-index: 9; /* Ensure the menu appears above other content */

  a {
    padding: 2rem;
    text-align: left;
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #f1c40f;
    }
  }
`;

export const SubMenu = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: #444;
  padding-left: 1.5rem;
 max-height: ${({ isOpen }: { isOpen: BurgerProps }) =>
    isOpen ? "500px" : "0"} /* Maximum height to expand smoothly */
  overflow: hidden; /* Hide overflow when closed */
  transition: max-height 0.4s ease-in-out; /* Smooth transition for opening */
`;

export const SubMenuItem = styled.a`
  padding: 1rem;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #f1c40f;
  }
`;
