import { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: JeanSunHo;
  color: red;
  font-size: 50px;
  height: 80px;
`;


const Button: FC<{ className?: string }> = ({ className = "" }) => (
  <StyledButton className={"funny-button " + className}>
    Hello from app2
  </StyledButton>
);
export default Button;

