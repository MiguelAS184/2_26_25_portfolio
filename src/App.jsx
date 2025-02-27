import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaJava, FaPython, FaJsSquare, FaDatabase, FaHtml5, FaCss3Alt, FaPhp, FaRProject } from "react-icons/fa";
import { SiCplusplus, SiDbeaver, SiVisualstudioCode, SiR, SiJupyter, SiEclipseide } from "react-icons/si";
import { FaTerminal } from "react-icons/fa";
import myPhoto from "./assets/my_image.jpg";
import Chatbot from "./components/Chatbot";

const backgroundImage = "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?cs=srgb&dl=pexels-eberhardgross-1624438.jpg&fm=jpg";

export default function ResumeApp() {
  const [selectedProject, setSelectedProject] = useState(null);

  const courses = [
    "Data Structures",
    "Database Management Systems",
    "Programming World Wide Web Servers",
    "Computer Operating Systems",
    "Big Data Computing",
    "Computer Programming",
    "Applied Statistics I",
    "Programming in Unix/Linux",
    "Computer Architecture and Organization",
    "Calculus II"
  ];

  const languages = [
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "Python", icon: <FaPython /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "R", icon: <FaRProject /> }
  ];

  const software = [
    { name: "DBeaver", icon: <SiDbeaver /> },
    { name: "VS Code", icon: <SiVisualstudiocode /> },
    { name: "R Studio", icon: <SiR /> },
    { name: "Jupyter Notebooks", icon: <SiJupyter /> },
    { name: "Eclipse", icon: <SiEclipseide /> },
    { name: "PuTTY", icon: <FaTerminal /> }
  ];

  const projects = [
    {
      title: "JavaScript Chess Game",
      description: "A chess game built with JavaScript, hosted on a remote Linux server for people to access and play.",
      link: "https://obi.kean.edu/~solermig@kean.edu/Lab6_3500/game4.html"
    },
    {
      title: "Spider-Man Themed Matching Game",
      description: "A word matching game where you try to match the hidden words with the same words on the board. Built in JavaScript.",
      link: "https://obi.kean.edu/~solermig@kean.edu/Lab6_3500/game3.html"
    },
    {
      title: "Simple Compare Arrays Site",
      description: "This website will grab two arrays of numbers that you put in, and then calculate the sum and tell you which one is larger.",
      link: "https://obi.kean.edu/~solermig@kean.edu/CPS3525/comparearrays.html"
    }
  ];

  return (
    <div className="relative bg-blue-900 text-white min-h-screen p-10">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      ></motion.div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Profile Picture */}
        <img src={myPhoto} alt="Profile" className="w-32 h-32 rounded-full border-4 border-white shadow-lg mt-5" />

        {/* Typing Animation for Name */}
        <div className="text-4xl font-bold mt-4">
          <Typewriter words={["Miguel Angel Soler"]} loop={1} typeSpeed={100} deleteSpeed={50} />
        </div>

        <p className="text-lg mt-2">Data Analyst | Portfolio</p>

        {/* Autobiography Section */}
        <div className="max-w-3xl text-gray-300 mt-6 text-center px-4">
          <p>
            Hello! I am an aspiring Database Administrator/Data Analyst studying at Kean University. I really
            enjoy using and coding within databases, and have some experience coding in SQL, HTML, PHP, Python, C++, and
            JavaScript. I have worked with SQL and HTML primarily, and have gotten to create tables and views for said tables.
            In my off time, I play sports and also do music!
          </p>
        </div>

        {/* Courses of Interest Section */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Courses of Interest</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            {courses.map((course, index) => (
              <li key={index} className="bg-gray-800 p-3 rounded-lg shadow">
                {course}
              </li>
            ))}
          </ul>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Programming Languages */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4">Languages</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex flex-col items-center bg-gray-700 p-4 rounded-lg shadow">
                    <span className="text-4xl">{lang.icon}</span>
                    <p className="mt-2">{lang.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Software Experience */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4">Software</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {software.map((soft, index) => (
                  <div key={index} className="flex flex-col items-center bg-gray-700 p-4 rounded-lg shadow">
                    <span className="text-4xl">{soft.icon}</span>
                    <p className="mt-2">{soft.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chatbot Section */}
        <div className="mt-12">
          <Chatbot />
        </div>

        {/* Contact Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p>Email: masoler04@gmail.com</p>
          <p>Phone: (732) 877-0563</p>
        </div>
      </div>
    </div>
  );
}
