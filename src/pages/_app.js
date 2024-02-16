import "@/styles/globals.css";
import "@/styles/custom.css"
import Headernew from "../component/Headernew";
import Footer1 from "../component/Footer1";
import { SfProDisplay, primary } from "@/configs/fonts";
// import Zendesk, { ZendeskAPI } from "../pages/zendesk";
// const ZENDESK_KEY = "325da280-f4f0-4c80-997f-ea4de45eb2f1";

export default function App({ Component, pageProps }) {


  // const handleLoaded = () => {
  //   zE('webWidget:on', 'open', function () {
  //   });
  // };

  return (
    <>
      <main className={`${primary.className} ${SfProDisplay.variable}`}>
        <Headernew />
        <Component {...pageProps} />
        <Footer1 />
      </main>
    </>
  );
}