'use client'
import { useEffect, useState } from "react";
import FilterAndCards from "../components/filterAndCards";

export default function ArtistCreatedPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isScrolled) {
      window.scrollTo(0, 0);
      setIsScrolled(true);
      console.log(`isScrolled ${isScrolled}`)
    }

    if (isScrolled) {
      console.log(`isScrolled ${isScrolled}`)
    }

  }, [isScrolled]);

  

  return (
    <>
      <FilterAndCards />
    </>
  );
}
