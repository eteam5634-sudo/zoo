import { animals } from "@/data/animals";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  aspect: string;
};

const aspects = [
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-[1/1]",
  "aspect-[5/4]",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[3/5]",
  "aspect-[5/4]",
];

export const galleryImages: GalleryImage[] = animals.map((animal, index) => ({
  id: animal.id,
  src: animal.image,
  alt: animal.alt,
  aspect: aspects[index] ?? "aspect-[4/5]",
}));
