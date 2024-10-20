import styled from "styled-components";

export const ImageCarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 20rem;
  gap: 3rem;
  height: 65rem;
`;

export const DisplayContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const ImageCarouselWrapperMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20rem;
  gap: 3rem;
  height: 65rem;
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ImageMobile = styled.img`
  width: 35rem;
  border-radius: 5px;
  padding-left: 1rem;
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
`;
