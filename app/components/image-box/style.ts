import styled from "styled-components";
import { colors } from "../../config/colors";
import Typography from "../typography/Typography";
import Button from "../button/Button";
import Image from "next/image";

export const ImageBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-left: 2rem;
  padding-bottom: 5rem;
  width: 34rem;
  height: 48rem;
  // background-color: ${colors.secondaryColor};
  background-color: #dcf0f7;
  border-radius: 1rem;
  position: relative;
  gap: 2rem;

  @media (min-width: 768px) {
    width: 38rem;
  }
`;

export const BoxImage = styled(Image)`
  width: 34rem;
  border-radius: 0.5rem;
  margin: auto @media (min-width: 768px) {
    width: 36rem;
  }
`;

export const TextWrapper = styled.div`
  margin-top: 2rem;
  width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    width: 35rem;
  }
`;

export const CustomTypography = styled(Typography)`
  color: ${colors.secondaryColor};
`;

export const CustomButton = styled(Button)`
  position: absolute;
  bottom: 5rem;
  left: 2rem;
  border-radius: 1rem;
`;
