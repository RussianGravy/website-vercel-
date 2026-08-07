import React from "react";
import "./ExperienceGraph.css";

export default function ExperienceGraph() {
  return (
    <div className="graph-body">
      <div className="connector-line"></div>
      <Node
        company="Stitch"
        duration="Jan. 2025 to March 2025"
        title="Intern"
      />
      <Node
        company="ACM"
        duration="Aug. 2024 to Present"
        title="Software Engineer"
        even="yes"
      />
      <Node
        company="Learn2Code"
        duration="Jan. 2024 to June 2024"
        title="Instructor"
      />
    </div>
  );
}

function Node({ company, title, duration, even }) {
  return (
    <div className="node">
      <div className="bulb"></div>
      <div className={"text-box " + (even ? "even" : "")}>
        <p>
          <bold>
            <b>{company}</b>
          </bold>
          , {title}
          <br />
          {duration}
        </p>
      </div>
    </div>
  );
}
