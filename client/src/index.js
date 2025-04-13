/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

// import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
// Kommunicate.init("226867b32d13db20cf2a6a32f37368e3b", {
// 	automaticChatOpenOnNavigation: true,
// 	popupWidget: true,
// });


//=====================================error===========
// window.Kommunicate.launchConversation();




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
