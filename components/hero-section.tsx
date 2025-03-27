import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-yellow-300 relative">
      <div className="container mx-auto py-10 md:py-12 flex">
        <div className="max-w-md bg-white p-6 md:p-8 shadow-lg z-10">
          <h1 className="text-3xl font-bold mb-4">Keep moving up</h1>
          <p className="text-base mb-0">
            Learn the skills you need to take the next step — and every step
            after. Log in to access courses from ₦13.99.
          </p>
        </div>
        <div className="hidden md:block ml-auto">
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="Woman in green sweater"
            width={400}
            height={300}
            className="object-cover"
          />
        </div>
        <div className="absolute right-0 bottom-0 w-0 h-0 border-solid border-t-[100px] border-t-transparent border-r-[800px] border-r-white border-b-[0px] border-b-transparent"></div>
      </div>
    </section>
  );
}
