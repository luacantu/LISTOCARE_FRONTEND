const listocareBackendUrl = "https://3000-dccb160b-118f-4318-a1aa-bb2957d1c89d.ws-us02.gitpod.io";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			doctorId: null,

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			login: async (email, password) => {
				const response = await fetch(`${listocareBackendUrl}/login`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				});
				const body = await response.json();
				// console.log("body", body);
				if (response.status == 200) {
					// console.log("test");
					setStore({ token: body.jwt, doctorId: body.doctor_id });
				} else setStore({ token: null, doctorId: null });
			},
			doctorSignUp: async (name, lastName, username, email, password) => {
				const response = await fetch(`${listocareBackendUrl}/medicalstaff`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						first_name: name,
						last_name: lastName,
						email: email,
						username: username,
						password: password
					})
				});
				if (response.ok) {
					return true;
				} else {
					return false;
				}
			},
			Patients: async (name, lastName, username, email, password) => {
				const response = await fetch(`${listocareBackendUrl}/patient`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						id,
						Fecha,
						Nombre,
						Apellido,
						FechaDeNacimiento,
						Genero,
						Direccion,
						NumeroTelefonico,
						NumeroDeIdentificacion
					})
				});
				if (response.ok) {
					return true;
				} else {
					return false;
				}
			},
			Treatment: async (
				Doctorid,
				Patientid,
				Diagnosticid,
				name,
				date,
				hospital,
				room,
				covidtest,
				status,
				notes
			) => {
				const response = await fetch(`${listocareBackendUrl}/treatment`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						Doctorid,
						Patientid,
						Diagnosticid,
						name,
						date,
						hospital,
						room,
						covidtest,
						status,
						notes
					})
				});
				if (response.ok) {
					return true;
				} else {
					return false;
				}
			},
			Diagnotic: async (
				Doctorid,
				Patientid,
				Diagnosticid,
				name,
				date,
				hospital,
				room,
				covidtest,
				status,
				notes
			) => {
				const response = await fetch(`${listocareBackendUrl}/diagnostic`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						Patientid,
						name,
						covidtestresult,
						date,
						hospital,
						room,
						covidtest,
						status,
						notes
					})
				});
				if (response.ok) {
					return true;
				} else {
					return false;
				}
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
