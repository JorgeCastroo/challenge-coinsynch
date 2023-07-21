import { styled } from "@/styles/base";
import { base } from "../base";

export const HeadingContainer = styled("h2", {
  fontWeight: "$bold",

  variants: {
    ...base,

    size: {
      xxl: {
        fontSize: "$xl",
        lineHeight: "57.6px",
        "@laptop": {
          fontSize: "$xxl",
          lineHeight: "76.8px",
        },
      },
      xl: {
        fontSize: "$lg",
        lineHeight: "38.4px",
        "@laptop": {
          fontSize: "$xl",
          lineHeight: "57.6px",
        },
      },
      lg: {
        fontSize: "$md",
        lineHeight: "28.8px",
        "@laptop": {
          fontSize: "$lg",
          lineHeight: "38.4px",
        },
      },
      md: {
        fontSize: "$sm",
        lineHeight: "24px",
        "@laptop": {
          fontSize: "$md",
          lineHeight: "28.8px",
        },
      },
      sm: {
        fontSize: "$xs",
        lineHeight: "20px",
        "@laptop": {
          fontSize: "$sm",
          lineHeight: "24px",
        },
      },
      xs: {
        fontSize: "$xxs",
        lineHeight: "20px",
        "@laptop": {
          fontSize: "$xs",
          lineHeight: "20px",
        },
      },
      xxs: {
        fontSize: "$xxs",
        lineHeight: "20px",
      },
    },
  },

  defaultVariants: {
    size: "md",
    color: "primary-500",
  },
});
