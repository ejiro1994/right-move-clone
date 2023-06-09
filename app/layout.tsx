import Navbar from '@/components/Navbar'
import { Rubik, Inter } from 'next/font/google'
import './globals.css'

const font = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rightmove Clone',
  description: "UK's number one property website for properties",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Navbar/>{children}
        <main>hello</main>
      </body>
    </html>
  )
}
