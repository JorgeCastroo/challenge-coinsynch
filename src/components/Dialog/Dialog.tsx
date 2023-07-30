import React, { ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import * as S from "./style";
import { VariantProps } from "@stitches/react";
import { Button } from "@/components/Button/Button";
import Heading from "@/components/Typography/Heading/Heading";
import Paragraph from "../Typography/Paragraph/Paragraph";
import { Icon } from "../Icon/Icon";
import { colors } from "@/styles/tokens/colors";

export type DialogProps = VariantProps<typeof S.Content> & {
  open?: boolean;
  onEscapeKeyDown?: ((event: KeyboardEvent) => void) | undefined;
  onPointerDownOutside?: (() => void) | undefined;
  children: ReactNode;
  onClose?: () => void;
  onOpenChange?: (open: boolean) => void;
  title?: ReactNode;
};

const Dialog: React.FC<DialogProps> = ({
  open,
  onOpenChange,
  onEscapeKeyDown,
  onPointerDownOutside,
  onClose,
  children,
  title,
}: DialogProps) => {
  return (
    <DialogPrimitive.Root
      open={open}
      onOpenChange={
        onOpenChange ? (openValue) => onOpenChange(openValue) : () => {}
      }
    >
      <DialogPrimitive.Portal>
        <S.Overlay />
        <S.Content
          onEscapeKeyDown={onEscapeKeyDown}
          onPointerDownOutside={onPointerDownOutside}
        >
          <Icon
            name="close"
            size={16}
            isCursorPointer
            onPress={onClose}
            style={{
              color: colors["secondary-500"],
              position: "absolute",
              top: 16,
              right: 16,
            }}
          />

          <S.Title>{title}</S.Title>
          <Button as="div" size="small" variant="text" />
          {children}
        </S.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
export default Dialog;
