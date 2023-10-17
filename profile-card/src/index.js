import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { skill: "HTML+CSS", level: "Intermediate", color: "lightblue" },
  { skill: "JavaScript", level: "Intermediate", color: "yellow" },
  { skill: "Web Design", level: "Intermediate", color: "aqua" },
  { skill: "React", level: "Beginner", color: "orangered" },
  { skill: "Git and GitHub", level: "Intermediate", color: "red" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro
          name="Animesh Mohanty"
          summary="Aspiring full-stack web developer having a keen interest in stock market as well🤑. When not coding, I like to cook or try to get some insights on stock market and maybe bet a little bit money on it"
        />
        <SkillList />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function Avatar() {
  return <img className="avatar" src="./avatar.jpg" alt="Daredevil" />;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.summary}</p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill)=>{
        return <Skill skillObj={skill} key={skill.skill} />
      })}
    </ul>
  )
}

function Skill({skillObj}) {
  console.log(skillObj);
  if(skillObj.level==='Beginner'){
    return (
      <div className="skill" style={{ backgroundColor: skillObj.color }}>
        <span>{skillObj.skill}</span>
        <span>👶</span>
      </div>
    );
  }else if(skillObj.level === 'Intermediate'){
    return (
      <div className="skill" style={{ backgroundColor: skillObj.color }}>
        <span>{skillObj.skill}</span>
        <span>👍</span>
      </div>
    );
  }else{
    return (
      <div className="skill" style={{ backgroundColor: skillObj.color }}>
        <span>{skillObj.skill}</span>
        <span>💪</span>
      </div>
    );
  }
}



