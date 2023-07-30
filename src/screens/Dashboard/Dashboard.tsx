import React from "react";

import * as S from "./styles";
import { GroupCards } from "./components/GroupCards/GroupCards";
import { Table } from "./components/Table/Table";
import { useGetTopCrytosQuery } from "@/services/bitcoins/bitcoins";

export const Dashboard: React.FC = () => {
  const { data } = useGetTopCrytosQuery({});

  return (
    <S.Container>
      <GroupCards />
      <Table data={data} />
    </S.Container>
  );
};
