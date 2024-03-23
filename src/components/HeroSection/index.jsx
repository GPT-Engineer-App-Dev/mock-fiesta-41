import React from "react";
import images from "../../constants/image";
import { motion } from "framer-motion";

const socials = [
  {
    logo: images.linkedinIcon,
    alt: "Linkedin Icon",
    link: "https://www.linkedin.com/in/felixmacaspac/",
  },
  {
    logo: images.githubIcon,
    alt: "Github Icon",
    link: "https://github.com/felixmacaspac",
  },
  {
    logo: images.codepenIcon,
    alt: "Codepen Icon",
    link: "https://codepen.io/fmcmacaspac",
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="bg-white dark:bg-primary">
      <div className="container relative">
        <div className="flex items-center flex-col">
          <div className="flex flex-col items-center justify-center min-h-[90vh] md:min-h-screen relative">
            <div className="absolute inset-0 bg-[url('/src/assets/hero-bg.jpg')] bg-cover bg-center parallax"></div>
            <motion.h1 viewport={{ once: true }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "linear", duration: 0.5 }} className="hero__heading">
              Felix M.
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, type: "spring", stiffness: 100 }} className="flex flex-col items-center gap-2 mt-4">
              <div className="flex items-center gap-2">
                <motion.span animate={{ rotate: [0, 20, -20, 20, -20, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-4xl">
                  👋
                </motion.span>
                <span className="text-xl text-primary-400 dark:text-neutral-300">Hello visitor!</span>
              </div>
              <div className="bg-green-500 text-white font-bold px-4 py-2 rounded-full mt-4 animate-pulse">🚀 Open for new projects! 🚀</div>
            </motion.div>
          </div>
        </div>
        <div className="w-full relative bottom-20 md:w-auto md:absolute md:top-[70%]">
          <ul className="flex flex-row justify-center items-center w-full gap-6 md:flex-col">
            {socials.map((social, index) => (
              <motion.li
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  default: {
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                  },
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.15 }}
                key={index}
                className="bg-neutral w-max rounded-full hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300"
              >
                <a href={social.link} target="_blank">
                  <img className="h-14 w-14 p-4 transition-all dark:invert" src={social.logo} alt={social.alt} />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
