import React, { useEffect, useState } from "react";
import { Calendar, icons } from "lucide-react";
import "./ExperienceGraph.css";

function kebabToPascalCase(str) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

export default function ExperienceGraph() {
  const [experiences, setExperiences] = useState([]);
  var evenNode = false;

  useEffect(() => {
    fetch("/experiences.json")
      .then((response) => response.json())
      .then((data) => setExperiences(data));
  }, []);

  return (
    <div className="graph-body">
      <div className="connector-line"></div>
      {experiences.map((exp) => {
        evenNode = !evenNode;
        return (
          <Node
            company={exp.company}
            duration={exp.duration}
            title={exp.title}
            icon={exp.icon}
            even={evenNode}
          />
        );
      })}
    </div>
  );
}

function Node({ company, title, duration, icon, even }) {
  const BulbIcon = icons[kebabToPascalCase(icon)];

  return (
    <div className="node">
      <div className="bulb">
        {BulbIcon && <BulbIcon size={24} color="white" />}
      </div>
      <div className={"text-box " + (even ? "even" : "")}>
        <p className="company">
          <b>{company}</b>
        </p>
        <p className="title">{title}</p>
        <p className="duration">
          <Calendar size={16} className="calendar-icon" />
          {duration}
        </p>
      </div>
    </div>
  );
}
