import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  top: 88vh;
  height: 12vh;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  position: fixed;
  background-color: #f2f2f2;
`;

const Development = styled.div`
  font-size: 14px;
  color: #979797;
  font-weight: 300;
`;

const ButtonPageDiv = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

const ButtonPage = styled.button`
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => (props.disabled ? "grey" : "black")};
  font-size: 14px;
  height: 40px;
  width: 180px;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => (props.disabled ? "#fafafa" : "white")};
`;

const ButtonNumberDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ButtonNumber = styled.button`
  justify-self: end;
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) =>
    props.className == "selected" ? "#ff4d00bc" : "white"};
`;

const ArrowImage = styled.img`
  width: 30px;
`;

export const Footer = ({ page, setPage, dataFiltered }) => {
  const buttonsNumber = [1, 2, 3, 4, 5];
  return (
    <Container>
      <Development>Desenvolvido por Maria Emilia Alcantara</Development>
      <ButtonPageDiv>
        <ButtonPage disabled={page === 1} onClick={() => setPage(page - 1)}>
          <ArrowImage src="/previousArrow.svg" alt="" /> Página anterior
        </ButtonPage>
        <ButtonPage
          disabled={dataFiltered && dataFiltered.length < 100}
          onClick={() => setPage(page + 1)}
        >
          Próxima Página <ArrowImage src="/nextArrow.svg" />
        </ButtonPage>
      </ButtonPageDiv>
      <ButtonNumberDiv>
        <p>Página: </p>
        {buttonsNumber.map((button) => (
          <ButtonNumber
            key={button}
            className={page === button ? "selected" : ""}
            onClick={() => setPage(button)}
          >
            {button}
          </ButtonNumber>
        ))}
      </ButtonNumberDiv>
    </Container>
  );
};
