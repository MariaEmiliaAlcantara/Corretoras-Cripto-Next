import { Children } from "react";
import styled from "styled-components";

const WrapperCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const CardArea = ({ children }) => {
  return <WrapperCards>{children}</WrapperCards>;
};
