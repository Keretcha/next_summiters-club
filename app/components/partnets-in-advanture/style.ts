import styled from "styled-components";
import Typography from "../typography/Typography";

export const PartnersInAdvantureWrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SectionFirst = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SectionSecond = styled.div`
  display: flex;
  gap: 5rem;
  flex-direction: column-reverse;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-left: 1rem;
  max-width: 35rem;
  @media (min-width: 768px) {
    margin-left: unset;
    max-width: unset;
  }
`;

export const DescriptionFirst = styled(Typography)`
  line-height: 1.6em;
  width: 35rem;
  @media (min-width: 768px) {
    width: 60rem;
  }
`;

export const DescriptionSecond = styled(Typography)`
  line-height: 1.6em;
  margin-top: 3rem;
  width: 35rem;
  margin-left: 1rem;
  @media (min-width: 768px) {
    width: 60rem;
    margin-left: unset;
  }
`;

export const RoundedImageFirst = styled.img`
  width: 20rem;
  margin: auto;
`;
