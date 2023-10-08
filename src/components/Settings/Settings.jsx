import { IoSettingsSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import "./Settings.css";

const Settings = () => {
	return (
		<section className="settings">
			<button className="settings-btn">
				<IconContext.Provider value={{ className: "settings-icon" }}>
					<IoSettingsSharp />
				</IconContext.Provider>
			</button>
		</section>
	);
};

export default Settings;
