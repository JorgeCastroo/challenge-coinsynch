import { keyframes } from "@stitches/react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { styled } from "@/styles/base";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

export const TooltipContent = styled(TooltipPrimitive.Content, {
  borderRadius: "$1",
  minWidth: "120px",
  display: "flex",
  justifyContent: "center",
  padding: "$3",
  background: "$primary-500",
  fontSize: "12px",

  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",

  userSelect: "none",

  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
});

export const tooltipTrigger = styled(TooltipPrimitive.Trigger, {
  all: "unset",
  display: "flex",
  alignItems: "center",
});

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: "$white",

  variants: {
    variant: {
      primary: {
        fill: "$primary-500",
      },
      secondary: {
        fill: "$secondary-500",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
