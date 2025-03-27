import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LearningGoalsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10">
          Learning focused on your goals
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left column with 4 cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hands-on training card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Hands-on training"
                    width={50}
                    height={50}
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Hands-on training</h3>
                  <p className="text-gray-600">
                    Upskill effectively with AI-powered coding exercises,
                    practice tests, and quizzes.
                  </p>
                </div>
              </div>
            </div>

            {/* Certification prep card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Certification prep"
                    width={50}
                    height={50}
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Certification prep</h3>
                  <p className="text-gray-600 mb-3">
                    Prep for industry-recognized certifications by solving
                    real-world challenges and earn badges along the way.
                  </p>
                  <Link
                    href="#"
                    className="text-purple-700 font-medium flex items-center hover:underline"
                  >
                    Explore courses <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Insights and analytics card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Insights and analytics"
                    width={50}
                    height={50}
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-bold mr-3">
                      Insights and analytics
                    </h3>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                      Enterprise Plan
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Fast-track goals with advanced insights plus a dedicated
                    customer success team to help drive effective learning.
                  </p>
                  <Link
                    href="#"
                    className="text-purple-700 font-medium flex items-center hover:underline"
                  >
                    Find out more <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Customizable content card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Customizable content"
                    width={50}
                    height={50}
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-bold mr-3">
                      Customizable content
                    </h3>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                      Enterprise Plan
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Create tailored learning paths for team and organization
                    goals and even host your own content and resources.
                  </p>
                  <Link
                    href="#"
                    className="text-purple-700 font-medium flex items-center hover:underline"
                  >
                    Find out more <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right column with assessment card */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {/* Browser-like header */}
              <div className="p-4 flex items-center">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Assessment header */}
              <div className="bg-purple-50 p-6 text-center">
                <h3 className="text-xl font-bold">Containerization</h3>
                <div className="text-sm text-gray-600 flex items-center justify-center mt-1">
                  <span className="inline-block w-4 h-4 rounded-full border border-gray-400 mr-1"></span>
                  30 questions
                </div>
              </div>

              {/* Score section */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-bold">Your score: 159</h4>
                  <span className="text-xs text-purple-700 underline">
                    What do these numbers mean?
                  </span>
                </div>

                {/* Score chart */}
                <div className="mb-8">
                  <div className="relative">
                    <div className="h-24 bg-gray-100 rounded-md mb-2">
                      {/* Score levels */}
                      <div className="absolute top-0 left-0 right-0 h-full">
                        <div className="grid grid-cols-1 h-full">
                          <div className="border-b border-gray-300 relative">
                            <span className="absolute left-2 top-1 text-xs font-semibold">
                              Superior
                            </span>
                            <span className="absolute right-2 top-1 text-xs text-gray-500">
                              90-100
                            </span>
                          </div>
                          <div className="border-b border-gray-300 relative">
                            <span className="absolute left-2 top-1 text-xs font-semibold">
                              Established
                            </span>
                            <span className="absolute right-2 top-1 text-xs text-gray-500">
                              70-89
                            </span>
                          </div>
                          <div className="border-b border-gray-300 relative">
                            <span className="absolute left-2 top-1 text-xs font-semibold">
                              Developing
                            </span>
                            <span className="absolute right-2 top-1 text-xs text-gray-500">
                              40-69
                            </span>
                          </div>
                          <div className="relative">
                            <span className="absolute left-2 top-1 text-xs font-semibold">
                              Limited
                            </span>
                            <span className="absolute right-2 top-1 text-xs text-gray-500">
                              0-39
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Score indicator */}
                      <div className="absolute top-0 left-0 right-0 h-full">
                        <div className="relative h-full">
                          <div className="absolute top-[15%] left-0 right-0 h-0.5 bg-gray-300"></div>
                          <div className="absolute top-[15%] right-[20%] w-4 h-4 bg-purple-600 rounded-full transform -translate-y-1/2"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>0</span>
                      <div className="flex items-center">
                        <span className="text-purple-700 font-semibold">
                          85th Percentile
                        </span>
                        <span className="text-gray-500 ml-1">(n)</span>
                      </div>
                    </div>
                  </div>

                  {/* Performance comparison */}
                  <div className="flex items-start mt-6 bg-purple-50 p-3 rounded-md">
                    <div className="text-purple-700 mr-3 mt-1">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 16V12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 8H12.01"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-sm">
                      <span className="font-semibold">
                        Your performance was better than 85%
                      </span>{" "}
                      of A1Schools learners who have completed this assessment.
                    </p>
                  </div>
                </div>

                {/* Answers section */}
                <div>
                  <h4 className="text-lg font-bold mb-2">Your answers</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Review your answers. Learn from these explanations of
                    correct and incorrect response options.
                  </p>

                  {/* Filter controls */}
                  <div className="flex gap-2 mb-4">
                    <div className="relative">
                      <select className="appearance-none border rounded-md py-2 pl-3 pr-8 bg-white text-sm">
                        <option>All domains</option>
                      </select>
                    </div>
                    <div className="relative">
                      <select className="appearance-none border rounded-md py-2 pl-3 pr-8 bg-white text-sm">
                        <option>All answers</option>
                      </select>
                    </div>
                    <div className="bg-purple-100 text-purple-800 rounded-md py-2 px-3 text-sm">
                      23 correct
                    </div>
                    <div className="bg-orange-100 text-orange-800 rounded-md py-2 px-3 text-sm">
                      7 incorrect
                    </div>
                    <div className="bg-gray-100 text-gray-800 rounded-md py-2 px-3 text-sm">
                      0 skipped
                    </div>
                  </div>

                  {/* Question list */}
                  <div className="space-y-3">
                    <div className="border rounded-md p-3">
                      <div className="flex justify-between">
                        <div className="flex items-start">
                          <div className="bg-green-100 text-green-800 p-1 rounded-md mr-3">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 6L9 17L4 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="flex items-center">
                              <span className="font-semibold text-sm">
                                Question 1
                              </span>
                              <span className="ml-2 text-xs text-green-800 font-medium">
                                Correct
                              </span>
                            </div>
                            <p className="text-sm mt-1">
                              Which of the following scenarios will benefit most
                              from a managed Kubernetes service, such as GKE,
                              EKS or Google Cloud's GKE?
                            </p>
                          </div>
                        </div>
                        <button className="text-gray-500">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19 9L12 16L5 9"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="border rounded-md p-3">
                      <div className="flex justify-between">
                        <div className="flex items-start">
                          <div className="bg-green-100 text-green-800 p-1 rounded-md mr-3">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 6L9 17L4 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="flex items-center">
                              <span className="font-semibold text-sm">
                                Question 2
                              </span>
                              <span className="ml-2 text-xs text-green-800 font-medium">
                                Correct
                              </span>
                            </div>
                            <p className="text-sm mt-1">
                              You containerized a web application, and one of
                              the containers is running the database...
                            </p>
                          </div>
                        </div>
                        <button className="text-gray-500">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19 9L12 16L5 9"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
