import React from "react";

import * as S from "./style";
import Paragraph from "@/components/Typography/Paragraph/Paragraph";

export const CryptoTicker: React.FC = () => {
  return (
    <S.Container>
      {Array.from({ length: 6 }).map((_, index) => {
        return (
          <S.Crypto>
            <Paragraph>BIT</Paragraph>
            <Paragraph>R$23,62</Paragraph>
            <Paragraph color="success">+7,082</Paragraph>
          </S.Crypto>
        );
      })}
    </S.Container>
  );
};
