import React, { useEffect, useState } from "react";
import "./CourtListBody.css";
import Cards from "../Cards/Cards";
import AxiosInstance from "../../Config/apicall";
import { ErrorToast } from "../../Plugins/Toast/Toast";

function CourtListBody() {
  const [courtData, setCourtData] = useState([]);
  useEffect(() => {
    getAllCourtData();
  }, []);
  const getAllCourtData = () => {
    AxiosInstance.get("/users/getallcourtdata")
      .then((response) => {
        setCourtData(response.data);
      })
      .catch((err) => {
        ErrorToast("something went wrong");
      });
  };
  return (
    <div className="court-list-body d-flex flex-grow-1  flex-wrap justify-content-center overflow-y-auto gap-3 p-3 ">
      <Cards />
      {courtData.map((court) => (
        <Cards court={court} />
      ))}
    </div>
  );
}

export default CourtListBody;
