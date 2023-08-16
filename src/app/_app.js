import { Provider } from "next-auth/react";
import ProviderWrapper from "../components/ProviderWrapper";

function MyApp({ Component, pageProps }) {
  const { session } = pageProps;

  return (
    <Provider session={session}>
      <ProviderWrapper session={session}>
        <Component {...pageProps} />
      </ProviderWrapper>
    </Provider>
  );
}

export default MyApp;
