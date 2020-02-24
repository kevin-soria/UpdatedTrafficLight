// import React from "react";
import "./home.css";
import React, { useState } from "react";

export function Home() {
	const [redLight, setRedlight] = useState("inactive");
	const [yellowLight, setYellowlight] = useState("inactive");
	const [greenLight, setGreenlight] = useState("inactive");

	return (
		<div className="main">
			<div className="lightFixture">
				<div
					className={redLight}
					onClick={() => {
						if (redLight === "red") {
							setRedlight("inactive");
						} else {
							setRedlight("red");
							setYellowlight("inactive");
							setGreenlight("inactive");
						}
					}}
				/>
				<div
					className={yellowLight}
					onClick={() => {
						if (yellowLight === "yellow") {
							setYellowlight("inactive");
						} else {
							setRedlight("inactive");
							setYellowlight("yellow");
							setGreenlight("inactive");
						}
					}}
				/>
				<div
					className={greenLight}
					onClick={() => {
						if (greenLight === "green") {
							setGreenlight("inactive");
						} else {
							setRedlight("inactive");
							setYellowlight("inactive");
							setGreenlight("green");
						}
					}}
				/>
			</div>
			{/* // <----------------------------------------------------------> */}
			<div className="lightFixture">
				<div
					className={redLight}
					onClick={() => {
						if (redLight === "red") {
							setRedlight("inactive");
						} else {
							setRedlight("red");
							setYellowlight("inactive");
							setGreenlight("inactive");
						}
					}}
				/>
				<div
					className={yellowLight}
					onClick={() => {
						if (yellowLight === "yellow") {
							setYellowlight("inactive");
						} else {
							setRedlight("inactive");
							setYellowlight("yellow");
							setGreenlight("inactive");
						}
					}}
				/>
				<div
					className={greenLight}
					onClick={() => {
						if (greenLight === "green") {
							setGreenlight("inactive");
						} else {
							setRedlight("inactive");
							setYellowlight("inactive");
							setGreenlight("green");
						}
					}}
				/>
			</div>
		</div>
	);
}
