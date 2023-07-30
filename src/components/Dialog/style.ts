import { keyframes } from "@stitches/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { styled } from "@/styles/base";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 0.1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const Overlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "$text-base",
  opacity: 0.8,

  position: "fixed",
  zIndex: 40,
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

export const Title = styled("div", {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "center",
});

export const Content = styled(DialogPrimitive.Content, {
  backgroundColor: "white",
  borderRadius: "$2",
  boxShadow: "0px 12px 24px 0px rgba(0, 0, 0, 0.10)",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 50,
  overflowY: "auto",
  width: "100%",
  maxWidth: "448px",
  willChange: "scroll-position",
  maxHeight: "375",
  padding: "$8",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  "&:focus": { outline: "none" },
});
