"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Code,
  LineChart,
  Briefcase,
  Database,
  MessageSquare,
  BarChart,
  Lightbulb,
  Camera,
  Music,
  Heart,
} from "lucide-react";

export default function CategoryTabs() {
  const [activeTab, setActiveTab] = useState("datascience");

  const categories = [
    {
      id: "datascience",
      label: "Data Science",
      icon: <LineChart className="h-4 w-4 mr-2" />,
    },
    {
      id: "development",
      label: "Development",
      icon: <Code className="h-4 w-4 mr-2" />,
    },
    {
      id: "leadership",
      label: "Leadership",
      icon: <Briefcase className="h-4 w-4 mr-2" />,
    },
    {
      id: "itoperations",
      label: "IT & Operations",
      icon: <Database className="h-4 w-4 mr-2" />,
    },
    {
      id: "communication",
      label: "Communication",
      icon: <MessageSquare className="h-4 w-4 mr-2" />,
    },
    {
      id: "business",
      label: "Business Analytics & Intelligence",
      icon: <BarChart className="h-4 w-4 mr-2" />,
    },
    {
      id: "design",
      label: "Design",
      icon: <Lightbulb className="h-4 w-4 mr-2" />,
    },
    {
      id: "photography",
      label: "Photography",
      icon: <Camera className="h-4 w-4 mr-2" />,
    },
    { id: "music", label: "Music", icon: <Music className="h-4 w-4 mr-2" /> },
    { id: "health", label: "Health", icon: <Heart className="h-4 w-4 mr-2" /> },
  ];

  const subcategories = {
    datascience: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Statistics",
      "Data Analysis",
      "R",
      "TensorFlow",
    ],
    development: [
      "Web Development",
      "JavaScript",
      "React",
      "Angular",
      "CSS",
      "Node.js",
      "PHP",
    ],
    leadership: [
      "Management",
      "Team Building",
      "Coaching",
      "Conflict Resolution",
      "Decision Making",
    ],
    itoperations: [
      "AWS",
      "DevOps",
      "Cloud Computing",
      "Network Security",
      "Linux",
      "Docker",
      "Kubernetes",
    ],
    communication: [
      "Public Speaking",
      "Writing",
      "Presentation Skills",
      "Negotiation",
      "Persuasion",
    ],
    business: [
      "Excel",
      "SQL",
      "Tableau",
      "Power BI",
      "Data Visualization",
      "Financial Analysis",
    ],
    design: [
      "Graphic Design",
      "UI/UX",
      "Adobe Photoshop",
      "Illustrator",
      "InDesign",
      "Figma",
    ],
    photography: [
      "Digital Photography",
      "Portrait Photography",
      "Lightroom",
      "Photoshop",
      "Composition",
    ],
    music: [
      "Guitar",
      "Piano",
      "Music Theory",
      "Music Production",
      "Singing",
      "DJ",
      "Logic Pro",
    ],
    health: [
      "Fitness",
      "Nutrition",
      "Yoga",
      "Meditation",
      "Mental Health",
      "Massage",
      "Anatomy",
    ],
  };

  return (
    <div>
      <div className="flex overflow-x-auto gap-2 pb-4 hide-scrollbar">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeTab === category.id ? "default" : "outline"}
            className={`whitespace-nowrap text-xs ${
              activeTab === category.id
                ? "bg-black text-white hover:bg-gray-800"
                : ""
            }`}
            onClick={() => setActiveTab(category.id)}
          >
            {category.icon}
            {category.label}
          </Button>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {subcategories[activeTab as keyof typeof subcategories].map(
          (subcategory) => (
            <Button
              key={subcategory}
              variant="outline"
              className="text-xs bg-white hover:bg-gray-50"
            >
              {subcategory}
            </Button>
          )
        )}
      </div>
    </div>
  );
}
