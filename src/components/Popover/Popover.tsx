import React from "react";
import { VariantProps } from "@stitches/react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import * as S from "./styles";

export type PopoverProps = VariantProps<typeof S.PopoverContainer> &
  Pick<
    PopoverPrimitive.PopoverContentTypeProps,
    | "align"
    | "alignOffset"
    | "sideOffset"
    | "onEscapeKeyDown"
    | "onCloseAutoFocus"
    | "onFocusOutside"
    | "avoidCollisions"
    | "collisionPadding"
    | "side"
  > & {
    trigger: React.ReactNode;
    content: React.ReactNode;
    asChild?: boolean;
    open?: boolean;
    onPointerDownOutside?: () => void;
  };

const Popover: React.FC<PopoverProps> = ({
  content,
  trigger,
  align,
  alignOffset,
  avoidCollisions,
  collisionPadding,
  onCloseAutoFocus,
  onEscapeKeyDown,
  onFocusOutside,
  onPointerDownOutside,
  asChild,
  side = "bottom",
  sideOffset,
  open,
  ...rest
}: PopoverProps) => {
  return (
    <S.PopoverContainer open={open} modal={false} {...rest}>
      <S.PopoverTrigger asChild={asChild}>{trigger}</S.PopoverTrigger>
      <PopoverPrimitive.Anchor />
      <PopoverPrimitive.Portal>
        <S.PopoverContent
          align={align}
          side={side}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          onFocusOutside={onFocusOutside}
          onEscapeKeyDown={onEscapeKeyDown}
          avoidCollisions={avoidCollisions}
          onCloseAutoFocus={onCloseAutoFocus}
          collisionPadding={collisionPadding}
          onPointerDownOutside={onPointerDownOutside}
        >
          <S.PopoverArrow />
          {content}
        </S.PopoverContent>
      </PopoverPrimitive.Portal>
    </S.PopoverContainer>
  );
};

Popover.displayName = "Popover";

export default Popover;
