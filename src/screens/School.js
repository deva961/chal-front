import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/constants/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

const advantages = [
  {
    photo: require("../assets/Partner_Page_IMG_1.png"),
    title: "Ease the process with our unique Approach",
    desc: "Once you partner with us, your troubles of vetting applications will be over. Our team will review every single one of them beforehand to ensure that it is completed and includes all the necessary documents. This will enable you to save time and focus only on a filtered set of applications",
  },
  {
    photo: require("../assets/Partner_Page_IMG_2.png"),
    title: "Unearth the strength of diversity",
    desc: "New cultures bring new experiences and global learning. With Chalo Overseas, you will be giving your institution as well as students the incredible opportunity to learn and grow with vibrant cultures across the world, embrace local customs, and bridge the geographical gap.",
  },
  {
    photo: require("../assets/Partner_Page_IMG_3.png"),
    title: "Gain from our industry experience",
    desc: "New cultures bring new experiences and global learning. With Chalo Overseas, you will be giving your institution as well as students the incredible opportunity to learn and grow with vibrant cultures across the world, embrace local customs, and bridge the geographical gap.",
  },
  {
    photo: require("../assets/Partner_Page_IMG_4.png"),
    title: "Invite focused and interested students",
    desc: "For most international students, education encompasses careers, passion, life goals, and more. We take all these into account to match students with the right institution. This student-first approach will help you get not just the best but also the right student pool to build a strong network of international students.",
  },
  {
    photo: require("../assets/Partner_Page_IMG_5.png"),
    title: "Take advantage of our counseling services",
    desc: "Our counseling services are not just for students. We also counsel families so that they support their children to find a school that can provide a platform for their dreams and aspirations. Knowing that you have partnered with us provides reassurance to our students and their families because they know that institution is also searching for students like them. We are the connecting link for you and them!",
  },
  {
    photo: require("../assets/Partner_Page_IMG_6.png"),
    title: "Access to diverse student pool",
    desc: "Our counseling services are not just for students. We also counsel families so that they support their children to find a school that can provide a platform for their dreams and aspirations. Knowing that you have partnered with us provides reassurance to our students and their families because they know that institution is also searching for students like them. We are the connecting link for you and them!",
  },
];

function School() {
  return (
    <>
      <Header />
      <Banner
        title="PARTNER WITH US"
        text="Access a diverse student pool with a go get-it attitude only with Chalo Overseas. Once you partner with us, your troubles of vetting applications will be over. Our team will vet every single application beforehand to ensure that it is accurate and complete, so you can save time and focus only on a filtered set of applications."
        photo={require("../assets/Program_School_Selection.png")}
        btntext="Get Started"
      />
      <div className="max-w-6xl mx-auto px-5 lg:px-0">
        <p className="uppercase text-3xl font-bold text-center text-[#2A69DE] my-16">
          our advantage
        </p>
        <div className="grid grid-cols-3 gap-8">
          {advantages.map((item) => (
            <div className="col-span-1 lg:my-16" key={item.name}>
              <img src={item.photo} className="mx-auto h-64" alt="" />
              <p className="font-semibold text-[#2A69DE] text-center text-2xl my-8">
                {item.title}
              </p>
              <p className="text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Networking />
      <Footer />
    </>
  );
}

const Networking = () => {
  return (
    <div className="bg-mainslider">
      <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto py-16">
        <div className="col-span-2 text-white">
          <p className="text-3xl font-bold mb-10">Networking Events</p>
          <p className="tracking-wide mb-8">
            We at Chalo Overseas run networking events and exhibitions for the
            benefit of international students and Canadian institutions alike.
            These events are a unique opportunity for students to speak to
            representatives from various institutions and get an insight about
            the opportunities that await them in Canada. Our valued partners,
            such as you, on the other hand, will also benefit immensely because
            these events serve as a platform for global brand building and
            student recruitment. Keep in touch with us for information about our
            next event. We will update you when the bookings are open.
          </p>
          <Link className="bg-[#06ACF8] px-5 py-2.5 rounded-full" to="/">
            Know More
          </Link>
        </div>
        <div className="col-span-1">
          <img
            src={require("../assets/Student_Cunselling_01-1.png")}
            className="my-auto"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default School;
