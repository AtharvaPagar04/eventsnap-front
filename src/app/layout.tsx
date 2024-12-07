import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
    title: "Event Snap",
    description: "Crazy app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className="bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100 ">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
