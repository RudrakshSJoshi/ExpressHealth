/** @format */

import React, { Component } from "react";

import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
Kommunicate.init("226867b32d13db20cf2a6a32f37368e3b", {
	automaticChatOpenOnNavigation: true,
	popupWidget: true,
});

class KommunicateChat extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		(function (d, m) {
			var kommunicateSettings = {
				appId: "226867b32d13db20cf2a6a32f37368e3b",
				popupWidget: true,
				automaticChatOpenOnNavigation: true,
			};
			var s = document.createElement("script");
			s.type = "text/javascript";
			s.async = true;
			s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
			var h = document.getElementsByTagName("head")[0];
			h.appendChild(s);
			window.kommunicate = m;
			m._globals = kommunicateSettings;
		})(document, window.kommunicate || {});
	}
	render() {
		return <div></div>;
	}
}

export default KommunicateChat;
