"use client";

import { useState } from "react";
import { CategoriesCarousel } from "./categories-carousel/categories-carousel";
import { SubcategoriesCarousel } from "./categories-carousel/subcategories-carousel";
import { categories, subcategories } from "./data/categories";

export default function CategoryTabs() {
  const [activeTab, setActiveTab] = useState("datascience");

  return (
    <div>
      <CategoriesCarousel
        categories={categories}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <SubcategoriesCarousel
        subcategories={subcategories[activeTab as keyof typeof subcategories]}
      />
    </div>
  );
}
