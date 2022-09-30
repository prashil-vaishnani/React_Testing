import logo from "./logo.svg";
import "./App.css";
import { Application } from "./components/application/Application";
import { Skill } from "./components/skills/Skill";

function App() {
  const skills = ["html", "css", "react"];
  return (
    <div className="App">
      <div>
        <Application />
      </div>
      <p>--------------------------------------------------</p>
      <div>
        <Skill skills={skills} />
      </div>
    </div>
  );
}

export default App;
