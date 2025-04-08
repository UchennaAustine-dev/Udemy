"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Category } from "../data/categories";

interface CategoriesCarouselProps {
  categories: Category[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export function CategoriesCarousel({
  categories,
  activeTab,
  setActiveTab,
}: CategoriesCarouselProps) {
  const categoriesRef = useRef<HTMLDivElement>(null);

  const scrollCategories = (direction: "left" | "right") => {
    if (!categoriesRef.current) return;

    const scrollAmount = 200;
    const newScrollLeft =
      direction === "left"
        ? categoriesRef.current.scrollLeft - scrollAmount
        : categoriesRef.current.scrollLeft + scrollAmount;

    categoriesRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white shadow-md"
        onClick={() => scrollCategories("left")}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Scroll left</span>
      </Button>

      <div
        ref={categoriesRef}
        className="flex overflow-x-auto gap-2 pb-4 px-10 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeTab === category.id ? "default" : "outline"}
            className={cn(
              "whitespace-nowrap text-xs flex-shrink-0",
              activeTab === category.id
                ? "bg-black text-white hover:bg-gray-800"
                : ""
            )}
            onClick={() => setActiveTab(category.id)}
          >
            {category.icon}
            {category.label}
          </Button>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white shadow-md"
        onClick={() => scrollCategories("right")}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Scroll right</span>
      </Button>
    </div>
  );
}
