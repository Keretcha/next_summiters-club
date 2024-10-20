import styled from "styled-components";
import Typography from "../typography/Typography";
import { colors } from "../../config/colors";

export const ReviewComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45rem;
  gap: 1rem;
  margin-top: 7rem;
  width: 300px; /* Adjust the width of each review item */
  flex-shrink: 0; /* Ensures the items don’t shrink */
  padding: 1rem;
  background-color: #f3fdfe;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Description = styled(Typography)``;

export const UserInfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const UserImage = styled.img`
  width: 5rem;
  height: 4rem;
  object-fit: cover;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`;

export const UserName = styled(Typography)`
  color: ${colors.secondaryColor};
`;

export const UserDetails = styled(Typography)``;
