const img = (id: string, width = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export type Experience = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const experiences: Experience[] = [
  {
    id: "safari-walk",
    title: "Safari Walk",
    description:
      "Follow a winding boardwalk through open savanna habitats and watch herds move at their own unhurried pace.",
    image: img("photo-1516426122078-c23e76319801"),
    alt: "Open safari vehicle driving through grassland at sunset",
  },
  {
    id: "feeding-encounters",
    title: "Feeding Encounters",
    description:
      "Stand with our keepers as they share how diet, training, and daily care shape life for the animals.",
    image: img("photo-1546182990-dffeafbe841d"),
    alt: "African lion walking through grass beside a tree",
  },
  {
    id: "night-at-the-zoo",
    title: "Night at the Zoo",
    description:
      "Stay after dusk, when the paths quiet down and nocturnal residents step into a softer kind of wild.",
    image: img("photo-1760696838974-23f040e35d4e"),
    alt: "Owl perched on a dark branch",
  },
  {
    id: "wildlife-discovery",
    title: "Wildlife Discovery",
    description:
      "Hands-on stations and short keeper talks that turn a curious question into a lasting understanding of nature.",
    image: img("photo-1474511320723-9a56873867b5"),
    alt: "Red fox standing alert in a snowy landscape",
  },
];
