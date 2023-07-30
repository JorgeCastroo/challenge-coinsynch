import React from "react";
import Image from "next/image";

import * as S from "./styles";
import Heading from "../Typography/Heading/Heading";
import Paragraph from "../Typography/Paragraph/Paragraph";
import IconNotFound from "@/assets/WalletNotFound.svg";

export const NotFound: React.FC = () => {
  return (
    <S.Container>
      <Image src={IconNotFound} width={82} height={82} alt="icon" />
      <Heading color="text">Nothing here yet...</Heading>
      <Paragraph>Add a crypto and start earning</Paragraph>
    </S.Container>
  );
};
