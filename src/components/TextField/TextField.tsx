import { WarningCircle } from "phosphor-react";
import React, {
  ComponentProps,
  forwardRef,
  ElementRef,
  useId,
  ReactNode,
  useState,
  ElementType,
} from "react";

import { formatString, FormatStringType } from "@format-string/core";

import * as S from "./styles";
import { VariantProps } from "@stitches/react";
import { CSSType } from "@/types/css";

export type TextFieldProps = Omit<
  ComponentProps<typeof S.Input>,
  "size" | "onChange"
> &
  VariantProps<typeof S.WrappedInput> & {
    hint?: string;
    label?: string;
    htmlFor?: string;
    iconLeft?: ReactNode;
    isRequired?: boolean;
    iconRight?: ReactNode;
    hasIconHint?: boolean;
    complementLabel?: string;
    formatStringType?: FormatStringType;
    defaultValue?: string;
    value?: string;
    onChange?: (value: string | undefined) => void;
    onPressIcon?: () => void;
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    status?: "default" | "error" | "warning" | "success" | "info";
    css?: CSSType;
    as?: ElementType;
    colorLabel?: "white";
  };

export const TextField = forwardRef<ElementRef<typeof S.Input>, TextFieldProps>(
  (
    {
      iconLeft,
      iconRight,
      label,
      css,
      hint,
      hasIconHint,
      complementLabel,
      isRequired = false,
      htmlFor,
      status,
      value,
      formatStringType,
      onInputChange,
      defaultValue,
      onChange,
      colorLabel,
      as,
      ...props
    }: TextFieldProps,
    ref
  ) => {
    const generateDefaultValue = formatStringType
      ? formatString({ value: defaultValue, type: formatStringType })
      : defaultValue;
    const [_value, setValue] = useState<string | undefined>(
      generateDefaultValue || ""
    );
    const id = useId();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let finalValue: string | undefined = "";

      if (formatStringType) {
        finalValue = formatString({
          type: formatStringType,
          value: e.target.value,
        });
      } else {
        finalValue = e.target.value;
      }
      if (onChange) onChange(finalValue);
      setValue(finalValue);
      if (onInputChange) onInputChange(e);
    };
    return (
      <S.ContainedTextField css={css}>
        {label && (
          <S.Label
            disabled={props.disabled}
            htmlFor={htmlFor || id}
            color={colorLabel}
          >
            {label} <span>{complementLabel}</span>{" "}
            {isRequired && <span className="isRequired">*</span>}
          </S.Label>
        )}

        <S.WrappedInput>
          {iconLeft && iconLeft}
          <S.Input
            {...props}
            value={
              formatStringType
                ? formatString({
                    value: value || _value,
                    type: formatStringType,
                  })
                : value || _value
            }
            autoComplete="off"
            onChange={handleChange}
            id={htmlFor || id}
            ref={ref}
          />
          {iconRight && iconRight}
        </S.WrappedInput>
        {hint && (
          <S.Hint>
            {hasIconHint && <WarningCircle size={24} />}
            {hint}
          </S.Hint>
        )}
      </S.ContainedTextField>
    );
  }
);

TextField.displayName = "TextField";
