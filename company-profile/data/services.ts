export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "gayo-aceh",
    title: "Gayo Aceh",
    summary: "Full-bodied, earthy, and smooth.",
    description:
      "Grown in the highlands of Aceh, Gayo coffee is known for its heavy body, low acidity, and deep earthy sweetness.",
    features: ["Notes: dark chocolate, cedar, spice", "Altitude: 1,200–1,600 m", "Roast: medium-dark"],
  },
  {
    slug: "toraja-sapan",
    title: "Toraja Sapan",
    summary: "Rich and complex from South Sulawesi.",
    description:
      "Toraja beans from the mountains of Sulawesi offer a rounded body with layered fruit and herbal notes.",
    features: ["Notes: dark fruit, tobacco, caramel", "Altitude: 1,400–1,800 m", "Roast: medium"],
  },
  {
    slug: "kintamani-bali",
    title: "Kintamani Bali",
    summary: "Bright and citrusy from volcanic soil.",
    description:
      "Grown alongside citrus trees near Mount Batur, Kintamani coffee is clean, bright, and gently sweet.",
    features: ["Notes: orange, honey, floral", "Altitude: 1,000–1,500 m", "Roast: light-medium"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}