export interface NavItem {
  label: string;
  href: string;
}

/** Grouping for the heritage regional map (primary craft heartland). */
export type HeritageCluster =
  | "north"
  | "rajasthan"
  | "east"
  | "west"
  | "south"
  | "central"
  | "north-east";

export interface Craft {
  slug: string;
  title: string;
  nameLocal: string;
  region: string;
  state: string;
  heritageCluster: HeritageCluster;
  technique: string;
  shortDescription: string;
  description: string;
  image: string;
  productTypes: string[];
  materials: string;
  featured?: boolean;
  heritageEra?: string;
}
