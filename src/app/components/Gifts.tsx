type GiftsProps = {
  title: string;
  items: string[];
};

const Gifts: React.FC<GiftsProps> = ({ title, items }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Gifts;