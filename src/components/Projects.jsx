import React from "react";

const projectsData = [
  {
    title: "ICAO English Training Management System for Controllers and Pilots",
    description:
      "This is a web application designed to manage ICAO English certifications for air traffic controllers and pilots. It helps HR departments track and manage certifications, while also allowing controllers and pilots to view their certification status, upload documents, and track expiry.",
    url: "https://icao-english-cert.onrender.com/",
  },
  {
    title: "Next-Generation Firewalls",
    description: "Improved network security using Fortigate and PfSense.",
    url: "https://github.com/your-username/next-generation-firewalls",
  },

];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <ul className="projects-list">
        {projectsData.map(({ title, description, url }, index) => (
          <li key={index} className="project-item">
            <strong>
              <a href={url} target="_blank" rel="noopener noreferrer" className="project-link" >
                {title}
              </a>
              <br />
            </strong>
             {description}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
