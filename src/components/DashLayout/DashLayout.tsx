import React, { ReactNode } from "react";

import * as S from "./styles";
import { NavBar } from "./components/NavBar/Navbar";
import { Aside } from "./components/Aside/Aside";

type DashLayoutProps = {
  children: ReactNode;
};

export const DashLayout: React.FC<DashLayoutProps> = ({
  children,
}: DashLayoutProps) => {
  return (
    <S.Container>
      <NavBar />
      <S.Main>
        <Aside />
        <S.WrappedContent>{children}</S.WrappedContent>
      </S.Main>
    </S.Container>
  );
};
