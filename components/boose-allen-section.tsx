import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BooseAllenSection() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-2">
          Bose Allen Hamilton Unlocks Talent Retention and Productivity Through
          Upskilling
        </h2>
        <div className="flex gap-4 mb-4">
          <div>
            <p className="text-3xl font-bold">93%</p>
            <p className="text-sm text-gray-600">
              of employees report increased confidence in their job skills
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold">65%</p>
            <p className="text-sm text-gray-600">
              increase in productivity and job satisfaction
            </p>
          </div>
        </div>
        <Button className="bg-purple-700 hover:bg-purple-800">
          Read case study
        </Button>
      </div>
      <div className="md:w-1/2">
        <Image
          src="/assets/UB.png"
          alt="Bose Allen Hamilton case study"
          width={500}
          height={300}
          className="w-full rounded-md"
        />
      </div>
    </div>
  );
}
