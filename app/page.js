"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const navLinks = [
    { name: "HOME", href: 'home' },
    { name: "SKILL", href: "skill" },
    { name: "ABOUT", href: "about" },
    { name: "CONTACT", href: "contact" },
    { name: "WORKS", href: "works" },
  ];

  const [isOpens, setIsOpens] = useState(false);

  // Function to open and close the modal
  const toggleModal = () => {
    setIsOpens(!isOpens);
  };
  const services = [
    {
      id: 1,
      title: "Web design",
      description: "Web development is the process of building, programming...",
    },
    {
      id: 2,
      title: "Web Developer",
      description: "Web development is the process of building, programming...",
    },
    {
      id: 3,
      title: "React Developer",
      description: "Web development is the process of building, programming...",
    },
    {
      id: 4,
      title: "Backend Developer",
      description: "Web development is the process of building, programming...",
    },

  ];


  const works = [
    {
      id: 1,
      title: "Zahrat AlReef Electrical and SanitaryWare TR. LLC",
      description: "Developed a robust web application for an electricaland sanitaryware shop, providing users with the ability to browse an extensive catalog of products.",
      image: "/images/zahrat1.png", // Replace with your image path,
      technology: "React.js, CSS, JavaScript,Tailwind"

    },
    {
      id: 2,
      title: "Radish Grill and Cafe",
      description: " Created an engaging and modern web application for Radish Grill and Cafe, showcasing the menu with categories.",
      image: "/images/radish.png",
      technology: "Next.js, React.js, Tailwind CSS, JavaScript"
    },
    {
      id: 3,
      title: "S-Kart",
      description: "Developed S-kart, a fully-featured e-commerce platform with a Node.js and Express.js backend, React.js frontend,and MongoDB as the database.",
      image: "/images/skart.png",
      technology: " React.js, Tailwind CSS, Redux, JavaScript, Node.js, Express.js, MongoDB"

    },
    {
      id: 4,
      title: "Restaurant Advaisor",
      description: "Developed a web application that allows users to select their location and find top restaurants based on customer ratings.",
      image: "/images/restaurant.png",
      technology: "React.js,Bootstrap, CSS, JavaScript, Node.js, Express.js, MongoDB"
    },

  ]

  return (
    <>
      <div>

        {/* Navbar */}

        <nav className={` px-4 md:px-2 w-full bg-black text-white`}>
          <div className="py-6 lg:px-24 sm:px-6 mx-4 lg:mx-8">
            <div className="flex justify-between items-center h-12">
              {/* Logo */}

              <a href="/" className="flex items-center" data-aos="fade-down">
                {/* <img src="./images/icon.png" alt="Icon" className="w-56 h-16" /> */}
                <h1>Safwan</h1>
              </a>



              {/* Desktop Menu */}
              <div className="hidden lg:flex space-x-8">
                {navLinks.map(({ name, href }) => (
                  <a key={name} href={`#${href}`} className="hover:text-yellow-500">
                    {name}
                  </a>
                ))}
              </div>

              {/* Enquiry Button (Desktop) */}
              <a
                onClick={toggleModal}
                data-aos="fade-down"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500
                 to-orange-500 text-white text-lg hover:scale-105 transform transition duration-300"
              >
                Connect
              </a>
              {/* <a className=" hidden md:block text-white">
            abc
          </a> */}

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden text-white focus:outline-none`}
                data-aos="fade-down"
              >
                {isOpen ? (
                  // Close Icon
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  // Hamburger Icon
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className={`md:hidden text-center px-4 py-2 space-y-4 flex flex-col text-white`} data-aos="fade-down">
              {navLinks.map(({ name, href }) => (
                <a key={name} href={`#${href}`} className={`text-black" hover:text-blue-600`}>
                  {name}
                </a>
              ))}
              <a
                href="tel:+917034558800"
                className={`border-2 text-white border-blue text-sm sm:text-base md:text-lg font-semibold py-2 sm:py-3 
            md:py-2 px-4 sm:px-6 md:px-4 rounded-3xl hover:bg-gray-50 transition`}
              >
                Enquiry
              </a>
            </div>
          )}
        </nav>





        {/* heroSection */}



        <section id="home" className="flex flex-col items-center justify-center w-full h-screen bg-black text-white">
          {/* Profile Image */}
          {/* <img
            src="/images/your-profile-image.jpg" // Update with your profile image path
            alt="Profile"
            className="w-32 h-32 rounded-full mb-6 border-4 border-gray-800"
            data-aos="zoom-in"
          /> */}

          {/* Main Heading */}
          <div className="text-center p-4 max-w-xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight" data-aos="zoom-in">
              I'm <span className="text-purple-500">Muhammed Safwan</span>,<br />
              <span className="text-orange-500">Full Stack developer</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-400" data-aos="zoom-in">
              I am a Full Stack Developer passionate about building dynamic user experiences, responsive designs, and robust backend systems.
            </p>


            {/* Buttons */}
            <div>
              {/* Connect with me buttons */}
              <div className="flex mt-8 space-x-4 justify-center" data-aos="fade-up">
                <button
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 text-white text-lg hover:scale-105 transform transition duration-300"
                  onClick={toggleModal}
                >
                  Connect with me
                </button>
                <button className="px-6 py-3 rounded-full border-2 border-gray-500 text-lg hover:scale-105 transform transition duration-300">
                  My resume
                </button>
              </div>

              {/* Modal Popup */}
              {isOpens && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                  <div className="bg-black p-8 rounded-lg w-96 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Connect with me</h2>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">

                        <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer" className="text-lg">WhatsApp</a>
                      </div>
                      <div className="flex items-center space-x-3">
                        {/* <FontAwesomeIcon icon={faPhoneAlt} className="text-blue-500" /> */}
                        <a href="tel:+your-phone-number" className="text-lg">Call</a>
                      </div>
                      <div className="flex items-center space-x-3">
                        {/* <FontAwesomeIcon icon={faEnvelope} className="text-gray-500" /> */}
                        <a href="mailto:your-email@example.com" className="text-lg">Email</a>
                      </div>
                      <div className="flex items-center space-x-3">
                        {/* <FontAwesomeIcon icon={faInstagram} className="text-pink-500" /> */}
                        <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="text-lg">Instagram</a>
                      </div>
                      <div className="flex items-center space-x-3">
                        {/* <FontAwesomeIcon icon={faLinkedin} className="text-blue-700" /> */}
                        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-lg">LinkedIn</a>
                      </div>
                    </div>
                    <button
                      className="mt-4 w-full px-6 py-3 rounded-full bg-red-500 text-white"
                      onClick={toggleModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>


        {/* about section */}

        <section id="about">
          <div className="bg-black text-white h-full flex flex-col justify-center items-center py-16 px-4">
            <div className="max-w-4xl w-full flex flex-col md:flex-row items-center">
              {/* Left Section - Image */}
              <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                <img
                  src="https://via.placeholder.com/200" // Replace with your image URL
                  alt="Profile"
                  className="rounded-xl w-48 h-48 object-cover"
                />
              </div>

              {/* Right Section - Text and Skills */}
              <div className="w-full md:w-2/3 mt-8 md:mt-0 md:ml-8">
                <h2 className="text-4xl font-bold text-white">
                  About <span className="text-purple-500">me</span>
                </h2>
                <p className="text-gray-300 mt-4 leading-7">
                  I'm a skilled software developer with expertise in  JavaScript,
                  and frameworks like React and Node.js. I’m a quick learner who collaborates
                  closely with clients to create efficient, scalable, and user-friendly solutions.
                  Let’s work together to turn your ideas into reality!
                </p>



              </div>
            </div>
          </div>
        </section>


        {/* Skills */}


        <section id="skill" className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto text-center px-4">
            {/* Title */}
            <h2 className="text-4xl font-bold mb-4">Skills</h2>
            <p className="text-gray-400 mb-8">LET'S TALK TECHNOLOGY.</p>

            {/* Skills Grid */}

          </div>
        </section>




        {/* Services */}


        <section id="service">
          <div className="bg-black text-white min-h-screen py-16 px-4 flex flex-col items-center">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-white">
              My <span className="text-purple-500">Services</span>
            </h2>

            {/* Service Cards */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-6xl">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`relative p-6 border border-gray-600 rounded-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-orange-500 hover:border-transparent transition-all duration-300`}
                >
                  <p className="text-sm font-semibold text-gray-300 mb-2">{`0${service.id}`}</p>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <a
                    href="#"
                    className="text-purple-400 font-semibold hover:text-orange-400 flex items-center gap-1"
                  >
                    Read More <span>&rarr;</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Works */}

        <section id="works">
          <div className="bg-black text-white py-16 px-4 flex flex-col items-center">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-white">
              My <span className="text-purple-500">latest works</span>
            </h2>

            {/* Work Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 w-full max-w-6xl">
              {works.map((work) => (
                <div
                  key={work.id}
                  className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  {/* Image */}
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-56 object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  {/* Content */}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-lg font-bold text-white">{work.title}</h3>
                    <p className="text-sm text-gray-300">{work.subtitle}</p>
                  </div>
                  {/* Detailed Description Section */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75">
                    <p className="text-sm text-gray-300 mb-4">{work.description}</p>
                    <div className="flex gap-4">
                      <a
                        href={work.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                      >
                        Live Demo
                      </a>
                      <a
                        href={work.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </section>

        {/* contact us */}

        <section id="contact">
          <div className="min-h-screen flex items-center justify-center bg-black text-white p-8">

            <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8">
              {/* Heading */}

              {/* Left Side */}
              <div>
                <h1 className="text-4xl font-bold text-gradient text-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
                  Let&apos;s talk
                </h1>
                <p className="mt-4 text-gray-400">
                  I&apos;m currently available to take on new projects, so feel free
                  to send me a message about anything that you want me to work on. You
                  can contact anytime.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center">
                    <span className="text-xl mr-4">📧</span>
                    <span>safwanpm0@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl mr-4">📞</span>
                    <span>+91 7561819183</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl mr-4">📍</span>
                    <span>Kannur, Kerala ,India</span>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <form
                className="bg-gray-800 rounded-lg shadow-lg p-8 space-y-6"
                action="#"
                method="POST"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full mt-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full mt-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Write your message here
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    rows="4"
                    className="w-full mt-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    required
                  ></textarea>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="captcha"
                    className="w-4 h-4 text-orange-500 bg-gray-900 border-gray-700 rounded focus:ring-0"
                    required
                  />
                  <label
                    htmlFor="captcha"
                    className="ml-2 text-sm text-gray-400"
                  >
                    I am human
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 mt-4 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 text-white font-bold rounded-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-offset-2"
                >
                  Submit now
                </button>
              </form>
            </div>
          </div>
        </section>


        {/* footer */}


        <footer className="bg-black text-white py-8">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Left Section */}
            <div>
              <h1 className="text-3xl font-bold">
                Safwa<span className="text-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500">N</span>
              </h1>
              <p className="mt-2 text-gray-400">
                I am a frontend developer from USA with 10 years of experience in
                companies like Microsoft, Tesla and Apple.
              </p>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-900 border border-gray-700 
                  rounded-full px-4 py-2 text-gray-300 focus:ring-2
                   focus:ring-orange-500 focus:outline-none"
                />
                <span className="absolute left-3 top-2 text-gray-400">👤</span>
              </div>
              <button
                type=""
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 px-4 py-2 rounded-full text-white
                 font-bold hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-6"></div>

          {/* Bottom Section */}
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-400 space-y-4 md:space-y-0 text-sm">
            <p>© 2024 Muhammed Safwan. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white">
                Term of Services
              </a>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Connect with me
              </a>
            </div>
          </div>
        </footer>


      </div>
    </>
  );
}
