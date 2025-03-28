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
import type { ReactNode } from "react";

export interface Category {
  id: string;
  label: string;
  icon: ReactNode;
}

export const categories: Category[] = [
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

export interface SubcategoryMap {
  [key: string]: string[];
}

export const subcategories: SubcategoryMap = {
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
