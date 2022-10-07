import React from "react";
import {
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMapSharp,
} from "react-icons/io5";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const links = [
  {
    name: "About",
    to: "/about",
  },
  {
    name: "For Students",
    to: "/",
  },
  {
    name: "For Schools",
    to: "/",
  },
  {
    name: "Immigration",
    to: "/",
  },
  {
    name: "Information",
    to: "/",
  },
  {
    name: "Blog",
    to: "/",
  },
  {
    name: "Contact",
    to: "/",
  },
];

function Footer() {
  return (
    <div className="bg-stone-800 text-white pt-16 pb-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="col-span-1 my-auto">
            <img
              src={require("../assets/logo.png")}
              className="h-20 mx-auto"
              alt=""
            />
            <div className="flex items-center justify-center lg:pl-5 space-x-1">
              <a
                href="https://facebook.com/chalooverseas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077b5] px-1 py-0.5 rounded-full"
              >
                <IoLogoLinkedin className="h-5" />
              </a>
              <a
                href="https://facebook.com/chalooverseas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#860349] px-1 py-0.5 rounded-full"
              >
                <IoLogoInstagram className="h-5" />
              </a>
              <a
                href="https://facebook.com/chalooverseas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3b5998] px-1 py-0.5 rounded-full"
              >
                <IoLogoFacebook className="h-5" />
              </a>
              <a
                href="https://facebook.com/chalooverseas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1da1f2] px-1 py-0.5 rounded-full"
              >
                <IoLogoTwitter className="h-5" />
              </a>
              <a
                href="https://facebook.com/chalooverseas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#cd201f] px-1 py-0.5 rounded-full"
              >
                <IoLogoYoutube className="h-5" />
              </a>
            </div>
          </div>

          {/* Canada Office */}
          <div className="col-span-1">
            <h4 className="font-bold text-xl">Canada Office</h4>
            <p className="h-px w-full bg-gray-700 mt-1 max-w-[150px]"></p>
            <div className="flex items-center space-x-3 mt-9">
              <IoMapSharp size={20} />
              <p className="text-xs">
                15 Brownridge Road, Suite 5 Halton Hills, ON L7G 0C6
              </p>
            </div>
            <div className="flex items-center space-x-3 mt-5">
              <FaPhoneAlt size={12} />
              <a href="tel:+1-647-366-9800" className="text-xs">
                +1-647-366-9800
              </a>
            </div>
            <div className="flex items-center space-x-3 mt-5">
              <FaEnvelope size={15} />
              <a href="mailto:contact@chalooverseas.com" className="text-xs">
                contact@chalooverseas.com
              </a>
            </div>
          </div>

          {/* US Office */}
          <div className="col-span-1">
            <h4 className="font-bold text-xl">US Office</h4>
            <p className="h-px w-full bg-gray-700 mt-1 max-w-[100px]"></p>
            <div className="flex items-center space-x-3 mt-9">
              <IoMapSharp size={20} />
              <p className="text-xs">
                33 Wood Avenue South Suite 600 Iselin, NJ 08830
              </p>
            </div>
            <div className="flex items-center space-x-3 mt-5">
              <FaPhoneAlt size={12} />
              <a href="tel:+1-647-366-9800" className="text-xs">
                +1-647-366-9800
              </a>
            </div>
            <div className="flex items-center space-x-3 mt-5">
              <FaEnvelope size={15} />
              <a href="mailto:contact@chalooverseas.com" className="text-xs">
                contact@chalooverseas.com
              </a>
            </div>
          </div>

          {/* India Office */}
          <div className="col-span-1">
            <h4 className="font-bold text-xl">India Office</h4>
            <p className="h-px w-full bg-gray-700 mt-1 max-w-[120px]"></p>
            <div className="flex items-start space-x-3 mt-9">
              <IoMapSharp size={30} />
              <p className="text-xs">
                Plot No. 406, 2nd Floor, Ayyappa Society, Madhapur, Hyderabad,
                TS 500081
              </p>
            </div>
            <div className="flex items-center space-x-3 mt-5">
              <FaPhoneAlt size={12} />
              <a href="tel:+91-9154911374" className="text-xs">
                +91-9154911374
              </a>
            </div>
            <div className="flex items-center space-x-3 mt-5">
              <FaEnvelope size={15} />
              <a href="mailto:contact@chalooverseas.com" className="text-xs">
                contact@chalooverseas.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs mt-16">
          <div className="flex items-center space-x-10">
            {links.map((item, i) => (
              <Link to={item.to} key={i}>{item.name}</Link>
            ))}
          </div>
          <p>© Chalo Overseas. All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
