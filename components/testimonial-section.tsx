import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        "I was promoted to a lead position within a month of completing the course. Now I'm building a team and teaching them the same skills I learned.",
      author: "Jane Doe",
      company: "Marketing Manager",
      avatar: "/assets/marketing.jpg",
    },
    {
      id: 2,
      quote:
        "The courses helped me go from a complete beginner to landing my first developer job in just 6 months. The instructors are amazing!",
      author: "John Smith",
      company: "Software Developer",
      avatar: "/assets/headshot.jpeg",
    },
    {
      id: 3,
      quote:
        "As a small business owner, I needed to learn digital marketing fast. These courses gave me the skills to grow my business by 150% in one year.",
      author: "Emily Johnson",
      company: "Business Owner",
      avatar: "/assets/headshot.jpeg",
    },
    {
      id: 4,
      quote:
        "The data science courses helped me transition from academia to industry. I now work at a top tech company with a much better salary.",
      author: "Michael Chen",
      company: "Data Scientist",
      avatar: "/assets/headshot.jpeg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="bg-white p-6 rounded-md border">
          <div className="flex items-center mb-4">
            <Quote className="h-5 w-5 text-gray-300 mr-2" />
            <div className="text-xs font-bold">
              {testimonial.id < 3 ? "DE" : "EN"}
            </div>
          </div>
          <p className="text-sm mb-4 line-clamp-4">{testimonial.quote}</p>
          <div className="flex items-center">
            <Image
              src={testimonial.avatar || "/placeholder.svg"}
              alt={testimonial.author}
              width={40}
              height={40}
              className="rounded-full mr-3"
            />
            <div>
              <p className="text-sm font-bold">{testimonial.author}</p>
              <p className="text-xs text-gray-600">{testimonial.company}</p>
            </div>
          </div>
          <div className="mt-4">
            <Button variant="outline" className="text-xs w-full">
              Read full story
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
