import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SettingsContextProvider from './context/SettingsContext';

ReactDOM.createRoot(document.getElementById("root")).render(
	<SettingsContextProvider>
		<App />
	</SettingsContextProvider>
);
