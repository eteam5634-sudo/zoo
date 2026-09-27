export const animalFilters = [
  "All",
  "Mammals",
  "Birds",
  "Reptiles",
  "Big Cats",
] as const;

export type AnimalFilter = (typeof animalFilters)[number];
export type AnimalCategory = Exclude<AnimalFilter, "All">;

export type Animal = {
  id: string;
  name: string;
  categories: AnimalCategory[];
  image: string;
  alt: string;
  description: string;
  habitat: string;
  diet: string;
  conservation: string;
};

const img = (id: string, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const animals: Animal[] = [
  {
    id: "african-lion",
    name: "African Lion",
    categories: ["Mammals", "Big Cats"],
    image: img("photo-1546182990-dffeafbe841d"),
    alt: "Adult male African lion walking through grass",
    description:
      "A golden-maned presence on the savanna ridge, the African lion watches the herd with a calm that still feels electric. At WILDHaven, the pride’s open grassland habitat is built for roaming, shade, and the quiet drama of family life.",
    habitat: "Open savanna grassland with rocky outlooks and shaded groves",
    diet: "Carnivore — prepared meat, bones, and keeper-led enrichment",
    conservation: "Vulnerable",
  },
  {
    id: "elephant",
    name: "Elephant",
    categories: ["Mammals"],
    image: img("photo-1557050543-4d5f4e07ef46"),
    alt: "African elephant facing forward with textured skin and curved tusks",
    description:
      "Our elephants move with a patience that changes the pace of a visit. Wide yards, dust baths, and a deep pool give this highly social herd room to wander, splash, and stay close to one another.",
    habitat: "Wooded grassland, mud wallows, and a deep bathing pool",
    diet: "Herbivore — grasses, browse, hay, fruit, and branches",
    conservation: "Endangered",
  },
  {
    id: "giraffe",
    name: "Giraffe",
    categories: ["Mammals"],
    image: img("photo-1547721064-da6cfb341d50"),
    alt: "Giraffe portrait with green trees in the background",
    description:
      "Long-necked and unhurried, the giraffes browse above the tree line of the African plains. Elevated feeders and a tall, open yard let them move the way they would across a real savanna.",
    habitat: "Tall savanna woodland with elevated browsing stations",
    diet: "Herbivore — leaves, hay, and specially formulated browse",
    conservation: "Vulnerable",
  },
  {
    id: "gorilla",
    name: "Gorilla",
    categories: ["Mammals"],
    image: img("photo-1711198583409-b3dba6a7e144"),
    alt: "Close-up of a gorilla in a green forest",
    description:
      "In the forest habitat, the gorilla troop spends the day foraging, resting, and keeping a close eye on one another. It is one of the quietest rooms in the zoo, and one of the hardest to leave.",
    habitat: "Shaded tropical forest with climbing structures and dense cover",
    diet: "Herbivore — leafy greens, vegetables, fruit, and shoots",
    conservation: "Critically Endangered",
  },
  {
    id: "zebra",
    name: "Zebra",
    categories: ["Mammals"],
    image: img("photo-1700294048033-5687fcd289f6"),
    alt: "Close-up of a zebra standing in a grassy field",
    description:
      "Every stripe pattern is different, and the herd seems to know it. Zebras share the savanna with the giraffes, grazing in the open where visitors can follow their movements along the trail.",
    habitat: "Shared savanna grassland with open sightlines",
    diet: "Herbivore — grasses and hay",
    conservation: "Near Threatened",
  },
  {
    id: "flamingo",
    name: "Flamingo",
    categories: ["Birds"],
    image: img("photo-1497206365907-f5e630693df0"),
    alt: "Pink flamingo standing in shallow water",
    description:
      "A wash of coral pink against still water, the flamingo flock is at its best in late light. Shallow lagoons and a mineral-rich diet keep the colony together and brilliantly colored.",
    habitat: "Shallow alkaline lagoon with islands for nesting",
    diet: "Filter feeder — algae, shrimp, and specialized pellets",
    conservation: "Least Concern",
  },
  {
    id: "crocodile",
    name: "Crocodile",
    categories: ["Reptiles"],
    image: img("photo-1760116992632-e588dd2ac1f3"),
    alt: "Crocodile resting on the shore with its mouth open",
    description:
      "Still as stone until it isn’t, the crocodile is a masterclass in patience. A heated riverbank and deep water let these ancient reptiles bask, swim, and disappear beneath the surface.",
    habitat: "Warm river exhibit with basking banks and deep water",
    diet: "Carnivore — fish and prepared meat",
    conservation: "Least Concern",
  },
  {
    id: "tiger",
    name: "Tiger",
    categories: ["Mammals", "Big Cats"],
    image: img("photo-1561731216-c3a4d99437d5"),
    alt: "Tiger walking forward through green undergrowth",
    description:
      "Stripes dissolve into the shade, then a shoulder catches the light. The tiger habitat mixes tall grass, pools, and quiet trails so this solitary cat can patrol on its own terms.",
    habitat: "Forested wetland with pools, grass, and elevated trails",
    diet: "Carnivore — prepared meat and enrichment feeds",
    conservation: "Endangered",
  },
];

export const featuredAnimal =
  animals.find((animal) => animal.id === "elephant") ?? animals[1];
