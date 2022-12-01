import axios, { AxiosResponse } from "axios";
import properties from "../core-utils/properties";
const baseUrl: string = properties.baseURL;

type userGetType = {
  email: string;
  name: string;
  id: number;
};

type userPostType = {
  name: string;
  email: string;
};

type testGetType = {
  name: string;
  price: number;
  id: number;
};

type patientGetType = {
  relation: string;
  name: string;
  dob: string;
  gender: string;
  userId: number;
  id: number;
};

type patientPostType = {
  relation: string;
  name: string;
  dob: string;
  gender: string;
  userId: number;
};

type addressGetType = {
  houseNum: string;
  area: string;
  zipcode: string;
  cityState: string;
  userId: number;
  id: number;
};

type addressPostType = {
  houseNum: string;
  area: string;
  zipcode: string;
  cityState: string;
  userId: number;
};

type cardType = {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardHolder: string;
  userId: number;
};

type appointmentPostType = {
  month: string;
  date: number;
  day: string;
  time: string;
  patients: number[];
  testId: number;
  labId: number;
  addressId: number;
  userId: number;
};

type appointmentGetType = {
  month: string;
  date: number;
  day: string;
  time: string;
  patients: number[];
  testId: number;
  labId: number;
  addressId: number;
  userId: number;
  id: number;
};

export const postAppointment = async (newAppointment: appointmentPostType) => {
  axios
    .post(`${baseUrl}appointments`, newAppointment)
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

export const putAppointment = async (
  appointmentId: string | undefined,
  newAppointment: appointmentPostType
) => {
  axios
    .put(`${baseUrl}appointments/${appointmentId}`, newAppointment)
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

export const getAppointments = async () => {
  const response: AxiosResponse<appointmentGetType[], appointmentGetType[]> =
    await axios.get<appointmentGetType[]>(`${baseUrl}appointments`);
  return response.data;
};

export const getAppointmentById = async (appointmentId: string | undefined) => {
  const response: AxiosResponse<appointmentGetType, appointmentGetType> =
    await axios.get<appointmentGetType>(
      `${baseUrl}appointments/${appointmentId}`
    );
  return response.data;
};

export const getTestById = async (testId: number | undefined) => {
  const response: AxiosResponse<testGetType, testGetType> =
    await axios.get<testGetType>(`${baseUrl}tests/${testId}`);
  return response.data;
};

//Patients
export const getPatients = async () => {
  const response: AxiosResponse<patientGetType[], patientGetType[]> =
    await axios.get<patientGetType[]>(`${baseUrl}patients`);
  return response.data;
};

export const getPatientById = async (patientId: string | undefined) => {
  const response: AxiosResponse<patientGetType, patientGetType> =
    await axios.get<patientGetType>(`${baseUrl}patients/${patientId}`);
  return response.data;
};

export const postPatient = async (newPatient: patientPostType) => {
  axios
    .post(`${baseUrl}patients`, newPatient)
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

export const putPatient = async (
  patientId: string | undefined,
  newPatient: patientPostType
) => {
  axios
    .put(`${baseUrl}patients/${patientId}`, newPatient)
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

export const deletePatientsById = async (id: string) => {
  await axios.delete(`${baseUrl}patients/${id}`);
};

//Addresses

export const deleteAddressById = async (id: string) => {
  await axios.delete(`${baseUrl}address/${id}`);
};

export const getAddress = async () => {
  const response: AxiosResponse<addressGetType[], addressGetType[]> =
    await axios.get<addressGetType[]>(`${baseUrl}address`);
  return response.data;
};

export const getAddressById = async (id: string | undefined) => {
  const response: AxiosResponse<addressGetType, addressGetType> =
    await axios.get<addressGetType>(`${baseUrl}address/${id}`);
  return response.data;
};

export const postAddress = async (newAddress: addressPostType) => {
  axios
    .post(`${baseUrl}address`, newAddress)
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

//Cards
export const getCards = async () => {
  const response: AxiosResponse<cardType[], cardType[]> = await axios.get<
    cardType[]
  >(`${baseUrl}cards`);
  return response.data;
};

export const postCard = async (newCard: cardType) => {
  axios
    .post(`${baseUrl}cards`, newCard)
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

//Users
export const getUsers = async () => {
  const response: AxiosResponse<userGetType[], userGetType[]> = await axios.get<
    userGetType[]
  >(`${baseUrl}users`);
  return response.data;
};

export const postUser = async (newUser: userPostType) => {
  const allUsers = await getUsers();
  for (let eachUser = 0; eachUser < allUsers.length; eachUser++) {
    if (allUsers[eachUser].email === newUser.email) {
      return;
    }
  }
  axios
    .post(`${baseUrl}users`, newUser)
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

export const getUserIdByEmail = async (userEmail: string) => {
  const allUsers = await getUsers();
  for (let eachUser = 0; eachUser < allUsers.length; eachUser++) {
    if (allUsers[eachUser].email === userEmail) {
      return allUsers[eachUser].id;
    }
  }
  return 0;
};
