import { styled } from "@/styles/base";

export const Container = styled("div", {
  boxShadow: "0px 12px 24px 0px rgba(0, 0, 0, 0.05)",
  background: "$white",
  borderRadius: "6px",
  padding: "$6",
  maxWidth: "280px",
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});
