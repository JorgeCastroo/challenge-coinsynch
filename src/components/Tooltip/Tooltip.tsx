import React, { ComponentProps } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import * as S from "./styles";

export type TooltipProps = ComponentProps<typeof TooltipPrimitive.Root> & {
  trigger: React.ReactNode;
  asChild?: boolean;
  side?: "bottom" | "left" | "right" | "top" | undefined;
  sideOffset?: number;
};

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  trigger,
  asChild,
  sideOffset,
  side,
  ...rest
}: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...rest}>
        <S.tooltipTrigger asChild={asChild}>
          <div>{trigger}</div>
        </S.tooltipTrigger>
        <TooltipPrimitive.Portal>
          <S.TooltipContent sideOffset={sideOffset} side={side}>
            {children}
            <S.TooltipArrow />
          </S.TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
