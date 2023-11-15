import SkillList from "./SkillsList"
import NewSkillForm from "./NewSkillForm"
import { useState } from "react";

 
function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);
  function addSkill(skill) {
    setSkills([...skills, skill])
  }
  
  return (
    <div className="App">
    <h1>React Dev Skills</h1>
    <SkillList skills= {skills}/>
    <NewSkillForm addSkill={addSkill} />
    </div>
  )  
}

export default App
