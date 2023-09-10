import Cta from './components/Cta'
import Header from './components/Header'
import AboutBlock from './components/AboutBlock'
import { getTextDictionary } from './services/getTextDictionary'

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
      </aside>
      </main>
    </div>
  )
}
