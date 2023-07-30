import React from "react";

import * as S from "./styles";
import Logo from "@/assets/Logo.svg";
import Image from "next/image";
import { Button } from "@/components/Button/Button";
import Paragraph from "@/components/Typography/Paragraph/Paragraph";
import { CryptoTicker } from "./components/CryptoTicker/CryptoTicker";
import { useRouter } from "next/router";

export const NavBar: React.FC = () => {
  const { query, pathname, push } = useRouter();

  const handleSign = (value: "in" | "up") => {
    if (value === "in") {
      const updatedQuery = query;
      delete updatedQuery.modalSignUp;

      push({ pathname, query: { ...query, modalSignIn: true } });
    } else {
      const updatedQuery = query;
      delete updatedQuery.modalSignIn;

      push({ pathname, query: { ...query, modalSignUp: true } });
    }
  };

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
          <Button variant="text" onClick={() => handleSign("in")}>
            Sign in
          </Button>
          <Button onClick={() => handleSign("up")}>Sign up</Button>
        </S.WrappedButtons>
      </S.WrappedCryptosAndButtons>
    </S.Navbar>
  );
};
