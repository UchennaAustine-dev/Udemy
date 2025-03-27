import { Button } from "@/components/ui/button";

export default function CertificationPath() {
  return (
    <div className="border rounded-md p-6 bg-white">
      <h3 className="font-bold text-base mb-4">Certification prep</h3>
      <p className="text-sm text-gray-600 mb-4">
        Get certified with courses designed to prepare you for industry
        certification exams like AWS, Cisco, CompTIA, and more.
      </p>
      <Button
        variant="outline"
        className="text-sm text-purple-700 border-purple-700 hover:bg-purple-50"
      >
        Explore certifications
      </Button>
    </div>
  );
}
