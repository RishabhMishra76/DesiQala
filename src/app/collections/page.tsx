import type { Metadata } from "next";
import { CollectionsGrid } from "@/components/collections/collections-grid";
import { EnquiryBand } from "@/components/sections/enquiry-band";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Dhokra, Bidri, Pattachitra, Warli, Blue Pottery, Madhubani, and more — handmade Indian crafts for wholesale buyers.",
};

export default function CollectionsPage() {
  return (
    <>
      <PageHeader
        label="The catalogue"
        title="Collections"
        description="Browse craft lines by region. Each one lists its technique, materials, and the product types we can supply."
        local="संग्रह"
      />
      <Container className="py-12 sm:py-16">
        <CollectionsGrid />
      </Container>
      <EnquiryBand title="Can’t see the product you need? Ask us." />
    </>
  );
}
