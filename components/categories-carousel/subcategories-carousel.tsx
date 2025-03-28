"use client";

import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubcategoriesCarouselProps {
  subcategories: string[];
}

export function SubcategoriesCarousel({
  subcategories,
}: SubcategoriesCarouselProps) {
  const [showNav, setShowNav] = useState(false);
  const subcategoriesRef = useRef<HTMLDivElement>(null);

  // Check if subcategories need scrolling
  useEffect(() => {
    const checkIfScrollNeeded = () => {
      if (subcategoriesRef.current) {
        const { scrollWidth, clientWidth } = subcategoriesRef.current;
        setShowNav(scrollWidth > clientWidth);
      }
    };

    // Check initially
    checkIfScrollNeeded();

    // Check on window resize
    window.addEventListener("resize", checkIfScrollNeeded);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfScrollNeeded);
    };
  }, [subcategories]); // Re-check when subcategories change

  const scrollSubcategories = (direction: "left" | "right") => {
    if (!subcategoriesRef.current) return;

    const scrollAmount = 200;
    const newScrollLeft =
      direction === "left"
        ? subcategoriesRef.current.scrollLeft - scrollAmount
        : subcategoriesRef.current.scrollLeft + scrollAmount;

    subcategoriesRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mt-4">
      {showNav && (
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white shadow-md"
          onClick={() => scrollSubcategories("left")}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Scroll left</span>
        </Button>
      )}

      <div
        ref={subcategoriesRef}
        className={cn(
          "flex overflow-x-auto gap-2 scrollbar-hide",
          showNav ? "px-10" : "px-0"
        )}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {subcategories.map((subcategory) => (
          <Button
            key={subcategory}
            variant="outline"
            className="text-xs bg-white hover:bg-gray-50 flex-shrink-0"
          >
            {subcategory}
          </Button>
        ))}
      </div>

      {showNav && (
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white shadow-md"
          onClick={() => scrollSubcategories("right")}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Scroll right</span>
        </Button>
      )}
    </div>
  );
}
