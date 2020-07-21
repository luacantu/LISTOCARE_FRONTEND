import React from "react";

export const Staff_info = () => {
	return (
		<div className="staff_info">
			<div className="form">
				<form className="staff-form text-center">
					<input type="text" placeholder="ID" />
					<input type="text" placeholder="Password" />
					<input type="text" placeholder="First name" />
					<input type="text" placeholder="Last name" />
					<input type="text" placeholder="Specialty" />
					<input type="text" placeholder="Email" />
					<input type="text" placeholder="Badge number" />
					<input type="text" placeholder="Phone number" />
					<button type="button" className="btn btn-danger btn-lg px-5 my-3">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
