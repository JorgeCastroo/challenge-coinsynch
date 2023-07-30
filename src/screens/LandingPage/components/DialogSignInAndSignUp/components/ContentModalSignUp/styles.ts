import { styled } from "@/styles/base";

export const Container = styled("form", {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$8",
});

export const WrappedPrivacyPolicyTerms = styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "row",
  gap: "$4",
});

export const WrappedSignUpTo = styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "row",
  justifyContent: "center",
  gap: "$1",
  cursor: "pointer",
});
