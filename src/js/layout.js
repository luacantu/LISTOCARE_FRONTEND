import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { new_visitor } from "./views/new_visitor";
import { Createacount } from "./views/Createacount";
import { Log_in } from "./views/Log-in";
import { Contactanos } from "./views/contactanos";
import { Staff_info } from "./views/staff_info";
import { Treatment } from "./views/treatment";
import { Patients } from "./views/patients";
import { Didagnostic } from "./views/diagnostic";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				{/* <ScrollToTop> */}
				<Navbar />
				<Switch>
					<Route exact path="/new_visitor" component={new_visitor} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/sign_up" component={Createacount} />
					<Route exact path="/sign_in" component={Log_in} />
					<Route exact path="/single/:theid" component={Single} />
					<Route exact path="/staff_info" component={Staff_info} />
					<Route exact path="/treatment" component={Treatment} />
					<Route exact path="/patients" component={Patients} />
					<Route exact path="/Diagnostic" component={Didagnostic} />

					<Route path="/" component={Contactanos} />
					{/* <Route
							render={() => (
								<div className="div.a">
									<img
										id="mypic"
										src="https://st4.depositphotos.com/22536472/27266/v/600/depositphotos_272665200-stock-video-blue-pyramids-black-background-connection.jpg"
									/>
									<h1 className=" parrafo_superior">
										<p>tu consultorio virtual durante la pandemia covid-19</p>
									</h1>
									<div className="p2">
										<p>
											<h2>
												Listocare lo ayuda a brindar una exelente atencion al paciente mientras
												desarrolla una practica saludable.
											</h2>
										</p>
									</div>
									<div className="Registrate">
										<button className="boton">Registrate</button>
									</div>
								</div>
							)}
						/> */}
				</Switch>
				<Footer />
				{/* </ScrollToTop> */}
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
