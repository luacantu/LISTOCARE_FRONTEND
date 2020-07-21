import React from "react";

export const Didagnostic = () => {
	return (
		<div className="Diagnostic">
			<div className="form">
				<form className="Diagnostic-form text-center">
					<input type="text" placeholder="ID" />
					<input type="text" placeholder="Patient ID" />
					<input type="text" placeholder="Date time" />
					<input type="text" placeholder="Reason for admition" />
					<input type="text" placeholder="Symptoms" />
					<input type="text" placeholder="Status" />
					<input type="text" placeholder="Notes" />
					<input type="text" placeholder="Prescription" />
					<button type="button" className="btn btn-danger btn-lg px-5 my-3">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
