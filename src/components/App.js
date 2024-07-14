// src/App.js
import React from 'react';
import '../styles/App.css';

function App() {
  const projects = [
    {
      name: "Project Alpha",
      description: "A revolutionary new app that will change the way we interact with technology.",
    },
    {
      name: "Project Beta",
      description: "An innovative platform that connects people in unprecedented ways.",
    },
    {
      name: "Project Gamma",
      description: "A cutting-edge tool designed to boost productivity and efficiency.",
    },
  ];

  return (
    <div className="ns-wrapper">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  );
}

export default App;
