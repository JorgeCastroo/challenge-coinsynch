import React from "react";
import { useRouter } from "next/router";

import Dialog from "@/components/Dialog/Dialog";
import Heading from "@/components/Typography/Heading/Heading";
import Paragraph from "@/components/Typography/Paragraph/Paragraph";
import { ContentModalSignIn } from "./components/ContentModalSignIn/ContentModalSignIn";
import { ContentModalSignUp } from "./components/ContentModalSignUp/ContentModalSignUp";

export const DialogSignInAndSignUp: React.FC = () => {
  const { query, pathname, push } = useRouter();

  const handleClose = () => {
    const updatedQuery = query;
    delete updatedQuery.modalSignUp;
    delete updatedQuery.modalSignIn;

    push({ pathname, query: { ...query } });
  };

  return (
    <Dialog
      onClose={handleClose}
      onEscapeKeyDown={handleClose}
      onPointerDownOutside={handleClose}
      title={
        <>
          <Paragraph color="text" size="sm" css={{ lineHeight: "unset" }}>
            {query.modalSignIn ? "Sign in to" : "Sign up to"}
          </Paragraph>
          <Heading color="primary" css={{ paddingLeft: "$1" }}>
            Coin
          </Heading>
          <Heading css={{ color: "$secondary-500" }}>Synch </Heading>
        </>
      }
      open={!!query.modalSignIn || !!query.modalSignUp}
    >
      {query.modalSignIn ? <ContentModalSignIn /> : <ContentModalSignUp />}
    </Dialog>
  );
};
