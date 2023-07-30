import React from "react";
import { useRouter } from "next/router";

import * as S from "./styles";
import Heading from "@/components/Typography/Heading/Heading";
import { Table } from "./components/Table/Table";
import { Footer } from "./components/Footer/Footer";
import { useGetTopCrytosQuery } from "@/services/bitcoins/bitcoins";

export const SectionTopCryptos: React.FC = () => {
  const { query } = useRouter();
  const { data } = useGetTopCrytosQuery({ limit: query.limit as string });

  return (
    <S.Container>
      <S.Content>
        <Heading color="text" size="xl">
          Top Cryptos
        </Heading>
        <Table data={data} />
        <Footer />
      </S.Content>
    </S.Container>
  );
};
