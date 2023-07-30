import { styled } from "@/styles/base";

export const Container = styled("div", {
  marginTop: "$32",
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  height: "824px",
  gap: "$28",
});

export const WrappedTitleAndButton = styled("div", {
  display: "flex",
  maxWidth: "590px",
  flexDirection: "column",
  gap: "$3",
});

export const WrappedButtons = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$8",
  marginTop: "$20",
});
