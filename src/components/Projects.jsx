import React from "react";

const projectsData = [
  {
    title: "ICAO English Training Management System for Controllers and Pilots",
    description:
      "This is a web application designed to manage ICAO English certifications for air traffic controllers and pilots. It helps HR departments track and manage certifications, while also allowing controllers and pilots to view their certification status, upload documents, and track expiry.",
    url: "https://icao-english-cert.onrender.com/",
  },
  {
    title: "To Do List",
    description: "The To-Do List application is a user-friendly tool designed to help individuals and teams organize their daily tasks efficiently. With a clean and intuitive interface, this app ensures that users can focus on productivity without being overwhelmed by complexity.",
    url: "https://todolist-dcn5.onrender.com",
  },
    {
    title: "Civil Inspection Report Builder",
    description: "A comprehensive digital tool designed to assist civil engineers, project managers, and field inspectors in documenting and managing inspection processes. It automates report generation, streamlines workflows, and ensures data accuracy while offering customization to cater to different types of civil projects, such as construction, infrastructure maintenance, and environmental assessments.",
    url: "https://report-builder-s83d.onrender.com/",
  },

];


const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-scroll-container">
        <ul className="projects-list">
          {projectsData.map(({ title, description, url }, index) => (
            <li key={index} className="project-item">
              <strong>
                <a href={url} target="_blank" rel="noopener noreferrer" className="project-link">
                  {title}
                </a>
                <br />
              </strong>
              {description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};


export default Projects;
