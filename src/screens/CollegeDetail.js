import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useLocation } from "react-router-dom";

function CollegeDetail() {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const [programDetails, setProgramDetails] = useState();
  const [courses, setCourses] = useState();
  const [collegeDetails, setCollegeDetails] = useState();
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(`/api/courses`);
        const courseRes = await axios.get(`/api/colleges/course/${pathId}`);
        setCourses(courseRes.data);
        setProgramDetails(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
    const fetchCollegeDetails = async () => {
      try {
        const collegeDetails = await axios.get(`/api/colleges/${pathId}`);
        setCollegeDetails(collegeDetails.data);
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
          <img src={collegeDetails?.logo} alt="logo" className="h-32" />
          <div className="ml-4">
            <p className="font-semibold text-4xl text-gray-700">
              {collegeDetails?.name}
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
                {collegeDetails?.city}, {collegeDetails?.province},{" "}
                {collegeDetails?.country}
              </p>
            </div>
          </div>
        </div>
        <Summary collegeDetails={collegeDetails} />

        <AllCourses courses={courses} />
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

const Summary = ({ collegeDetails }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-5 my-5">
        <div className="col-span-3 bg-white rounded-lg p-5 border border-gray-100">
          <p className="font-medium text-lg">Program Description</p>
          <p className="font-normal mt-5 text-gray-700">
            {collegeDetails?.desc}
          </p>
        </div>
        <div className="col-span-1 bg-white rounded-lg p-5  border border-gray-100 space-y-5">
          <div className="mt-5 flex items-center">
            <p className="font-semibold text-lg mr-2">DLI Number :</p>
            <p className="text-gray-600">{collegeDetails?.dli_number}</p>
          </div>
          <div className="mt-5 flex items-center">
            <p className="font-semibold text-lg mr-2">Institution Type :</p>
            <p className="text-gray-600">{collegeDetails?.institution_type}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const AllCourses = ({ courses }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      <p className="text-2xl text-blue-700 font-semibold mb-3">All Courses</p>
      <div className="grid grid-cols-2 gap-5 mb-10">
        {courses?.map((program) => (
          <div
            className="bg-white border space-y-2 border-gray-100 shadow rounded-lg p-5 col-span-1 w-full"
            key={program._id}
          >
            <div className="flex items-center justify-between text-sm mb-2">
              <p className="font-semibold">{program.category}</p>
              <div className="flex items-center">
                <p className="font-semibold">Duration: </p>
                <p>&nbsp;{program.duration}</p>
              </div>
            </div>
            <Link
              to={`/courses/${program._id}`}
              className="font-semibold text-lg text-blue-700"
            >
              {program.name}
            </Link>
            <div className="flex items-center justify-between">
              <div className="space-x-1 flex items-center">
                {!program.college_logo ? (
                  <div className="bg-gray-500 rounded-full h-10 w-10"></div>
                ) : (
                  <>
                    <img
                      className="h-10"
                      src={program.college_logo}
                      alt="logo"
                    />
                  </>
                )}
                <p>{program.college_name}</p>
              </div>
              <div className=" flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-700"
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
                  {program.college_city}, {program.college_province},{" "}
                  {program.college_country}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-2 mt-5">
                <p className="font-semibold">Tution Fee</p>
                <p>{formatter.format(program.tuition_fee)}</p>
              </div>
              <div className="space-y-2 mt-5">
                <p className="font-semibold">Application Fee</p>
                <p>{formatter.format(program.app_fee)}</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Link
                to="/"
                className="bg-green-600 text-white px-4 py-2.5 rounded-lg"
              >
                Enquiry Now
              </Link>
              <Link
                to={`/courses/${program._id}`}
                className="bg-blue-700 text-white px-4 py-2.5 rounded-lg"
              >
                Program Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default CollegeDetail;
