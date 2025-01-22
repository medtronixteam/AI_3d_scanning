import React from "react";
import "./ExecutiveTeam.css";
import Mrjoel from "../../Assets/Mr joel.png";
import Ceo from "../../Assets/Ceo.png";
const ExecutiveTeam = () => {
  const teamMembers = [
    {
      name: "Arslan Ahmed",
      position: "CEO",
      image: Ceo,
    },
    {
      name: "Joel Hillier",
      position: "Strategic Business Advisor",
      image: Mrjoel,
    },
    // {
    //   name: "Ali Khan",
    //   position: "Head of AI",
    //   image: "https://via.placeholder.com/100",
    // },
  ];

  return (
    <div className="container executive-team-section" id="team">
      <span className="sub-heading">Our Leadership</span>
      <h2 className="section-title">Meet Our Executive Team</h2>
      <div className="team-members">
        {teamMembers.slice(0, 3).map((member, index) => (
          <div className="team-card" key={index}>
            <div className="image-container">
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
                loading="lazy"
              />
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-position">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExecutiveTeam;
