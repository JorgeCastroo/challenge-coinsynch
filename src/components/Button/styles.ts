import { keyframes } from "@stitches/react";
import { styled } from "@/styles/base";

export const scaleUp = keyframes({
  "0%": { opacity: "0.4", width: 0, height: 0 },
  "100%": { opacity: "0", width: "500px", height: "500px" },
});

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const Button = styled("button", {
  all: "unset",
  border: "none",
  position: "relative",
  boxSizing: "border-box",
  outline: "none",
  transition: "all 250ms linear",
  display: "flex",
  width: "fit-content",
  minWidth: "120px",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  fontWeight: "$medium",
  fontFamily: "$default",
  overflow: "hidden",
  borderRadius: "$7",

  "&:disabled": {
    background: "$secondary-100 !important",
    color: "$white !important",
    cursor: "not-allowed !important",
    borderColor: "$secondary-100 !important",

    "&:hover": {
      background: "$secondary-100 !important",
      color: "$white !important",
    },
    "&:active": {
      background: "$secondary-100 !important",
      color: "$white !important",
    },
    "& svg": {
      color: "$white !important",
      "& path": {
        fill: "white",
      },
    },
  },
  cursor: "pointer",
  variants: {
    notRounded: {
      true: {
        borderRadius: "$1",
      },
    },
    variant: {
      text: {
        background: "transparent !important",
        color: "$text-base !important",
      },
    },
    size: {
      small: {
        height: "40px !important",
        padding: "$1 $4",
        lineHeight: "$base",
        fontSize: "$sm",
      },
      medium: {
        padding: "$2 $4",
        height: "32px !important",
        fontSize: "$xxs",
        gap: "$1 !important",
      },
      large: {
        padding: "$3 $6",
        height: "48px !important",
        gap: "$1 !important",
        fontSize: "$xs",
      },
    },

    color: {
      primary: {
        color: "$white ",
        background: "$primary-500 ",
        "&:hover": {
          background: "$primary-300",
        },
        "&:active": {
          background: "$primary-600 ",
          "&:hover": {
            background: "$primary-700 ",
          },
        },
      },

      primaryLigth: {
        color: "$primary-500 ",
        fontWeight: "$regular",
        background: "$primary-100 ",
        "&:hover": {
          background: "$primary-200",
        },
        "&:active": {
          background: "$primary-300 ",
          "&:hover": {
            background: "$primary-400 ",
          },
        },
      },
      secondary: {
        color: "$white !important",
        background: "$secondary-500 !important",
        "&:hover": {
          background: "$secondary-300 !important",
        },
        "&:active": {
          background: "$secondary-600 !important",
          "&:hover": {
            background: "$secondary-700 !important",
          },
        },
      },
      tertiary: {
        color: "$white !important",
        background: "$tertiary-700 !important",
        "&:hover": {
          background: "$tertiary-500 !important",
        },
        "&:active": {
          background: "$tertiary-600 !important",
          "&:hover": {
            background: "$tertiary-900 !important",
          },
        },
      },
    },
    isLoading: {
      true: {
        color: "transparent !important",
        "& svg": {
          color: "$white !important",
          "& path": {
            fill: "transparent !important",
          },
        },
      },
    },
    fullWidth: {
      true: {
        width: "stretch",
      },
    },
  },

  defaultVariants: {
    size: "medium",
    color: "primary",
  },
});

export const WrappedLoading = styled("span", {
  position: "absolute",
  display: "flex",
  animation: `${spin} 1s linear infinite`,
  height: "fit-content",
});
