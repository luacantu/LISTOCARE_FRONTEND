import React from "react";

export const Createacount = () => {
	return (
		<div className="background-img">
			<div className="login-page">
				<div className="form">
					<form className="login-form text-center">
						<input type="text" placeholder="name" />
						<input type="text" placeholder="Last name" />
						<input type="text" placeholder="user name" />
						<input type="text" placeholder="password" />
						<input type="text" placeholder="email id" />
						<input type="text" placeholder="Badge number" />
						<button type="button" className="btn btn-danger btn-lg px-5 my-3">
							create
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
