export interface IPost {
  id: number;
  title: string;
  imageUrl: string;
  body: string;
}

export const Posts: IPost[] = [
  {
    id: 1,
    title: "Christ the Redeemer",
    imageUrl: "../images/rio-de-janeiro.jpg",
    body: "Perched atop Corcovado Mountain in Rio de Janeiro, Brazil, Christ the Redeemer is an iconic statue that overlooks the city. Symbolizing peace and welcoming visitors with open arms, this colossal statue is one of the New Seven Wonders of the World.",
  },
  {
    id: 2,
    title: "Macchu Pichu",
    imageUrl: "../images/machu-picchu.jpg",
    body: "Nestled high in the Andes Mountains of Peru, Machu Picchu is an ancient Incan citadel and a UNESCO World Heritage Site. This mystical wonder is renowned for its incredible stone architecture and breathtaking mountainous backdrop. Exploring the terraces, temples, and intricate stone pathways of Machu Picchu offers a glimpse into the ingenuity and spirituality of the Incan civilization.",
  },
  {
    id: 3,
    title: "Taj Mahal",
    imageUrl: "../images/taj-mahal.jpg",
    body: "The Taj Mahal, located in Agra, India, is an exquisite white marble mausoleum and a symbol of love. Built by Emperor Shah Jahan in memory of his wife, it is considered a masterpiece of Mughal architecture. The intricate carvings, shimmering marble, and perfectly symmetrical design of the Taj Mahal make it a timeless wonder that attracts millions of visitors every year.",
  },
  {
    id: 4,
    title: "Colosseum",
    imageUrl: "../images/coliseu.jpg",
    body: "The Colosseum, situated in Rome, Italy, is an iconic amphitheater and a remarkable architectural feat. Built during the Roman Empire, it was a venue for gladiator fights and grand spectacles. Today, the Colosseum stands as a symbol of ancient Roman civilization and attracts visitors who marvel at its grandeur and historical significance.",
  },
  {
    id: 5,
    title: "Chichén Itzá",
    imageUrl: "../images/chichen-itza.jpg",
    body: "Chichén Itzá, located in the Yucatán Peninsula of Mexico, is a fascinating archaeological site and one of the Seven Wonders of the World. It was once a major Mayan city and showcases impressive structures, such as the iconic El Castillo pyramid. Exploring the intricate carvings, ancient ball courts, and astronomical observatory at Chichén Itzá is a journey into the rich history and culture of the Mayan civilization.",
  },
  {
    id: 6,
    title: "The Great Wall of China",
    imageUrl: "../images/muralha-da-china.jpg",
    body: "The Great Wall of China is a colossal architectural wonder that stretches over 13,000 miles. Built to protect China from invasions, it is the longest man-made structure in the world. Its historical significance and breathtaking views make it an unforgettable wonder.",
  },
];
