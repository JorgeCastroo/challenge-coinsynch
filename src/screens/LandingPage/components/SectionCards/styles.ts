import { styled } from "@/styles/base";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$6",
  alignItems: "center",
  width: "100%",
  maxWidth: "1216px",
});

export const WrappedCards = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$8",
});

export const WrappedCardsTop = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$5",
});
export const WrappedCardsBottom = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$5",
  marginLeft: "$24",
});

export const WrappedInfos = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  width: "40%",
  maxWidth: "406px",
});
