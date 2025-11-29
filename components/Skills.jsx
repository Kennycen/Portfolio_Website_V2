import { categorizedSkills } from "@/assets/assets";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Flatten all skills for "All" view
  const allSkills = categorizedSkills.flatMap((cat) =>
    cat.skills.map((skill) => ({ ...skill, category: cat.category }))
  );

  // Get skills to display
  const skillsToShow =
    activeCategory === "All"
      ? allSkills
      : categorizedSkills.find((cat) => cat.category === activeCategory)
          ?.skills || [];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-5 md:px-10 lg:px-20 py-20 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Poppins"
      >
        What I know
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Poppins"
      >
        My skills
      </motion.h2>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-wrap gap-3 mb-12 overflow-x-auto pb-2 scrollbar-hide mt-14 p-2"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => setActiveCategory("All")}
          className={`skill-tab ${activeCategory === "All" ? "active" : ""}`}
        >
          All Skills
        </motion.button>
        {categorizedSkills.map((category) => (
          <motion.button
            key={category.category}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveCategory(category.category)}
            className={`skill-tab ${
              activeCategory === category.category ? "active" : ""
            }`}
          >
            {category.category}
          </motion.button>
        ))}
      </motion.div>

      {/* Skills Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="skill-cloud min-h-[400px]"
        >
          {skillsToShow.map((skill, index) => {
            const category =
              activeCategory === "All" ? skill.category : activeCategory;
            return (
              <motion.div
                key={`${category}-${skill.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.03,
                  duration: 0.3,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="skill-badge group relative"
              >
                {typeof skill.icon === "string" ? (
                  <span className="skill-badge-icon">{skill.icon}</span>
                ) : (
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="skill-badge-icon"
                  />
                )}
                <span className="skill-badge-text">{skill.name}</span>

                {/* Category label on hover (only in "All" view) */}
                {activeCategory === "All" && hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-purple-600 text-white text-xs whitespace-nowrap pointer-events-none z-10"
                  >
                    {category}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-600"></div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
};

export default Services;
