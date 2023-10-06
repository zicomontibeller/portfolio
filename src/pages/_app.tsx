// import { type Session } from "next-auth";
// import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({
  Component,
  pageProps,
}) => {
  return (
    <Component {...pageProps} />
  );
};

export default api.withTRPC(MyApp);
