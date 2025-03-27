import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TrendsReport() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 max-w-[90%]">
      <div className="md:w-1/2 ">
        <h2 className="text-2xl font-bold mb-2">
          Top trends for the future of work
        </h2>
        <p className="text-gray-600 mb-4">
          Explore the latest Global Learning & Skills Trends Report from Udemy
          Business to discover the skills that will shape the future of work.
        </p>
        <Button className="text-purple-700 border-purple-800 bg-transparent border-1">
          Get the report
        </Button>
      </div>
      <div className="md:w-1/2">
        <Image
          src="/assets/trend.png"
          alt="Global Learning & Skills Trends Report"
          width={500}
          height={300}
          className="w-full"
        />
      </div>
    </div>
  );
}
