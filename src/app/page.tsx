import Image from 'next/image'
import Cta from './components/Cta'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="image-container relative hero">
        <Image src="/hero.png"
              alt="Banner com desconto de 11% no livro Homem Extraordinário, além de brindes e recompensas"
              width={1920} height={1080} className='min-w-full hero desktop' />
        <Image src="/mob-hero.png"
              alt="Banner com desconto de 11% no livro Homem Extraordinário, além de brindes e recompensas"
              width={938} height={768} className='min-w-full hero mobile' />

        <div className="grid grid-cols-3 grid-rows-9 gap-1 min-w-full absolute top-3/4">
          <div className="opacity-0"></div>
          <div className="opacity-0"></div>
          <Cta></Cta>
        </div>
      </div>

      <section>
        <div className="cta-container">
          <Cta className='min-w-full'></Cta>
        </div>
      </section>
    </main>
  )
}
