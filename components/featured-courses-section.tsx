import Link from "next/link";
import CourseCard from "@/components/course-card";

export default function FeaturedCoursesSection() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <CourseCard
            title="2023 - Complete Python Bootcamp From Zero to Hero in Python"
            instructor="Jose Portilla"
            rating={4.6}
            reviewCount="461,287"
            price={89.99}
            salePrice={13.99}
            imageUrl="/placeholder.svg?height=150&width=250"
            bestseller={true}
            badgeText="Highest Rated"
          />
          <CourseCard
            title="Machine Learning A-Z™: Hands-On Python & R In Data Science"
            instructor="Kirill Eremenko, Hadelin de Ponteves"
            rating={4.5}
            reviewCount="154,741"
            price={94.99}
            salePrice={14.99}
            imageUrl="/placeholder.svg?height=150&width=250"
            bestseller={false}
            badgeText="Bestseller"
          />
          <CourseCard
            title="Data Science Machine Learning Bootcamp with R"
            instructor="Jose Portilla"
            rating={4.7}
            reviewCount="17,984"
            price={94.99}
            salePrice={14.99}
            imageUrl="/placeholder.svg?height=150&width=250"
            bestseller={false}
          />
          <CourseCard
            title="Master of Computer Frameworks with Python and JavaScript"
            instructor="Academind by Maximilian"
            rating={4.8}
            reviewCount="32,456"
            price={89.99}
            salePrice={13.99}
            imageUrl="/placeholder.svg?height=150&width=250"
            bestseller={false}
          />
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
