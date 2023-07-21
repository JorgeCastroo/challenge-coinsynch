import { styled } from "@/styles/base";

export const Container = styled("div", {
  height: "100vh",
  width: "100vw",
  overflowY: "auto",
});

export const WrappedContent = styled("div", {
  maxWidth: "1216px",
  width: "100%",
  padding: "0 $2",
  minHeight: "calc(100vh - 120px)",
});

export const Main = styled("main", {
  width: "100%",
  paddingTop: "96px",
  paddingBottom: "24px",
  display: "flex",
  justifyContent: "center",
});
