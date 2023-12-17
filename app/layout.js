import { Inter } from 'next/font/google'
import './globals.css'
import Link from "next/link"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container mx-auto`}>
        <nav className="flex justify-between items-center">
          <Link href="/">Home</Link>
          <ul className="flex space-x-2 py-2">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
