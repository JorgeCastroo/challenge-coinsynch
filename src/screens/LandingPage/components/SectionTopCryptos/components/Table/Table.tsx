import React, { Children } from "react";

import * as S from "./styles";
import { HeaderTable } from "./components/HeaderTable/HeaderTable";
import { ItemTable } from "./components/ItemTable/ItemTable";
import { Bitcoins } from "@/types/bitcoins";

type TableProps = {
  data?: Bitcoins[];
};

export const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <S.Container>
      <thead>
        <HeaderTable />
      </thead>
      <tbody>
        {Children.toArray(
          data?.map((item, idx) => (
            <ItemTable
              index={idx + 1}
              price={item.price + ""}
              change={item.size + ""}
              type={item.taker_side}
              bitcoin={item.symbol_id}
            />
          ))
        )}
      </tbody>
    </S.Container>
  );
};
