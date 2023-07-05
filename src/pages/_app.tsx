import { useEffect, useState } from "react";

import type { AppProps } from "next/app";

import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";

import { Layout } from "@/components/layout/Layout";
import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider attribute="class">
      {mounted && (
        <Layout>
          <>
            <Component {...pageProps} />
            <Analytics />
          </>
        </Layout>
      )}
    </ThemeProvider>
  );
}

export default App;
