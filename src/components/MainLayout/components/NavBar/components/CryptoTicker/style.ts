import { styled } from "@/styles/base";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "row",
  maxWidth: "360px",
  overflow: "auto",
  gap: "$6",
  justifyContent: "center",
  marginTop: "$4",
});

export const Crypto = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
});
