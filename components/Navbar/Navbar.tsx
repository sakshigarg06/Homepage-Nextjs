import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Logo} from "../../public/images";
import {
  Head,
  Text,
  Button,
  Icon,
  Nav,
  Li,
  Span1,
  Span2,
  Span3,
  Beta,
  Login,
  Signup,
  A,
} from "./Navbar.styles";

export default function Navbar() {
  return (
    <div>
      <Head>
        <Text>
          Marketplace is live! Sell your cards and buy your favourites in the
          Rario Marketplace
        </Text>
        <Button>
          Go to Marketplace <Icon></Icon>
        </Button>
      </Head>

      <Nav>
        <Li><Link href="/" passHref><A>
             <Image src={Logo} alt="" />
             </A></Link>
          <Beta>BETA</Beta>
        </Li>

        <Li>
          <Link href="/" passHref><A>PACKS</A></Link>
        </Li>

        <Li>
          <Link href="/" passHref><A>VAULT</A></Link>
        </Li>

        <Li>
          <Link href="/" passHref><A>MATCH CENTER</A></Link>
        </Li>

        <Li>
          <Link href="/" passHref><A>MARKETPLACE</A></Link>
          <Span1>NOW LIVE</Span1>
        </Li>

        <Li>
          <Link href="/" passHref><A>CLUB</A></Link>
          <Span2>COMING SOON</Span2>
        </Li>

        <Li>
          <Login>LOGIN</Login>
          <div>
          <Signup>SIGNUP</Signup>
          <Span3>By Invite Only</Span3></div>
        </Li>
      </Nav>
    </div>
  );
}
