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
import { SignUpForm, SignUpSchema } from "./validation";
import { Checkbox } from "@/components/Checkbox/Checkbox";

export const ContentModalSignUp: React.FC = () => {
  const { query, pathname, push } = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(SignUpSchema),
  });

  const handleSignUp = () => {
    const updatedQuery = query;
    delete updatedQuery.modalSignUp;

    push({ pathname, query: { ...query, modalSignIn: true } });
  };
  const onFormSubmit = (formData: SignUpForm) => {
    console.log(formData);
  };

  return (
    <S.Container onSubmit={handleSubmit(onFormSubmit)} autoSave="on">
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            placeholder="Name"
            data-email
            hint={errors.name?.message}
            iconLeft={<Icon name="user" size={16} />}
          />
        )}
      />
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

      <Controller
        name="confirmpassword"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            placeholder="Password"
            type="password"
            hint={errors.confirmpassword?.message}
            iconLeft={<Icon name="lock" size={16} />}
          />
        )}
      />
      <S.WrappedPrivacyPolicyTerms>
        <Controller
          name="terms"
          control={control}
          render={({ field }) => (
            <Checkbox
              hint={errors.terms?.message}
              onCheckedChange={(value) => field.onChange(value)}
            />
          )}
        />
        <Paragraph>
          I have read and accept the <strong>Privacy Policy</strong> and{" "}
          <strong>Terms of User Sign up.</strong>
        </Paragraph>
      </S.WrappedPrivacyPolicyTerms>
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
          Sign in to
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
