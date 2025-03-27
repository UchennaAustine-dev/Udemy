import Image from "next/image";

export default function ProgressChart() {
  return (
    <div className="border rounded-md p-6 bg-white">
      <h3 className="font-bold text-base mb-4">Your score: 750</h3>
      <div className="mb-4">
        <Image
          src="/placeholder.svg?height=200&width=300"
          alt="Progress chart"
          width={300}
          height={200}
          className="w-full"
        />
      </div>
      <div className="text-xs text-gray-600">
        <p>
          Track your progress with detailed analytics and performance metrics
        </p>
      </div>
    </div>
  );
}
