import React, { Children } from "react";
import Image from "next/image";

import * as S from "./styles";
import { HeaderTable } from "./components/HeaderTable/HeaderTable";
import { ItemTable } from "./components/ItemTable/ItemTable";
import { Bitcoins } from "@/types/bitcoins";
import { Button } from "@/components/Button/Button";
import Heading from "@/components/Typography/Heading/Heading";
import Wallet from "@/assets/wallet.svg";
import { NotFound } from "@/components/NotFound/NotFound";

type TableProps = {
  data?: Bitcoins[];
};

export const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <S.Container>
      <S.TitleTable>
        <S.WrappedTitleAndIcon>
          <Image src={Wallet} width={32} height={32} alt="icon" />
          <Heading color="text" size="lg">
            My Wallet
          </Heading>
        </S.WrappedTitleAndIcon>
        <Button>Add crytpo</Button>
      </S.TitleTable>
      {data && data?.length > 0 ? (
        <S.ContainerTable>
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
        </S.ContainerTable>
      ) : (
        <NotFound />
      )}
    </S.Container>
  );
};
