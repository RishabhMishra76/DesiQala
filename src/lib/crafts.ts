import type { Craft, HeritageCluster } from "@/types/craft";

export const heritageClusters: { id: HeritageCluster; name: string }[] = [
  { id: "north", name: "North" },
  { id: "rajasthan", name: "Rajasthan" },
  { id: "east", name: "East & Mithila" },
  { id: "west", name: "West (Gujarat & Maharashtra)" },
  { id: "south", name: "South" },
  { id: "central", name: "Central & tribal belts" },
  { id: "north-east", name: "North-East & Kerala" },
];

/** Bump when replacing JPEGs in public/crafts/ so browsers drop stale copies. */
export const CRAFT_IMAGE_VERSION = 2;

export function craftImage(filename: string): string {
  return `/crafts/${filename}?v=${CRAFT_IMAGE_VERSION}`;
}

export const crafts: Craft[] = [
  {
    slug: "dhokra-metal-casting",
    title: "Dhokra",
    nameLocal: "ढोकरा",
    region: "Bastar & tribal belts",
    state: "Chhattisgarh / Odisha",
    heritageCluster: "central",
    technique: "Lost-wax bronze casting",
    shortDescription:
      "Tribal brass figures and décor cast by the lost-wax method.",
    description:
      "Dhokra uses the ancient lost-wax technique to cast brass and bell-metal figurines, lamps, and sculptural décor. No two pieces come out the same — a good fit for design-led retailers looking for ethical, story-rich metalwork.",
    image: craftImage("dhokra.jpg"),
    productTypes: ["Figurines & sculpture", "Lamps & diyas", "Jewellery"],
    materials: "Brass and bell metal over clay-and-wax cores",
    featured: true,
    heritageEra: "Lost-wax lineage over 4,000 years old",
  },
  {
    slug: "bidriware",
    title: "Bidri",
    nameLocal: "बिदरी",
    region: "Bidar",
    state: "Karnataka",
    heritageCluster: "south",
    technique: "Silver inlay on blackened alloy",
    shortDescription:
      "Charcoal-black metal with fine silver floral and geometric inlay.",
    description:
      "Bidriware combines a zinc-copper alloy base with hand-cut silver wire and sheet inlay, then oxidises the surface to a deep matte black. Trays, vases, and boxes suit premium gifting and heritage interiors.",
    image: craftImage("bidri.jpg"),
    productTypes: ["Decorative trays & bowls", "Vases", "Boxes & cufflinks"],
    materials: "Zinc-copper alloy, pure silver inlay",
    featured: true,
    heritageEra: "Bahmani court craft, 14th century onward",
  },
  {
    slug: "bone-carving",
    title: "Bone Carving",
    nameLocal: "अस्थि अंकन",
    region: "Lucknow & Rajasthan",
    state: "Uttar Pradesh / Rajasthan",
    heritageCluster: "north",
    technique: "Hand-carved bone and camel bone",
    shortDescription:
      "Lacy jaali boxes and ornaments carved from ethically sourced bone.",
    description:
      "Artisans cut microscopic jaali patterns into bone and camel bone for boxes, handles, and jewellery components. The work demands steady hands and generations of tool-making knowledge.",
    image: craftImage("bone-carving.jpg"),
    productTypes: ["Carved boxes", "Handles & knobs", "Jewellery components"],
    materials: "Ethically sourced bone and camel bone",
    featured: false,
    heritageEra: "Mughal-era ornamental carving",
  },
  {
    slug: "tarkashi",
    title: "Tarkashi",
    nameLocal: "तारकशी",
    region: "Jaipur & Mainpuri",
    state: "Rajasthan / Uttar Pradesh",
    heritageCluster: "rajasthan",
    technique: "Brass wire inlay in wood",
    shortDescription:
      "Geometric and floral brass wire set into sheesham and rosewood.",
    description:
      "Tarkashi inlay embeds fine brass wire into hand-carved grooves on wood, then polishes the surface flush. Boxes, trays, and furniture accents export well to design-conscious buyers.",
    image: craftImage("tarkashi.jpg"),
    productTypes: ["Inlay boxes", "Trays & coasters", "Furniture accents"],
    materials: "Sheesham, rosewood, brass wire",
    featured: false,
    heritageEra: "Indo-Islamic woodcraft traditions",
  },
  {
    slug: "pattachitra-paintings",
    title: "Pattachitra",
    nameLocal: "पट्टचित्र",
    region: "Raghurajpur, Puri",
    state: "Odisha",
    heritageCluster: "east",
    technique: "Cloth-scroll mineral painting",
    shortDescription:
      "Temple-scroll stories on treated cloth with very fine brushwork.",
    description:
      "Pattachitra artists coat cloth with chalk and tamarind gum, then paint mythological scenes with natural colours and fine brushes. Scrolls and panels suit luxury gifting, museum shops, and curated home collections.",
    image: craftImage("pattachitra.jpg"),
    productTypes: ["Cloth scrolls", "Wall panels", "Painted boxes"],
    materials: "Tamarind-and-chalk treated cloth, natural and mineral colours",
    featured: true,
    heritageEra: "Temple artisan guilds",
  },
  {
    slug: "rogan-art",
    title: "Rogan",
    nameLocal: "रोगन",
    region: "Kutch",
    state: "Gujarat",
    heritageCluster: "west",
    technique: "Castor-oil paste on fabric",
    shortDescription:
      "Raised floral and tree-of-life motifs in vivid paste colours.",
    description:
      "Rogan painters heat castor oil into a thick paste, then apply it freehand with a metal stylus to cloth and apparel. The raised texture and jewel tones make striking wall hangings and fashion panels.",
    image: craftImage("rogan.jpg"),
    productTypes: ["Wall hangings", "Apparel panels", "Table linen"],
    materials: "Castor-oil paste, natural pigments on cotton",
    featured: false,
    heritageEra: "Kutchi pastoral art, centuries old",
  },
  {
    slug: "warli-tribal-art",
    title: "Warli",
    nameLocal: "वारली",
    region: "Palghar",
    state: "Maharashtra",
    heritageCluster: "west",
    technique: "Rice paste on earth tones",
    shortDescription:
      "Graphic tribal scenes on wall panels, canvas, and textiles.",
    description:
      "Warli art uses simple circles, triangles, and lines to show village life, harvests, and the tarpa dance. Its clean graphic style works well in modern, minimal interiors around the world.",
    image: craftImage("warli.jpg"),
    productTypes: ["Wall panels & canvas", "Cushions & textiles", "Murals on commission"],
    materials: "Rice paste and gum on mud, cow-dung, or canvas grounds",
    featured: true,
    heritageEra: "Indigenous Western India",
  },
  {
    slug: "pitwa-iron-craft",
    title: "Pitwa",
    nameLocal: "पित्वा",
    region: "Bastar",
    state: "Chhattisgarh",
    heritageCluster: "central",
    technique: "Wrought-iron cutwork",
    shortDescription:
      "Silhouetted iron sun and figure wall hangings from Bastar.",
    description:
      "Pitwa smiths forge and cut wrought iron into sun discs, dancers, and ritual motifs. Pieces are lightweight enough for gallery walls yet read as bold graphic art in hospitality projects.",
    image: craftImage("pitwa.jpg"),
    productTypes: ["Wall hangings", "Sculptural décor", "Garden accents"],
    materials: "Wrought iron, natural wax finish",
    featured: false,
    heritageEra: "Tribal iron-smithing guilds",
  },
  {
    slug: "channapatna-toys",
    title: "Channapatna Toys",
    nameLocal: "चन्नपटना",
    region: "Channapatna",
    state: "Karnataka",
    heritageCluster: "south",
    technique: "Turned wood with lacquer",
    shortDescription:
      "Bright lac-turned toys and décor safe for children and retail.",
    description:
      "Turners shape ivory wood on lathes, then coat pieces with natural lac and vegetable dyes. The glossy finish and rounded forms suit toy buyers, gift brands, and playful interior accents.",
    image: craftImage("channapatna-toys.jpg"),
    productTypes: ["Toys & games", "Decorative objects", "Corporate gifting"],
    materials: "Ivory wood, natural lac, vegetable dyes",
    featured: false,
    heritageEra: "Tipu Sultan–era lacquer tradition",
  },
  {
    slug: "madhubani-paintings",
    title: "Madhubani",
    nameLocal: "मधुबनी",
    region: "Mithila",
    state: "Bihar",
    heritageCluster: "east",
    technique: "Natural pigment narrative art",
    shortDescription:
      "Folk narratives painted with natural colours on paper and cloth.",
    description:
      "Madhubani art comes from the Mithila region, where women have passed down symbolic storytelling for centuries. Geometric borders, fish, birds, and scenes from myth are drawn with twigs, nib pens, and fingers using natural pigments — well suited to gallery walls, hotels, and limited-edition retail.",
    image: craftImage("madhubani.jpg"),
    productTypes: ["Framed wall art", "Hand-painted textiles", "Cards & stationery"],
    materials: "Handmade paper, cotton, natural and mineral pigments",
    featured: true,
    heritageEra: "Centuries-old Mithila tradition",
  },
  {
    slug: "lippan-art",
    title: "Lippan",
    nameLocal: "लिप्पन",
    region: "Kutch",
    state: "Gujarat",
    heritageCluster: "west",
    technique: "Mud and mirror relief",
    shortDescription:
      "White clay relief embedded with mirrors on board and walls.",
    description:
      "Lippan kaam builds raised patterns from clay and cow dung on boards, then presses in small mirrors. The shimmer suits boutique hotels, retail feature walls, and statement décor.",
    image: craftImage("lippan.jpg"),
    productTypes: ["Wall panels", "Mirrors & frames", "Architectural accents"],
    materials: "Clay, mirrors, natural binders on MDF or wall",
    featured: false,
    heritageEra: "Rabari and Marwada community art",
  },
  {
    slug: "togalu-leather-puppetry",
    title: "Togalu",
    nameLocal: "तोगालु",
    region: "Karnataka",
    state: "Karnataka",
    heritageCluster: "south",
    technique: "Leather shadow puppetry",
    shortDescription:
      "Perforated leather puppets and panels for performance and décor.",
    description:
      "Togalu Gombeyata artists treat leather, pierce intricate patterns, and paint mythological characters for shadow theatre. Puppets and backlit panels appeal to cultural institutions and design retailers.",
    image: craftImage("togalu.jpg"),
    productTypes: ["Shadow puppets", "Backlit panels", "Collectible figures"],
    materials: "Goat leather, natural dyes",
    featured: false,
    heritageEra: "Karnataka folk theatre",
  },
  {
    slug: "bamboo-craft",
    title: "Bamboo Art",
    nameLocal: "बाँस",
    region: "North-East & Kerala",
    state: "Assam / Kerala",
    heritageCluster: "north-east",
    technique: "Split-and-weave bamboo",
    shortDescription:
      "Lamps, baskets, and furniture from hand-split bamboo.",
    description:
      "Weavers and furniture makers split, shave, and bind bamboo into lampshades, tableware, and structural décor. Lightweight and sustainable, bamboo lines fit eco-conscious wholesale programmes.",
    image: craftImage("bamboo.jpg"),
    productTypes: ["Lamps & shades", "Baskets & tableware", "Furniture components"],
    materials: "Seasoned bamboo, natural bindings",
    featured: false,
    heritageEra: "Indigenous craft across India",
  },
  {
    slug: "ghantadi-bells",
    title: "Ghantadi",
    nameLocal: "घंटाड़ी",
    region: "Kutch",
    state: "Gujarat",
    heritageCluster: "west",
    technique: "Hand-hammered copper bells",
    shortDescription:
      "Graduated copper bells with a distinctive resonant tone.",
    description:
      "Ghantadi makers hammer and tune copper bells without welding, often stringing them into chimes and mobile installations. Buyers value the sound quality and rustic patina for gardens and retail.",
    image: craftImage("ghantadi.jpg"),
    productTypes: ["Bell chimes", "Garlands", "Sculptural mobiles"],
    materials: "Copper sheet, iron clappers",
    featured: false,
    heritageEra: "Lohar bell-making families of Kutch",
  },
  {
    slug: "terra-cotta",
    title: "Terra-cotta",
    nameLocal: "टेराकोटा",
    region: "Gorakhpur & Bengal",
    state: "Uttar Pradesh / West Bengal",
    heritageCluster: "north",
    technique: "Hand-built and wheel-thrown clay",
    shortDescription:
      "Earthy planters, figurines, and architectural tiles.",
    description:
      "Terra-cotta potters shape clay into planters, votives, and sculptural décor, often leaving a natural slip or green glaze. Ideal for garden centres, hospitality, and artisan-led home brands.",
    image: craftImage("terra-cotta.jpg"),
    productTypes: ["Planters", "Figurines", "Tiles & cladding"],
    materials: "Local clay, natural slips and glazes",
    featured: false,
    heritageEra: "Harappan pottery lineage",
  },
  {
    slug: "jaipur-blue-pottery",
    title: "Blue Pottery",
    nameLocal: "ब्लू पॉटरी",
    region: "Jaipur",
    state: "Rajasthan",
    heritageCluster: "rajasthan",
    technique: "Quartz-based glazed ceramics",
    shortDescription:
      "Cobalt and turquoise ceramics made from quartz, unique to Jaipur.",
    description:
      "Jaipur Blue Pottery is made from quartz paste rather than clay, which gives it its bright finish and cool blue florals. Artisans shape, paint, glaze, and fire each piece by hand — from serving platters to architectural tiles for boutique interiors.",
    image: craftImage("blue-pottery.jpg"),
    productTypes: ["Platters & tableware", "Tiles", "Vases & mugs"],
    materials: "Quartz powder, glass, multani mitti, cobalt oxide glaze",
    featured: true,
    heritageEra: "Persian-influenced, revived in the 1950s",
  },
];

export function getCraftBySlug(slug: string): Craft | undefined {
  return crafts.find((c) => c.slug === slug);
}

export function getCraftPlateNumber(slug: string): string {
  const index = crafts.findIndex((c) => c.slug === slug);
  return String(index + 1).padStart(2, "0");
}

export function getFeaturedCrafts(): Craft[] {
  return crafts.filter((c) => c.featured);
}

export const craftRegions = [...new Set(crafts.map((c) => c.state))].sort();

const STATE_ABBREV: Record<string, string> = {
  "Uttar Pradesh": "UP",
  "West Bengal": "WB",
  Assam: "Assam",
  Kerala: "Kerala",
};

/** Shorter chip labels for narrow viewports; full string remains in `title`. */
export function formatCraftStateForFilter(state: string, variant: "short" | "full" = "full"): string {
  if (variant === "full") return state;
  return state
    .split(" / ")
    .map((part) => STATE_ABBREV[part.trim()] ?? part.trim())
    .join(" · ");
}
