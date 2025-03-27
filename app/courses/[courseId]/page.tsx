"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useGetCourseQuery,
  useGetModulesQuery,
} from "@/lib/store/api/courseApi";
import { Award, BookOpen, Clock, Users } from "lucide-react";
import Link from "next/link";

export default function CourseDetailsPage({
  params,
}: {
  params: { courseId: string };
}) {
  const { data: course, isLoading: isLoadingCourse } = useGetCourseQuery(
    params.courseId
  );
  const { data: modules, isLoading: isLoadingModules } = useGetModulesQuery(
    params.courseId
  );

  if (isLoadingCourse || isLoadingModules) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Skeleton className="mb-4 h-8 w-3/4" />
            <Skeleton className="mb-4 h-4 w-1/2" />
            <Skeleton className="h-64 w-full" />
          </div>
          <div>
            <Skeleton className="h-96 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="mb-4 text-3xl font-bold">{course.title}</h1>
          <p className="mb-6 text-muted-foreground">{course.description}</p>

          {/* Course Preview */}
          <div className="mb-8 aspect-video w-full rounded-lg bg-muted" />

          {/* Course Tabs */}
          <Tabs defaultValue="curriculum" className="w-full">
            <TabsList>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="curriculum">
              <div className="space-y-4">
                {modules?.map((module) => (
                  <Card key={module.id}>
                    <CardHeader>
                      <CardTitle>{module.title}</CardTitle>
                      <CardDescription>{module.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link
                        href={`/courses/${params.courseId}/learn/${module.id}`}
                      >
                        <Button variant="outline" className="w-full">
                          Start Module
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="instructor">
              <Card>
                <CardHeader>
                  <CardTitle>Course Instructor</CardTitle>
                  <CardDescription>
                    Learn from industry experts with years of experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded-full bg-muted" />
                    <div>
                      <h3 className="font-semibold">John Doe</h3>
                      <p className="text-sm text-muted-foreground">
                        Senior Software Engineer
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <Card>
                <CardHeader>
                  <CardTitle>Student Reviews</CardTitle>
                  <CardDescription>
                    What our students have to say about this course
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Sample Review */}
                    <div className="border-b pb-4">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="h-8 w-8 rounded-full bg-muted" />
                          <span className="font-semibold">Alice Smith</span>
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Great course! The content was well-structured and easy
                        to follow.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>Course Details</CardTitle>
              <CardDescription>
                Everything you need to know about this course
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>
                  Last updated {new Date(course.updatedAt).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4" />
                <span>{modules?.length || 0} modules</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span>Certificate of completion</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Full lifetime access</span>
              </div>
              <Button className="w-full">Enroll Now</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
