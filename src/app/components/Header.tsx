import Cta from "./Cta";
import Hero from "./Hero";

const Header = () => {
  return (
    <header>
      <div className="image-container relative hero">
        <Hero/>
        <div className="grid grid-cols-3 grid-rows-9 gap-x-1 gap-y-32 min-w-full absolute top-4/10">
          <div className="opacity-0"></div>
          <div className="opacity-0"></div>
          <p className="max-[1024px]:text-2xl text-4xl flex justify-center align-center text-white font-semibold opacity-90">
            <span className="w-6/10">Brindes e<br/>Recompensas*</span>
          </p>
          <div className="opacity-0"></div>
          <div className="opacity-0"></div>
          <Cta/>
        </div>
      </div>
    </header>
  );
};

export default Header;