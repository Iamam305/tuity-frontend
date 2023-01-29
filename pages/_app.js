import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, createContext, useState } from "react";




function MyApp({ Component, pageProps }) {


  return (
    < >
      <div className="dark bg-[#0a101e]">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
