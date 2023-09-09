interface CtaProps {
  className?: string;
}

const Cta: React.FC<CtaProps> = ({ className }) => {
  return (
    <div className={`${className} min-w-full flex justify-center align-center`}>
      <a className='rounded-full primary-color-bg hero-btn'
        href="https://www.11editora.com.br/livraria/homem-extraordinario">Comprar</a>
    </div>
  );
};

export default Cta;