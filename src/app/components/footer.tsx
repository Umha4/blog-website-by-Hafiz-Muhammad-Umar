const Footer = () => {
  return (
    <footer className="md:px-4 mx-auto max-w-screen-2xl overflow-x-hidden text-white dark:text-white py-8 border-t border-gray-300">
      <div className="pl-6 md:pl-0 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {/* Column 1: About */}
        <div>
          <h4 className="text-lg font-semibold text-orange-400 mb-4">HealthCare Blog</h4>
          <p className="text-sm text-black dark:text-white">
            At HealthCare Blog, we provide expert advice, health tips, and articles
            tailored to improve your well-being and lifestyle.
          </p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="text-lg font-semibold text-orange-400 mb-4">We Offer</h4>
          <ul className=" text-black dark:text-white">
            <li className="text-sm">Health Tips</li>
            <li className="text-sm">Diet & Nutrition</li>
            <li className="text-sm">Fitness Guides</li>
            <li className="text-sm">Mental Health Resources</li>
          </ul>
        </div>

        {/* Column 3: Useful Links */}
        <div className="text-black dark:text-white">
          <h4 className="text-lg font-semibold text-orange-400 mb-4">Useful Links</h4>
          <ul>
            <li>
              <a href="#" className="text-black dark:text-white hover:text-orange-400 text-sm">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black dark:text-white hover:text-orange-400 text-sm">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-black dark:text-white hover:text-orange-400 text-sm">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="text-black dark:text-white hover:text-orange-400 text-sm">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-orange-400 mb-4">Follow Us</h4>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-teal-600 hover:text-teal-800">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-teal-600 hover:text-teal-800">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-teal-600 hover:text-teal-800">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <p className="text-sm mb-2">Receive exclusive health tips in your mailbox</p>
          <div className="flex pr-8 gap-2">
            <input
              type="email"
              placeholder="Enter your Email"
              className=" border border-gray-400 text-black dark:text-white py-2 rounded-l text-center"
            />
            <button className=" text-black px-4 py-3 text-sm dark:text-white border border-gray-800 rounded-sm hover:bg-orange-400">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center justify-between lg:px-8 md;px-6 sm:px-4 px-2 text-sm  border-t pt-4 flex gap-8 dark:text-white  text-black">
        <p className="gap-1">&copy; {new Date().getFullYear()} HealthCare Blog. All rights reserved.</p>
        <p className="gap-1">
          Made with <span className="text-red-500">♥</span> by Hafiz Muhammad Umar
        </p>
      </div>
    </footer>
  );
};

export default Footer;