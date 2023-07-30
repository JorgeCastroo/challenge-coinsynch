import React, { Children } from "react";

import * as S from "./style";
import Paragraph from "@/components/Typography/Paragraph/Paragraph";
import { useGetTopCrytosQuery } from "@/services/bitcoins/bitcoins";
import { formatString } from "@format-string/core";

export const CryptoTicker: React.FC = () => {
  const { data } = useGetTopCrytosQuery({});

  return (
    <S.Container>
      {Children.toArray(
        data?.map((crypto) => {
          return (
            <S.Crypto>
              <Paragraph>{crypto.symbol_id}</Paragraph>
              <Paragraph>
                {" "}
                US$ {formatString({ type: "currency", value: crypto.price })}
              </Paragraph>
              <Paragraph color="success">
                {" "}
                {crypto.taker_side === "BUY" ? "+" : "-"}{" "}
                {formatString({ type: "currency", value: crypto.size })}
              </Paragraph>
            </S.Crypto>
          );
        })
      )}
    </S.Container>
  );
};
