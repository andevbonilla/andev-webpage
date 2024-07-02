import { Metadata } from 'next';
import "../globals.css";
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Andres Bonilla',
    template: '%s | Andres Bonilla'
  },
  description: "Hi, I'm Andres Bonilla or also known as Andev and this is my website ",
  keywords: ["andres", "bonilla", "andres bonilla", "andres camilo bonilla", "andev", "andev bonilla"]
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  const messages = await getMessages();

  return (
    <html lang={locale} >
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}