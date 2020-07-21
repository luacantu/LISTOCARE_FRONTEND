import React from "react";

export const Createacount = () => {
	return (
		<div className="background-img">
			<div className="login-page">
				<div className="form">
					<form className="login-form text-center">
						<input type="text" placeholder="user name" />
						<input type="text" placeholder="password" />
						<input type="text" placeholder="email id" />
						<button type="button" className="btn btn-primary btn-lg px-5 my-3">
							create
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
