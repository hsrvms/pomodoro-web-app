import { useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Timer from './components/Timer/Timer'
import Settings from './components/Settings/Settings'
import "./App.css";

function App() {

  const [activeBtn, setActiveBtn] = useState("pomodoro");
	const navList = ["pomodoro", "short-break", "long-break"];

  function handleNavClick(event) {
    const button = event.target;
    setActiveBtn(button.name);
	}

	return (
		<main className="app-container">
			<h1 className="heading">pomodoro</h1>
      <Navbar navList={navList} navClick={handleNavClick} activeBtn={activeBtn}/>
      <Timer />
      <Settings />
		</main>
	);
}

export default App;
