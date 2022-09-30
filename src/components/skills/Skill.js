import React, { useEffect, useState } from "react";

export const Skill = ({ skills }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 500);
  }, []);
  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button>start</button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
    </>
  );
};
