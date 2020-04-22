// pages / _app.js;
import "../css/tailwind.css";
import { BigRecipeProvider } from "../context/BigRecipeContext";
import "../css/index.css";

export default function App({ Component, pageProps }) {
  console.log(pageProps);
  return (
    //get initialprops
    // <BigRecipeProvider>
    <Component {...pageProps} />
    // </BigRecipeProvider>
  );
}
