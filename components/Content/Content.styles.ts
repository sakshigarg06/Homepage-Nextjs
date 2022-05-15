import styled from "@emotion/styled";
import { css } from "@emotion/react";

type CH1 = {
  cl?: string;
};

type Arrow = {
  op?: any;
};

export const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3vh 10vw 5vh 10vw;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Grid = styled.div`
  padding: 2vh;
  width: 55vw;
  position: relative;
  right: -11vw;
  top: -2vh;
  z-index: 2;
`;

export const CH1 = styled.div<CH1>`
  font-style: italic;
  font-weight: 900;
  font-size: 6.5vw;
  line-height: 112%;
  color: ${(props) => props.cl};
  overflow: hidden;
`;

export const CP = styled.div`
  width: 32vw;
  font-weight: 500;
  font-size: 1.2vw;
  line-height: 150%;
  color: #ffffff;
`;

export const Ticker = styled.div`
  height: 7vh;
  background: #002666;
  margin-top: 25px;
  overflow: hidden;
  width: 100%;
  line-height: 50px;
`;

export const TText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  animation: float 10s infinite linear;
  text-align: center;
  font-style: normal;
  font-weight: 900;
  font-size: 2vw;
  line-height: 100%;
  letter-spacing: 0.2em;
  vertical-align: middle;

  @media only screen and (max-width: 800px) {
    font-size: 3vw;
  }

  @keyframes float {
    0% {
      transform: translateX(30%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

export const Text1 = styled.div`
  background: linear-gradient(180deg, #10ffc6 0%, #10ffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  margin-right: 2vw;
  vertical-align: middle;
`;

export const Text2 = styled.div`
  -webkit-text-stroke: 1px white;
  color: transparent;
  display: inline-block;
  margin-right: 2vw;
  vertical-align: middle;
`;

export const Circle = styled.div`
  background: #ffffff;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  line-height: normal;
  margin-right: 2vw;
  vertical-align: middle;
`;

export const Down = styled.div`
  width: 100%;
  height: 100px;
  display: block;
  margin-top: 3vh;
`;

export const Arrow = styled.div<Arrow>`
  margin: auto;
  width: 0.5vw;
  height: 0.5vw;
  transform: rotate(-135deg);
  border: 3px solid;
  border-color: white transparent transparent white;
  opacity: ${(props) => props.op};

  @media only screen and (max-width: 800px) {
    width: 1vw;
    height: 1vw;
  }
`;

export const I = styled.div`
  width: 55vw;
`;
