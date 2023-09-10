import Header from './components/Header'
import AboutBlock from './components/AboutBlock'
import GiftTiers from './components/GiftTiers'
import { getTextDictionary } from './services/getTextDictionary'
import { getTiers } from './services/getTiers'

export default function Home() {
  const texts = getTextDictionary();

  return (
    <div>
      <Header></Header>

      <main className='flex justify-between py-10 px-10'>
      <section className="w-6/10">
        <AboutBlock title={ texts.book.title } text={ texts.book.description }/>
        <AboutBlock title={ texts.author.name } text={ texts.author.description }/>
      </section>
      <aside className="w-1/3">
        <h3>Recompensas</h3>
        <GiftTiers tiers={ getTiers(texts.gift) }/>
      </aside>
      </main>
    </div>
  )
}
