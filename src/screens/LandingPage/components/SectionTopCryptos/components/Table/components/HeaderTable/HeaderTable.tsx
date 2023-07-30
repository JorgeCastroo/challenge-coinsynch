import React from "react";

import * as S from "./styles";
import Paragraph from "@/components/Typography/Paragraph/Paragraph";

export const HeaderTable: React.FC = () => {
  return (
    <S.Container>
      <S.Cols>
        <Paragraph weight="light">#</Paragraph>
      </S.Cols>
      <S.Cols>
        <Paragraph weight="light">Crypto</Paragraph>
      </S.Cols>
      <S.Cols>
        <Paragraph weight="light">Price</Paragraph>
      </S.Cols>
      <S.Cols>
        <Paragraph weight="light">Change</Paragraph>
      </S.Cols>
      <S.Cols>
        <Paragraph weight="light">Trade</Paragraph>
      </S.Cols>
    </S.Container>
  );
};
