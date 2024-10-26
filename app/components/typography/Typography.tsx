import React from "react";
import styled from "styled-components";

export type TypographyProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  lineHeight?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  className?: string;
};

const StyledText = styled.span<TypographyProps>`
  font-size: ${({ fontSize }:TypographyProps) => fontSize || "inherit"};
  font-weight: ${({ fontWeight }:TypographyProps) => fontWeight || "normal"};
  color: ${({ color }:TypographyProps) => color || "inherit"};
  line-height: ${({ lineHeight }:TypographyProps) => lineHeight || "inherit"};
  text-align: ${({ textAlign }:TypographyProps) => textAlign || "left"};
`;

const Typography: React.FC<TypographyProps> = ({ children, as = "span", fontSize, fontWeight, color, lineHeight, textAlign, className }) => {
  return (
    <StyledText as={as} fontSize={fontSize} fontWeight={fontWeight} color={color} lineHeight={lineHeight} textAlign={textAlign} className={className}>
      {children}
    </StyledText>
  );
};

export default Typography;
