import React from "react";

export const Didagnostic = () => {
	return (
		<div className="Diagnostic">
			<div className="form">
				<form className="Diagnostic-form text-center">
					<div className="row">
						<div className="col">
							<input type="text" placeholder="ID" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input type="text" placeholder="Patient ID" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input type="text" placeholder="Date time" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input type="text" placeholder="Reason for admition" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input type="text" placeholder="Symptoms" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input type="text" placeholder="Status" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input type="text" placeholder="Notes" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input type="text" placeholder="Prescription" />
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
