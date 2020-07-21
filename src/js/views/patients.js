import React from "react";

export const Patients = () => {
	return (
		<div className="patients">
			<div className="form">
				<form className="Patient-form text-center">
					<input type="text" placeholder="ID" />
					<input type="text" placeholder="Date" />
					<input type="text" placeholder="First name" />
					<input type="text" placeholder="Last name" />
					<input type="text" placeholder="Birthday" />
					<input type="text" placeholder="gender" />
					<input type="text" placeholder="Adress" />
					<input type="text" placeholder="Phone number" />
					<input type="text" placeholder="Identification number" />
					<button type="button" className="btn btn-danger btn-lg px-5 my-3">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
