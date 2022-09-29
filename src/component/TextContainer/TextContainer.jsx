/** @format */

import React from "react";

const TextContainer = ({ users }) => {
	return (
		<div className="textContainer">
			<div>
				<h1>Members</h1>
				<h2>Groove</h2>
			</div>
			{users ? (
				<h2>
					{users.map(({ name }) => (
						<div key={name} className="activeItem">
							{name}
						</div>
					))}
				</h2>
			) : null}
		</div>
	);
};

export default TextContainer;
