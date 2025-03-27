import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1c1d1f] text-white">
      {/* Top companies section */}
      <div className="border-b border-gray-700 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            Top companies choose{" "}
            <span className="text-purple-400">Udemy Business</span> to build
            in-demand career skills.
          </p>
          <div className="flex items-center space-x-8">
            <Image
              src="/placeholder.svg?height=30&width=80"
              alt="Nasdaq"
              width={80}
              height={30}
              className="h-8 object-contain"
            />
            <Image
              src="/placeholder.svg?height=30&width=40"
              alt="Volkswagen"
              width={40}
              height={30}
              className="h-8 object-contain"
            />
            <Image
              src="/placeholder.svg?height=30&width=80"
              alt="NetApp"
              width={80}
              height={30}
              className="h-8 object-contain"
            />
            <Image
              src="/placeholder.svg?height=30&width=80"
              alt="Eventbrite"
              width={80}
              height={30}
              className="h-8 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main links section */}
      <div className="py-12 border-b border-gray-700">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold mb-6">
            Explore top skills and certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Certifications by Issuer */}
            <div>
              <h3 className="font-bold mb-4">Certifications by Issuer</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Amazon Web Services (AWS) Certifications
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Six Sigma Certifications
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Microsoft Certifications
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Cisco Certifications
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Tableau Certifications
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    See all Certifications
                  </Link>
                </li>
              </ul>

              <h3 className="font-bold mt-8 mb-4">Certifications by Skill</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Cybersecurity Certification
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Project Management Certification
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Cloud Certification
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Data Analytics Certification
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    HR Management Certification
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    See all Certifications
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Web Development & Data Science */}
            <div>
              <h3 className="font-bold mb-4">Web Development</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    JavaScript
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    React JS
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Angular
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Java
                  </Link>
                </li>
              </ul>

              <h3 className="font-bold mt-8 mb-4">Data Science</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Python
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Machine Learning
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    ChatGPT
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Deep Learning
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: IT Certifications & Communication */}
            <div>
              <h3 className="font-bold mb-4">IT Certifications</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Amazon AWS
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    AWS Certified Cloud Practitioner
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    AZ-900: Microsoft Azure Fundamentals
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    AWS Certified Solutions Architect - Associate
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Kubernetes
                  </Link>
                </li>
              </ul>

              <h3 className="font-bold mt-8 mb-4">Communication</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Communication Skills
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Presentation Skills
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Public Speaking
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Writing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    PowerPoint
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Leadership & Business Analytics */}
            <div>
              <h3 className="font-bold mb-4">Leadership</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Management Skills
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Project Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Personal Productivity
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Emotional Intelligence
                  </Link>
                </li>
              </ul>

              <h3 className="font-bold mt-8 mb-4">
                Business Analytics & Intelligence
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Microsoft Excel
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    SQL
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Microsoft Power BI
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Data Analysis
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Business Analysis
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Company info section */}
      <div className="py-12 border-b border-gray-700">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About column */}
            <div>
              <h3 className="font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Investors
                  </Link>
                </li>
              </ul>
            </div>

            {/* Discovery column */}
            <div>
              <h3 className="font-bold mb-4">Discovery Udemy</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Get the app
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Teach on Udemy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Plans and Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Affiliate
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Help and Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Udemy for Business column */}
            <div>
              <h3 className="font-bold mb-4">Udemy for Business</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Udemy Business
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal column */}
            <div>
              <h3 className="font-bold mb-4">Legal & Accessibility</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Accessibility statement
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Sitemap
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image
              src="/assets/udemy-logo.png"
              alt="Udemy"
              width={91}
              height={34}
            />
            <p className="text-sm text-gray-400 mt-2">© 2025 Udemy, Inc.</p>
          </div>

          <div className="flex items-center">
            <button className="text-sm text-gray-300 hover:text-white">
              Do not sell or share my personal information
            </button>

            <div className="ml-8 flex items-center">
              <Globe className="h-4 w-4 mr-2" />
              <span className="text-sm">English</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
