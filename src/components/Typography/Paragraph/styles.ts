import { styled } from "@/styles/base";
import { base } from "../base";

export const ParagraphContainer = styled("p", {
  variants: {
    ...base,

    size: {
      sm: { fontSize: "$sm", lineHeight: "2.125rem" },
      xs: { fontSize: "$xs", lineHeight: "1.5rem" },
      xxs: { fontSize: "$xxs", lineHeight: "1.25rem" },
      xxxs: { fontSize: "$xxxs", lineHeight: "1.125rem" },
    },
  },

  defaultVariants: {
    size: "xxs",
    color: "text",
  },
});
