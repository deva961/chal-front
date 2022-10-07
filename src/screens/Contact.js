import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Contact() {
  return (
    <>
      <Header />
      <div className="bg-mainslider py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-5 lg:px-0 max-w-6xl mx-auto">
          <div className="col-span-1 my-auto">
            <img src={require("../assets/Partner_Page_IMG_6.png")} alt="" />
          </div>
          <div className="col-span-1 p-8 bg-[#2d5085]">
            <p className="text-center text-3xl font-bold tracking-wide text-white">
              Get in Touch
            </p>
            <form className="space-y-6 my-10">
              {/* name */}
              <div className="space-y-2">
                <p className="text-white">Name</p>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg p-3 outline-none"
                />
              </div>

              {/* email */}
              <div className="space-y-2">
                <p className="text-white">Email</p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg p-3 outline-none"
                />
              </div>

              {/* mobile number */}
              <div className="space-y-2">
                <p className="text-white">Mobile Number</p>
                <input
                  type="text"
                  placeholder="Enter your mobile number"
                  className="w-full rounded-lg p-3 outline-none"
                />
              </div>

              {/* current location */}
              <div className="space-y-2">
                <p className="text-white">Current Location</p>
                <input
                  type="text"
                  placeholder="Enter the city and country you are currently living in"
                  className="w-full rounded-lg p-3 outline-none"
                />
              </div>

              {/* country  */}
              <div className="space-y-2">
                <p className="text-white">Select the Country interested in</p>
                <select className="w-full rounded-lg p-3 outline-none">
                  <option value="Canada">Canada</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Australia">Australia</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <p className="text-white">Message</p>
                <textarea
                  type="text"
                  placeholder="Enter your message"
                  className="w-full rounded-lg p-3 outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg p-3 text-white bg-[#2a69de] mb-16"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
