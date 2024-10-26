import styled from "styled-components";
import Typography from "../typography/Typography";

type BackgroundImageCompWrapperProps = {
  imgUrl: string;
};

export const BackgroundImageCompWrapper = styled.div<BackgroundImageCompWrapperProps>`
  background-image: url(${({ imgUrl }: BackgroundImageCompWrapperProps) => imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  opacity: 0.9;
`;

export const CustomTypography = styled(Typography)`
  color: white;
  position: relative;
  z-index: 2;
`;

export const Description = styled(Typography)`
  color: white;
  position: relative;
  z-index: 2;
  width: 20rem;
  display: block;
`;

export const TitleWrapper = styled.div`
  width: 35rem;
  margin-left: 1rem;

  @media (min-width: 768px) {
    margin-left: unset;
  }
`;

export const DescriptionWrapper = styled.div`
  width: 35rem;
  margin-top: 3rem;
  margin-left: 1rem;

  @media (min-width: 768px) {
    margin-left: unset;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  margin-left: 1rem;

  @media (min-width: 768px) {
    margin-left: unset;
  }
`;
