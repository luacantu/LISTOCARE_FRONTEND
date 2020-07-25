import React, { useState, Effect } from "react";

export const Createacount = () => {
	const [name, setName] = useState(null);
	const [LastName, setLastName] = useState(null);
	const [UserName, setUserName] = useState(null);
	const [password, setPassword] = useState(null);
	const [Email, setEmail] = useState(null);
	const [BadgeNumber, setBadgeNumber] = useState(null);

	return (
		<div className="background-img">
			<div className="login-page">
				<div className="form">
					<form className="login-form text-center">
						<input onChange={e => setName(e.target.value)} type="text" placeholder="name" />

						<input onChange={e => setLastName(e.target.value)} type="text" placeholder="Last name" />

						<input onChange={e => setUserName(e.target.value)} type="text" placeholder="user name" />
						<input onChange={e => setPassword(e.target.value)} type="text" placeholder="password" />
						<input onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" />
						<input onChange={e => setBadgeNumber(e.target.value)} type="text" placeholder="Badge number" />
						<button type="button" className="btn btn-danger btn-lg px-5 my-3">
							create
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
