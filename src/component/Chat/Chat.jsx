/** @format */

import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "../InfoBar/InfoBar";
import "../Chat/Chat.css";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import TextContainer from "../TextContainer/TextContainer";

let socket;

const Chat = () => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	const [users, setUsers] = useState("");
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);
	const ENDPOINT = "localhost:5000";
	const query = useLocation().search;

	useEffect(() => {
		const { name, room } = queryString.parse(query);

		socket = io(ENDPOINT);

		setName(name);
		setRoom(room);
		socket.emit("join", { name, room }, (error) => {
			if (error) {
				alert(error);
			}
		});
	}, [ENDPOINT, query]);

	useEffect(() => {
		socket.on("message", (message) => {
			setMessages((messages) => [...messages, message]);
		});

		socket.on("roomData", ({ users }) => {
			setUsers(users);
		});
	}, []);

	const sendMessage = (event) => {
		event.preventDefault();

		if (message) {
			socket.emit("sendMessage", message, () => setMessage(""));
		}
	};

	console.log(message, messages);

	// function for sending messages
	return (
		<div className="outerContainer">
			<div className="container">
				<InfoBar room={room} />
				<Messages messages={messages} name={name} />
				<Input
					message={message}
					setMessage={setMessage}
					sendMessage={sendMessage}
				/>
			</div>
			<TextContainer users={users} />
		</div>
	);
};

export default Chat;
