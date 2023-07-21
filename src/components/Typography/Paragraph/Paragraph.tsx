import React, { ElementType } from "react";

import { VariantProps } from "@stitches/react";

import * as S from "./styles";
import { CSSType } from "@/types/css";

export interface ParagraphProps
  extends VariantProps<typeof S.ParagraphContainer> {
  as?: ElementType;
  css?: CSSType;
  children?: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  css,
  ...rest
}: ParagraphProps) => {
  return (
    <S.ParagraphContainer css={css} {...rest}>
      {children}
    </S.ParagraphContainer>
  );
};

export default Paragraph;

Paragraph.displayName = "Paragraph";
