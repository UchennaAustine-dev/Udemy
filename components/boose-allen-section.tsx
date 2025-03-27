import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BooseAllenSection() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <div className="mb-6">
          <p className="text-gray-700 text-lg">Booz | Allen | Hamilton</p>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Booz Allen Hamilton Unlocks Talent Retention and Productivity Through
          Upskilling
        </h2>

        <div className="flex gap-16 mb-8">
          <div>
            <p className="text-4xl font-bold">93%</p>
            <p className="text-gray-600 mt-1">
              retention rate among participating employees
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold">65%</p>
            <p className="text-gray-600 mt-1">
              of learners noted a positive impact on their productivity
            </p>
          </div>
        </div>

        <Button className="bg-purple-700 hover:bg-purple-800 flex items-center">
          Read full story <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <div className="flex items-center mt-12">
          <button className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-300 mr-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex gap-1">
            <div className="w-6 h-2 bg-purple-700 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>

          <button className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-300 ml-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="md:w-1/2">
        <Image
          src="/assets/UB.png"
          alt="Booz Allen Hamilton case study"
          width={600}
          height={500}
          className="w-full rounded-md object-cover"
        />
      </div>
    </div>
  );
}
