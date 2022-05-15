/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import {ImageGroup} from "../../public/images";
import {Cont, Grid, CH1, CP, Ticker, Text1, Text2, Circle, TText, Down, Arrow, I} from "./Content.styles"

export default function Content() {
    return (
      <div>
        <Cont>
          <Grid>
            <CH1 cl="white">OWN</CH1>
            <CH1 cl="#ff3b2a">CRICKET</CH1>
            <CH1 cl="white">MOMENTS</CH1>
            <CP>
              Thousands of cricket fans from across the world are collecting
              Rarios - cricket's most memorable moments as licensed NFTs.
            </CP>
          </Grid>
          <I><Image src={ImageGroup} alt="" /></I>
        </Cont>

        <Ticker>
            <TText>
          <Text1>OFFICIAL PARTNER</Text1>
          <Circle></Circle>
          <Text2>ICC</Text2>
          <Circle></Circle>
          <Text1>CARRIBEAN PREMIERE LEAGUE</Text1>
          <Circle></Circle>
          <Text2>LANKA PREMIERE LEAGUE</Text2>
          <Circle></Circle>
          <Text1>RARIO</Text1>
          <Circle></Circle>
          </TText>
        </Ticker>

        <Down>
            <Arrow op="0.3"></Arrow>
            <Arrow op="0.6"></Arrow>
            <Arrow></Arrow>
        </Down>
      </div>
    );
}