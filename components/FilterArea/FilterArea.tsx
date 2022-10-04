import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LabelFilter = styled.label`
  display: flex;
  width: 30%;
  align-items: center;
  gap: 10px;
  background-color: white;
  border-radius: 10px;
  padding: 5px 20px;
  color: #ff4d00;
  font-weight: 600;
`;

const InputFilter = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 2px;
  outline: none;
  padding-left: 5px;
`;

export const FilterArea = ({ setFilter }) => {
  return (
    <Wrapper>
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
