import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function TrendingNowSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Trending Now</h2>
        <div className="border-t border-gray-300 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* ChatGPT Column */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                ChatGPT is a top skill
              </h3>
              <Link
                href="#"
                className="flex items-center text-purple-700 font-medium mb-2 hover:underline"
              >
                See ChatGPT courses <ArrowUpRight className="h-4 w-4 ml-1" />
              </Link>
              <p className="text-gray-500 text-sm mb-8">4,290,073 learners</p>

              <button className="w-full border border-gray-300 rounded py-3 px-4 flex items-center justify-center text-purple-700 font-medium hover:bg-gray-100">
                Show all trending skills{" "}
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </button>
            </div>

            {/* Development Column */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Development
              </h3>
              <div className="space-y-6">
                <div>
                  <Link
                    href="#"
                    className="flex items-center text-purple-700 font-medium mb-1 hover:underline"
                  >
                    Python <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Link>
                  <p className="text-gray-500 text-sm">47,702,363 learners</p>
                </div>

                <div>
                  <Link
                    href="#"
                    className="flex items-center text-purple-700 font-medium mb-1 hover:underline"
                  >
                    Web Development <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Link>
                  <p className="text-gray-500 text-sm">14,002,371 learners</p>
                </div>

                <div>
                  <Link
                    href="#"
                    className="flex items-center text-purple-700 font-medium mb-1 hover:underline"
                  >
                    Data Science <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Link>
                  <p className="text-gray-500 text-sm">7,772,271 learners</p>
                </div>
              </div>
            </div>

            {/* Design Column */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Design</h3>
              <div className="space-y-6">
                <div>
                  <Link
                    href="#"
                    className="flex items-center text-purple-700 font-medium mb-1 hover:underline"
                  >
                    Blender <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Link>
                  <p className="text-gray-500 text-sm">2,906,476 learners</p>
                </div>

                <div>
                  <Link
                    href="#"
                    className="flex items-center text-purple-700 font-medium mb-1 hover:underline"
                  >
                    Graphic Design <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Link>
                  <p className="text-gray-500 text-sm">4,490,035 learners</p>
                </div>

                <div>
                  <Link
                    href="#"
                    className="flex items-center text-purple-700 font-medium mb-1 hover:underline"
                  >
                    User Experience (UX) Design{" "}
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Link>
                  <p className="text-gray-500 text-sm">2,067,235 learners</p>
                </div>
              </div>
            </div>

            {/* Business Column */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Business</h3>
              <div className="space-y-6">
                <div>
                  <Link
                    href="#"
                    className="flex items-center text-purple-700 font-medium mb-1 hover:underline"
                  >
                    PMI Project Management Professional (PMP){" "}
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Link>
                  <p className="text-gray-500 text-sm">2,554,974 learners</p>
                </div>

                <div>
                  <Link
                    href="#"
                    className="flex items-center text-purple-700 font-medium mb-1 hover:underline"
                  >
                    Microsoft Power BI <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Link>
                  <p className="text-gray-500 text-sm">4,621,423 learners</p>
                </div>

                <div>
                  <Link
                    href="#"
                    className="flex items-center text-purple-700 font-medium mb-1 hover:underline"
                  >
                    Project Management <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Link>
                  <p className="text-gray-500 text-sm">3,963,510 learners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
