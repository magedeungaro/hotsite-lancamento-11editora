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
        <p className='text-4xl font-bold primary-color-text'> { texts.general.support } </p>
        <Timer endDate={ calculateEndSale(texts.general) } />
      </section>

      <main className='flex justify-between p-10'>
        <section className="w-6/10">
          <AboutBlock title={ texts.book.title } text={ texts.book.description }/>
          <AboutBlock title={ texts.author.name } text={ texts.author.description }/>
          <Disclaimer description={ texts.general.disclaimer.replace('discount_end_date', dateHelper.internationalizeDate(texts.general.end_discount.date)) }/>
        </section>
        <aside className="w-1/3">
          <div className="pt-10">
            <h3 className="text-2xl font-bold secondary-color-text uppercase">Recompensas</h3>
            <GiftTiers tiers={ getTiers(texts.gift) }/>
          </div>
        </aside>
      </main>

      <Cta className='pt-10'/>

      <Footer copyright={ texts.general.copyright }
              developerDescription={ texts.general.developer.description } />
    </div>
  )
}
