import Image from "next/image";

export default function AboutMeHome() {
  return (
    <div className="flex flex-col lg:flex-row items-center p-8 lg:p-16 ">
      {/* Left Section */}
      <div className="w-full lg:w-1/2">
        <div className="relative w-full h-80 lg:h-96 rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/my.jpg" // Replace with your image path
            alt="Doctor Profile"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-orange-400 mb-4 flex items-center">
          <span className="inline-block w-6 h-6 mr-2">
            {/* Icon (optional) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-orange-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 9l3-3m0 0l3 3m-3-3v12"
              />
            </svg>
          </span>
          About Us
        </h2>
        <p className="text-black dark:text-white mb-6">
          Welcome to HealthLink, your trusted partner in healthcare! Our platform
          connects patients with top doctors to provide expert medical care and
          guidance. At HealthLink, we believe in empowering individuals to make
          informed decisions about their health while ensuring seamless access to
          professional medical assistance.
        </p>
        <ul className="text-black dark:text-white space-y-4 mb-6">
          <li className="flex items-center">
            <span className="text-orange-400 mr-2">✔</span>
            Offering Comprehensive Medical Consultations
          </li>
          <li className="flex items-center">
            <span className="text-orange-400 mr-2">✔</span>
            Guiding Patients with Reliable Health Advice
          </li>
          <li className="flex items-center">
            <span className="text-orange-400 mr-2">✔</span>
            Connecting You with Experienced Doctors
          </li>
        </ul>
        <button className="px-6 py-3 text-white bg-orange-400 rounded-lg shadow-md hover:bg-orange-700 transition duration-300">
          Explore More →
        </button>
      </div>
    </div>
  );
}