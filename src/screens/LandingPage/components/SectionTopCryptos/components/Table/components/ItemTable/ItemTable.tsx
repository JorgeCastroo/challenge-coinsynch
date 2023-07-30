import React from "react";

import * as S from "./styles";
import Paragraph from "@/components/Typography/Paragraph/Paragraph";
import { Button } from "@/components/Button/Button";
import { formatString } from "@format-string/core";

type ItemTableProps = {
  index: number;
  bitcoin: string;
  price: string;
  change: string;
  type: "BUY" | "SELL";
  icon?: string;
};

export const ItemTable: React.FC<ItemTableProps> = ({
  bitcoin,
  change,
  index,
  price,
  icon,
  type,
}) => {
  return (
    <S.Container>
      <S.Cols>
        <Paragraph weight="light">
          {index < 10 ? "0" : ""}
          {index}
        </Paragraph>
      </S.Cols>
      <S.Cols>
        <Paragraph weight="light">{bitcoin}</Paragraph>
      </S.Cols>
      <S.Cols>
        <Paragraph weight="light">
          US$ {formatString({ type: "currency", value: price })}
        </Paragraph>
      </S.Cols>
      <S.Cols>
        <Paragraph color={type === "BUY" ? "success" : "danger"} weight="light">
          {type === "BUY" ? "+" : "-"}
          {formatString({ type: "currency", value: change })}%
        </Paragraph>
      </S.Cols>
      <S.Cols>
        <Button color="tertiary">Buy</Button>
      </S.Cols>
    </S.Container>
  );
};
