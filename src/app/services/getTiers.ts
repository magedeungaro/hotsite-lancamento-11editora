export const getTiers = (texts: Record<string, Record<string, string>>): Record<string, Record<string, string>> => {
  const tiers: Record<string, Record<string, string>> = {};

  Object.entries(texts).forEach(([key, value]) => {
    if (key.match(/^tier/) !== null) {
      tiers[key] = value;
    }
  });

  return tiers;
};