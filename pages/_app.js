import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
// require('dotenv').config()

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar /> 
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
