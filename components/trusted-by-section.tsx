import CompanyLogos from "@/components/company-logos";

export default function TrustedBySection() {
  return (
    <section className="py-8 border-t border-b">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-gray-500 mb-4">
          Trusted by over 14,400 companies and millions of learners around the
          world
        </p>
        <CompanyLogos />
      </div>
    </section>
  );
}
