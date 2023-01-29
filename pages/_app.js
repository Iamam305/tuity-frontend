import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, createContext, useState } from "react";




function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (window !== undefined) {


      if (!localStorage.getItem("jwt")) {
        router.push("/auth/login");
      } else {
        
      }
    }
  }, []);

  return (
    < >
      <div className="dark bg-[#0a101e]">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
