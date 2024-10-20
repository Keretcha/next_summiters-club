import styled from "styled-components";
import Typography from "../../components/typography/Typography";

export const ToursPageWrapper = styled.div``;

export const ToursPageSectionFirst = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 35.5rem;

  @media (min-width: 768px) {
    padding-left: unset;
    padding-right: unset;
    width: unset;
  }
`;

export const Description = styled(Typography)`
  margin-top: 2rem;
`;

export const DescriptionFirst = styled(Typography)`
  margin-top: 4rem;
  width: 35rem;
  @media (min-width: 768px) {
    width: 65rem;
  }
`;

export const ToursPageSectionSecond = styled.div`
  margin-top: 10rem;
  padding-left: 1rem;
  @media (min-width: 768px) {
    padding-left: unset;
  }
`;

export const ToursPageSectionThird = styled.div`
  display: flex;
  gap: 5rem;
  flex-direction: column;
  padding-left: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: unset;
    padding-left: unset;
    margin-top: 20rem;
  }
`;

export const ToursPageSectionFour = styled.div``;

export const MoreInfoWrapper = styled.div`
  margin-top: 10rem;
  width: 35rem;
  padding-left: 1rem;
  @media (min-width: 768px) {
    width: unset;
    padding-left: unset;
  }
`;

export const MoreInfoTitles = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 5rem;
`;

export const InfoTitles = styled.p`
  font-size: 1.2rem;
  cursor: pointer;
`;

export const CustomTypography = styled(Typography)`
  text-align: center;
  text-indent: 3rem;
  font-size: 1.4rem;
  display: flex;
`;

export const DayByDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  width: 36rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: unset;
  }
`;
