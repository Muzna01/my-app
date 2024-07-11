import React from "react";
import Feature from "../../components/feature/Feature";
import "./what.css";

const What = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-3"
        text="GPT-3 is an advanced language model developed by OpenAI that can understand and generate human-like text based on the input it receives. With ChatGPT, you can effortlessly create engaging and natural-sounding conversations, stories, and more. the Power of ChatGPT by OpenAI"
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa"
      />
      <Feature
        title="Knowledgebase"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa"
      />
      <Feature
        title="Education"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa b"
      />
    </div>
  </div>
);

export default What;
