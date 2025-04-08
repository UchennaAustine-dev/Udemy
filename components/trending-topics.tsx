import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface TrendingTopic {
  name: string;
  learners: string;
}

interface TrendingCategory {
  name: string;
  topics: TrendingTopic[];
}

export default function TrendingTopics() {
  const categories: TrendingCategory[] = [
    {
      name: "ChatGPT is a top skill",
      topics: [{ name: "See ChatGPT courses", learners: "4,290,073 learners" }],
    },
    {
      name: "Development",
      topics: [
        { name: "Python", learners: "47,702,363 learners" },
        { name: "Web Development", learners: "14,002,371 learners" },
        { name: "Data Science", learners: "7,772,271 learners" },
      ],
    },
    {
      name: "Design",
      topics: [
        { name: "Blender", learners: "2,906,476 learners" },
        { name: "Graphic Design", learners: "4,490,035 learners" },
        { name: "User Experience (UX) Design", learners: "2,067,235 learners" },
      ],
    },
    {
      name: "Business",
      topics: [
        {
          name: "PMI Project Management Professional (PMP)",
          learners: "2,554,974 learners",
        },
        { name: "Microsoft Power BI", learners: "4,621,423 learners" },
        { name: "Project Management", learners: "3,963,510 learners" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {categories.map((category, index) => (
        <div key={index}>
          <h3
            className={`₦{index === 0 ? "text-2xl" : "text-xl"} font-bold mb-4 text-gray-800`}
          >
            {category.name}
          </h3>
          <div className="space-y-6">
            {category.topics.map((topic, topicIndex) => (
              <div key={topicIndex}>
                <Link
                  href="#"
                  className="flex items-center text-purple-700 font-medium mb-1 hover:underline"
                >
                  {topic.name} <ArrowUpRight className="h-4 w-4 ml-1" />
                </Link>
                <p className="text-gray-500 text-sm">{topic.learners}</p>
              </div>
            ))}
          </div>

          {index === 0 && (
            <button className="mt-8 w-full border border-gray-300 rounded py-3 px-4 flex items-center justify-center text-purple-700 font-medium hover:bg-gray-100">
              Show all trending skills <ArrowUpRight className="h-4 w-4 ml-1" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
