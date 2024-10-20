import styled from "styled-components";
import Typography from "../typography/Typography";

export const MemberBoxWrapper = styled.div`
  @media (min-width: 768px) {
    width: 25rem;
  }
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MemberImage = styled.img`
  width: 17rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  align-items: center;
`;

export const Description = styled(Typography)`
  max-width: 17rem;
`;
