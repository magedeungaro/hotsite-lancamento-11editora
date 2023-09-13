type GiftsProps = {
  title: string;
  items: string[];
};

const Gifts: React.FC<GiftsProps> = ({ title, items }) => {
  return (
    <div className="max-[1024px]:text-center">
      <h2 className="text-xl pt-4 font-semibold secondary-color-text">{title}</h2>
      <ul className="pt-1 list-disc max-[1024px]:list-none">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Gifts;