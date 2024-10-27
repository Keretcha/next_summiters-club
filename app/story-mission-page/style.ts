import styled from "styled-components";
import Typography from "../../components/typography/Typography";

export const StoryMissionPageWrapper = styled.div``;

export const BottomSectionTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-indent: 30px;
  margin-left: 1rem;
  @media (min-width: 768px) {
    margin-left: unset;
  }
  margin-top: 15rem;
`;

export const ColoredTypography = styled(Typography)`
  color: #ff9d14;
  margin-top: 4rem;
  margin-bottom: 7rem;
`;
