"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import CourseCard from "@/components/course-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedCoursesSection() {
  const [showNav, setShowNav] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Check if carousel needs navigation buttons and update scroll state
  const updateScrollState = () => {
    if (carouselRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = carouselRef.current;

      // Check if scrolling is needed at all
      setShowNav(scrollWidth > clientWidth);

      // Check if we can scroll left (not at the beginning)
      setCanScrollLeft(scrollLeft > 0);

      // Check if we can scroll right (not at the end)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // -1 for rounding errors
    }
  };

  // Initialize and set up event listeners
  useEffect(() => {
    // Initial check
    updateScrollState();

    // Check on window resize
    window.addEventListener("resize", updateScrollState);

    // Check on carousel scroll
    const currentCarousel = carouselRef.current;
    if (currentCarousel) {
      currentCarousel.addEventListener("scroll", updateScrollState);
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateScrollState);
      if (currentCarousel) {
        currentCarousel.removeEventListener("scroll", updateScrollState);
      }
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = 300;
    const newScrollLeft =
      direction === "left"
        ? carouselRef.current.scrollLeft - scrollAmount
        : carouselRef.current.scrollLeft + scrollAmount;

    carouselRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Featured Courses</h2>
        </div>

        <div className="relative">
          {showNav && canScrollLeft && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white shadow-md"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
          )}

          {showNav && canScrollRight && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white shadow-md"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          )}

          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 pb-4 px-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="min-w-[250px] md:min-w-[280px] flex-shrink-0">
              <CourseCard
                title="2023 - Complete Python Bootcamp From Zero to Hero in Python"
                instructor="Jose Portilla"
                rating={4.6}
                reviewCount="461,287"
                price={89.99}
                salePrice={13.99}
                imageUrl="/assets/learn.jpg"
                bestseller={true}
                badgeText="Python"
              />
            </div>

            <div className="min-w-[250px] md:min-w-[280px] flex-shrink-0">
              <CourseCard
                title="Machine Learning A-Z™: Hands-On Python & R In Data Science"
                instructor="Kirill Eremenko, Hadelin de Ponteves"
                rating={4.5}
                reviewCount="154,741"
                price={94.99}
                salePrice={14.99}
                imageUrl="/assets/fun.jpg"
                bestseller={true}
                badgeText="Machine Learning"
              />
            </div>

            <div className="min-w-[250px] md:min-w-[280px] flex-shrink-0">
              <CourseCard
                title="Data Science Machine Learning Bootcamp with R"
                instructor="Jose Portilla"
                rating={4.7}
                reviewCount="17,984"
                price={94.99}
                salePrice={14.99}
                imageUrl="/assets/manage.jpg"
                badgeText="Data Science"
              />
            </div>

            <div className="min-w-[250px] md:min-w-[280px] flex-shrink-0">
              <CourseCard
                title="Master of Computer Frameworks with Python and JavaScript"
                instructor="Academind by Maximilian"
                rating={4.8}
                reviewCount="32,456"
                price={89.99}
                salePrice={13.99}
                imageUrl="/assets/reading.jpg"
                hotAndNew={true}
                badgeText="Web Development"
              />
            </div>

            <div className="min-w-[250px] md:min-w-[280px] flex-shrink-0">
              <CourseCard
                title="The Complete SQL Bootcamp: Go from Zero to Hero"
                instructor="Jose Portilla"
                rating={4.7}
                reviewCount="129,384"
                price={84.99}
                salePrice={12.99}
                imageUrl="/assets/learn.jpg"
                bestseller={true}
                badgeText="SQL"
              />
            </div>

            <div className="min-w-[250px] md:min-w-[280px] flex-shrink-0">
              <CourseCard
                title="React - The Complete Guide (incl Hooks, React Router, Redux)"
                instructor="Maximilian Schwarzmüller"
                rating={4.6}
                reviewCount="172,945"
                price={89.99}
                salePrice={13.99}
                imageUrl="/assets/fun.jpg"
                hotAndNew={true}
                badgeText="React"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-purple-700">
          <Link href="#" className="font-bold">
            View all courses in Data Science
          </Link>
        </div>
      </div>
    </section>
  );
}
