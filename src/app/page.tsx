import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="image-container relative">
        <Image src="/hero.png"
              alt="Banner com desconto de 11% no livro Homem Extraordinário, além de brindes e recompensas"
              width={1920} height={1080} className='min-w-full hero' />

        <div className="grid grid-cols-3 grid-rows-9 gap-1 min-w-full absolute top-3/4">
          <div className="opacity-0"></div>
          <div className="opacity-0"></div>
          <div className='flex align-center justify-center'>
            <button className='rounded-full primary-color-bg hero-btn'>Comprar</button>
          </div>
        </div>
      </div>
    </main>
  )
}
