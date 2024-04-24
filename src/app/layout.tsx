import '@/styles/index.scss';

import { Alegreya } from 'next/font/google';
import { Roboto } from 'next/font/google';

import type { Metadata } from "next";

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ReactQueryProvider from "@/app/providers/react-query";

const alegreya = Alegreya({
    subsets: ['cyrillic'],
    variable: '--font-alegreya',
    display: 'swap',
});

const roboto = Roboto({
    subsets: ['cyrillic'],
    weight: ['400', '700'],
    variable: '--font-roboto',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Интернет Магазин",
    description: "Проект 1",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={`${alegreya.variable} ${roboto.variable}`}>
            <body className="wrapper">
                <ReactQueryProvider>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </ReactQueryProvider>
            </body>
        </html>
    );
}