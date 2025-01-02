import Image from "next/image";

export default function HomeAboutPage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between p-8 lg:p-16 ">
      {/* Left Section */}
      <div className="max-w-lg">
        <h1 className="text-3xl lg:text-5xl font-bold text-orange-400 mb-4">
          Welcome HealthLink
        </h1>
        <h2 className="text-2xl lg:text-4xl font-bold mb-6 dark:text-white">
          Connecting You with <span className="text-orange-400">Trusted Doctors</span>
        </h2>
        <p className="dark:text-white mb-8">
          At HealthLink, we are dedicated to bridging the gap between patients and
          healthcare professionals. Whether you're looking for expert medical advice,
          a consultation, or detailed information on healthcare topics, were here
          to guide you every step of the way.
        </p>
        <button className="px-6 py-3 text-white bg-orange-400 rounded-lg shadow-md hover:orange-600 transition duration-300">
          Get Started Now →
        </button>
      </div>

      {/* Right Section */}
      <div className="mt-8 lg:mt-0">
        <div className="w-72 h-72 lg:w-96 lg:h-96 relative overflow-hidden rounded-full shadow-lg">
          <Image
            src="/doc2.jpg" // Replace with your image path
            alt="Doctor"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
