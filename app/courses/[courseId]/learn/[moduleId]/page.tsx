"use client";

import {
  useGetModuleQuery,
  useGetLessonsQuery,
} from "@/lib/store/api/courseApi";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, PlayCircle } from "lucide-react";
import { useState } from "react";

export default function CourseLearningPage({
  params,
}: {
  params: { courseId: string; moduleId: string };
}) {
  const { data: module, isLoading: isLoadingModule } = useGetModuleQuery({
    courseId: params.courseId,
    moduleId: params.moduleId,
  });
  const { data: lessons, isLoading: isLoadingLessons } = useGetLessonsQuery({
    courseId: params.courseId,
    moduleId: params.moduleId,
  });

  const [currentLesson, setCurrentLesson] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);

  if (isLoadingModule || isLoadingLessons) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <Skeleton className="mb-4 h-8 w-3/4" />
            <Skeleton className="h-64 w-full" />
          </div>
          <div>
            <Skeleton className="h-96 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!module || !lessons) {
    return <div>Module not found</div>;
  }

  const progress = ((currentLesson + 1) / (lessons.length + 1)) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-4">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold">{module.title}</h1>
            <p className="text-muted-foreground">{module.description}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm text-muted-foreground">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Content Area */}
          {showQuiz ? (
            <Card>
              <CardHeader>
                <CardTitle>Module Quiz</CardTitle>
                <CardDescription>
                  Test your knowledge of this module
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Quiz content will go here */}
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Quiz functionality coming soon...
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>
                  {lessons[currentLesson]?.title || "No Lesson Available"}
                </CardTitle>
                <CardDescription>
                  {lessons[currentLesson]?.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full rounded-lg bg-muted" />
                <div className="mt-4 prose max-w-none">
                  {lessons[currentLesson]?.description}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentLesson((prev) => Math.max(0, prev - 1))}
              disabled={currentLesson === 0}
            >
              Previous Lesson
            </Button>
            {currentLesson === lessons.length - 1 ? (
              <Button onClick={() => setShowQuiz(true)}>Take Quiz</Button>
            ) : (
              <Button
                onClick={() =>
                  setCurrentLesson((prev) =>
                    Math.min(lessons.length - 1, prev + 1)
                  )
                }
              >
                Next Lesson
              </Button>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>Module Content</CardTitle>
              <CardDescription>
                {lessons.length} lessons • 1 quiz
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className={`flex items-center space-x-2 rounded-lg p-2 ${
                      index === currentLesson
                        ? "bg-accent"
                        : "hover:bg-accent/50"
                    }`}
                  >
                    {index < currentLesson ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : index === currentLesson ? (
                      <PlayCircle className="h-4 w-4 text-primary" />
                    ) : (
                      <Circle className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span
                      className={`cursor-pointer text-sm ${
                        index === currentLesson ? "font-medium" : ""
                      }`}
                      onClick={() => {
                        setCurrentLesson(index);
                        setShowQuiz(false);
                      }}
                    >
                      {lesson.title}
                    </span>
                  </div>
                ))}
                <div
                  className={`flex items-center space-x-2 rounded-lg p-2 ${
                    showQuiz ? "bg-accent" : "hover:bg-accent/50"
                  }`}
                >
                  <Circle className="h-4 w-4 text-muted-foreground" />
                  <span
                    className={`cursor-pointer text-sm ${
                      showQuiz ? "font-medium" : ""
                    }`}
                    onClick={() => setShowQuiz(true)}
                  >
                    Module Quiz
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
