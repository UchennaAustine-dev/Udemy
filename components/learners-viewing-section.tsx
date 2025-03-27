import CourseCard from "@/components/course-card";

export default function LearnersViewingSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Learners are viewing</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <CourseCard
            title="The Complete Python Bootcamp From Zero to Hero in Python"
            instructor="Jose Portilla"
            rating={4.6}
            reviewCount="461,287"
            price={89.99}
            salePrice={13.99}
            imageUrl="/placeholder.svg?height=150&width=250"
            bestseller={true}
            badgeText="Bestseller"
            hotAndNew={true}
          />
          <CourseCard
            title="100 Days of Code: The Complete Python Pro Bootcamp"
            instructor="Dr. Angela Yu"
            rating={4.7}
            reviewCount="158,419"
            price={94.99}
            salePrice={14.99}
            imageUrl="/placeholder.svg?height=150&width=250"
            bestseller={true}
            badgeText="Bestseller"
          />
          <CourseCard
            title="Complete Python Developer in 2023: Zero to Mastery"
            instructor="Andrei Neagoie"
            rating={4.6}
            reviewCount="72,594"
            price={89.99}
            salePrice={13.99}
            imageUrl="/placeholder.svg?height=150&width=250"
            bestseller={true}
            badgeText="Bestseller"
          />
          <CourseCard
            title="Python for Data Science and Machine Learning Bootcamp"
            instructor="Jose Portilla"
            rating={4.6}
            reviewCount="104,741"
            price={94.99}
            salePrice={14.99}
            imageUrl="/placeholder.svg?height=150&width=250"
            bestseller={true}
            badgeText="Bestseller"
          />
        </div>
      </div>
    </section>
  );
}
