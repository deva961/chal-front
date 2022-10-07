import axios from "axios";
import "../../pagination.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";
import { TbEdit, TbTrash } from "react-icons/tb";
import ReactPaginate from "react-paginate";

function ProgramsList() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);

  const handleActive = () => {
    setActive(!active);
  };

  const handleDelete = (program) => {
    alert(program._id);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/courses");
        setData(res.data);
      } catch (error) {
        toast.error("Something went wrong!");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const itemsPerPage = 10;
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(data?.length / itemsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <div className="flex flex-row h-screen">
        <Sidebar active={active} />
        <div className="flex-auto bg-gray-50 overflow-auto">
          <Navbar handleActive={handleActive} />
          <div className="m-5 bg-white rounded border border-gray-100 shadow p-5">
            <p className="font-semibold text-xl mb-3">Course's</p>
            <div className="flex items-center justify-between mb-3">
              <Link
                to="/"
                className="bg-green-700 text-white px-4 py-2 rounded-lg"
              >
                Create Program
              </Link>
              <input
                type="text"
                placeholder="Search for college,course or city"
                className="border-gray-300 border rounded-l-lg outline-none px-3 py-2.5 max-w-xs w-full"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <table className="table-auto rounded overflow-hidden border-collapse border border-slate-400  w-full text-left text-sm">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="border border-slate-300 font-normal px-3 py-2.5">
                    Name
                  </th>
                  <th className="border border-slate-300 font-normal text-center px-3 py-2.5">
                    College
                  </th>
                  <th className="border border-slate-300 font-normal px-3 py-2.5 tracking-wider">
                    Duration
                  </th>
                  <th className="border border-slate-300 font-normal px-3 py-2.5">
                    Tuition Fee
                  </th>
                  <th className="border border-slate-300 font-normal px-3 py-2.5">
                    Application Fee
                  </th>
                  <th className="border border-slate-300 font-normal px-3 py-2.5">
                    City
                  </th>
                  <th className="border border-slate-300 font-normal px-3 py-2.5">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  "Loading..."
                ) : ( 
                  <>
                    {data
                      ?.filter(
                        (program) =>
                          program.name.toLowerCase().includes(search) ||
                          program.college_city.toLowerCase().includes(search) ||
                          program.college_name.toLowerCase().includes(search)
                      )
                      .slice(pagesVisited, pagesVisited + itemsPerPage)
                      .map((program) => (
                        <tr key={program._id}>
                          <td className="border border-slate-300 px-3 py-2.5">
                            {program.name}
                          </td>
                          <td className="border border-slate-300 px-3 py-2.5">
                            <img
                              src={program.college_logo}
                              className="h-10 mx-auto"
                              alt={program._id}
                            />
                          </td>
                          <td className="border border-slate-300 px-3 py-2.5">
                            {program.duration}
                          </td>
                          <td className="border border-slate-300 px-3 py-2.5">
                            {formatter.format(program.tuition_fee)}
                          </td>
                          <td className="border border-slate-300 px-3 py-2.5">
                            {formatter.format(program.app_fee)}
                          </td>
                          <td className="border border-slate-300 px-3 py-2.5">
                            {program.college_city}
                          </td>

                          <td className="border border-slate-300 px-3 py-2.5">
                            <div className="flex items-center space-x-2">
                              <Link
                                to={`${program._id}`}
                                className="bg-lime-500 text-white p-2 rounded-lg"
                              >
                                <TbEdit className="h-5 w-5" />
                              </Link>
                              <button
                                className="bg-red-600 text-white p-2 rounded-lg"
                                onClick={() => handleDelete(program)}
                              >
                                <TbTrash className="h-5 w-5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </>
                )}
              </tbody>
            </table>
            {data?.length >= 10 && (
              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBtns"}
                previousLinkClassName={"prevBtns"}
                nextLinkClassName={"nextBtns"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgramsList;
