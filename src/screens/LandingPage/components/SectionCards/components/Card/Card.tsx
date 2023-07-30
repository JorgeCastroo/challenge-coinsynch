import React from "react";
import Image from "next/image";

import * as S from "./styles";
import Heading from "@/components/Typography/Heading/Heading";
import Paragraph from "@/components/Typography/Paragraph/Paragraph";

type CardProps = {
  icon: string;
  title: string;
  type: string;
  description: string;
};

export const Card: React.FC<CardProps> = ({
  icon,
  description,
  title,
  type,
}) => {
  return (
    <S.Container>
      <Image src={icon} width={64} alt="icon" />
      <Heading size="xs">{title}</Heading>
      <Heading weight="medium" color="text">
        {type}
      </Heading>
      <Paragraph>{description}</Paragraph>
    </S.Container>
  );
};
