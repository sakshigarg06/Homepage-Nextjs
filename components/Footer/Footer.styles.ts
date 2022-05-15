import styled from "@emotion/styled";
import { css } from "@emotion/react";

type I = {
  h?: string;
  w?: string;
  m?: string;
  w1?: string;
};

export const Cont = styled.div`
  background: linear-gradient(0deg, #ffffff, #ffffff), #151c29;
  margin-top: 18vh;
`;

export const Div = styled.div`
  width: 75vw;
  margin: 4vh auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  @media only screen and (max-width: 800px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const P = styled.text`
  font-style: normal;
  font-weight: 400;
  font-size: 0.7vw;
  line-height: 240%;
  color: #7b7b7b;

  @media only screen and (max-width: 800px) {
    font-size: 1vw;
  }
`;

export const Box1 = styled.div`
  width: 60vw;
`;

export const Box2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  @media only screen and (max-width: 800px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const Links = styled.div`
  margin: 1.5vh 1vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media only screen and (max-width: 800px) {
    text-align: center;
    justify-content: center;
  }
`;

export const A = styled.text`
  font-weight: 400;
  font-size: 0.85vw;
  line-height: 300%;
  color: #969696;
  margin: auto 1vw;
  text-decoration: none;

  @media only screen and (max-width: 800px) {
    font-size: 1.4vw;
  }
`;

export const Line = styled.div`
  opacity: 0.1;
  border: 1px solid #000000;
  transform: rotate(90deg);
  width: 5vw;

  @media only screen and (max-width: 800px) {
    transform: rotate(0deg);
    width: 60vw;
    margin-bottom: 2vh;
  }
`;

export const I = styled.div<I>`
  margin-left: 1vw;
  width: ${(props) => props.w};
  
  @media only screen and (max-width: 800px) {
    width: ${(props) => props.w1};
  }
`;
