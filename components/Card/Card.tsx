import Image from "next/image";
import styled from "styled-components";
import { IData } from "../../interfaces/interfaces";

const CardStyle = styled.div`
  background-color: #c0ac67;
  height: 100px;
  width: 90%;
  padding: 20px;
  border-radius: 10px;
`;

const Card: React.FC<{ data: IData }> = ({ data }) => {
  return (
    <CardStyle onClick={() => console.log(data)}>
      <div>{data.name}</div>
    </CardStyle>
  );
};

export default Card;
