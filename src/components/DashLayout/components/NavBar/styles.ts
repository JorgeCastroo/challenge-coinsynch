import { styled } from "@/styles/base";

export const Navbar = styled("nav", {
  background: "$white",
  height: "64px",
  width: "100vw",
  boxShadow: "0px 4px 8px 0px rgba(77, 77, 77, 0.10)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "fixed",
  top: 0,
  left: 0,
  paddingLeft: "$28",
  paddingRight: "$28",
  zIndex: 30,
});
