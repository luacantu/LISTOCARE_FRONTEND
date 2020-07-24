import React from "react";

export const Log_in = () => {
	return (
		<div className="imagen_fondo">
			<div className="pag ingreso">
				<div className="form">
					<form className="login-form text-center">
						<div className="row">
							<div className="col">
								<input type="text" placeholder="Email" />
							</div>
						</div>

						<div className="row">
							<div className="col">
								<input type="text" placeholder="user name" />
							</div>
						</div>

						<div className="row">
							<div className="col">
								<input type="text" placeholder="password" />
							</div>
						</div>
						<button type="button" className="btn btn-danger btn-lg px-5 my-3">
							create
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
