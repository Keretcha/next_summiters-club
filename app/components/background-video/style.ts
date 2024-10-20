import styled from "styled-components";
import Typography from "../typography/Typography";

export const VideoBackgroundWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const VideoElement = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.9;
`;

export const CustomTypography = styled(Typography)`
  color: white;
  position: relative;
  z-index: 2;
`;

export const TitleWrapper = styled.div`
  width: 35rem;
  margin-left: 1rem;
  @media (min-width: 768px) {
    margin-left: 28rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
`;
