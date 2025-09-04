import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'DevMarcelino',
  description: 'Created with DevMarcelino',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
