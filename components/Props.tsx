import Image from "next/image";
import {Tile, P, Box, I, SM} from "./Main/Main.styles";

type streams = {
  description: string;
  image: any;
};

type buzz = {
    image: any;
}

type icons = {
    image: any;
}

type social = {
    image: any;
    name: string;
}

const Streams: (props: streams) => JSX.Element = ({
  description,
  image,
}) => {
  return (
    <>
      <Tile>
        <Image src={image} alt="" height="350vh" />
        <P>{description}</P>
      </Tile>
    </>
  );
};

const Feed: (props: buzz) => JSX.Element = ({image }) => {
  return (
    <>
      <Box>
        <Image src={image} alt="" height="500vh"/>
      </Box>
    </>
  );
};

const Icons: (props: icons) => JSX.Element = ({image }) => {
    return (
    <>
        <Image src={image} alt=""/>
    </>
    );
};

const Social: (props: social) => JSX.Element = ({ image, name }) => {
  return (
    <>
      <I m="auto 5vw">
          <I w="5vw" w1="10vw"><Image src={image} alt=""/></I>
          <SM>{name}</SM>
      </I>
    </>
  );
};

export {Streams, Feed, Icons, Social};