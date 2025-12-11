import styled from "styled-components";
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaUsers, 
  FaBolt, 
  FaLifeRing, 
  FaShieldAlt 
} from "react-icons/fa";

export const PromiseStyle = styled.div`
  .promise-section {
    padding: 60px 20px;
    text-align: center;
    background-color: #f8f9fa;
  }

  .title {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #333;
  }

  .subtitle {
    font-size: 18px;
    color: #666;
    margin-bottom: 50px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .card {
    background: white;
    padding: 30px;
    border-radius: 10px;
    border-top: 4px solid;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .icon {
    font-size: 48px;
    margin-bottom: 20px;
  }

  .card h2 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #333;
  }

  .card p {
    font-size: 16px;
    line-height: 1.6;
    color: #666;
  }
`;

export const promiseData = [
  {
    icon: FaLaptopCode,
    title: "Top Code Quality",
    text: "Our commitment goes beyond mere code – it encompasses providing solutions. You receive W3C fully compliant markup, without any compromise on quality.",
    color: "#27c5c3"
  },
  {
    icon: FaMobileAlt,
    title: "Responsive",
    text: "We understand the value of a positive attitude, timely responsiveness, and adaptability. We're dedicated to listening and leveraging our utmost capabilities to serve you.",
    color: "#f2a900"
  },
  {
    icon: FaUsers,
    title: "Rockstar Team",
    text: "Our expertise is our unique selling proposition. You'll have access to an all-star team of experienced professionals fully dedicated to serving you.",
    color: "#00c0ef"
  },
  {
    icon: FaBolt,
    title: "Fast Turn-arounds",
    text: "The importance of speed is on par with quality for us. We are swift and capable of providing high-quality code within a timeframe that suits your preferences.",
    color: "#9b59b6"
  },
  {
    icon: FaLifeRing,
    title: "Life-time support",
    text: "Our commitment to code quality is exemplified by our enduring support. If any bugs happen to emerge, feel free to reach out to us for assistance.",
    color: "#e74c3c"
  },
  {
    icon: FaShieldAlt,
    title: "Secured Agreement",
    text: "The creative work you receive is entirely your own, and we respect that. We assure you of our readiness to formalize this with an NDA.",
    color: "#2ecc71"
  }
];