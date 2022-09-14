import styled from "styled-components";

const ButtonArea = styled.div`
  width: 100vw;
  height: 15vh;
  padding: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonsArea = ({ children }) => {
  return <ButtonArea>{children}</ButtonArea>;
};
