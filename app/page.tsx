"use client";

import { useGetCoursesQuery } from "@/lib/store/api/courseApi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import TopBanner from "@/components/top-banner";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import FeaturedCoursesSection from "@/components/featured-courses-section";
import TrustedBySection from "@/components/trusted-by-section";
import LearnersViewingSection from "@/components/learners-viewing-section";
import LearningGoalsSection from "@/components/learning-goals-section";
import AccelerateGrowthSection from "@/components/accelerate-growth-section";
import TestimonialsSection from "@/components/testimonials-section";
import TrendsReportSection from "@/components/trends-report-section";
import TrendingNowSection from "@/components/trending-now-section";
import BooseAllenSectionWrapper from "@/components/boose-allen-section-wrapper";
import Footer from "@/components/footer";

export default function HomePage() {
  const { data: courses, isLoading } = useGetCoursesQuery();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Banner */}
      <TopBanner />

      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* All the skills section */}
        <SkillsSection />

        {/* Featured Courses Section */}
        <FeaturedCoursesSection />

        {/* Trusted By Section */}
        <TrustedBySection />

        {/* Learners are viewing Section */}
        <LearnersViewingSection />

        {/* Learning focused on your goals */}
        <LearningGoalsSection />

        {/* Accelerate growth section */}
        <AccelerateGrowthSection />

        {/* Testimonials section */}
        <TestimonialsSection />

        {/* Trends Report Section */}
        <TrendsReportSection />

        {/* Trending Now Section */}
        <TrendingNowSection />

        {/* Boose Allen Section */}
        <BooseAllenSectionWrapper />

        {/* Featured Courses */}
        <div className="container mx-auto px-4 py-8">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold">Learn on your schedule</h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Choose from thousands of online courses with new additions
              published every month
            </p>
            <div className="mx-auto flex max-w-md items-center space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search for courses..." className="pl-8" />
              </div>
              <Button>Search</Button>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Featured Courses</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {isLoading
                ? Array.from({ length: 8 }).map((_, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <Skeleton className="h-40 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                      </CardHeader>
                      <CardContent>
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3" />
                      </CardContent>
                    </Card>
                  ))
                : courses?.map((course) => (
                    <Card key={course.id} className="flex flex-col">
                      <CardHeader>
                        <div className="aspect-video w-full rounded-md bg-muted" />
                        <CardTitle className="line-clamp-2">
                          {course.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {course.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="mb-2 flex items-center text-sm text-muted-foreground">
                          <span>
                            Last updated{" "}
                            {new Date(course.updatedAt).toLocaleDateString()}
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link href={`/courses/${course.id}`} className="w-full">
                          <Button className="w-full">View Course</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
            </div>
          </div>

          {/* Categories Section */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">Popular Categories</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Development",
                "Business",
                "Design",
                "Marketing",
                "Personal Development",
                "Photography",
                "Music",
                "Health & Fitness",
              ].map((category) => (
                <Card key={category} className="cursor-pointer hover:bg-accent">
                  <CardContent className="p-6">
                    <h3 className="font-semibold">{category}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
