import CategoryTabs from "@/components/category-tabs";

export default function SkillsSection() {
  return (
    <section className="py-8 border-b">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-1">
          All the skills you need in one place
        </h2>
        <p className="text-gray-600 mb-6">
          Build your skills with courses and certifications developed by experts
          in their professional fields
        </p>

        <CategoryTabs />
      </div>
    </section>
  );
}
