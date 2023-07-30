import React, { Children } from "react";
import Image from "next/image";

import * as S from "./styles";
import Bitcoin from "@/assets/Bitcoin.svg";
import Business from "@/assets/Business.svg";
import Chart from "@/assets/Chart.svg";
import Wallet from "@/assets/wallet.svg";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import Paragraph from "@/components/Typography/Paragraph/Paragraph";

export const Aside: React.FC = () => {
  const itensAside = [
    {
      icon: Wallet,
    },
    {
      icon: Business,
    },
    {
      icon: Bitcoin,
    },
    {
      icon: Chart,
    },
  ];

  return (
    <S.Container>
      {Children.toArray(
        itensAside.map((item) => (
          <Tooltip
            side="right"
            trigger={
              <Image src={item.icon} width={32} height={32} alt="icon" />
            }
            children={<Paragraph color="white">Lorem Ipsum</Paragraph>}
          />
        ))
      )}
    </S.Container>
  );
};
