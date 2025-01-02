export default function HomeContact() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start p-8 lg:p-16  min-h-screen">
      {/* Left Section - Contact Form */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-orange-400 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          We had love to hear from you! Whether you have a question or need
          assistance, feel free to reach out.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full text-black py-2 bg-slate-200 border-gray-300 rounded-md shadow-sm focus:ring-orange-400 focus:border-orange-400"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium "
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full text-black border-gray-300 py-2 bg-slate-200 rounded-md shadow-sm focus:ring-orange-400 focus:border-orange-400"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Type your message here"
              className="w-full text-black  bg-slate-200 border-gray-300 rounded-md shadow-sm focus:ring-orange-400 focus:border-orange-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-400 text-white font-medium py-2 rounded-md hover:bg-orange-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Section - Contact Info */}
     
    </div>
  );
}