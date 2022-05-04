import "tailwindcss/tailwind.css";
import "../styles/styles.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Preston Carlton | Software Developer</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
