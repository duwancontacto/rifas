import "@/styles/globals.css";
import Theme from "@/theme";
import type { AppProps } from "next/app";

import { BsWhatsapp } from "react-icons/bs";
import "../languages/i18n";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Toaster } from "react-hot-toast";
import AuthWrapper from "@/components/AuthWrapper";

import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }: AppProps) {
  const openWhatsApp = () => {
    let message = encodeURIComponent(
      "¡Hola! Me gustaría hacer una consulta sobre Rifa con causa."
    );
    let phoneNumber = "+525585850001";
    let url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };
  return (
    <Provider store={store}>
      <Theme>
        <>
          <Toaster />
          <AuthWrapper>
            <>
              <div onClick={openWhatsApp} className="icon-whatsapp ">
                <BsWhatsapp
                  color=" white"
                  size={30}
                  className="header-icono "
                />
              </div>
              <Component {...pageProps} />
            </>
          </AuthWrapper>
        </>
      </Theme>
    </Provider>
  );
}
