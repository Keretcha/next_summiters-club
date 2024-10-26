import styled from "styled-components";
import Typography from "../typography/Typography";

type ImageTextWrapperType = {
  reverse?: boolean;
};

export const ImageTextWrapper = styled.div<ImageTextWrapperType>`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 8rem;
  width: 35rem;
  margin-left: 1rem;
  @media (min-width: 768px) {
    flex-direction: ${({ reverse }: { reverse?: ImageTextWrapperType }) => (reverse ? "row-reverse" : "row")};
    justify-content: space-between;
    width: unset;
    margin-left: unset;
  }
`;

export const ImageTextImg = styled.img`
  width: 35rem;
`;

export const Descrtiption = styled(Typography)`
  width: 35rem;
  margin-top: 6rem;
  @media (min-width: 768px) {
    width: 40rem;
  }
`;
