import React, { useState } from "react";
import Image from "next/image";
import { SendEmailForm, SendEmailSchema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import * as S from "./styles";
import Wave from "@/assets/backgroundWave.png";
import Paragraph from "@/components/Typography/Paragraph/Paragraph";
import Logo from "@/assets/Logo.svg";
import Heading from "@/components/Typography/Heading/Heading";
import { colors } from "@/styles/tokens/colors";
import { Button } from "@/components/Button/Button";
import { TextField } from "@/components/TextField/TextField";
import { useSendEmailMutation } from "@/services/sendEmail/sendEmail";

export const Footer: React.FC = () => {
  const [sendEmail, { isLoading }] = useSendEmailMutation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SendEmailForm>({
    resolver: zodResolver(SendEmailSchema),
  });

  const onFormSubmit = (formData: SendEmailForm) => {
    sendEmail(formData).then((res) => {
      reset();
      if (res && "data" in res) {
        reset();
      }
    });
  };

  return (
    <S.Footer>
      <S.Container>
        <Image
          src={Wave}
          width={1913}
          alt="carousel people"
          style={{ position: "absolute", left: "-50px", zIndex: 2 }}
        />
        <S.WrappedDescritions>
          <Heading css={{ color: colors["primary-200"] }}>Lorem ipsum</Heading>
          <Heading size="xxl" css={{ color: "white" }}>
            Lorem ipsum
          </Heading>
          <Paragraph color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </Paragraph>
        </S.WrappedDescritions>
        <S.WrappedSubscribe onSubmit={handleSubmit(onFormSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                placeholder=""
                colorLabel="white"
                hint={errors.email?.message}
              />
            )}
          />

          <Button
            css={{
              minWidth: "384px",
              boxShadow: "0px 12px 24px 0px rgba(0, 0, 0, 0.10)",
            }}
            size="large"
            type="submit"
            isLoading={isLoading}
          >
            Subscribe
          </Button>
        </S.WrappedSubscribe>
      </S.Container>
      <S.Copyright>
        <Paragraph>Copyright © 2022 - All rights reserved</Paragraph>
        <Image src={Logo} width={94} alt="Logo Footer" />
      </S.Copyright>
    </S.Footer>
  );
};
