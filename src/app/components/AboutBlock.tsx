interface AboutBlockProps {
  title: string;
  text: string;
}

const AboutBlock: React.FC<AboutBlockProps> = ({ title, text }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold secondary-color-text uppercase">{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default AboutBlock;