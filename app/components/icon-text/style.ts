import styled from "styled-components";
import Typography from "../typography/Typography";

export const IconTextWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  gap: 2rem;
  width: 35rem;
  align-items: center;
  @media (min-width: 768px) {
    width: 40rem;
  }
`;

export const Description = styled(Typography)`
  margin-top: 0.3rem;
`;
