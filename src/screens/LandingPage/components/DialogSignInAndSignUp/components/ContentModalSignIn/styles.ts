import { styled } from "@/styles/base";

export const Container = styled("form", {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$8",
});

export const WrappedInputAndForgotPassword = styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "end",
  gap: "$2",
});

export const WrappedSignUpTo = styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "row",
  justifyContent: "center",
  gap: "$1",
  cursor: "pointer",
});
