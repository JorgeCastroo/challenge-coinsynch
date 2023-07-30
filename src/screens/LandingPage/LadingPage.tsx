import React from "react";

import * as S from "./styles";
import { SectionDescription } from "./components/SectionDescription/SectionDescription";
import { SectionCards } from "./components/SectionCards/SectionCards";
import { SectionTopCryptos } from "./components/SectionTopCryptos/SectionTopCryptos";
import { Footer } from "./components/Footer/Footer";
import { DialogSignInAndSignUp } from "./components/DialogSignInAndSignUp/DialogSignInAndSignUp";

export const LandingPage: React.FC = () => {
  return (
    <S.Container>
      <SectionDescription />
      <SectionCards />
      <SectionTopCryptos />
      <Footer />
      <DialogSignInAndSignUp />
    </S.Container>
  );
};
