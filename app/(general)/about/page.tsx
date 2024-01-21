import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "My About Page",
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}
