import styled from "styled-components";

type HeaderWrapperProps = {
  isScrolled: boolean;
};

export const HeaderWrapper = styled.div<HeaderWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10rem;
  position: fixed;
  width: 100%;
  top: 0;
  transition: background-color 0.3s ease;
  background-color: ${({ isScrolled }) => (isScrolled ? "white" : "transparent")};
  z-index: 99;
  padding: 2rem 0;
  @media (min-width: 768px) {
    padding: unset;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LanguageSwitcherItem = styled.p<HeaderWrapperProps>`
  font-size: 1.4rem;
  color: ${({ isScrolled }) => (isScrolled ? "black" : "white")};
  cursor: pointer;
`;

export const CustomImg = styled.img`
  width: 15rem;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 22rem;
  }
`;

export const LanguageSwitcherWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
