import axios from "axios";
const url = "http://localhost:5000";

export const addApplicant = async (applicantData) => {
  return await axios.post(`${url}/hostelApplicants`, applicantData);
};
export const getApplicants = async (req, res) => {
  return await axios.get(`${url}/viewApplicants`);
};