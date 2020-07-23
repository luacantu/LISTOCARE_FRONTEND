import React from "react";

export const Log_in = () => {
	return (
		<div className="imagen_fondo">
			<div className="pag ingreso">
				<div className="form">
					<form className="login-form text-center">
						<input type="text" placeholder="Email" />
						<input type="text" placeholder="user name" />
						<input type="text" placeholder="password" />
						<button type="button" className="btn btn-danger btn-lg px-5 my-3">
							create
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
