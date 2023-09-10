import Cta from './components/Cta'
import Hero from './components/Hero'
import AboutBlock from './components/AboutBlock'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="image-container relative hero">
        <Hero/>
        <div className="grid grid-cols-3 grid-rows-9 gap-1 min-w-full absolute top-3/4">
          <div className="opacity-0"></div>
          <div className="opacity-0"></div>
          <Cta/>
        </div>
      </div>

      <section>
        <div className="cta-container">
          <Cta className='min-w-full'/>
        </div>

        <AboutBlock title={ "Homem Extraordinário" } text={ "Aqui vai o texto" }/>
        <AboutBlock title={ "Carlos Eduardo Monte" } text={ "Aqui vai o texto" }/>
      </section>
    </main>
  )
}
