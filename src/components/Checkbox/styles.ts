import { styled } from "@/styles/base";
import * as Checkbox from "@radix-ui/react-checkbox";
import { keyframes } from "@stitches/react";

export const WrappedCheckbox = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$4",
  alignItems: "center",
});

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

export const CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  width: "16px",
  height: "16px",
  borderRadius: "$1",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  "&:disabled": {
    background: "$border !important",
    color: "$white",
    cursor: "not-allowed",
    borderColor: "$border !important",
  },

  variants: {
    color: {
      primary: {
        border: "2px solid $primary-500",

        "&:hover": {
          borderColor: "$primary-600",
        },

        "&:active": {
          borderColor: "$primary-700",
        },

        '&[data-state="checked"]': {
          backgroundColor: "$primary-200",
        },
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

const slideIn = keyframes({
  from: {
    transform: "translateY(-100%)",
  },
  to: {
    transform: "translateY(0)",
  },
});

const slideOut = keyframes({
  from: {
    transform: "translateY(0)",
  },
  to: {
    transform: "translateY(-100%)",
  },
});

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "$primary-500",
  width: "$4",
  height: "$4",
  position: "relative",

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },
  '&[data-state="indeterminate"]': {
    "&::before": {
      content: `''`,
      display: "block",
      background: "$primary-normal",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "8px",
      height: "2px",
      borderRadius: "inherit",
    },
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
  variants: {
    color: {
      primary: {
        '&[data-state="checked"]': {
          background: "$primary-200",
        },
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export const Hint = styled("span", {
  alignSelf: "end",
  color: "$quartenary-500",
  position: "absolute",
  whiteSpace: "nowrap",
  left: "0px",
  bottom: "-20px",
});
