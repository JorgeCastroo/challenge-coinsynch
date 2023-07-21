import { globalCss } from "./base";

export const globalStyle = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontSmoothing: "antialiased",
    "&:focus-visible": {
      outline: "none !important",
    },
  },
  body: {
    background: "$withe",
    fontFamily: "$default",
    overflow: "hidden",
  },

  a: {
    textDecoration: "none",
    color: "inherit",
  },
  "input:focus": {
    outline: "none",
    margin: 0,
  },

  button: {
    border: 0,
    cursor: "pointer !important",
  },
  "::-webkit-scrollbar": {
    width: "0px ",
  },

  "::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },

  "*::-webkit-scrollbar-thumb": {
    width: "0px !important",
    height: "110px",
  },
});
