import "./App.css";
import { Application } from "./components/application/Application";
import { Skill } from "./components/skills/Skill";
import { Counter } from "./components/counter/Counter";
import { AppProviders } from "./providers/App-provider";
import { MuiMode } from "./components/mui/Mui-mode";

function App() {
  const skills = ["html", "css", "react"];
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        <div>
          <Application />
        </div>
        <p>--------------------------------------------------</p>
        <div>
          <Skill skills={skills} />
        </div>
        <div>
          <Counter />
        </div>
      </div>
    </AppProviders>
  );
}

export default App;
