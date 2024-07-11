import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa",
  },
  {
    title: "Future of Automation",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa",
  },
  {
    title: "The Rise of Virtual Assistants",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa",
  },
  {
    title: "Unleashing the Power of Chatbots",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize It. Step into Future
        Today. & Make it Happen.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
