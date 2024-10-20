import styled from "styled-components";
import Typography from "../typography/Typography";

export const DayByDayWrapper = styled.div`
  width: 35rem;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    width: 40rem;
  }
`;

export const Day = styled(Typography)`
  color: #ff9d14;
`;
