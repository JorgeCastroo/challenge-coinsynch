import React from "react";
import Image from "next/image";

import * as S from "./styles";
import Heading from "@/components/Typography/Heading/Heading";
import Paragraph from "@/components/Typography/Paragraph/Paragraph";
import { Button } from "@/components/Button/Button";
import CarouselOne from "@/assets/carouselOne.png";
import Wave from "@/assets/backgroundWave.png";

import CarouselTwo from "@/assets/carouselTwo.png";

export const SectionDescription: React.FC = () => {
  return (
    <S.Container>
      <S.WrappedTitleAndButton>
        <Heading size="xxl">Lorem ipsum dolor sit amet, consectetur</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </Paragraph>
        <Button size="large" css={{ minWidth: "275px", marginTop: "$2" }}>
          SIGN UP NOW
        </Button>
        <S.WrappedButtons>
          <Button
            color="primaryLigth"
            notRounded
            size="small"
            css={{ maxWidth: "95px" }}
          >
            Cryptos
          </Button>
          <Button
            color="primaryLigth"
            notRounded
            size="small"
            css={{ maxWidth: "95px" }}
          >
            NFTs
          </Button>
          <Button
            color="primaryLigth"
            notRounded
            size="small"
            css={{ maxWidth: "95px" }}
          >
            Games
          </Button>
        </S.WrappedButtons>
      </S.WrappedTitleAndButton>
      <Image src={CarouselOne} width={384} alt="carousel people" />
      <Image
        src={Wave}
        width={1913}
        alt="carousel people"
        style={{ position: "absolute", top: "450px", left: "-440px" }}
      />
    </S.Container>
  );
};
