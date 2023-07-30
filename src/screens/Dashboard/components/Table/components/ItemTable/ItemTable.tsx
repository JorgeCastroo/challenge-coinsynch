import React from "react";
import Image from "next/image";

import * as S from "./styles";
import Paragraph from "@/components/Typography/Paragraph/Paragraph";
import { formatString } from "@format-string/core";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import IconTable from "@/assets/IconTable.svg";

type ItemTableProps = {
  index: number;
  bitcoin: string;
  price: string;
  change: string;
  type: "BUY" | "SELL";
};

export const ItemTable: React.FC<ItemTableProps> = ({
  bitcoin,
  change,
  index,
  price,
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
        <Tooltip
          side="bottom"
          trigger={<Image src={IconTable} width={16} height={16} alt="icon" />}
          children={
            <Paragraph color="white" css={{ textAlign: "center" }}>
              Transfer <br /> Crypto
            </Paragraph>
          }
        />
      </S.Cols>
    </S.Container>
  );
};
