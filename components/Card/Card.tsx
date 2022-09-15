import styled from "styled-components";
import { IData } from "../../interfaces/interfaces";

const CardStyle = styled.div`
  background-color: #c0ac67;
  height: auto;
  width: 90%;
  padding: 20px;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

const Card: React.FC<{ data: IData }> = ({ data }) => {
  return (
    <CardStyle>
      <Image src={data.image}></Image>
      <div>{data.name}</div>
      <div>
        <strong>Ano de criação: </strong>
        {data.year_established}
      </div>
      <div>
        <strong>País: </strong>
        {data.country}
      </div>
      <div>
        <strong>Pontuação: </strong>
        {data.trust_score}
      </div>
      <div>
        <strong>Volume de trade (24 horas): </strong>
        {data.trade_volume_24h_btc.toLocaleString("pt-br")}
      </div>
    </CardStyle>
  );
};

export default Card;
