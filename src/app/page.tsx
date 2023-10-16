require('dotenv').config();

import Header from './components/Header'
import AboutBlock from './components/AboutBlock'
import GiftTiers from './components/GiftTiers'
import Timer from './components/Timer'
import Cta from './components/Cta'
import Footer from './components/Footer'
import Disclaimer from './components/Disclaimer';

import { getTextDictionary } from './services/getTextDictionary'
import { getTiers } from './services/getTiers'
import { calculateEndSale } from './business/calculateEndSale'
import { dateHelper } from './helpers/dateHelper';

export default function Home() {
  const texts = getTextDictionary();

  return (
    <div>
      <Header></Header>

      <section className="p-10 flex justify-center align-center flex-col text-center">
        <p className='text-4xl max-[1024px]:text-2xl font-bold primary-color-text'> { texts.general.support } </p>
        <Timer endDate={ calculateEndSale(texts.general) } />
        <div className="cta-container">
          <Cta className='max-[1024px]:pt-7'/>
        </div>
      </section>

      <main className='flex justify-between p-10 max-[1024px]:py-1 max-[1024px]:flex-col max-[1024px]:justify-center max-[1024px]:items-center max-[460px]:px-3'>
        <section className="w-6/10 max-[1024px]:w-full">
          <AboutBlock title={ texts.book.title } text={ texts.book.description }/>
          <AboutBlock title={ texts.author.name } text={ texts.author.description }/>
          <Disclaimer description={ texts.general.disclaimer.replace('discount_end_date', dateHelper.internationalizeDate(texts.general.end_discount.date)) }/>
        </section>
        <aside className="w-1/3 max-[1024px]:w-full">
          <div className="pt-10 max-[1024px]:px-3">
            <h3 className="text-2xl font-bold secondary-color-text uppercase max-[1024px]:text-center">
              Recompensas
            </h3>
            <GiftTiers tiers={ getTiers(texts.gift) }/>
          </div>
        </aside>
      </main>

      <Cta className='pt-10 max-[1024px]:pt-15'/>

      <img src="recompensas.jpg"
           alt="Recompensas 11 Editora: Marca-página com a capa do livro Homem-Extraordinário,
                tote bag com o logo da editora, figurarinha temática do Homem-Extraordinário com
                escrito 'Tenha um dia extraordinário', com o autor segurando o livro, capa do livro
                Homem Extraordinário, e wallpaper preto e branco com o logo da editora."
           className='flex justify-center align-center w-1/3 max-[650px]:w-full mx-auto mt-10' />

      <Footer copyright={ texts.general.copyright }
              developerDescription={ texts.general.developer.description } />
    </div>
  )
}
