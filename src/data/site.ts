export const navLinks = [
  { id: "home", href: "#home", label: "Home" },
  { id: "animals", href: "#animals", label: "Animals" },
  { id: "experiences", href: "#experiences", label: "Experiences" },
  { id: "visit", href: "#visit", label: "Visit" },
  { id: "gallery", href: "#gallery", label: "Gallery" },
  { id: "about", href: "#about", label: "About" },
] as const;

export type SectionId = (typeof navLinks)[number]["id"];

export const visitDetails = {
  hours: ["Monday – Sunday", "9:00 AM – 6:00 PM"],
  location: "Green Valley Wildlife Park",
  tickets: [
    { label: "Adults", price: "$20" },
    { label: "Children", price: "$10" },
    { label: "Family", price: "$50" },
  ],
};

export const contact = {
  email: "hello@wildhaven.example",
  phone: "+1 000 123 4567",
  phoneHref: "tel:+10001234567",
};

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "YouTube", href: "https://www.youtube.com/" },
  { label: "TikTok", href: "https://www.tiktok.com/" },
] as const;
