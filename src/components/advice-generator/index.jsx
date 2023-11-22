import { styled } from "styled-components";
import { useState, useEffect } from "react";
import { getRandomAdvice } from "../../services/random-advice";
import divider from "../../assets/pattern-divider-desktop.svg";
import dice from "../../assets/icon-dice.svg";
import loadingImg from "../../assets/loading.gif";

export const AdviceGenerator = () => {
  const [advice, setAdvice] = useState({});
  const [isLoading, setLoading] = useState(true);

  const adviceData = async () => {
    setLoading(true);
    const data = await getRandomAdvice();
    setAdvice(data);
    setLoading(false);
  };

  useEffect(() => {
    adviceData();
  }, []);

  return (
    <CardAdvice>
      <Header>
        <Title>advice #{advice.id}</Title>
      </Header>
      <Content>
        {isLoading ? (
          <Loading src={loadingImg} />
        ) : (
          <Text>{advice.advice}</Text>
        )}
        <WrapperImg>
          <Img src={divider} />
        </WrapperImg>
        <Button onClick={adviceData}>
          <Img src={dice} alt="Dice" />
        </Button>
      </Content>
    </CardAdvice>
  );
};

const CardAdvice = styled.main`
  background: ${(props) => props.theme.colors.CardColor};
  box-shadow: 0 10px 100px rgba(0, 0, 0, 0.336);
  width: fit-content;
  padding: 3rem 3rem 5rem 3rem;
  border-radius: ${(props) => props.theme.borderRadius.default};
  max-width: 450px;
  position: relative;
`;

const Header = styled.header`
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.title};
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 2px;
`;

const Content = styled.div`
  text-align: center;
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 2.1rem;
`;

const WrapperImg = styled.div`
  margin-top: 3rem;
`;

const Img = styled.img`
  display: block;
  transition: all 900ms ease;
`;

const Button = styled.button`
  padding: 1.3rem;
  background: ${(props) => props.theme.colors.DiceColor};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  position: absolute;
  inset: 0;
  margin: auto auto 0 auto;
  transform: translateY(20px);

  &:hover {
    box-shadow: 1px 0 10px ${(props) => props.theme.colors.DiceColor};
  }

  &:hover img {
    transform: rotate(360deg);
  }
`;

const Loading = styled.img`
  margin: 0 auto;
  display: block;
  width: 60px;
`;
