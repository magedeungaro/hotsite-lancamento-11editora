import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Homem Extraordinário - Lançamento 11 Editora',
  description: 'Lançamento 11 Editora - Homem Extraordinário com 11% de desconto, brindes e recompensas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
