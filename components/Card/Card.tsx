import styled from "styled-components";
import { IData } from "../../interfaces/interfaces";

const CardStyle = styled.div`
  background-color: white;
  height: auto;
  width: 320px;
  padding: 20px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InternalContent = styled.div`
  background-color: #f6f6f6;
  width: 95%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const NameCrypto = styled.div`
  align-self: flex-end;
  margin-right: 20px;
  padding-bottom: 20px;
  font-weight: 600;
  color: #979797;
`;

const ImageCrypto = styled.img`
  width: 90px;
  height: 90px;
  margin-bottom: 10px;
  border-radius: 50%;
`;

const CategoryData = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const DataCrypto = styled.div`
  font-size: 16px;
  font-weight: 300;
  display: flex;
  gap: 10px;
`;

const Card: React.FC<{ data: IData }> = ({ data }) => {
  return (
    <CardStyle>
      <InternalContent>
        <NameCrypto>{data.name}</NameCrypto>
        <ImageCrypto src={data.image}></ImageCrypto>
      </InternalContent>
      <DataCrypto>
        <CategoryData>Fundação: </CategoryData>
        {data.year_established}
      </DataCrypto>
      <DataCrypto>
        <CategoryData>País: </CategoryData>
        {data.country}
      </DataCrypto>
      <DataCrypto>
        <CategoryData>Escore: </CategoryData>
        {data.trust_score}
      </DataCrypto>
      <DataCrypto>
        <CategoryData>Volume de trade (24h): </CategoryData>
        {data.trade_volume_24h_btc.toLocaleString("pt-br")}
      </DataCrypto>
    </CardStyle>
  );
};

export default Card;
