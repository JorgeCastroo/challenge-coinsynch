import { ReactElement, ReactNode } from "react";

import { NextPage } from "next";

import type { AppProps } from "next/app";
import { globalStyle } from "@/styles/global";

import MainLayout from "@/components/MainLayout/MainLayout";
import { Provider } from "react-redux";
import { store } from "@/store/store";

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
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
};

export default MyApp;
