import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="border-b sticky top-0 z-50 bg-white">
      <div className="container mx-auto flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="A1Schools"
              width={91}
              height={34}
              className="w-auto h-[150px]"
            />
          </Link>
          <div className="hidden md:block">
            <Button variant="ghost" className="text-sm font-normal">
              Categories
              <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </div>

        <div className="hidden md:flex flex-1 max-w-xl mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search for anything"
              className="pl-10 pr-4 py-2 w-full border rounded-full focus:border-black h-12"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="hidden lg:flex text-sm font-normal"
          >
            A1Schools Business
          </Button>
          <Button
            variant="ghost"
            className="hidden lg:flex text-sm font-normal"
          >
            Teach on A1Schools
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="hidden sm:flex font-normal">
            Log in
          </Button>
          <Button className="bg-black text-white hover:bg-gray-800 font-normal">
            Sign up
          </Button>
          <Button variant="outline" size="icon" className="hidden sm:flex">
            <Globe className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
