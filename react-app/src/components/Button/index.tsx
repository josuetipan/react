import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};

type btnProps = {
  isLoading?: boolean;
};
const Btn = styled.button<btnProps>`
  background-color: ${(props) => (props.isLoading ? `gray` : `red`)};
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  margin-right: 10px;
  margin-left: 10px;|
  color: red;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;
function Button({ children, isLoading, onClick }: Props) {
  console.log(isLoading);
  return (
    <Btn onClick={onClick} disabled={isLoading} isLoading={isLoading}>
      {isLoading ? "Cargando..." : children}
    </Btn>
  );
}

export default Button;
