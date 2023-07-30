import React from "react";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as S from "./styles";
import { Icon } from "@/components/Icon/Icon";
import { TextField } from "@/components/TextField/TextField";
import Paragraph from "@/components/Typography/Paragraph/Paragraph";
import { colors } from "@/styles/tokens/colors";
import { Button } from "@/components/Button/Button";
import Heading from "@/components/Typography/Heading/Heading";
import { SignInForm, SignInSchema } from "./validation";

export const ContentModalSignIn: React.FC = () => {
  const { query, pathname, push } = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: zodResolver(SignInSchema),
  });

  const handleSignUp = () => {
    const updatedQuery = query;
    delete updatedQuery.modalSignIn;

    push({ pathname, query: { ...query, modalSignUp: true } });
  };
  const onFormSubmit = (formData: SignInForm) => {
    console.log(formData);
  };

  return (
    <S.Container onSubmit={handleSubmit(onFormSubmit)} autoSave="on">
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            placeholder="Email"
            data-email
            hint={errors.email?.message}
            iconLeft={<Icon name="email" size={16} />}
          />
        )}
      />

      <S.WrappedInputAndForgotPassword>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              placeholder="Password"
              hint={errors.password?.message}
              iconLeft={<Icon name="lock" size={16} />}
            />
          )}
        />

        <Paragraph
          css={{
            cursor: "pointer",
            color: colors["secondary-500"],
            "&:hover": {
              color: colors["secondary-600"],
            },
          }}
        >
          Forgot password?
        </Paragraph>
      </S.WrappedInputAndForgotPassword>
      <Button fullWidth size="large" type="submit">
        Sign in
      </Button>
      <S.WrappedSignUpTo onClick={handleSignUp}>
        <Paragraph
          color="text"
          size="xxs"
          weight="light"
          css={{ lineHeight: "unset" }}
        >
          Don't have an account?
        </Paragraph>
        <Paragraph color="text" size="xxs" css={{ lineHeight: "unset" }}>
          Sign up to
        </Paragraph>
        <Heading size="xs" color="primary" css={{ paddingLeft: "$1" }}>
          Coin
        </Heading>
        <Heading size="xs" css={{ color: "$secondary-500" }}>
          Synch
        </Heading>
      </S.WrappedSignUpTo>
    </S.Container>
  );
};
