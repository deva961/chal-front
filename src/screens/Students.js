import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Students() {
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [colleges, setCollege] = useState();
  const [courses, setCourse] = useState();

  const [country, setCountry] = useState("");
  const [programType, setProgramType] = useState("");
  const [tutionMinFee, setTutionMinFee] = useState("");
  const [tutionMaxFee, setTutionMaxFee] = useState("");

  function handleSearch(e) {
    const searchKeyWord = e.target.value;
    const newFilterCourses = courses.filter((value) => {
      return value.name.toLowerCase().includes(searchKeyWord.toLowerCase());
    });
    const newFilterColleges = colleges.filter((value) => {
      return value.name.toLowerCase().includes(searchKeyWord.toLowerCase());
    });
    setFilteredCourses(newFilterCourses);
    setFilteredColleges(newFilterColleges);
    if (searchKeyWord === "") {
      setFilteredCourses([]);
      setFilteredColleges([]);
    } else {
      setFilteredCourses(newFilterCourses);
      setFilteredColleges(newFilterColleges);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const responseCollege = await axios.get("/api/colleges");
      const responseCourse = await axios.get("/api/courses");
      setCollege(responseCollege.data);
      setCourse(responseCourse.data);
    };
    fetchData();
  }, []);

  const handleSubmit = async () => {
    let resCourse;
    try {
      if (programType !== "") {
        resCourse = await axios.get(`/api/courses?category=${programType}`);
      }
      if (country !== "") {
        resCourse = await axios.get(`/api/courses?college_country=${country}`);
      }
      if (tutionMaxFee !== "") {
        resCourse = await axios.get(
          `/api/courses?mintuition=${
            tutionMinFee || 1
          }&maxtuition=${tutionMaxFee}`
        );
      }

      if (country !== "" && programType !== "") {
        resCourse = await axios.get(
          `/api/courses?college_country=${country}&category=${programType}`
        );
      }
      if (country !== "" && programType !== "" && tutionMaxFee !== "") {
        resCourse = await axios.get(
          `/api/courses?college_country=${country}&category=${programType}&maxtuition=${tutionMaxFee}`
        );
      }
      setCourse(resCourse.data);
    } catch (error) {}
  };

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto my-5 flex items-center">
        <input
          type="text"
          placeholder="Search for colleges, courses"
          className="w-full  border-gray-300 border-b border-t border-l rounded-l-lg outline-none px-3 py-2.5"
          onChange={handleSearch}
        />
        <button className="bg-[#2a69de] focus:outline-none px-4 py-2.5 border font-semibold tracking-wide rounded-r-lg border-[#2a69de] text-white">
          Search
        </button>
      </div>
      {filteredCourses.length !== 0 || filteredColleges.length !== 0 ? (
        <div className="bg-gray-50 max-w-3xl mx-auto absolute top-[160px] border rounded z-40 left-0 right-0">
          <>
            {filteredCourses.slice(0, 5).map((item) => (
              <div
                className="p-2.5 hover:text-white hover:bg-gray-700"
                key={item._id}
              >
                <Link
                  to={`/courses/${item._id}`}
                  className="flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-xs hover:text-white">courses</span>
                </Link>
              </div>
            ))}
          </>
          <>
            {filteredColleges.slice(0, 5).map((item) => (
              <p
                className="p-2.5 hover:text-white hover:bg-gray-700"
                key={item._id}
              >
                <Link
                  to={`/colleges/${item._id}`}
                  className="flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-xs">college</span>
                </Link>
              </p>
            ))}
          </>
        </div>
      ) : (
        ""
      )}
      <SectionData
        colleges={colleges}
        courses={courses}
        handleSearch={handleSearch}
        country={country}
        programType={programType}
        setCountry={setCountry}
        setProgramType={setProgramType}
        setTutionMinFee={setTutionMinFee}
        setTutionMaxFee={setTutionMaxFee}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </>
  );
}

