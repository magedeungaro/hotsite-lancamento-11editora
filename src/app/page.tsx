import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="image-container relative">
        <Image src="/hero.png"
              alt="Banner com desconto de 11% no livro Homem Extraordinário, além de brindes e recompensas"
              width={1920} height={1080} className='min-w-full hero' />
      </div>
    </main>
  )
}
