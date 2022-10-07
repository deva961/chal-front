import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";

function ProgramDetail() {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const [programDetails, setProgramDetails] = useState();
  // const [collegeDetails, setCollegeDetails] = useState();
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(`/api/courses/${pathId}`);
        setProgramDetails(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
    const fetchCollegeDetails = async () => {
      try {
        const collegeDetails = await axios.get(
          `/api/colleges/${programDetails.college_id}`
        );
        // setCollegeDetails(collegeDetails.data);
        setPhotos(collegeDetails?.data.photos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCollegeDetails();
  }, [pathId, programDetails]);
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Banner photos={photos} />
        <div className="flex items-center justify-left">
          <img src={programDetails?.college_logo} alt="logo" className="h-32" />
          <div className="ml-4">
            <p className="font-semibold text-4xl text-gray-700">
              {programDetails?.name}
            </p>
            <p className="text-[#2A69DE] font-semibold mt-2">
              {programDetails?.college_name}
            </p>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <p>
                {programDetails?.college_city},{" "}
                {programDetails?.college_province},{" "}
                {programDetails?.college_country}
              </p>
            </div>
          </div>
        </div>
        <Summary programDetails={programDetails} />
      </div>
      <Footer />
    </>
  );
}

const Banner = ({ photos }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-5 p-5">
        <div className="col-span-2">
          <img
            src={photos[0]}
            alt={1}
            className="h-[500px] w-full rounded-lg object-cover"
          />
        </div>
        {photos[1] && photos[2] && (
          <div className="col-span-1 space-y-5">
            <img
              src={photos[1]}
              alt={1}
              className="w-full h-60 rounded-lg object-cover"
            />
            <img
              src={photos[2]}
              alt={1}
              className="w-full h-60 rounded-lg object-cover"
            />
          </div>
        )}
        {photos[3] && photos[4] && (
          <div className="col-span-1 space-y-5">
            <img
              src={photos[3]}
              alt={1}
              className="w-full h-60 rounded-lg object-cover"
            />
            <img
              src={photos[4]}
              alt={1}
              className="w-full h-60 rounded-lg object-cover"
            />
          </div>
        )}
      </div>
    </>
  );
};

const Summary = ({ programDetails }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      <div className="grid grid-cols-4 gap-5 my-5 p-5">
        <div className="col-span-3 bg-white rounded-lg p-5 border border-gray-100">
          <p className="font-medium text-lg">Program Description</p>
          <p className="font-normal mt-5 text-gray-700">
            {programDetails?.course_desc}
          </p>
        </div>
        <div className="col-span-1 bg-white rounded-lg p-5  border border-gray-100 space-y-5">
          <div className="mt-5">
            <p className="font-semibold text-lg">{programDetails?.duration}</p>
            <p className="text-gray-600">Program Length</p>
          </div>
          <div className="mt-5">
            <p className="font-semibold text-lg">{programDetails?.category}</p>
            <p className="text-gray-600">Program Type</p>
          </div>
          <div>
            <p className="font-semibold text-lg">
              {formatter.format(programDetails?.tuition_fee)}
            </p>
            <p className="text-gray-600">Tuition</p>
          </div>
          <div>
            <p className="font-semibold text-lg">
              {formatter.format(programDetails?.app_fee)}
            </p>
            <p className="text-gray-600">Application Fee</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramDetail;
