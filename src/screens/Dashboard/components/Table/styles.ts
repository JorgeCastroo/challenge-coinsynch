import { styled } from "@/styles/base";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
  background: "$white",
  boxShadow: "0px 4px 8px 0px rgba(77, 77, 77, 0.10)",
  minHeight: "385px",
});

export const TitleTable = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid $secondary-300",
  padding: "$6",
});

export const WrappedTitleAndIcon = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  gap: "$4",
});
export const ContainerTable = styled("table", {
  width: "100%",
  borderCollapse: "collapse",
  borderSpacing: "100px",
  th: {
    padding: "0px $7",
    textAlign: "left",
    "&:nth-child(4)": {
      textAlign: "center",
    },
    "&:nth-child(3)": {
      width: "300px",
    },
    "&:last-child": {
      width: "50px",
      paddingLeft: "10px",
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
