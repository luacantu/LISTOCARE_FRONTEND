import React from "react";

export const Treatment = () => {
	return (
		<div className="treatment">
			<div className="form">
				<form className="treatment-form text-center">
					<div className="patients">
						<div className="form">
							<input type="text" placeholder="ID" />
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input type="text" placeholder="Doctor ID" />
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input type="text" placeholder="Patient ID" />
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input type="text" placeholder="Diagnostic ID" />
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input type="text" placeholder="Name" />
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input type="text" placeholder="Status" />
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input type="text" placeholder="Adress" />
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input type="text" placeholder="Phone number" />
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input type="text" placeholder="Room number" />
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input type="text" placeholder="Email" />
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input type="text" placeholder="Start date" />
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input type="text" placeholder="End date" />
						</div>
					</div>
					<button type="button" className="btn btn-danger btn-lg px-5 my-3">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
