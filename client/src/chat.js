/** @format */

import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";

const KommunicateChat = () => {
	const token = localStorage.getItem("token") || "";
	const user = localStorage.getItem("token")
		? jwt_decode(localStorage.getItem("token"))
		: "";

	useEffect(() => {
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
	}, []);

	return <div></div>;
};

export default KommunicateChat;
