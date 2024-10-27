// import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../config/colors";
import Link from "next/link";

export const DisplayWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const NavItemsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

type navItemProps = {
  isScrolled?: boolean;
  to?: string;
};

export const NavItem = styled(Link)<navItemProps>`
  text-decoration: none;
  // color: ${({ isScrolled }: { isScrolled?: navItemProps }) => (isScrolled ? "#333" : colors.whiteColor)};;
  font-size: 1.6rem;
  :&hover  {
    color: ${colors.secondaryColor};
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: -2rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  width: 15rem;
  margin-top: 1rem;
`;

export const DropdownItem = styled.a`
  padding: 2rem;
  display: block;
  text-decoration: none;
  color: #000;
  font-size: 1.2rem;

  &:hover {
    background-color: #f1f1f1;
  }
`;
