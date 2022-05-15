import React from "react";
import Image from "next/image";
import { Cont, Div, P, Box1, Box2, Links, A, Line, I} from "../Footer/Footer.styles";
import { FooterLogo } from "../../public/images";

export default function Footer() {
  return (
    <>
      <Cont>
        <Div>
          <Box1>
              <P>
                © 2021 Rario Inc.
                <br />
                © 2021 ICC Properties Inc. All Rights Reserved.
                <br />
                Officially licensed product of the International Cricket Council
                Players.
                <br />
                This site is protected by reCAPTCHA and the Google Privacy Policy
                and Terms of Service apply.
            </P>
          </Box1>

          <Box2>
            <Links>
              <a
                href="https://medium.com/rario"
                target="_blank"
                rel={"noreferrer"}
              >
                <A>Blogs</A>
              </a>
              <a
                href="https://rario.com/terms-of-use"
                target="_blank"
                rel={"noreferrer"}
              >
                <A>Terms</A>
              </a>
              <a
                href="https://rario.com/privacy-policy"
                target="_blank"
                rel={"noreferrer"}
              >
                <A>Privacy</A>
              </a>
              <a
                href="https://rario.freshdesk.com/support/home"
                target="_blank"
                rel={"noreferrer"}
              >
                <A>Help</A>
              </a>
              <a
                href="https://rario.com/custom/press/p2KygpsMUAvoXLBqnsoxX"
                target="_blank"
                rel={"noreferrer"}
              >
                <A>Press</A>
              </a>
              <a href="">
                <A>Newsletters</A>
              </a>
              <a
                href="https://twitter.com/rariohq"
                target="_blank"
                rel={"noreferrer"}
              >
                <A>Twitter</A>
              </a>
              <a
                href="https://www.instagram.com/accounts/login/?next=/rariohq/"
                target="_blank"
                rel={"noreferrer"}
              >
                <A>Instagram</A>
              </a>
              <a
                href="https://www.youtube.com/channel/UCqo65RCtVWBvICDMF6COhLA/featured"
                target="_blank"
                rel={"noreferrer"}
              >
                <A>Youtube</A>
              </a>
              <a
                href="https://www.facebook.com/rarioglobal"
                target="_blank"
                rel={"noreferrer"}
              >
                <A>Facebook</A>
              </a>
              <a
                href="https://www.twitch.tv/rariocomms"
                target="_blank"
                rel={"noreferrer"}
              >
                <A>Twitch</A>
              </a>
            </Links>

            <Line></Line>

            <I w="7vw" w1="10vw" ><Image src={FooterLogo} alt=""/></I>
          </Box2>
        </Div>
      </Cont>
    </>
  );
}
