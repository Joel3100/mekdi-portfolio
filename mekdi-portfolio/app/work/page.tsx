import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkGrid from "@/components/WorkGrid";
import { site } from "@/data/site";
import { TbLayoutNavbarExpand } from "react-icons/tb";

export const metadata: Metadata = {
  title: `Work — ${site.name}`,
  description: `Full project archive from ${site.name}, ${site.role.toLowerCase()}.`,
};

export default function WorkPage() {
  return (
    <>
      <TbLayoutNavbarExpand />
      <main className="pt-24">
        <WorkGrid />
      </main>
      <Footer />
    </>
  );
}
