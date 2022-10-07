import React from 'react';
import { Link } from "react-router-dom";
import Banner from "../components/constants/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";


const variants = [
  {
    img: require("../assets/variety-1.png"),
    title: "Students",
    desc: "Discover programs and schools, get matched to the best options, and easily submit your applications.",
    to: "/",
  },
  {
    img: require("../assets/variety-2.png"),
    title: "Schools",
    desc: "Access a diverse student pool with a go-get-it attitude only with Chalo Overseas.",
    to: "/",
  },
  {
    img: require("../assets/variety-3.png"),
    title: "Immigration",
    desc: "With Chalo Overseas, Immigration is seamless and hassle-free without any glitches.",
    to: "/",
  },
];

const programs = [
  {
    name: "Art & Design",
    photo:
      "https://chalooverseas.com/wp-content/uploads/2021/08/Art-Design-150x150.png",
  },
  {
    name: "Building & Architecture",
    photo:
      "https://chalooverseas.com/wp-content/uploads/2021/08/Building-Architecture-150x150.png",
  },
  {
    name: "Business",
    photo:
      "https://chalooverseas.com/wp-content/uploads/2021/08/Business-150x150.png",
  },
  {
    name: "Health & Medicine",
    photo:
      "https://chalooverseas.com/wp-content/uploads/2021/08/Health-Medicine_1-150x150.png",
  },
  {
    name: "Hospitality & Toursim",
    photo:
      "https://chalooverseas.com/wp-content/uploads/2021/08/Hospitality-Tourism-1-150x150.png",
  },
  {
    name: "Arts & Music",
    photo:
      "https://chalooverseas.com/wp-content/uploads/2021/08/Performing-Arts-Music-150x150.png",
  },
];

function Home() {
  
  return (
    <>
      <Header />
      <Banner
        title="Fly to your Future with India's leading Overseas Education Consultants."
        photo={require("../assets/Main_Page_Header_Image_03.png")}
        btntext="Get Started"
      />
      
      
      <div className="max-w-6xl mx-auto">
        <Variant />
        <StudentCounselling />
        <VisaAssistance />
        <CareerGuidance />
        <FeaturedPrograms />
      </div>
      <Opportunities />
      <Testimonials />
      <GetTouch />
      <Footer />
    </>
  );
}

