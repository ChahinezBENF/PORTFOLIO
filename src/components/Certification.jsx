import React from "react";

const Certification = () => {
  const certifications = [
    { name: "Google UX Design", issuer: "Google", date: "August 2025" },
    { name: "CompTIA A+", issuer: "CompTIA", date: "April 2025" },
    { name: "Modeling Software Systems: UML ", issuer: " Coursera", date: " February 2024" },
    { name: "CMS Wordpress ", issuer: " Ibn Rochd ", date: " August 2022" },
  ];

  const degrees = [
    { name: "Software Engineering", institution: "Per Scholas , USA", date: "May 2025" },
    { name: "IT Engineering", institution: "Copper Union", date: "May 2024" },
    { name: "Master’s in Information Systems", institution: "University of Mohamed Bougerra , Algeria", date: "October 2021" },
    { name: "Bachelor’s in Computer Science", institution: "University of Algiers , Algeria", date: "June 2020" },
  ];

  return (
    <section id="achievements" className="achievements">
      <h2>Certifications and Degrees</h2>
      <div className="achievement-container">
        {/* Degrees Block */}
        <div className="block degrees-block">
          <h3>Degrees</h3>
          <div className="card-container">
            {degrees.map((degree, index) => (
              <div key={index} className="achievement-card">
                <h4>{degree.name}</h4>
                <p><strong>Institution:</strong> {degree.institution}</p>
                <p><strong>Date Earned:</strong> {degree.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Block */}
        <div className="block certifications-block">
          <h3>Certifications</h3>
          <div className="card-container">
            {certifications.map((cert, index) => (
              <div key={index} className="achievement-card">
                <h4>{cert.name}</h4>
                <p><strong>Issuer:</strong> {cert.issuer}</p>
                <p><strong>Date Earned:</strong> {cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
