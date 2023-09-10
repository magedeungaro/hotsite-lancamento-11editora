import Image from 'next/image'

const Hero = () => {
  return (
    <div className="p-0 m-0">
      <Image src="/hero.png"
              alt="Banner com desconto de 11% no livro Homem Extraordinário, além de brindes e recompensas"
              width={1920} height={1080} className='min-w-full hero desktop' />
      <Image src="/mob-hero.png"
             alt="Banner com desconto de 11% no livro Homem Extraordinário, além de brindes e recompensas"
             width={938} height={768} className='min-w-full hero mobile' />
    </div>
  );
};

export default Hero;