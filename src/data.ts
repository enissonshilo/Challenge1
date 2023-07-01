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

export interface IComments {
  id: number;
  postId: number;
  email: string;
  body: string;
}

export const Comments: IComments[] = [
  {
    id: 1,
    postId: 1,
    email: "johndoe@gmail.com",
    body: "At the foot of Christ the Redeemer was a humbling experience. The panoramic views of Rio de Janeiro from the top were absolutely breathtaking.",
  },
  {
    id: 2,
    postId: 1,
    email: "sarahsmith@hotmail.com",
    body: "Christ the Redeemer is an iconic symbol of Brazil. The sheer size and the intricate details of this statue are a testament to the craftsmanship and devotion behind its creation.",
  },
  {
    id: 3,
    postId: 1,
    email: "emilybrown@outlook.com",
    body: "Visiting Christ the Redeemer was a spiritual journey. The sense of peace and tranquility envelops you as you approach the statue is truly remarkable.",
  },
  {
    id: 4,
    postId: 1,
    email: "wilson@gmail.com",
    body: "The view from Christ the Redeemer is unparalleled. Seeing the sprawling city of Rio de Janeiro natural beauty from this vantage point is a memory I will cherish forever.",
  },
  {
    id: 5,
    postId: 1,
    email: "jessicathompson@hotmail.com",
    body: "Christ the Redeemer is a must-see attraction in Brazil. The statue's imposing presence and the vistas it offers make it a highlight of any trip to Rio de Janeiro.",
  },
  {
    id: 6,
    postId: 1,
    email: "alexmiller@yahoo.com",
    body: "The beauty and significance of Christ the Redeemer cannot be overstated. It is a symbol of faith, unity, and the indomitable spirit of the Brazilian people.",
  },
  {
    id: 1,
    postId: 2,
    email: "lisawhite@outlook.com",
    body: "Exploring the ancient ruins of Machu Picchu like stepping into a lost world. The breathtaking mountain views and the intricate stone structures left me in awe.",
  },
  {
    id: 2,
    postId: 2,
    email: "ryanscott@gmail.com",
    body: "Machu Picchu is a true marvel of Inca engineering. The precision and craftsmanship of the stone walls and terraces are a testament to the ingenuity of the ancient civilization."
    ,
  },
  {
    id: 3,
    postId: 2,
    email: "amandajohnson@hotmail.com",
    body: "Visiting Machu Picchu was a spiritual experience. The mystical atmosphere and the sense of history that permeates the site make it a truly magical place.",
  },
  {
    id: 4,
    postId: 2,
    email: "chrisroberts@yahoo.com",
    body: "The beauty of Machu Picchu is indescribable. The lush mountains, the misty clouds, and the ancient ruins create a scene straight out of a postcard.",
  },
  {
    id: 5,
    postId: 2,
    email: "laurawilliams@outlook.com",
    body: "Picchu a bucket-list destination for a reason The sense of wonder and the feeling being connected to the past make it an unforgettable.",
  },
  {
    id: 6,
    postId: 2,
    email: "matthewdavis@gmail.com",
    body: "The journey to Machu Picchu was as incredible as the destination itself The Inca Trail offered stunning landscapes and a sense of adventure added the experience.",
  },
  {
    id: 1,
    postId: 3,
    email: "oliviarobinson@hotmail.com",
    body: "Visiting the Taj Mahal was a magical administrative experience. The stunning beauty of this white marble mausoleum left me speechless.",
  },
  {
    id: 2,
    postId: 3,
    email: "andrewjackson@yahoo.com",
    body: "The Taj Mahal is an architectural masterpiece. The intricate details, elegant domes and manicured gardens create an atmosphere of serenity and charm.",
  },
  {
    id: 3,
    postId: 3,
    email: "sophiawalker@outlook.com",
    body: "Exploring the Taj Mahal was like stepping into a fairy tale. The perfect symmetry, the reflections in the pools and the love story behind this monument are captivating.",
  },
  {
    id: 4,
    postId: 3,
    email: "jasonharris@gmail.com",
    body: "The Taj Mahal is a symbol of eternal love. The grandeur of this mausoleum and the romantic history that surrounds it make it an unmissable destination for lovers of history and beauty.",
  },
  {
    id: 5,
    postId: 3,
    email: "melissagreen@hotmail.com",
    body: "The view of the Taj Mahal at sunrise is breathtaking. The colors of the sky and the majestic silhouette of this Indian icon create an unforgettable image.",
  },
  {
    id: 6,
    postId: 3,
    email: "brianthompson@yahoo.com",
    body: "The Taj Mahal is India's treasure. A combination of stunning architecture, fascinating history and an aura of romance makes this place worth a visit.",
  },
  {
    id: 1,
    postId: 4,
    email: "rebeccawilson@outlook.com",
    body: "Stepping into the Colosseum was like stepping into ancient Rome. The grandeur and the historical significance of this iconic amphitheater were awe-inspiring.",
  },
  {
    id: 2,
    postId: 4,
    email: "stephenmiller@gmail.com",
    body: "The Colosseum is a testament to the architectural brilliance of the Roman Empire. Walking through the corridors and imagining the gladiatorial battles was a surreal experience.",
  },
  {
    id: 3,
    postId: 4,
    email: "jenniferdavis@hotmail.com",
    body: "Visiting the Colosseum was a journey through time. The sheer size and the well-preserved structure allow you to envision the grand spectacles that took place within its.",
  },
  {
    id: 4,
    postId: 4,
    email: "kevinroberts@yahoo.com",
    body: "The Colosseum is a must-see attraction in Rome. The rich history and the impressive architecture make it a highlight of any visit to the Eternal City.",
  },
  {
    id: 5,
    postId: 4,
    email: "ameliawalker@outlook.com",
    body: "The Colosseum is a symbol of Rome's glorious past. Standing in the amphitheater and imagining the cheers of the crowd transported me back to the days of ancient Rome.",
  },
  {
    id: 6,
    postId: 4,
    email: "patrickjackson@gmail.com",
    body: "The Colosseum is an architectural marvel that has stood the test of time. Exploring its corridors and learning about its history was a truly immersive experience.",
  },
  {
    id: 1,
    postId: 5,
    email: "hannahbrown@hotmail.com",
    body: "Exploring the ancient Mayan ruins ofichen Itza was like stepping back in time. carvings and the towering pyramid were awe-inspiring.",
  },
  {
    id: 2,
    postId: 5,
    email: "danielharris@yahoo.com",
    body: "Chichen Itza is a testament to the advanced knowledge and architectural brilliance of the Mayan civilization. The El Castillo pyramid is a true marvel.",
  },
  {
    id: 3,
    postId: 5,
    email: "emmawilliams@outlook.com",
    body: "Visiting Chichen Itza was a fascinating journey into the Mayan world. The ball, the observatory, and the Temple of the Warriors were all highlights of this archaeological wonder.",
  },
  {
    id: 4,
    postId: 5,
    email: "williamdavis@gmail.com",
    body: "Chichen Itza is a UNESCO World Heritage Site for a reason. The historical significance and the well-preserved ruins make it a captivating destination for anyone interested in ancient civilizations.",
  },
  {
    id: 5,
    postId: 5,
    email: "sophiawilson@hotmail.com",
    body: "The grandeur of Chichen Itza is unmatched. The sheer size and the intricate details of the structures make it a must-visit destination for enthusiasts.",
  },
  {
    id: 6,
    postId: 5,
    email: "jasonthompson@yahoo.com",
    body: "The blend of Mayan history and natural beauty at Chichen Itza is truly remarkable. Exploring the site and learning about Mayan culture was an enriching experience.",
  },
  {
    id: 1,
    postId: 6,
    email: "sarahmiller@outlook.com",
    body: "The Great Wall of China is a testament to human perseverance and ingenuity. Standing atop this ancient wonder, I couldn't help but feel a deep sense of admiration for the people who built.",
  },
  {
    id: 2,
    postId: 6,
    email: "michaeljackson@gmail.com",
    body: "Visiting the Great Wall of China was a dream come true. The rich history and the opportunity to walk on this iconic structure made it a once-in-a-lifetime experience.",
  },
  {
    id: 3,
    postId: 6,
    email: "lisaroberts@hotmail.com",
    body: "Visiting the Great Wall of China a humbling experience. As I walked along its ancient stones, I couldn't help but reflect on the immense human effort that went into creating this remarkable feat of engineering.",
  },
  {
    id: 4,
    postId: 6,
    email: "chrisgreen@yahoo.com",
    body: "Exploring the Great Wall of China stepping back in time. The intricate design and sheer magnitude of this wonder truly showcase the brilliance of ancient engineering.",
  },
  {
    id: 5,
    postId: 6,
    email: "jessicawalker@outlook.com",
    body: "Walking along the Great Wall of China an awe-inspiring experience. The views were breathtaking, and the historical significance of this architectural marvel left me in awe.",
  },
  {
    id: 6,
    postId: 6,
    email: "natalieadams@gmail.com",
    body: "The Great Wall of China is a must-visit destination. of natural beauty and architectural brilliance makes it an incredible sight to behold.",
  },
]
