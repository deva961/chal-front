import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await axios.post("/api/auth/login", {
        email,
        password,
      });
      navigate("/admin/dashboard");
    } catch (error) {
      if (error.response.data.message === "Invalid Credentials!") {
        toast.error("Invalid Credentials!", {
          theme: "colored",
          position: "top-center",
        });
      }
      if (error.response.data.message === "User not found") {
        toast.error("User not registered!", {
          theme: "colored",
          position: "top-center",
        });
      }
    }
    setLoading(false);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden py-40 max-h-screen bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border border-gray-200">
              <div className="flex-auto px-4 lg:px-10 py-10">
                <form onSubmit={handleSubmit}>
                  <div className="relative w-full mb-4">
                    <label
                      className="block font-semibold text-blue-700 text-sm mb-1"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="px-3 py-3 bg-[#f5f8fa] rounded text-sm w-full focus:border focus:border-gray-200 focus:outline-none"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      autoFocus
                    />
                  </div>

                  <div className="relative w-full mb-4">
                    <label
                      className="block font-semibold text-blue-700 text-sm mb-1"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="px-3 py-3  bg-[#f5f8fa] rounded text-sm w-full focus:border focus:border-gray-200 focus:outline-none"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blue-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blue-700">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blue-700 text-white active:bg-blue-600 text-sm uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      {loading ? (
                        <div className="flex items-center justify-center">
                          <CgSpinner className="animate-spin h-5 mr-2 text-white w-5" />
                          Loading...
                        </div>
                      ) : (
                        "sign in"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
