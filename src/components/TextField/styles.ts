import { styled } from "@/styles/base";
import * as LabelPrimitive from "@radix-ui/react-label";

export const ContainedTextField = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$1",
  flex: 1,
  width: "100%",
});

export const WrappedInput = styled("div", {
  alignItems: "center",
  background: "$white",

  border: "1px solid $secondary-300",
  borderRadius: "$2",
  padding: "$4",
  display: "flex",
  gap: "$2",
  "& input:autofill": {
    "-webkit-transition-delay": "9999s",
    transitionDelay: "9999s",
  },

  "& svg": {
    color: "$secondary-300",
    fill: "$secondary-300",
    "& path": {
      fill: "$secondary-300",
    },
  },

  "&:hover": {
    borderColor: "$secondary-500",
    "& svg": {
      fill: "$secondary-500",
      "& path": {
        fill: "$secondary-500",
      },
    },
  },

  "&:has(input:focus)": {
    borderColor: "$secondary-500",
    "& svg": {
      fill: "$secondary-500",
      "& path": {
        fill: "$secondary-500",
      },
    },
  },
  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});

export const Input = styled("input", {
  fontFamily: "$default",
  color: "$text-base",
  border: 0,
  width: "100%",
  height: "100%",
  fontWeight: "$regular",

  appearance: "none",

  "&:focus": {
    outline: 0,
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  "&::placeholder": {
    fontWeight: "$regular",
    color: "$text-base",
  },

  "&:hover": {
    "&::placeholder": {
      color: "$text-base",
    },
  },
});

export const Hint = styled("span", {
  alignSelf: "end",
  color: "$quartenary-500",
});

export const Label = styled(LabelPrimitive.Root, {
  color: "#5D6670",
  fontFamily: "$default",

  "& > span": {
    fontSize: "$xxxs",
    color: "$text-base",
  },

  "& .isRequired": {
    color: "$quartenary-900",
  },
  variants: {
    color: {
      white: {
        color: "$white",
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
});
