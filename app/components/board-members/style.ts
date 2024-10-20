import styled from "styled-components";
import Typography from "../typography/Typography";

export const BoardMembersWrapper = styled.div`
  margin-top: 10rem;
  margin-left: 1rem;
  width: 35rem;
  @media (min-width: 768px) {
    margin-left: unset;
    width: unset;
  }
`;

export const BoardMembersHeading = styled(Typography)`
  margin-bottom: 2rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MembersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  align-items: center;
  gap: 4rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
