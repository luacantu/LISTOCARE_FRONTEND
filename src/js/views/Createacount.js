import React from "react";

export const Createacount = () => {
	return (
		<div className="background-img">
			<div className="card text-white">
				<div className="login-page">
					<div className="form">
						<form className="login-form">
							<input type="text" placeholder="user name" />
							<input type="text" placeholder="password" />
							<input type="text" placeholder="email id" />
							<button>create</button>
						</form>
					</div>
				</div>

				<div className="card-img-overlay" />
			</div>
		</div>
	);
};
