import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Function to create multiple glowing stars
    const createStars = () => {
      const starContainer = document.querySelector(".star-container");
      const starCount = 100; // Number of stars
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        // Randomize size and position
        const size = Math.random() * 6 + 2; // Size between 2px and 6px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;

        starContainer.appendChild(star);
      }
    };

    createStars();
  }, []);

  return (
    <div className="landing">
      <div className="star-container"></div>
      <h1>Explore the Celestial</h1>
      <button onClick={() => navigate("/carousel")}>Start the Adventure</button>
    </div>
  );
};

export default LandingPage;
