import { styled } from "@/styles/base";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "row",
  background: "$white",
  borderRadius: "$1",
  boxShadow: "0px 4px 8px 0px rgba(77, 77, 77, 0.10)",
  width: "25%",
  height: "94px",
});

export const SectionDescriptions = styled("div", {
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "row",
  padding: "$4",
});

export const WrappedTitle = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "$1",
});
