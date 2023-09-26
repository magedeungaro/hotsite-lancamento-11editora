import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta property="og:title" content="Homem Extraordinário"/>
        <meta property="og:site_name" content="11 Editora"/>
        <meta property="og:url" content="https://homem-extraordinario.11editora.com.br/"/>
        <meta property="og:description" content="Lançamento 11 Editora - Homem Extraordinário com 11% de desconto, brindes e recompensas"/>
        <meta property="og:type" content="book"/>
        <meta property="og:image" content="https://homem-extraordinario.11editora.com.br/hero-og.png"/>
        <meta content="image/png" property="og:image:type"/>
        <meta content="1061" property="og:image:width"/>
        <meta content="597" property="og:image:height"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
