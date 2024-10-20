"use client";

import { useRouter } from "next/navigation";
import { footerData } from ".";
import { facebook, instagram, logo } from "../../images";
import { MaxContentWrapper } from "../max-content-wrapper/MaxContentWrapper";
import Typography from "../typography/Typography";
import ContactInfoIconBox from "./components/ContactInfoIconBox";
import { FooterWrapper, ContactInfoWrapper, ContactInfoIcons, SocialIcons, LogoImg } from "./style";
import Image from "next/image";

const Footer = () => {
  const navigate = useRouter();

  const handleLogoClick = () => {
    navigate.push("/");
  };
  return (
    <FooterWrapper>
      <MaxContentWrapper>
        <div>
          <LogoImg onClick={handleLogoClick} alt="logo" src={logo} loading="lazy" />
          <ContactInfoWrapper>
            <Typography fontSize="1.6rem">Contact information:</Typography>
            <ContactInfoIcons>
              {footerData.map((i) => {
                return <ContactInfoIconBox key={i.content} iconUrl={i.icon} content={i.content} />;
              })}
            </ContactInfoIcons>
          </ContactInfoWrapper>
        </div>
        <SocialIcons>
          <Image alt="facebook" src={facebook} loading="lazy" width={30} height={30} />
          <Image alt="instagram" src={instagram} loading="lazy" width={30} height={30} />
        </SocialIcons>
      </MaxContentWrapper>
    </FooterWrapper>
  );
};

export default Footer;
