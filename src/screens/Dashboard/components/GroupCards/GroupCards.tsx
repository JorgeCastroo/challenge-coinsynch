import React from "react";

import * as S from "./styles";
import { Card } from "../Card/Card";
import { MiniCard } from "../MiniCard/MiniCard";

export const GroupCards: React.FC = () => {
  return (
    <S.Container>
      <Card />
      <MiniCard type="dash" />
      <MiniCard />
    </S.Container>
  );
};
