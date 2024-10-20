import styled from "styled-components";
import Typography from "../typography/Typography";

export const ExpeditionInfoWrapper = styled.div`
  background-color: #dcf0f7;
  margin-top: 13rem;
  padding-top: 4.7rem;
  border-radius: 1.5rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20rem;
  padding-right: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
    padding-right: unset;
  }
`;

export const InfoIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.3rem;
`;

export const Icon = styled.img`
  width: 5rem;
`;

export const Title = styled(Typography)`
  color: #ff9d14;
`;

export const Description = styled(Typography)``;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 5rem 0;
  margin-bottom: 4.7rem;
  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const SecondSection = styled.div`
  background-color: #ffffff;
  width: 30rem;
  height: 100%;
  border-radius: 1rem 1rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #dcf0f7;
  width: 17rem;
  padding: 0.3rem;
  margin-top: 4rem;
`;

export const SeasonsDurationAndPrice = styled(Typography)`
  color: #ff9d14;
  margin-top: 2rem;
`;

export const DescriptionWrapper = styled.div`
  padding: 2rem 2rem;
`;
