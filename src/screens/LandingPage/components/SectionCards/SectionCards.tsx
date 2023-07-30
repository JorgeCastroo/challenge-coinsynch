import React from "react";

import * as S from "./styles";
import { Card } from "./components/Card/Card";
import Bitcoin from "@/assets/Bitcoin.svg";
import Business from "@/assets/Business.svg";
import Chart from "@/assets/Chart.svg";
import Laptop from "@/assets/Laptop.svg";
import Heading from "@/components/Typography/Heading/Heading";
import Paragraph from "@/components/Typography/Paragraph/Paragraph";
import { Button } from "@/components/Button/Button";

export const SectionCards: React.FC = () => {
  return (
    <S.Container>
      <S.WrappedCards>
        <S.WrappedCardsTop>
          <Card
            icon={Bitcoin}
            title="For your company"
            type="Crypto Solutions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
          />
          <Card
            icon={Business}
            title="For your company"
            type="Crypto Solutions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
          />
        </S.WrappedCardsTop>
        <S.WrappedCardsBottom>
          <Card
            icon={Chart}
            title="For your company"
            type="Crypto Solutions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
          />
          <Card
            icon={Laptop}
            title="For your company"
            type="Crypto Solutions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
          />
        </S.WrappedCardsBottom>
      </S.WrappedCards>
      <S.WrappedInfos>
        <Heading>Lorem ipsum </Heading>
        <Heading weight="medium" size="xxl" color="text">
          Lorem ipsum
        </Heading>
        <Paragraph css={{ fontSize: "16px" }} weight="light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </Paragraph>
        <Button size="large" css={{ width: "176px" }}>
          Sign up now
        </Button>
      </S.WrappedInfos>
    </S.Container>
  );
};
