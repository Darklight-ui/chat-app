/** @format */

import React from "react";
import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";
import "../InfoBar/InfoBar.css";

const InfoBar = ({ room }) => (
	<div className="infoBar">
		<div className="leftInnerContainer">
			<img src={onlineIcon} className="onlineIcon" />
			<h3>{room}</h3>
		</div>
		<div className="rightInnerContainer">
			<a href="/">
				<img src={closeIcon} alt="" className="closeIcon" />
			</a>
		</div>
	</div>
);

export default InfoBar;
