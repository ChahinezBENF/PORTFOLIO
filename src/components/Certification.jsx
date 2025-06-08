import React from "react";

const Certification = () => {
  const certifications = [
    { name: "CompTIA A+", issuer: "CompTIA", date: "April 2025" },
    { name: "Google UX Design", issuer: "Google", date: "May 2025" },
    { name: "Bachelor’s in Computer Science", institution: "University of ABC", date: "June 2020" },
    { name: "Bachelor’s in Computer Science", institution: "University of ABC", date: "June 2020" },
  ];

  const degrees = [
    { name: "Master’s in Information Systems", institution: "University of XYZ", date: "June 2023" },
    { name: "Bachelor’s in Computer Science", institution: "University of ABC", date: "June 2020" },
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
