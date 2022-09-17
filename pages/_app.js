import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import Router from 'next/router';


function MyApp({ Component, pageProps }) {
  return (
    <div>
       <NextNProgress 
        color='#FE595E'
        startPosition={0.3}
        stopDelayMs={100}
        height={4}
        showOnShallow={true}
       />
       <Component {...pageProps} />;
    </div>
      
  ); 
}

export default MyApp