const Variant = () => {
  return (
    <div className="grid lg:grid-cols-3 mt-12 gap-5">
      {variants.map((items, i) => (
        <div
          className="bg-white border border-gray-200 rounded-xl shadow-lg drop-shadow-lg p-5 my-16 relative"
          key={i}
        >
          <img src={items.img} className="-mt-12 mx-auto h-36" alt="1" />
          <h4 className="font-semibold text-center text-2xl my-3 text-[#336DDE]">
            {items.title}
          </h4>
          <p className="text-gray-600 font-normal text-xl">{items.desc}</p>
          <div className="flex justify-center text-white mt-12">
            <Link
              to={items.to}
              className=" bg-[#336DDE] px-5 absolute bottom-4 py-2 rounded-full font-medium mx-auto text-center"
            >
              Explore
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

const StudentCounselling = () => {
  return (
    <>
      <div className="relative  mt-10">
        <div className="bg-options opacity-30 -mb-40 h-[200px]"></div>
      </div>
      <div className=" grid grid-cols-2 relative">
        <div className="col-span-1">
          <img
            src="https://chalooverseas.com/wp-content/uploads/2021/04/Student_Counselling_01-768x766.png"
            className="mx-auto h-[430px]"
            alt=""
          />
        </div>
        <div className="col-span-1 my-auto ">
          <p className="font-bold text-[#336DDE] text-4xl">
            Student Counselling
          </p>
          <p className="text-xl mt-5 my-7 font-light leading-8">
            Which course is the best fit for you? Which one will help you
            achieve your goals? Through our personalized, one-on-one counseling
            sessions, you will be able to answer these questions. You won’t need
            to depend on strangers’ advice on the Internet or take a cue from
            what others are doing. No peer pressure here – just focused
            guidance!
          </p>
          <div className="flex justify-center">
            <Link
              to="/"
              className=" bg-[#336DDE] px-5 text-white py-2.5 rounded-full font-medium text-center capitalize"
            >
              Find out more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const VisaAssistance = () => {
  return (
    <>
      <div className="relative  mt-10">
        <div className="bg-options2 opacity-30 -mb-40 h-[200px]"></div>
      </div>
      <div className=" grid grid-cols-2 relative">
        <div className="col-span-1 my-auto ">
          <p className="font-bold text-[#336DDE] text-4xl">Visa Assitance</p>
          <p className="text-xl mt-5 my-7 font-light leading-8">
            Visa processing is one of the most tedious aspects of studying
            abroad. We will ease it by starting your journey on a much more
            hassle-free and positive note. From completing the required visa
            forms to submitting the visa application, responding to queries from
            the visa office, scheduling biometrics and medicals, ensuring safe
            drop-off and pick-up of your passport, and everything else related
            to visa processing, we will be there for you.
          </p>
          <div className="flex justify-center">
            <Link
              to="/"
              className=" bg-[#336DDE] px-5 text-white py-2.5 rounded-full font-medium text-center capitalize"
            >
              Find out more
            </Link>
          </div>
        </div>
        <div className="col-span-1">
          <img
            src="https://chalooverseas.com/wp-content/uploads/2021/04/Career_Guidance-768x766.png"
            className="mx-auto h-[430px]"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

const CareerGuidance = () => {
  return (
    <>
      <div className="relative  mt-10">
        <div className="bg-options opacity-30 -mb-40 h-[200px]"></div>
      </div>
      <div className=" grid grid-cols-2 relative">
        <div className="col-span-1">
          <img
            src="https://chalooverseas.com/wp-content/uploads/2021/04/Partner_Page_IMG_1-1.png"
            className="mx-auto h-[430px]"
            alt=""
          />
        </div>
        <div className="col-span-1 my-auto mx-auto">
          <p className="font-bold text-[#336DDE] text-4xl">
            Student Counselling
          </p>
          <p className="text-xl mt-5 my-7 font-light leading-8">
            Which course is the best fit for you? Which one will help you
            achieve your goals? Through our personalized, one-on-one counseling
            sessions, you will be able to answer these questions. You won’t need
            to depend on strangers’ advice on the Internet or take a cue from
            what others are doing. No peer pressure here – just focused
            guidance!
          </p>
          <div className="flex justify-center">
            <Link
              to="/"
              className=" bg-[#336DDE] px-5 text-white py-2.5 rounded-full font-medium text-center capitalize"
            >
              Find out more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const FeaturedPrograms = () => {
  return (
    <div className="my-16">
      <p className="text-4xl text-[#336DDE] text-center mb-5 font-semibold tracking-wide">
        Featured Programs
      </p>
      <p className="font-semibold text-center text-xl mb-5">
        Confused? Here's what trending.
      </p>
      <p className="text-center font-normal leading-5 text-xl text-gray-700">
        Check out these popular couses in Canada and see which ones tickle your
        fancy.
      </p>
      <div className="grid grid-cols-3 gap-5">
        {programs.map((item, i) => (
          <div className="col-span-1 mt-5" key={i}>
            <img src={item.photo} className="mx-auto" alt={item.name} />
            <p className="text-center mt-5 font-medium text-xl">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-16">
        <Link
          to="/"
          className=" bg-[#336DDE] px-5 text-white py-2.5 rounded-full font-medium text-center capitalize"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

const Opportunities = () => {
  return (
    <div className="op-bg py-16">
      <div className="grid grid-cols-1 px-5 lg:px-0 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div className="col-span-1 my-auto">
          <h2 className="text-4xl font-bold text-[#336DDE] mb-5">
            Our Opportunities
          </h2>
          <p className="font-normal text-gray-700 text-xl leading-8">
            Chalo Overseas, with it’s partner network, has access to 1,500+
            colleges, universities, primary, and secondary schools around the
            world.
          </p>
        </div>
        <div className="col-span-1">
          <img src={require("../assets/University-768x343.png")} alt="" />
          <div className="flex justify-center mt-8">
            <Link
              to="/"
              className=" bg-[#336DDE] px-5 text-white py-2.5 rounded-full font-medium text-center capitalize"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="max-w-6xl mx-auto  px-5 lg:px-0 my-16">
      <div className="space-y-5">
        <h3 className="font-semibold text-4xl tracking-wider text-center text-[#336DDE]">
          Testimonials
        </h3>
        <p className="text-center font-semibold text-xl">
          We helped them break boundaries and hit their target
        </p>
        <p className="font-normal text-center">
          Our success rate has been 98% so far and our students are very proud
          of what they have achieved. Here’s what they have to say.
        </p>
      </div>
    </div>
  );
};

const GetTouch = () => {
  return (
    <div className="gt-th relative">
      <div className="bg-overlay"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 lg:px-0 max-w-6xl mx-auto py-8 lg:py-16">
        <img
          src="https://chalooverseas.com/wp-content/uploads/2021/04/Get_In_Touch_With_Us-2-1024x689.png"
          className="z-10 h-72"
          alt=""
        />
        <div className="col-span-1 my-auto z-10">
          <p className="font-bold tracking-wide text-center text-3xl text-white">
            Don’t wait any longer. Chalo Overseas this Semester!
          </p>
          <div className="flex justify-center mt-8">
            <Link
              to="/"
              className=" bg-[#57CBFF] px-7 text-white py-3 rounded-full font-medium text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
