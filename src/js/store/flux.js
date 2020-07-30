// aquí va el backend url
const listocareBackendUrl = "https://3000-b7e42043-27ab-40e8-9e7b-2ac184327677.ws-us02.gitpod.io/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			doctorId: null,
			patients: [],
			patientTreatments: [],
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
					localStorage.setItem("token", body.jwt);
					setStore({ token: body.jwt });
					return true;
				} else {
					setStore({ token: null });
					return false;
				}
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
			Patients: async (date, name, lastName, dob, gender, address, email, phone, idDoc) => {
				const store = getStore();
				const response = await fetch(`${listocareBackendUrl}/patient`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					},
					body: JSON.stringify({
						date: date,
						first_name: name,
						last_name: lastName,
						birth_date: dob,
						gender: gender,
						address: address,
						email: email,
						phone_number: phone,
						id_number: idDoc
					})
				});
				if (response.ok) {
					return true;
				} else {
					return false;
				}
			},
			treatment: async (patient_id, name, date, hospital, room, covidtestresult, status, notes) => {
				const store = getStore();
				const response = await fetch(`${listocareBackendUrl}/treatment`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					},
					body: JSON.stringify({
						patient_id,
						name,
						date,
						hospital,
						room,
						covidtestresult,
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
			diagnostic: async (
				patient_id,
				treatment_id,
				name,
				date_time,
				admission,
				symptoms,
				covidtestresult,
				status,
				notes,
				prescription,
				total_cost
			) => {
				const store = getStore();
				const response = await fetch(`${listocareBackendUrl}/diagnostic`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					},
					body: JSON.stringify({
						patient_id,
						treatment_id,
						name,
						date_time,
						admission,
						symptoms,
						covidtestresult,
						status,
						notes,
						prescription,
						total_cost
					})
				});
				if (response.ok) {
					return true;
				} else {
					return false;
				}
			},
			getPatients: async () => {
				const store = getStore();
				const response = await fetch(`${listocareBackendUrl}/patient`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					}
				});
				let patients = await response.json();
				if (response.ok) {
					setStore({
						patients
					});
					return true;
				} else {
					console.log(response.statusText);
					return false;
				}
			},
			restoreStore: () => {
				setStore(JSON.parse(localStorage.getItem("session")));
			}
		}
	};
};

export default getState;
