import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full-Stack Developer",
    company: "Omoceb venture",
    date: "2025",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
    ],
  },
  {
    job: "Full-Stack Developer",
    company: "BandHitz",
    date: "2025",
    responsibilities: [
      "Helping in problem solving of musical industries.",
      "Helping upcoming artists get fame while others use the website.",
      "Allowing everyone to have access to music both locally and internationally.",
    ],
  },
  {
    job: "Course Instructor",
    company: "Braim's Code",
    date: "2024 - Present",
    responsibilities: [
      "Teaching JavaScript, React, and TailwindCSS.",
      "Participating in preparing course materials.",
      "Helping people through their journey in learning web development technologies.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-center">
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperiences;
