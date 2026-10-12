export const siteConfig = {
  name: "DesiQala",
  nameLocal: "देसी कला",
  tagline: "Indian handicrafts, supplied wholesale",
  description:
    "DesiQala supplies handmade Indian crafts to retailers, designers, and hotels in India and overseas — Dhokra, Bidri, Pattachitra, Warli, Blue Pottery, Madhubani, and more.",
  contactEmail: "partners@desiqala.com",
  contactPhone: "+91 00000 00000",
  address: "Export desk · New Delhi, India",
  responseTime: "We reply within 2 business days.",
  announcement: "Wholesale only · Buyers in India & overseas · Samples before bulk orders",
} as const;

export const buyerTracks = [
  {
    id: "domestic",
    label: "Buying in India",
    title: "For stores, studios, and gifting teams",
    points: [
      "GST invoices for registered businesses",
      "Dispatch to stores and warehouses across India",
      "Mixed-craft orders for boutiques and concept stores",
      "Corporate and festive gifting programmes",
    ],
  },
  {
    id: "export",
    label: "Buying from abroad",
    title: "For importers, retailers, and hotel groups",
    points: [
      "Export documents and shipment-ready packing",
      "FOB or CIF quotes in your currency",
      "Pre-shipment samples and quality checks",
      "Private label and custom sizing",
    ],
  },
] as const;
