import { styled } from "@/styles/base";

export const Container = styled("table", {
  width: "100%",
  marginTop: "48px",
  borderCollapse: "collapse",
  borderSpacing: "100px",
  th: {
    padding: "0px $6",
    textAlign: "left",
    "&:nth-child(4)": {
      textAlign: "center",
    },
    "&:nth-child(3)": {
      width: "300px",
    },
    "&:last-child": {
      width: "50px",
    },
  },
  td: {
    padding: "$6",
    textAlign: "left",
    "&:nth-child(4)": {
      textAlign: "center",
    },
    "&:last-child": {
      width: "fit-content",
    },
  },
  tr: {
    "&:nth-child(even)": {
      background: "$secondary-100",
    },
    "&:last-child": {},
  },
  tfoot: {
    width: "4006px !important",
    background: "red",
  },
});
