import styled from "styled-components";

const HeaderMain = styled.div`
  background-color: #afa134;
  color: white;
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 24px;
  font-weight: bold;
`;

export const Header = () => {
  return <HeaderMain>Base de Dados - Criptomoedas</HeaderMain>;
};
