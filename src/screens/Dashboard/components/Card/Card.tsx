import React from "react";

import * as S from "./styles";
import Heading from "@/components/Typography/Heading/Heading";
import { Icon } from "@/components/Icon/Icon";
import { colors } from "@/styles/tokens/colors";
import Paragraph from "@/components/Typography/Paragraph/Paragraph";

export const Card: React.FC = () => {
  return (
    <S.Container>
      <S.SectionDescriptions>
        <S.BackgroundIcon>
          <Icon name="close" size={22} color={colors["primary-500"]} />
        </S.BackgroundIcon>
        <S.WrappedTitle>
          <Heading color="text">Balance in US$</Heading>
          <Paragraph>(aproximately)</Paragraph>
        </S.WrappedTitle>
      </S.SectionDescriptions>
      <S.SectionBalance>
        <Heading color="text" weight="bold" size="lg">
          $32.256,70
        </Heading>
      </S.SectionBalance>
    </S.Container>
  );
};
