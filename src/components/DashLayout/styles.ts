import { styled } from "@/styles/base";

export const Container = styled("div", {
  height: "100vh",
  width: "100vw",
  overflowY: "auto",
  background: "#F9F9F9",
});

export const WrappedContent = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Main = styled("main", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  top: "64px",
});
