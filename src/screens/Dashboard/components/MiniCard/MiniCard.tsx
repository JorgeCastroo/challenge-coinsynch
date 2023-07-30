import React from "react";

import * as S from "./styles";
import Heading from "@/components/Typography/Heading/Heading";
import Paragraph from "@/components/Typography/Paragraph/Paragraph";
import EduPhants from "@/assets/Eduphants.svg";
import Dash from "@/assets/dash.svg";
import Image from "next/image";

type MiniCardProps = {
  type?: "dash";
};

export const MiniCard: React.FC<MiniCardProps> = ({ type }) => {
  return (
    <S.Container>
      <S.SectionDescriptions>
        <S.WrappedTitle>
          {type ? (
            <>
              <Paragraph size="xxxs">Daily Variation</Paragraph>
              <Paragraph size="xxxs">ETH</Paragraph>
              <Paragraph color="success" size="xxxs">
                +5,65%
              </Paragraph>
            </>
          ) : (
            <>
              <Heading color="text" size="xxs">
                NFT’s NEWS
              </Heading>
              <Paragraph size="xxxs">
                New ElephantX NFT <br /> to be lauched!
              </Paragraph>
              <Paragraph color="primary" size="xxxs">
                Read more +
              </Paragraph>
            </>
          )}
        </S.WrappedTitle>
      </S.SectionDescriptions>
      <Image src={type ? Dash : EduPhants} height={94} width={187} alt="icon" />
    </S.Container>
  );
};
