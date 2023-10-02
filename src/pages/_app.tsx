import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";
import Header from "./components/header";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
