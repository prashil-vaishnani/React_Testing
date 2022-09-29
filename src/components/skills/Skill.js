import React from "react";

export const Skill = ({ skills }) => {
  return (
    <ul>
      {skills.map((skill) => {
        return <li key={skill}>{skill}</li>;
      })}
    </ul>
  );
};