const SectionData = ({
  colleges,
  courses,
  country,
  programType,
  setCountry,
  setProgramType,
  setTutionMinFee,
  setTutionMaxFee,
  handleSubmit,
}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="grid grid-cols-4 gap-3 p-10">
      <FiltersGrid
        country={country}
        programType={programType}
        setCountry={setCountry}
        setProgramType={setProgramType}
        handleSubmit={handleSubmit}
        setTutionMinFee={setTutionMinFee}
        setTutionMaxFee={setTutionMaxFee}
      />
      <div className="col-span-3">
        <Tab.Group>
          <Tab.List className="flex space-x-4 p-2 border-b">
            <Tab
              className={({ selected }) =>
                classNames(
                  "rounded-lg px-10 py-2.5 text-sm font-medium leading-5 focus:outline-none ring-2 ring-blue-700",
                  selected ? "bg-blue-700 text-white" : "text-blue-700"
                )
              }
            >
              Programs
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "rounded-lg px-10 py-2.5 text-sm font-medium leading-5 focus:outline-none ring-2 ring-blue-700",
                  selected ? "bg-blue-700 text-white" : "text-blue-700"
                )
              }
            >
              Colleges
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel className="rounded-xl p-3 focus:outline-none">
              <div className="grid grid-cols-1 gap-5">
                {courses?.length === 0 && (
                  <p className="text-3xl">No records found</p>
                )}
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
            </Tab.Panel>
            <Tab.Panel className="rounded-xl bg-white p-3 focus:outline-none">
              <div className="grid grid-cols-3 gap-5">
                {colleges?.map((item, i) => (
                  <div
                    className="flex flex-col bg-[#eee] rounded shadow-lg border relative overflow-hidden"
                    key={i}
                  >
                    <div className="flex-auto overflow-hidden">
                      <Link to={`/colleges/${item._id}`}>
                        <img
                          src={item.photos[0]}
                          alt={item.name}
                          className="mx-auto h-64 w-full object-cover"
                        />
                      </Link>
                    </div>
                    <div className="flex-auto bg-white">
                      <div>
                        <div className="flex items-center justify-between p-5 ">
                          <div className="flex items-center space-x-2">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/University_of_Waterloo_seal.svg/1200px-University_of_Waterloo_seal.svg.png"
                              className="h-10"
                              alt={item.name}
                            />
                            <p>{item.name}</p>
                          </div>
                          <div className="flex items-center font-semibold">
                            {/* <BsArrowDown /> */}
                            <a
                              href={item.brouchure}
                              target="_blank"
                              rel="noreferrer"
                              className="underline"
                            >
                              Brochure
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center justify-center space-x-3 pb-5">
                          <button className="bg-green-600 text-white px-4 py-2.5 rounded-lg hover:bg-green-800 duration-150 ease-in text-sm uppercase w-full max-w-[44%] text-center">
                            Enquiry Now
                          </button>
                          <Link
                            to={`/colleges/${item._id}`}
                            className="bg-blue-700 text-white px-4 py-2.5 rounded-lg hover:bg-blue-800 duration-150 ease-in text-sm uppercase w-full max-w-[44%] text-center"
                          >
                            Explore
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

const FiltersGrid = ({
  country,
  programType,
  setCountry,
  setProgramType,
  handleSubmit,
  setTutionMinFee,
  setTutionMaxFee,
}) => {
  const handleClearFilters = () => {
    setCountry("");
    setProgramType("");
    setTutionMaxFee("");
    setTutionMinFee("");
    window.location.reload();
  };
  return (
    <div className="col-span-1 bg-white rounded-lg p-5 space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Country
        </label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="mt-1 capitalize outline-none p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        >
          <option>Select</option>
          <option>USA</option>
          <option>Canada</option>
          <option>UK</option>
          <option>Australia</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Program Type
        </label>
        <select
          value={programType}
          onChange={(e) => setProgramType(e.target.value)}
          className="mt-1 capitalize outline-none p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        >
          <option>Select</option>
          <option value="Diploma">Diploma</option>
          <option value="Bachelors">Degree / Bachelors</option>
          <option value="Masters">Masters</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Tution Fee
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Min Fee"
            onChange={(e) => setTutionMinFee(e.target.value)}
            className="mt-1 capitalize outline-none px-2.5 py-3 border shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Max Fee"
            onChange={(e) => setTutionMaxFee(e.target.value)}
            className="mt-1 capitalize outline-none px-2.5 py-3 border shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Application Fee
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Min Fee"
            className="mt-1 capitalize outline-none px-2.5 py-3 border shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Max Fee"
            className="mt-1 capitalize outline-none px-2.5 py-3 border shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button
          className="w-full bg-red-600 hover:bg-red-800 rounded-lg text-white py-2.5"
          onClick={handleClearFilters}
        >
          Clear Filter
        </button>
        <button
          className="w-full bg-green-600 hover:bg-green-800 rounded-lg text-white py-2.5"
          onClick={handleSubmit}
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default Students;
