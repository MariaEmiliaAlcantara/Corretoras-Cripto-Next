import { Children } from "react";
import styled from "styled-components";

const WrapperCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const End = styled.div`
  height: 100px;
`;

export const CardArea = ({ children }) => {
  return (
    <>
      <WrapperCards> {children}</WrapperCards>
      <End />
    </>
  );
};
