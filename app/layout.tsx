import './globals.css'
import { DM_Sans } from '@next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
const dm_sans = DM_Sans({ weight: ["400", "500", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dm_sans.className}>
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-black">
        <Header/>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
