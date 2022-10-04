import styled from "styled-components";

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  height: 6vh;
  margin: 10px 0 0 5vw;
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
`;

const SocialDiv = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  margin-left: 70vw;
  gap: 20px;
  height: 100%;
`;

const SocialLink = styled.a`
  width: 30px;
  height: 30px;
`;

const SocialLogo = styled.img`
  width: 30px;
  height: 30px;
`;

const ButtonInitial = styled.div`
  border: none;
  margin-left: 20px;
  color: #979797;
  cursor: pointer;
`;

const RegularDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7vh;
  width: 100%;
`;

const HeaderTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  letter-spacing: 0.8px;
  color: #111111;
  height: 100%;
  padding-left: 10px;
  font-size: 36px;
`;

const HeaderText = styled.div`
  font-family: "Poppins", sans-serif;
  color: #979797;
  width: 40vw;
  height: 100%;
  text-align: center;
  margin-top: 20px;
`;

export const Header = ({ setPage }) => {
  return (
    <>
      <HeaderTop>
        <LogoImage src="/logo.png" />
        <ButtonInitial onClick={() => setPage(1)}>Página Inicial</ButtonInitial>
        <SocialDiv>
          <SocialLink href="https://www.facebook.com">
            {" "}
            <SocialLogo src="/facebook.png"></SocialLogo>
          </SocialLink>
          <SocialLink href="https://www.instagram.com">
            {" "}
            <SocialLogo src="/instagram.svg"></SocialLogo>
          </SocialLink>
        </SocialDiv>
      </HeaderTop>
      <RegularDiv>
        <HeaderTitle>Corretoras de Criptomoedas Populares</HeaderTitle>
      </RegularDiv>
      <RegularDiv>
        <HeaderText>
          Encontre aqui uma base de dados completa sobre as principais
          corretoras de criptomoedas do mundo
        </HeaderText>
      </RegularDiv>
    </>
  );
};
