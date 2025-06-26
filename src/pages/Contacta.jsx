// Contacta.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Contacta = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
    setTimeout(() => {
      const footerSection = document.getElementById("footer-contact");
      if (footerSection) {
        footerSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  }, [navigate]);

  return null;
};

export default Contacta;
  