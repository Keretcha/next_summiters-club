import React from "react";
import styled from "styled-components";
import { colors } from "../../config/colors";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  primary?: boolean;
  width?: string;
  className?: string;
};

const StyledButton = styled.button<ButtonProps>`
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  color: ${({ primary }) => (primary ? "white" : "white")};
  border: none;
  background-color: ${({ primary }) => (primary ? "#78B8FF" : "#78B8FF")};
  border: 1px solid ${({ primary }) => (primary ? "unset" : "white")};
  border-radius: 1px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;

  &:hover {
    background-color: ${({ primary }) => (primary ? "unset" : "unset")};
    color: ${({ primary }) => (primary ? "#333" : colors.whiteColor)};
    border: 1px solid ${colors.whiteColor};
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

const Button: React.FC<ButtonProps> = ({ className, children, onClick, disabled, primary = false }) => {
  return (
    <StyledButton className={className} onClick={onClick} disabled={disabled} primary={primary}>
      {children}
    </StyledButton>
  );
};

export default Button;
