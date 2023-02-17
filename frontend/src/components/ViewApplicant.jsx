import React, { useEffect, useState } from "react";
import { getApplicants } from "../Service/api";
const ViewApplicant = () => {
  const [applicantData, setApplicantData] = useState([]);
  useEffect(() => {
    getApplicantsDetails();
  }, []);
  const getApplicantsDetails = async () => {
    const result = await getApplicants();
    setApplicantData(result.data);
  };
  return (
    <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
      {" "}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Registration Number</th>
          </tr>
        </thead>
        <tbody>
          {applicantData.map((details, index) => {
            return (
              <tr key={index}>
                <td>{details.studentName}</td>
                <td>{details.registrationNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplicant;
