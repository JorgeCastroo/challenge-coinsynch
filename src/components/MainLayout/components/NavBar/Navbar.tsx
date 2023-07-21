import React from "react";

import * as S from "./style";
import Logo from "@/assets/Logo.svg";
import Image from "next/image";
import { Button } from "@/components/Button/Button";
import Paragraph from "@/components/Typography/Paragraph/Paragraph";
import { CryptoTicker } from "./components/CryptoTicker/CryptoTicker";

export const NavBar: React.FC = () => {
  return (
    <S.Navbar>
      <S.WrappedLogoAndNavigations>
        <Image src={Logo} width={121} alt="Logo" />
        <Paragraph>About us</Paragraph>
        <Paragraph>Top Cryptos</Paragraph>
      </S.WrappedLogoAndNavigations>
      <S.WrappedCryptosAndButtons>
        <CryptoTicker />
        <S.WrappedButtons>
          <Paragraph>Sign in</Paragraph>
          <Button>Sign up</Button>
        </S.WrappedButtons>
      </S.WrappedCryptosAndButtons>
    </S.Navbar>
  );
};
