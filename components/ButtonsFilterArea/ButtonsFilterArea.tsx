import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 50vw;
  height: 20vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Button = styled.button`
  height: 30px;
  border: 1px solid #c0ac67;
  border-radius: 5px;
  background-color: ${(props) =>
    props.className == "selected" ? "#f7f2f2" : "white"};
`;

const LabelFilter = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
`;

const InputFilter = styled.input`
  height: 40px;
  width: 50%;
  border: 1px solid #c0ac67;
  border-radius: 5px;
  padding: 2px;
  outline: none;
  padding-left: 5px;
`;

export const ButtonsFilterArea = ({
  page,
  setPage,
  dataFiltered,
  setFilter,
}) => {
  const buttonsNumber = [1, 2, 3, 4, 5];
  return (
    <Wrapper>
      <Container>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          &lt; Página anterior
        </Button>
        {buttonsNumber.map((button) => (
          <Button
            key={button}
            className={page === button ? "selected" : ""}
            onClick={() => setPage(button)}
          >
            {button}
          </Button>
        ))}
        <Button
          disabled={dataFiltered && dataFiltered.length < 100}
          onClick={() => setPage(page + 1)}
        >
          Próxima Página &gt;
        </Button>
      </Container>
      <Container>
        <LabelFilter>
          Nome:
          <InputFilter
            placeholder="digite o nome da criptomoeda"
            onChange={(e: any) => setFilter(e.target.value)}
          />
        </LabelFilter>
      </Container>
    </Wrapper>
  );
};
