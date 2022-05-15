/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Streams, Feed, Icons, Social} from "../Props";

import {
  Own,
  Trade,
  Engage,
  Banner,
  Stream1,
  Stream2,
  Buzz1,
  Buzz2,
  Subtract,
  Fan,
  Vision,
  Tag1,
  Tag2,
  Tag3,
  Tag4,
  Tag5,
  Tag6,
  Tag7,
  Tag8,
  Tag9,
  S1,
  S2,
  S3,
  S4,
  News,
  I1,
  I2,
  I3,
  SocialMedia1,
  SocialMedia2,
  SocialMedia3,
} from "../../public/images";

import {
  Div,
  H1,
  H2,
  H3,
  Text,
  Cont,
  Tile,
  Th,
  Tp,
  I,
  Button,
  CP,
  Tags,
} from "./Main.styles";


export default function Main() {
  return (
    <>
      <Div>
        <H1>HOW RARIO WORKS</H1>
        <Text>
          <H3>HOW RARIO WORKS</H3>
          <p>
            Own Cricket's greatest moments, trade them with other cricket fans
            and become part of an exclusive club.
          </p>
        </Text>

        <Cont>
          <Tile>
            <Image src={Own} alt="" width="350vw" height="350vh" />
            <Th>OWN</Th>
            <Tp>
              Own your fandom by buying video highlights from cricket's top
              players, touraments and teams.
            </Tp>
          </Tile>

          <Tile>
            <Image src={Trade} alt="" width="350vw" height="350vh" />
            <Th>TRADE</Th>
            <Tp>
              Want that special wicket by Zaheer? Go on to the marketplace and
              trade with other fans COMING SEP 2021
            </Tp>
          </Tile>

          <Tile>
            <Image src={Engage} alt="" width="350vw" height="350vh" />
            <Th>ENGAGE</Th>
            <Tp>
              Get access to an exclusive fan club to participate in quests and
              win rewards COMING DEC 2021
            </Tp>
          </Tile>
        </Cont>

        <Button>LEARN MORE</Button>
      </Div>

      <Div>
        <CP>CURRENT PACKS</CP>
        <I w="75vw" m="4vh 0" w1="90vw">
          <Image src={Banner} alt="" />
        </I>
      </Div>

      <Div>
        <H1>WATCH OUR LATEST STREAMS</H1>
        <Text>
          <H3>WATCH OUR LATEST STREAMS</H3>
        </Text>

        <Cont>
          <Streams
            description="Rashid Khan's AMAZING Six | Rario | NFT Launch Pack (Silver Set)"
            image={Stream1}
          />

          <Streams
            description="Rashid Khan's AMAZING Six | Rario | NFT Launch Pack (Silver Set)"
            image={Stream2}
          />

          <Streams
            description="Rashid Khan's AMAZING Six | Rario | NFT Launch Pack (Silver Set)"
            image={Stream1}
          />
        </Cont>
      </Div>

      <Div>
        <H1>LATEST BUZZ</H1>
        <Text>
          <H3>LATEST BUZZ</H3>
        </Text>

        <Cont>
          <Feed image={Buzz1} />
          <Feed image={Buzz2} />
          <Feed image={Buzz1} />
        </Cont>
      </Div>

      <Div>
        <H1>WE'VE GOT BIG PLANS</H1>
        <Text>
          <H3>WE'VE GOT BIG PLANS</H3>
          <I h="2.5vh" m="4vh 0">
            <Image src={Subtract} alt="" />
          </I>
          <p>What Rario has in store for you!</p>
        </Text>

        <I w="75vw">
          <Image src={Vision} alt="" />
        </I>

        <Button>READ THE RARIO VISION</Button>
      </Div>

      <Div>
        <H1>RARIO FANS</H1>
        <Text>
          <H3>RARIO FANS</H3>
        </Text>

        <Cont>
          <Feed image={Fan} />
          <Feed image={Fan} />
          <Feed image={Fan} />
        </Cont>
      </Div>

      <Div>
        <H2>Partners</H2>

        <Tags>
          <I w="8vw" m="5vh" w1="12vw">
            <Icons image={Tag1} />
          </I>
          <I w="8vw" m="5vh" w1="12vw">
            <Icons image={Tag2} />
          </I>
          <I w="8vw" m="5vh" w1="12vw">
            <Icons image={Tag3} />
          </I>
          <I w="8vw" m="5vh" w1="12vw">
            <Icons image={Tag4} />
          </I>
          <I w="8vw" m="5vh" w1="12vw">
            <Icons image={Tag5} />
          </I>
          <I w="8vw" m="5vh" w1="12vw">
            <Icons image={Tag6} />
          </I>
          <I w="8vw" m="5vh" w1="12vw">
            <Icons image={Tag7} />
          </I>
          <I w="8vw" m="5vh" w1="12vw">
            <Icons image={Tag8} />
          </I>
          <I w="8vw" m="5vh" w1="12vw">
            <Icons image={Tag9} />
          </I>
        </Tags>
      </Div>

      <Div>
        <H2>Supported By</H2>

        <Tags>
          <a
            href="https://polygon.technology/"
            target="_blank"
            rel={"noreferrer"}
          >
            <I w1="25vw" m="5vh" w="13vw">
              <Icons image={S1} />
            </I>
          </a>

          <a
            href="https://www.kingswaycap.com/"
            target="_blank"
            rel={"noreferrer"}
          >
            <I w1="25vw" m="5vh" w="13vw">
              <Icons image={S2} />
            </I>
          </a>

          <a
            href="https://www.animocabrands.com/"
            target="_blank"
            rel={"noreferrer"}
          >
            <I w1="25vw" m="5vh" w="13vw">
              <Icons image={S3} />
            </I>
          </a>

          <a href="https://presight.vc/" target="_blank" rel={"noreferrer"}>
            <I w1="25vw" m="5vh" w="13vw">
              <Icons image={S4} />
            </I>
          </a>
        </Tags>
      </Div>

      <Div>
        <H2>In The News</H2>

        <Cont>
          <Feed image={News} />
          <Feed image={News} />
          <Feed image={News} />
        </Cont>
      </Div>

      <Div>
        <H2>Industry Organisations</H2>

        <Tags>
          <I w1="30vw" m="5vh" w="18vw">
            <Icons image={I1} />
          </I>
          <I w1="30vw" m="5vh" w="18vw">
            <Icons image={I2} />
          </I>
          <I w1="30vw" m="5vh" w="18vw">
            <Icons image={I3} />
          </I>
        </Tags>
      </Div>

      <Div>
        <H1>JOIN THE RARIO COMMUNITY</H1>
        <Text>
          <H3>JOIN THE RARIO COMMUNITY</H3>
        </Text>

        <Tags>
          <a href="https://t.me/rariohq" target="_blank" rel={"noreferrer"}>
            <Social image={SocialMedia1} name="Telegram" />
          </a>

          <a
            href="https://discord.com/invite/rario"
            target="_blank"
            rel={"noreferrer"}
          >
            <Social image={SocialMedia2} name="Discord" />
          </a>

          <a
            href="https://twitter.com/rariohq"
            target="_blank"
            rel={"noreferrer"}
          >
            <Social image={SocialMedia3} name="Twitter" />
          </a>
        </Tags>
      </Div>
    </>
  );
}
