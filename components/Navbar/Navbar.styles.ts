import styled from "@emotion/styled"
import { css } from '@emotion/react'

export const Head = styled.div`
  width: 100%;
  height: 4vh;
  background: linear-gradient(82.21deg, #ff5a41 6.02%, #ff0101 93.98%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8vw;
  flex-wrap: wrap;

  @media only screen and (max-width: 800px) {
    height: 8vh;
  }
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: bolder;
  font-size: 1.2vw;
  line-height: 188%;
  color: #010544;
  margin-right: 2vw;

  @media only screen and (max-width: 800px) {
    font-size: 2vw;
  }
`;

export const Button = styled.button`
  background: #ffffff;
  border-radius: 1px;
  font-style: normal;
  font-weight: 900;
  font-size: 1.2vw;
  line-height: 188%;
  padding: 0 0.5vw;
  border: none;
  color: #010545;
  cursor: pointer;

  @media only screen and (max-width: 800px) {
    font-size: 2vw;
  }
`;

export const Icon = styled.div`
  border: 3px solid #010545;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 0.2vw;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

export const Nav = styled.div`
  padding: 3vh;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media only screen and (max-width: 800px) {
    padding: 3vh 3vw;
  }
`;

export const Li = styled.div`
  text-style: none;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.8vw;
  line-height: 120%;
  color: #ffffff;
  display: flex;

  @media only screen and (max-width: 800px) {
    font-size: 3vw;
    margin: 2vh 2vw;
  }
`;

export const A = styled.a`
text-style: none;
text-decoration: none;

color: #ffffff ;
`;

export const Span = css`
  margin-left: 0.5vw;
  height: 10px;
  padding: 0.1vw 0.2vw;
  font-weight: 700;
  font-size: 0.7vw;
  line-height: 120%;

  @media only screen and (max-width: 800px) {
    font-size: 1.5vw;
  }
`;

export const Beta = styled.div`
  ${Span}
  display: block;
  text-align: right;
`;

export const Span1 = styled.div`
  ${Span}
  
    background: radial-gradient( 108.27% 109.66% at 25.81% -21.43%, #ff996d 0%, #ff0000 100% );
    border-radius: 2px;
    text-align: center;
`;

export const Span2 = styled.div`
  ${Span}
  background: linear-gradient(180deg, #10ffc6 0%, #10ffff 100%);
  border-radius: 2px;
  color: #181818;
  text-align: center;
`;

export const Span3 = styled.div`
  font-weight: 600;
  font-size: 0.7vw;
  line-height: 120%;
  color: #ffffff;
  text-align: right;
  position: relative;
  right: 1vw;

  @media only screen and (max-width: 800px) {
    font-size: 1.2vw;
  }
`;

export const Login = styled.button`
  height: 4.3vh;
  width: 7.3vw;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  background: none;
  color: #ffffff;
  cursor: pointer;
  margin-right: 1vw;
  font-size: 0.8vw;

  @media only screen and (max-width: 800px) {
    height: 3vh;
    width: 10vw;
    font-size: 2vw;
    margin-right: 2vw;
  }
`;

export const Signup = styled.button`
  height: 4.3vh;
  width: 7.3vw;
  background: radial-gradient(
      79.55% 79.55% at 39.95% 8.68%,
      #ff996d 0%,
      #ff0000 100%
    ),
    #ff3d3d;
  background-repeat: no-repeat;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 0.8vw;

  @media only screen and (max-width: 800px) {
    height: 3vh;
    width: 10vw;
    font-size: 2vw;
  }
`;