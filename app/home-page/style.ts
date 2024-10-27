import styled from "styled-components";
import Typography from "../components/typography/Typography";

export const Wrapper = styled.div`
  display: flex;
  gap: 7rem;
  overflow-x: auto;
  padding: 1rem;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;
export const ButtonWrapper = styled.div`
  margin: 3rem 0;
`;

export const HomePageSectionSecond = styled.div`
  background-color: #f3fdfe;
  padding: 5rem 0;
`;

export const SectionSecondHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 32rem;
  margin-left: 1rem;
  @media (min-width: 768px) {
    width: unset;
    margin-left: unset;
  }
`;

export const SectionSecondHeading = styled(Typography)``;

export const SectionSecondDescription = styled(Typography)``;

export const BoxesWrapper = styled.div`
  margin-top: 4.5rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    margin-top: 4.5rem;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`;

export const HomePageReviewSection = styled.div`
  margin: 10rem 0;
`;

export const HomePageReviewSectionHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-left: 1rem;
  @media (min-width: 768px) {
    margin-left: unset;
  }
`;
