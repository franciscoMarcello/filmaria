import type { AppProps } from "next/app";
import "../styles/index.css";
import { ToastContainer } from 'react-toastify';
function MyApp({ Component, pageProps }: AppProps) {
  return (
 <>
 <ToastContainer 
 position="top-right"
 autoClose={3000}
 hideProgressBar={false}
 newestOnTop={false}
 closeOnClick
 rtl={false}
 pauseOnFocusLoss
 draggable
 pauseOnHover
 
 />
  <Component {...pageProps} />
 </>
 );
}

export default MyApp;
