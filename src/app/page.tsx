import Cta from './components/Cta'
import Header from './components/Header'
import AboutBlock from './components/AboutBlock'

export default function Home() {
  return (
    <div>
      <Header></Header>

      <main className='flex justify-between py-10 px-10'>
      <section className="w-6/10">
        <AboutBlock title={ "Homem Extraordinário" }
                    text={ `O leitor é conduzido  pelos meandros das reflexões de Antônio Pilhares, 
                            um idoso professor universitário às voltas com a crueldade do tempo.
                            O extraordinário do título, portanto, remete muito mais à verdadeira batalha
                            empreendida pelo protagonista com fantasmas do passado que voltaram a assolar o país do
                            que com as possíveis proezas que ele conseguirá realizar. Ao recordar, torna-se
                            inevitável a ressurreição de antigos rancores que pareciam definitivamente sepultados.
                            Romance com uma prosa repleta de ironia, piadas, sarcasmo e erudição,
                            sem jamais soar pedante ou despropositada.` }/>
        <AboutBlock title={ "Carlos Eduardo Monte" }
                    text={ `Ele é de Jaú/SP, nascido em 1975. Formado em Letras, Mestre e Doutor em Estudos
                            de Literários pela Unesp/Araraquara. Estreou no romance em 2021, com A inesperada visita
                            da Santa Morte ao jovem Silviano das Flores, e como contista já participou de várias
                            antologias e concursos, com premiações e menção honrosa para: "A morte de Maurélio Salgado",
                            "O imitador de Stanislau Zen" e "Uma palavra acerca do bigode de Salvador Vargas", entre outros.
                            Em 2015, foi finalista do Prêmio SESC de Literatura.` }/>
      </section>
      <aside className="w-1/3">
        <h3>Recompensas</h3>
      </aside>
      </main>
    </div>
  )
}
