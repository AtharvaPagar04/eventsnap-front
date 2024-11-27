// pages/_app.js
import { ThemeProvider } from "next-themes";
// import "../styles/globals.css"; // Import your global styles

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
