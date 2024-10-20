import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: #b2c2c8;
  padding: 5rem 0;
  margin-top: 5rem;
`;

export const ContactInfoWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-left: 1rem;
  width: 20rem;

  @media (min-width: 768px) {
    margin-left: unset;
  }
`;

export const ContactInfoIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SocialIcons = styled.div`
  float: right;
  margin-top: -2rem;
  display: flex;
  gap: 1rem;
  margin-right: 1rem;

  @media (min-width: 768px) {
    margin-right: unset;
  }
`;

export const LogoImg = styled.img`
  width: 15rem;
  cursor: pointer;
  margin-left: 1rem;

  @media (min-width: 768px) {
    margin-left: unset;
  }
`;
