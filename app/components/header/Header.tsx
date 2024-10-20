"use client";

import { FlexWrapper, HeaderWrapper, LanguageSwitcherItem, CustomImg, LanguageSwitcherWrapper } from "./style";
import Navigation from "../navigation/Navigation";
import { MaxContentWrapper } from "../max-content-wrapper/MaxContentWrapper";
import { useEffect, useState } from "react";
import { Languages, useLanguage } from "../../context/languageSwitcher";
import BurgerMenu from "../burger-menu/BurgerMenu";
import { logo } from "../../images";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { setLanguage } = useLanguage();
  const navigate = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onEngButtonClick = () => {
    setLanguage(Languages.EN);
  };
  const onDeButtonClick = () => {
    setLanguage(Languages.DE);
  };

  const handleLogoClick = () => {
    navigate.push("/");
  };

  return (
    <HeaderWrapper isScrolled={isScrolled}>
      <MaxContentWrapper>
        <FlexWrapper>
          <CustomImg onClick={handleLogoClick} src={logo} alt="logo" loading="lazy" />
          <Navigation />
          <BurgerMenu isScrolled={isScrolled} />
          <LanguageSwitcherWrapper>
            <div style={{ display: "flex", gap: "1rem" }}>
              <LanguageSwitcherItem isScrolled={isScrolled} onClick={onEngButtonClick}>
                {"EN"}
              </LanguageSwitcherItem>
              <LanguageSwitcherItem isScrolled={isScrolled} onClick={onDeButtonClick}>
                {"DE"}
              </LanguageSwitcherItem>
            </div>
          </LanguageSwitcherWrapper>
        </FlexWrapper>
      </MaxContentWrapper>
    </HeaderWrapper>
  );
};

export default Header;
