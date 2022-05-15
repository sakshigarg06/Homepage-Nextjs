import styled from "@emotion/styled";
import { css } from "@emotion/react";

type I = {
    h?: string;
    w?: string;
    m?:string;
    w1?:string;
}

export const Div = styled.div`
  margin: 18vh auto;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px){
      margin-top: 10vh;
  }
`;

export const H = css`
  font-style: normal;
  font-weight: 900;
  line-height: 100%;
  text-align: center;
  overflow: hidden;
`;

export const H1 = styled.text`
  ${H}
  font-size: 8vw;
  color: #ffffff;
  opacity: 0.1;
  z-index: 1;
  white-space: nowrap;
  text-overflow: clip;
  width: 100vw;

  @media only screen and (max-width: 800px) {
    font-size: 9vw;
  }
`;

export const H3 = styled.text`
${H}
  font-size: 4vw;
  -webkit-text-stroke: 2px white;
  color: transparent;
  z-index: 2;

  @media only screen and (max-width: 800px) {
    font-size: 5.5vw;
  }
}`;

export const Text = styled.div`
  position: relative;
  top: -7vh;
  text-align: center;

  @media only screen and (max-width: 800px) {
    top: -3vh;
  }
`;

export const Cont = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4vh;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Tile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  margin: 0 1.5vw;

  @media only screen and (max-width: 800px) {
    margin-top: 10vh;
  }
`;

export const Th = styled.text`
  ${H}
  font-size: 3.5vw;
  line-height: 120%;
  margin-bottom: 3vh;

  @media only screen and (max-width: 800px) {
    font-size: 6vw;
    margin-bottom: 1vw;
  }
`;

export const Tp = styled.text`
  ${H}
  font-weight: 400;
  font-size: 1.3vw;
  line-height: 120%;
  width: 25vw;

  @media only screen and (max-width: 800px) {
    font-size: 2.5vw;
    width: 50vw;
  }
`;

export const Button = styled.button`
  width: 27vw;
  height: 8vh;
  margin-top: 10vh;
  background: #ffffff;
  border-radius: 4px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 1.2vw;
  line-height: 120%;
  cursor: pointer;

  @media only screen and (max-width: 800px) {
    width: 35vw;
    height: 6vh;
  }
`;

export const CP = styled.text`
  ${H}
  font-size: 4vw;
  margin-bottom: 12vh;
  background: radial-gradient(
    35.17% 140.82% at 46.87% -20.55%,
    #ff773c 0%,
    #ff0000 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media only screen and (max-width: 800px){
      font-size: 6vw;
  }
`;

export const P = styled.text`
  font-weight: 400;
  font-size: 1.5vw;
  line-height: 120%;
  width: 30vw;
  color: #ffffff;
  margin-top: 3vh;

  @media only screen and (max-width: 800px) {
    font-size: 2.5vw;
    width: 90vw;
  }
`;

export const Box = styled.div`
  width: 25vw;
  margin: 0 2vw;

  @media only screen and (max-width: 800px) {
    width: 60vw;
    margin: 2.5vh 0;
  }
`;

export const I = styled.div<I>`
  margin: ${(props) => props.m};
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  text-decoration: none;

  @media only screen and (max-width: 800px) {
    width: ${(props) => props.w1};
  }
`;

export const H2 = styled.text`
  font-weight: 800;
  font-size: 4vw;
  line-height: 200%;
  text-align: center;
  color: #ffffff;
  opacity: 0.25;

  @media only screen and (max-width: 800px) {
    font-size: 7vw;
  }
`;

export const Tags = styled.div`
  margin: 5vh auto;
  width: 75vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const SM = styled.text`
  font-weight: 600;
  font-size: 1.2vw;
  line-height: 29px;
  text-align: center;
  color: #ffffff;
  margin-top: 1.5vh;

  @media only screen and (max-width: 800px) {
    font-size: 2.5vw;
  }
`;