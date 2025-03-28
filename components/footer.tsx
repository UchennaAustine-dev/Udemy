import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#00077a] text-white">
      {/* Top companies section */}
      <div className="border-b border-gray-700 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            Top companies choose{" "}
            <span className="text-purple-400">A1Schools Business</span> to build
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
              <h3 className="font-bold mb-4">Discovery A1Schools</h3>
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
                    Teach on A1Schools
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

            {/* A1Schools for Business column */}
            <div>
              <h3 className="font-bold mb-4">A1Schools for Business</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    A1Schools Business
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
              src="/assets/A1Schools-logo.png"
              alt="A1Schools"
              width={91}
              height={34}
            />
            <p className="text-sm text-gray-400 mt-2">© 2025 A1Schools, Inc.</p>
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
