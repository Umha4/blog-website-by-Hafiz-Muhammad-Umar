import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link";
import CommentsSection from "../components/Commentsection";

const Contact = () => {
    return (
      <main>
        <div className="h-auto flex items-center mx-auto max-w-screen-2xl overflow-x-hidden">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-400 text-center mb-8">Contact Us</h1>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold text-orange-400 mb-4">Get in Touch</h2>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-teal-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-teal-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Write your message"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-teal-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-400 text-white py-3 rounded-lg transition duration-300 hover:bg-teal-700"
                  >
                    Send Message
                  </button>
                </form>
              </div>
    
              {/* Contact Details */}
              <div className="flex flex-col justify-between">
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-orange-400 mb-4">Our Location</h2>
                  <p className="text-sm text-gray-700 mb-4">
                    123 HealthCare Avenue, <br />
                    Karachi, Pakistan
                  </p>
                  <h2 className="text-xl font-semibold text-orange-400 mb-2">Call Us</h2>
                  <p className="text-sm text-gray-700 mb-4">+92 300 1234567</p>
                  <h2 className="text-xl font-semibold text-orange-400 mb-3">Email Us</h2>
                  <p className="text-sm text-gray-700 mb-2">contact@healthcareblog.com</p>
                  <h2 className="text-xl font-semibold text-orange-400 mb-4">Follow Us</h2>
    
                  <div className="flex lg:gap-6 dark:text-black">
                    <Link href="https://github.com"><FaGithubSquare className="text-4xl" /></Link>
                    <Link href="https://linkedin.com"><IoLogoLinkedin className="text-4xl" /></Link>
                    <Link href="https://instagram.com"><FaSquareInstagram className="text-4xl" /></Link>
                    <Link href="https://youtube.com"><FaYoutube className="text-4xl hover:border-sky-200" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CommentsSection />
      </main>
    );
};

export default Contact;
