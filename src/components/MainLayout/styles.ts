import { styled } from "@/styles/base";

export const Container = styled("div", {
  height: "100vh",
  width: "100vw",
  overflowY: "auto",
  background:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #F7F7F7 100%)",
});

export const WrappedContent = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Main = styled("main", {
  width: "100%",
  paddingTop: "96px",
  display: "flex",
  justifyContent: "center",
});
