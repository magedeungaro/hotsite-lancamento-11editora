import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Homem Extraordinário - Lançamento 11 Editora',
  description: 'Lançamento 11 Editora - Homem Extraordinário com 11% de desconto, brindes e recompensas',
  openGraph: {
    title: 'Homem Extraordinario',
    siteName: '11 Editora',
    url: 'https://homem-extraordinario.11editora.com.br/',
    description: 'Lançamento 11 Editora - Homem Extraordinário com 11% de desconto, brindes e recompensas',
    type: 'book',
    images: 'https://homem-extraordinario.11editora.com.br/hero.png',
  },
};

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
