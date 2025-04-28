import { useEffect } from "react";

const ScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".about, .services, .cta");
      const windowHeight = window.innerHeight;

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight * 0.8) {
          element.classList.add("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};

export default ScrollAnimation;