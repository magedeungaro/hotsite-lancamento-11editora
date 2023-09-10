import Gifts from './Gifts'

type GiftTiersProps = {
  tiers: Record<string, Record<string, string>>;
};

const GiftTiers: React.FC<GiftTiersProps> = ({ tiers }) => {
  return (
    <div>
      {Object.keys(tiers).map((tierKey) => {
        const tier = tiers[tierKey];
        const { title, items } = tier;
        const itemsValues = items.split(', ');
        return <Gifts key={tierKey} title={title} items={itemsValues} />;
      })}
    </div>
  );
};

export default GiftTiers;