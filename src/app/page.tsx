import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-between">
      <Image src="/hero.png"
             alt="Banner com desconto de 11% no livro Homem Extraordinário, além de brindes e recompensas"
             layout='responsive' width={1920} height={1080} />
    </main>
  )
}
