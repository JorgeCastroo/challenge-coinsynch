import { styled } from "@/styles/base";

export const Container = styled("div", {
  width: "100%",
  height: "456px",
  background: "linear-gradient(180deg, #FBAB34 0%, #AD721A 100%)",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$40",
});

export const Footer = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

export const Copyright = styled("div", {
  height: "64px",
  boxShadow: "0px -4px 8px 0px rgba(77, 77, 77, 0.10)",
  padding: "24px 112px",
  display: "flex",
  justifyContent: "space-between",
});

export const WrappedDescritions = styled("div", {
  maxWidth: "385px",
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const WrappedSubscribe = styled("form", {
  maxWidth: "385px",
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  zIndex: 5,
});
