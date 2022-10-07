import React from "react";
import Banner from "../components/constants/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
  return (
    <>
      <Header />
      <Banner
        title="Carving the students runway to success"
        text="Team of experts in various fields, covering every aspect of studying and settling abroad"
        photo={require("../assets/Visa-Assistance_02-1.png")}
        btntext="Know More"
      />
      <div className="max-w-6xl mx-auto my-14">
        <p className="text-xl font-light mt-5 tracking-wide">
          We are among leading Overseas Education and Immigration Consultants.
        </p>
        <p className="text-xl font-light mt-5 tracking-wide">
          Chalo Overseas is a product of experience and enthusiasm clubbed
          together with a zeal to help young students realize their overseas
          dreams. Our core founders are Indo-Canadians who have studied and
          worked internationally for 15 years. They are currently based in
          Canada, living out their dreams, and they believe that every student
          can do the same.
        </p>
        <p className="text-xl font-light mt-5 tracking-wide">
          Having grown up in India, they understand the Indian education system
          well and know about the living and working conditions abroad. Keeping
          this personal experience and knowledge in mind, they founded Chalo
          Overseas as students’ ticket to the best universities in Canada.
        </p>
        <p className="text-xl font-light mt-5 tracking-wide">
          Our A to Z services have been put together to tackle the worries,
          requirements, and fears of a young student traveling abroad alone to
          build a happy, successful life. The Chalo Overseas team of mentors,
          placement experts, and counselors is growing steadily and evolving
          based on the growing needs of students.
        </p>
        <p className="text-xl font-light mt-5 tracking-wide">
          We guide and upskill motivated students and pave their path to the
          right university based on their career aspirations. While our focus is
          currently on Canadian education and immigration, we plan to expand far
          and wide, giving students the chance to explore various opportunities
          in different countries.
        </p>
        <p className="text-xl font-light mt-5 tracking-wide">
          At Chalo Overseas, we truly make the world your oyster!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-32 max-w-6xl mx-auto">
        <div className="col-span-1">
          <img
            src={require("../assets/Mission.png")}
            className="h-60 mx-auto"
            alt=""
          />
          <p className="tracking-wide text-4xl font-semibold mt-10 text-[#2A69DE] text-center">
            Mission
          </p>
          <p className="text-xl mt-5 tracking-wide font-light">
            To provide genuine and transparent education counseling to students
            and help them get admission in a suitable program/college.
          </p>
        </div>
        <div className="col-span-1">
          <img
            src={require("../assets/Vision.png")}
            className="h-60 mx-auto"
            alt=""
          />
          <p className="tracking-wide text-4xl font-semibold mt-10 text-[#2A69DE] text-center">
            Vision
          </p>
          <p className="text-xl mt-5 tracking-wide font-light">
            To deliver top education counselling services with care so that
            students achieve their goals without hassle.
          </p>
        </div>
      </div>
      <WhyUs />
      <Footer />
    </>
  );
}

const WhyUs = () => {
  return (
    <>
      <h3 className="text-center font-bold text-5xl text-[#2A69DE] my-16">
        Why us?
      </h3>
      <div className="max-w-6xl mx-auto">
        <p className="tracking-wide text-xl font-normal">
          Chalo Overseas has leading mentors and counselors in its kitty who are
          empowering students to live their dreams every single day. Our team
          consists of experts in various fields, covering every aspect of
          studying and settling abroad. This means that at every step, you will
          have a mentor to not just help you but also upskill you and provide
          the necessary guidance.
        </p>
        <p className="tracking-wide text-xl font-normal mt-5">
          We strongly believe that you are the future of this world and you
          should be given the platform to reach your full potential. At Chalo
          Overseas, we do just that.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
          <div className="bg-white shadow drop-shadow-xl relative border border-gray-100 py-10 px-5 overflow-hidden">
            <img
              src={require("../assets/chalo_icoon_work.png")}
              className="absolute top-0 right-0 max-w-[230px] w-full"
              alt=""
            />
            <p className="text-xl font-medium">
              Dedicated Team of{" "}
              <span className="text-[#2A69DE]">Specialists</span>
            </p>
            <p className="font-normal tracking-wide mt-5">
              We have a dedicated team of specialists with proven expertise at
              your service.
            </p>
          </div>
          <div className="bg-white shadow drop-shadow-xl relative border border-gray-100 py-10 px-5 overflow-hidden">
            <img
              src={require("../assets/chalo_icoon_work.png")}
              className="absolute top-0 right-0 max-w-[230px] w-full"
              alt=""
            />
            <p className="text-xl font-medium">
              Extended <span className="text-[#2A69DE]">Counselling</span>{" "}
              Services
            </p>
            <p className="font-normal tracking-wide mt-5">
              We extend counseling services to the family as well with our
              unique approach.
            </p>
          </div>
          <div className="bg-white shadow drop-shadow-xl relative border border-gray-100 py-10 px-5 overflow-hidden">
            <img
              src={require("../assets/chalo_icoon_work.png")}
              className="absolute top-0 right-0 max-w-[230px] w-full"
              alt=""
            />
            <p className="text-xl font-medium">
              Guidance and <span className="text-[#2A69DE]">UpSkill</span>
            </p>
            <p className="font-normal tracking-wide mt-5">
              We guide, upskill, and nurture our students and ensure the success
              of the student.
            </p>
          </div>
          <div className="bg-white shadow drop-shadow-xl relative border border-gray-100 py-10 px-5 overflow-hidden">
            <img
              src={require("../assets/chalo_icoon_work.png")}
              className="absolute top-0 right-0 max-w-[230px] w-full"
              alt=""
            />
            <p className="text-xl font-medium">
              Serving Right Until{" "}
              <span className="text-[#2A69DE]">Placements</span>
            </p>
            <p className="font-normal tracking-wide mt-5">
              We serve as the go-to for all needs right from consultation to
              placement.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 mx-auto max-w-xl my-8">
          <div className="bg-white shadow drop-shadow-xl relative  border border-gray-100 py-10 px-5 overflow-hidden">
            <img
              src={require("../assets/chalo_icoon_work.png")}
              className="absolute top-0 right-0 max-w-[230px] w-full"
              alt=""
            />
            <p className="text-xl font-medium">
              Partnership with Leading{" "}
              <span className="text-[#2A69DE]">Colleges</span>
            </p>
            <p className="font-normal tracking-wide mt-5">
              We have partnered with leading schools across Canada.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
