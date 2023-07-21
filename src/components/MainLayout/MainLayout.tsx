import React, { ReactNode, useContext } from "react";

import * as S from "./styles";
import { NavBar } from "./components/NavBar/Navbar";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
}: MainLayoutProps) => {
  return (
    <S.Container>
      <NavBar />
      <S.Main>
        <S.WrappedContent>{children}</S.WrappedContent>
      </S.Main>
    </S.Container>
  );
};
export default MainLayout;
