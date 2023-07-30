import { styled } from "@/styles/base";

export const Container = styled("div", {});

export const ContainerTrigger = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$3",
  alignItems: "center",
});

export const AnimationIcon = styled("div", {
  transition: "all 500ms ease",
  variants: {
    rotate: {
      true: {
        transform: "rotate(180deg)",
      },
    },
  },
});

export const ContainerContent = styled("div", {
  cursor: "pointer",
  display: "flex",
  flexDirection: "row",
  gap: "$4",
  alignItems: "center",
  padding: "$2",
  "&:hover": {
    background: "$secondary-200",
  },
});
