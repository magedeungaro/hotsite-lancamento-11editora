interface AboutBlockProps {
  title: string;
  text: string;
}

const AboutBlock: React.FC<AboutBlockProps> = ({ title, text }) => {
  return (
    <div className="px-3 pt-10 max-[1024px]:py-5">
      <h2 className="text-2xl font-bold secondary-color-text uppercase">{title}</h2>
      <p className="pt-5">{text}</p>
    </div>
  );
};

export default AboutBlock;