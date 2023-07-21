import { ReactElement, ReactNode } from "react";

import { NextPage } from "next";

import type { AppProps } from "next/app";
import { globalStyle } from "@/styles/global";

import MainLayout from "@/components/MainLayout/MainLayout";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: React.FC<AppPropsWithLayout> = ({
  Component,
  pageProps,
}: AppPropsWithLayout) => {
  globalStyle();

  const getLayout =
    Component.getLayout ??
    ((page: ReactElement) => <MainLayout>{page}</MainLayout>);

  return <> {getLayout(<Component {...pageProps} />)}</>;
};

export default MyApp;
