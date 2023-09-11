require('dotenv').config();

interface CtaProps {
  className?: string;
}

const Cta: React.FC<CtaProps> = ({ className }) => {
  return (
    <div className={`${className} min-w-full flex justify-center align-center`}>
      <a className='cta rounded-full primary-color-bg hero-btn ease-in-out duration-300'
        href={ process.env.SALE_URL }>Comprar</a>
    </div>
  );
};

export default Cta;