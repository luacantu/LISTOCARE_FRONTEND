import React from "react";

export const Treatment = () => {
	return (
		<div className="treatment">
			<div className="form">
				<form className="treatment-form text-center">
					<input type="text" placeholder="ID" />
					<input type="text" placeholder="Doctor ID" />
					<input type="text" placeholder="Patient ID" />
					<input type="text" placeholder="Diagnostic ID" />
					<input type="text" placeholder="Name" />
					<input type="text" placeholder="Status" />
					<input type="text" placeholder="Adress" />
					<input type="text" placeholder="Phone number" />
					<input type="text" placeholder="Room number" />
					<input type="text" placeholder="Email" />
					<input type="text" placeholder="Start date" />
					<input type="text" placeholder="End date" />
					<button type="button" className="btn btn-danger btn-lg px-5 my-3">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
