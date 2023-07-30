import React from "react";
import { Check, WarningCircle } from "phosphor-react";
import { VariantProps } from "@stitches/react";

import * as S from "./styles";
import { CheckedState } from "@radix-ui/react-checkbox";

export type CheckboxProps = VariantProps<typeof S.CheckboxContainer> & {
  defaultChecked?: boolean;
  checked?: CheckedState;
  onCheckedChange?: (checked: boolean) => void;
  hasIconHint?: boolean;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  color?: "primary" | "secondary" | "tertiary";
  id?: string;
  htmlFor?: string;
  complementLabel?: string;
  hint?: string;
};

export const Checkbox = ({
  required,
  hint,
  id,
  htmlFor,
  hasIconHint,
  complementLabel,
  ...props
}: CheckboxProps) => {
  return (
    <S.Container>
      <S.WrappedCheckbox>
        <S.CheckboxContainer {...props}>
          <S.CheckboxIndicator color={props.color}>
            <div>
              <Check size={16} />
            </div>
          </S.CheckboxIndicator>
        </S.CheckboxContainer>
      </S.WrappedCheckbox>
      {hint && (
        <S.Hint>
          {hasIconHint && <WarningCircle size={24} />}
          {hint}
        </S.Hint>
      )}
    </S.Container>
  );
};

Checkbox.displayName = "Checkbox";
