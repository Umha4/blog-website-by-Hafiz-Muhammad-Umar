import Image from "next/image";
import Button from "./button";

export default function AboutSec() {
  return (
    <main className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-x-hidden">
      {/* Left Side: Image Section */}
      <div className="flex justify-center items-center">
        <div className="relative w-full h-auto flex justify-center items-center">
          <Image
            src="/my.jpg"
            width={400}
            height={450}
            alt="hero image"
            className="z-10 w-auto object-cover rounded-lg h-[300px] sm:h-[380px] lg:h-[450px] flex md:h-[350px]"
          />
        </div>
      </div>

      {/* Right Side: Text Section */}
      <div className="flex flex-col items-center md:items-start px-4 sm:px-8 py-8 md:px-6 lg:px-12 lg:py-8">
        {/* Section Title */}
        <h5 className="text-lg lg:text-2xl font-semibold text-orange-400 flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="object-cover rounded-full"
          />
          About Me
        </h5>

        {/* About Text */}
        <p className="text-sm md:text-base lg:text-lg text-justify text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
          Welcome to my website! I am Dr.{" "}
          <span className="text-orange-400 font-semibold">Muhammad Umar</span>, a Heart Specialist with{" "}
          <span className="text-orange-400">10 years</span> of experience dedicated to providing compassionate, personalized healthcare. My focus is on helping patients achieve optimal health through the most comprehensive care and open communication. Contact me today for expert guidance on your medical needs! Your health and well-being are my top priority.
        </p>

        {/* Highlights */}
        <div className="mt-6 space-y-2">
          <h6 className="text-sm md:text-base lg:text-lg flex items-center gap-2">
            <span className="font-semibold bg-orange-400 text-black px-2 py-1 rounded-full">✔</span>
            On-site laboratory services for quick and reliable results
          </h6>
          <h6 className="text-sm md:text-base lg:text-lg flex items-center gap-2">
            <span className="font-semibold bg-orange-400 text-black px-2 py-1 rounded-full">✔</span>
            High-quality ultrasound and X-ray services
          </h6>
          <h6 className="text-sm md:text-base lg:text-lg flex items-center gap-2">
            <span className="font-semibold bg-orange-400 text-black px-2 py-1 rounded-full">✔</span>
            Sharing knowledge through tutorials and blogs
          </h6>
          <h6 className="text-sm md:text-base lg:text-lg flex items-center gap-2">
            <span className="font-semibold bg-orange-400 text-black px-2 py-1 rounded-full">✔</span>
            Clean and peaceful environment to relax
          </h6>
        </div>

        {/* Button */}
        <div className="mt-6">
          <Button text="Explore More" bgColour="#fb923c" textColour="black" />
        </div>
      </div>
    </main>
  );
}

